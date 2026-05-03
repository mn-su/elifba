
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('js/levels.js', 'utf8') + '\nJSON.stringify({levelsData, badgesData});';
const data = JSON.parse(vm.runInNewContext(code, {}));
const levelsData = data.levelsData;
const badgesData = data.badgesData;
const supported = new Set(['letter_identification','letter_shape','match_letter_to_image','harka_recognition','harka_application','word_reading','match_word_to_image','sentence_order','mixed_review','listen_and_choose','drag_to_target']);
const strip = (s) => String(s || '').normalize('NFC').replace(/[\u064B-\u065F\u0670]/g, '');
const hasArabic = (s) => /[\u0600-\u06FF]/.test(String(s || ''));
const hasHarakat = (s) => /[\u064B-\u065F\u0670]/.test(String(s || ''));
const initial = (s) => strip(s).replace(/^[\s\u200f\u200e]+/, '')[0] || '';
const errors = [];
const warnings = [];
const levelIds = Object.keys(levelsData).sort((a,b)=>parseInt(a.split('_')[1])-parseInt(b.split('_')[1]));
if (levelIds.length !== 20) errors.push(`Expected 20 levels, found ${levelIds.length}`);
for (const levelId of levelIds) {
  const level = levelsData[levelId];
  if (!Array.isArray(level.tasks) || level.tasks.length !== 3) warnings.push(`${levelId}: expected 3 micro tasks, found ${level.tasks && level.tasks.length}`);
  for (const task of level.tasks || []) {
    if (!supported.has(task.type)) errors.push(`${task.id}: unsupported type ${task.type}`);
    const q = task.question || {};
    if (['word_reading','match_word_to_image','mixed_review'].includes(task.type) && hasArabic(q.arabic) && !hasHarakat(q.arabic)) {
      warnings.push(`${task.id}: Arabic word lacks harakat: ${q.arabic}`);
    }
    if (['match_letter_to_image','drag_to_target'].includes(task.type)) {
      const target = strip(q.arabic || '');
      const images = q.images || [];
      const matches = images.filter(img => initial(img.arabic) === target).map(img => `${img.id}:${img.arabic}`);
      const correct = images.find(img => img.id === q.correct);
      if (!correct) errors.push(`${task.id}: correct image id not found`);
      else if (initial(correct.arabic) !== target) errors.push(`${task.id}: correct image ${correct.arabic} does not start with ${target}`);
      if (matches.length !== 1) warnings.push(`${task.id}: target ${target} has ${matches.length} matching image(s): ${matches.join(', ')}`);
    }
    if (['match_letter_to_image','drag_to_target','match_word_to_image'].includes(task.type)) {
      for (const img of q.images || []) {
        if (hasArabic(img.arabic) && strip(img.arabic).length > 1 && !hasHarakat(img.arabic)) warnings.push(`${task.id}: image ${img.id} lacks harakat: ${img.arabic}`);
      }
    }
    if (['match_word_to_image'].includes(task.type)) {
      const correct = (q.images || []).find(img => img.id === q.correct);
      if (!correct) errors.push(`${task.id}: correct image id not found`);
      if (hasArabic(q.arabic) && !hasHarakat(q.arabic)) warnings.push(`${task.id}: question word lacks harakat`);
      for (const img of q.images || []) {
        if (hasArabic(img.arabic) && !hasHarakat(img.arabic)) warnings.push(`${task.id}: image ${img.id} lacks harakat: ${img.arabic}`);
      }
    }
  }
}
const css = fs.readFileSync('css/style.css', 'utf8');
if (/single-page-map[\s\S]{0,700}cover/.test(css)) errors.push('single-page-map still uses cover scaling');
const game = fs.readFileSync('js/game.js','utf8');
const requiredCoords = ['{ x: 105, y: 622 }','mapViewBox','addPlainArabicHint'];
for (const r of requiredCoords) if (!game.includes(r)) errors.push(`game.js missing ${r}`);
const result = { ok: errors.length === 0, levelCount: levelIds.length, taskCount: levelIds.reduce((n,id)=>n+(levelsData[id].tasks||[]).length,0), badgeCount: badgesData.length, errors, warnings };
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exit(1);
