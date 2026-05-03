// Oyun Yöneticisi Sınıfı
class GameManager {
    constructor() {
        this.currentLevel = null;
        this.currentTaskIndex = 0;
        this.levelStars = 0;
        this.taskCount = 0;
        this.maxTasks = 3;
        this._starsEarnedThisLevel = new Set();
        this.choiceTaskTypes = new Set([
            'letter_identification',
            'letter_shape',
            'harka_recognition',
            'harka_application',
            'word_reading',
            'mixed_review',
            'listen_and_choose'
        ]);
        this.init();
    }

    init() {
        // Event Listeners
        document.getElementById('play-btn').addEventListener('click', () => this.startGame());
        document.getElementById('badges-btn').addEventListener('click', () => this.showBadges());
        document.getElementById('settings-btn').addEventListener('click', () => this.showSettings());
        document.getElementById('sound-toggle').addEventListener('click', () => this.toggleSound());
        document.getElementById('music-toggle').addEventListener('click', () => this.toggleMusic());
        document.getElementById('reset-btn').addEventListener('click', () => this.resetProgress());

        // Kaydedilmiş ayarları ses yöneticisine uygula
        if (typeof audioManager !== 'undefined') {
            audioManager.setEnabled(gameState.state.soundEnabled);
        }

        // Ekran yönetimi
        this.showScreen('main-menu');
        this.hideFeedbackOverlay();
        this.updateUI();
    }

    // Konuşma sıralayıcı: yönerge bitmeden Arapça sesi başlatmaz.
    speakTask(task) {
        if (!task || !task.question) return;

        const instruction = task.question.text;
        const arabic = task.question.arabic || task.question.baseLetter;
        const sequence = [];

        // Maskot balonu görünsün; seslendirmeyi audioManager sıralı yapacak.
        if (instruction) {
            speakMascot(null, instruction, { silent: true });
            sequence.push({ text: instruction, lang: 'tr-TR', rate: 0.9, pauseAfter: 180 });
        }

        if (task.type === 'sentence_order' && task.question && task.question.correct) {
            sequence.push({ text: task.question.correct, lang: 'ar-SA', rate: 0.76, pauseBefore: 120 });
        } else if (arabic) {
            sequence.push({ text: arabic, lang: 'ar-SA', rate: 0.76, pauseBefore: 120 });
        }

        if (sequence.length && audioManager && typeof audioManager.speakSequence === 'function') {
            audioManager.speakSequence(sequence);
        }
    }

    containsArabic(text) {
        return /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/.test(String(text || ''));
    }

    // Ekran Değiştirme
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    updateScreen(screenId) {
        this.showScreen(screenId);
    }

    // Oyun Başlatma
    startGame() {
        this.hideFeedbackOverlay();
        this.showScreen('level-select');
        setTimeout(() => {
            gameState.updateStreak();
            this.updateUI();
            this.renderLevels();
        }, 100);
    }

    // Seviyeleri Göster
    renderLevels() {
        if (gameState && typeof gameState.applyUnlocksFromProgress === 'function') {
            gameState.applyUnlocksFromProgress();
        }
        const grid = document.getElementById('levels-grid');
        grid.innerHTML = '';
        grid.classList.add('single-page-map');

        const canvas = document.createElement('div');
        canvas.className = 'levels-map-canvas';
        canvas.setAttribute('aria-label', '20 bölümlük seviye haritası');
        grid.appendChild(canvas);

        const levelIds = Object.keys(levelsData).sort((a, b) => {
            const na = parseInt(a.split('_')[1], 10);
            const nb = parseInt(b.split('_')[1], 10);
            return na - nb;
        });

        const mapViewBox = { width: 1200, height: 760 };
        const positions = [
            { x: 105, y: 622 }, { x: 145, y: 562 }, { x: 168, y: 492 }, { x: 232, y: 405 }, { x: 316, y: 344 },
            { x: 416, y: 366 }, { x: 475, y: 430 }, { x: 458, y: 516 }, { x: 505, y: 592 }, { x: 618, y: 612 },
            { x: 735, y: 586 }, { x: 794, y: 508 }, { x: 846, y: 421 }, { x: 922, y: 352 }, { x: 1016, y: 346 },
            { x: 1068, y: 426 }, { x: 1020, y: 526 }, { x: 1040, y: 604 }, { x: 1110, y: 632 }, { x: 1156, y: 655 }
        ];

        levelIds.forEach((levelId, idx) => {
            const level = levelsData[levelId];
            const progress = gameState.state.levelProgress[levelId] || { stars: 0, completed: false };
            const pos = positions[idx] || { x: 50, y: 50 };
            const isCurrent = level.unlocked && !progress.completed;
            const status = !level.unlocked ? 'locked' : progress.completed ? 'completed' : 'current';

            const card = document.createElement('button');
            card.type = 'button';
            card.className = `level-card ${status}`;
            card.style.left = `${(pos.x / mapViewBox.width) * 100}%`;
            card.style.top = `${(pos.y / mapViewBox.height) * 100}%`;
            card.title = `${level.title}: ${level.description}`;
            card.setAttribute('aria-label', `${levelId.split('_')[1]}. bölüm: ${level.title}`);

            const starsHTML = progress.completed
                ? `<span class="level-star collected">⭐</span><span class="level-star ${progress.stars >= 2 ? 'collected' : ''}">⭐</span><span class="level-star ${progress.stars >= 3 ? 'collected' : ''}">⭐</span>`
                : `<span class="level-star empty">☆</span><span class="level-star empty">☆</span><span class="level-star empty">☆</span>`;

            card.innerHTML = level.unlocked ? `
                ${isCurrent ? '<div class="level-current-label">BURADASIN</div>' : ''}
                <span class="level-locked-icon">${progress.completed ? '✓' : ''}</span>
                <div class="level-number">${levelId.split('_')[1]}</div>
                <div class="level-title-short">${level.title}</div>
                <div class="level-stars">${starsHTML}</div>
            ` : `
                <span class="level-locked-icon">🔒</span>
                <div class="level-number">${levelId.split('_')[1]}</div>
                <div class="level-title-short">Kilitli</div>
                <div class="level-stars"><span class="level-star empty">☆</span><span class="level-star empty">☆</span><span class="level-star empty">☆</span></div>
            `;

            if (level.unlocked) {
                card.addEventListener('click', () => this.startLevel(levelId));
            } else {
                card.disabled = true;
            }

            canvas.appendChild(card);
        });

        let totalStars = 0;
        Object.keys(gameState.state.levelProgress).forEach(levelId => {
            totalStars += gameState.state.levelProgress[levelId].stars || 0;
        });
        document.getElementById('total-stars').textContent = totalStars;
    }

    // Seviye Başlat
    startLevel(levelId) {
        const selectedLevel = levelsData[levelId];
        if (!selectedLevel || !selectedLevel.unlocked) return;
        this.currentLevel = selectedLevel;
        this.currentTaskIndex = 0;
        this.levelStars = 0;
        this.taskCount = 0;
        this.maxTasks = this.currentLevel.tasks.length;
        this._starsEarnedThisLevel = new Set();

        this.hideFeedbackOverlay();
        this.showScreen('game-screen');
        document.getElementById('current-level-name').textContent = this.currentLevel.title;
        this.updateStarsDisplay();
        this.startTask();
    }

    // Görev Başlat
    startTask() {
        if (this.currentTaskIndex >= this.maxTasks) {
            this.completeLevel();
            return;
        }

        const task = this.currentLevel.tasks[this.currentTaskIndex];
        this.renderTask(task);

        // Ses sırası: (ilk görevde) seviye tanıtımı balonda, sonra yönerge, sonra Arapça
        if (this.currentTaskIndex === 0) {
            speakLevelIntro(this.currentLevel, { silent: true });
            setTimeout(() => this.speakTask(task), 200);
        } else {
            this.speakTask(task);
        }
    }


    stripArabicHarakat(text) {
        return String(text || '').normalize('NFC').replace(/[\u064B-\u065F\u0670]/g, '');
    }

    addPlainArabicHint(task, questionArea) {
        const levelNumber = this.currentLevel ? parseInt(this.currentLevel.id.split('_')[1], 10) : 0;
        if (levelNumber < 18 || !task || !task.question) return;
        const rawArabic = task.question.arabic || (task.type === 'sentence_order' ? task.question.correct : '');
        if (!rawArabic || !/[\u0600-\u06FF]/.test(rawArabic)) return;
        const plainArabic = this.stripArabicHarakat(rawArabic);
        if (!plainArabic || plainArabic === rawArabic) return;

        const stack = questionArea.querySelector('.question-stack');
        if (!stack || stack.querySelector('.arabic-plain-hint')) return;

        const hint = document.createElement('div');
        hint.className = 'arabic-plain-hint';
        hint.innerHTML = `<span>Harekesiz görünüm:</span><strong class="arabic-text">${plainArabic}</strong>`;
        stack.appendChild(hint);
    }

    // Görevi Render Et
    renderTask(task) {
        const questionArea = document.getElementById('question-area');
        const optionsArea = document.getElementById('options-area');

        questionArea.innerHTML = '';
        optionsArea.innerHTML = '';

        // Soru Alanı
        let questionHTML = '';
        switch (task.type) {
            case 'letter_identification':
            case 'letter_shape':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.arabic}</div>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
            case 'match_letter_to_image':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.arabic}</div>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
            case 'harka_recognition':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.arabic}</div>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
            case 'harka_application':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.baseLetter || task.question.arabic}</div>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
            case 'word_reading':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.arabic}</div>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
            case 'match_word_to_image':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.arabic}</div>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
            case 'drag_to_target':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.arabic}</div>
                        <p>${task.question.text}</p>
                        <div class="drop-target" id="drop-target" aria-label="Bırakma kutusu">${task.question.dropText || 'Buraya bırak'}</div>
                    </div>
                `;
                break;
            case 'sentence_order':
                // Kartları karıştırılmış banka koy
                const shuffledWords = [...task.question.words].sort(() => Math.random() - 0.5);
                questionHTML = `
                    <div class="question-stack">
                        <p>${task.question.text}</p>
                    </div>
                    <div class="sentence-board">
                        <div class="sentence-slots">
                            ${task.question.words.map(w => `
                                <div class="sentence-slot" data-order="${w.order}"><span>${w.order}</span></div>
                            `).join('')}
                        </div>
                        <div class="sentence-words sentence-bank">
                            ${shuffledWords.map(w => `
                                <span class="word-piece arabic-text" draggable="true" data-order="${w.order}">${w.arabic}</span>
                            `).join('')}
                        </div>
                    </div>
                    <button class="btn btn-primary sentence-submit" id="sentence-submit">Kontrol et</button>
                `;
                break;
            case 'listen_and_choose':
                questionHTML = `
                    <div class="question-stack">
                        <button class="listen-button" id="repeat-audio" type="button" aria-label="Tekrar dinle">🔊</button>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
            case 'mixed_review':
                questionHTML = `
                    <div class="question-stack">
                        <div class="arabic-text question-arabic question-arabic--large">${task.question.arabic}</div>
                        <p>${task.question.text}</p>
                    </div>
                `;
                break;
        }

        questionArea.innerHTML = questionHTML;
        this.addPlainArabicHint(task, questionArea);

        const repeatAudioButton = document.getElementById('repeat-audio');
        if (repeatAudioButton && task.question.arabic) {
            repeatAudioButton.addEventListener('click', () => audioManager.speakArabic(task.question.arabic, { interrupt: true }));
        }

        // Seçenekler Alanı
        switch (task.type) {
            case 'letter_identification':
            case 'letter_shape':
            case 'harka_recognition':
            case 'word_reading':
            case 'harka_application':
            case 'mixed_review':
            case 'listen_and_choose': {
                // Şıkları her görevde karıştır (doğru şık hep 1. olmasın)
                const rawOptions = task.question.options || [];
                const items = rawOptions.map((option, originalIndex) => {
                    const optionText = typeof option === 'string' ? option : option.label;
                    const spoken = task.question.optionSpeech && task.question.optionSpeech[originalIndex]
                        ? task.question.optionSpeech[originalIndex]
                        : optionText;
                    return { optionText, spoken, originalIndex };
                });
                items.sort(() => Math.random() - 0.5);

                items.forEach(item => {
                    const optionEl = document.createElement('button');
                    const isArabicOption = this.containsArabic(item.optionText);
                    optionEl.className = `option ${isArabicOption ? 'arabic-choice' : 'latin-choice'}`;
                    optionEl.dir = isArabicOption ? 'rtl' : 'ltr';
                    optionEl.lang = isArabicOption ? 'ar' : 'tr';
                    optionEl.textContent = item.optionText;
                    optionEl.addEventListener('mouseenter', () => {
                        if (isArabicOption) {
                            audioManager.speakArabic(item.optionText, { interrupt: true });
                        } else {
                            audioManager.speakTurkish(item.spoken, { interrupt: true });
                        }
                    });
                    optionEl.addEventListener('click', () => this.checkAnswer(task, { type: 'choice', value: item.originalIndex, el: optionEl }));
                    optionsArea.appendChild(optionEl);
                });
                break;
            }

            case 'match_letter_to_image':
            case 'match_word_to_image': {
                const images = [...(task.question.images || [])];
                images.sort(() => Math.random() - 0.5);
                images.forEach(image => {
                    const optionEl = document.createElement('button');
                    optionEl.className = 'option';
                    // Arapça kelimeler için: Arapça yazılış + Türkçe anlam
                    const arabicText = image.arabic || image.transcription || '';
                    const displayText = image.arabic || image.transcription || image.name;
                    const displayClass = this.containsArabic(displayText) ? 'option-arabic' : 'option-latin-main';
                    optionEl.innerHTML = `
                        <div class="option-emoji">${image.emoji}</div>
                        <div class="${displayClass}">${displayText}</div>
                        <div class="option-turkish">${image.name}</div>
                    `;
                    optionEl.dataset.id = image.id;

                    // Harf ve kelime görevlerinde Arapça yazılış ve Arapça seslendirme
                    const hasArabic = !!image.arabic;
                    optionEl.addEventListener('mouseenter', () => {
                        if (hasArabic) {
                            audioManager.speakArabic(image.arabic, { interrupt: true });
                        } else if (task.type === 'match_letter_to_image') {
                            audioManager.speakTurkish(image.transcription || image.name, { interrupt: true });
                        } else {
                            audioManager.speakTurkish(image.name, { interrupt: true });
                        }
                    });
                    optionEl.addEventListener('click', () => this.checkAnswer(task, { type: 'image', value: image.id, el: optionEl }));
                    optionsArea.appendChild(optionEl);
                });
                break;
            }

            case 'drag_to_target': {
                const images = [...(task.question.images || [])].sort(() => Math.random() - 0.5);
                const dropTarget = document.getElementById('drop-target');
                const handleChoice = (image, optionEl) => this.checkAnswer(task, { type: 'image', value: image.id, el: optionEl });

                images.forEach(image => {
                    const optionEl = document.createElement('button');
                    optionEl.type = 'button';
                    optionEl.className = 'option drag-option';
                    optionEl.draggable = true;
                    optionEl.dataset.id = image.id;
                    optionEl.innerHTML = `
                        <div class="option-emoji">${image.emoji}</div>
                        <div class="option-arabic">${image.arabic}</div>
                        <div class="option-turkish">${image.name}</div>
                    `;
                    optionEl.addEventListener('mouseenter', () => audioManager.speakArabic(image.arabic, { interrupt: true }));
                    optionEl.addEventListener('click', () => handleChoice(image, optionEl));
                    optionEl.addEventListener('dragstart', (event) => {
                        optionEl.classList.add('dragging');
                        event.dataTransfer.setData('text/plain', image.id);
                    });
                    optionEl.addEventListener('dragend', () => optionEl.classList.remove('dragging'));
                    optionsArea.appendChild(optionEl);
                });

                if (dropTarget) {
                    dropTarget.addEventListener('dragover', (event) => {
                        event.preventDefault();
                        dropTarget.classList.add('drag-over');
                    });
                    dropTarget.addEventListener('dragleave', () => dropTarget.classList.remove('drag-over'));
                    dropTarget.addEventListener('drop', (event) => {
                        event.preventDefault();
                        dropTarget.classList.remove('drag-over');
                        const id = event.dataTransfer.getData('text/plain');
                        const optionEl = document.querySelector(`.drag-option[data-id="${id}"]`);
                        this.checkAnswer(task, { type: 'image', value: id, el: optionEl });
                    });
                }
                break;
            }

            case 'sentence_order':
                const slots = document.querySelectorAll('.sentence-slot');
                const bank = document.querySelector('.sentence-bank');
                slots.forEach(slot => this.bindSentenceDropTarget(slot));
                if (bank) this.bindSentenceDropTarget(bank, true);
                document.querySelectorAll('.word-piece').forEach(wordEl => this.addDragDrop(wordEl, task));
                break;

            default:
                optionsArea.innerHTML = '<p>Bu bölüm yakında.</p>';
                break;
        }

        if (task.type === 'sentence_order') {
            const instruction = document.createElement('p');
            instruction.className = 'sentence-instruction';
            instruction.textContent = 'Kartları kutulara sürükle veya dokun.';
            optionsArea.prepend(instruction);
            const submitBtn = document.getElementById('sentence-submit');
            if (submitBtn) {
                submitBtn.addEventListener('click', () => this.checkAnswer(task, null));
            }
        }
    }

    bindSentenceDropTarget(target, isBank = false) {
        target.addEventListener('dragover', (e) => e.preventDefault());
        target.addEventListener('drop', (e) => {
            e.preventDefault();
            const source = document.querySelector('.word-piece.dragging');
            if (!source) return;
            if (isBank) {
                target.appendChild(source);
                return;
            }
            const occupied = target.querySelector('.word-piece');
            if (occupied) {
                const bank = document.querySelector('.sentence-bank');
                if (bank) bank.appendChild(occupied);
            }
            target.appendChild(source);
        });
    }

// Sürükle-Bırak Destek
    addDragDrop(element, task) {
        element.draggable = true;
        element.addEventListener('click', () => {
            const bank = document.querySelector('.sentence-bank');
            const slots = Array.from(document.querySelectorAll('.sentence-slot'));
            if (element.parentElement && element.parentElement.classList.contains('sentence-slot')) {
                if (bank) bank.appendChild(element);
                return;
            }
            const emptySlot = slots.find(slot => !slot.querySelector('.word-piece'));
            if (emptySlot) emptySlot.appendChild(element);
        });

        element.addEventListener('dragstart', () => {
            element.classList.add('dragging');
        });

        element.addEventListener('dragend', () => {
            element.classList.remove('dragging');
        });

        element.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        element.addEventListener('drop', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const source = document.querySelector('.word-piece.dragging');
            if (!source || source === target) return;

            const parent = target.parentNode;
            const sourceIndex = [...parent.children].indexOf(source);
            const targetIndex = [...parent.children].indexOf(target);
            if (sourceIndex < targetIndex) {
                parent.insertBefore(source, target.nextSibling);
            } else {
                parent.insertBefore(source, target);
            }
            source.classList.remove('dragging');
        });
    }

    // Cevap Kontrolü
    checkAnswer(task, answer) {
        const answerValue = answer && typeof answer === 'object' ? answer.value : answer;
        const chosenEl = answer && typeof answer === 'object' ? answer.el : null;
        let isCorrect = false;
        
        if (task.type === 'sentence_order') {
            isCorrect = this.checkSentenceOrder(task);
        } else if (task.type === 'mixed_review') {
            isCorrect = answerValue === task.question.correct;
        } else {
            isCorrect = answerValue === task.question.correct;
        }

        // Seçenekleri işaretle (çocuk için: doğruyu göster, yanlışı sert cezalandırma)
        const optionEls = Array.from(document.querySelectorAll('.option'));
        const markCorrectOption = () => {
            for (const optionEl of optionEls) {
                let isCorrectOption = false;
                if (
                    task.type === 'letter_identification' ||
                    task.type === 'letter_shape' ||
                    task.type === 'harka_recognition' ||
                    task.type === 'word_reading' ||
                    task.type === 'mixed_review' ||
                    task.type === 'listen_and_choose'
                ) {
                    isCorrectOption = task.question.options[task.question.correct] === optionEl.textContent;
                } else if (task.type === 'harka_application') {
                    isCorrectOption = optionEl.textContent === task.question.options[task.question.correct];
                } else if (task.type === 'match_letter_to_image' || task.type === 'match_word_to_image' || task.type === 'drag_to_target') {
                    isCorrectOption = task.question.correct === optionEl.dataset.id;
                }
                if (isCorrectOption) optionEl.classList.add('correct');
            }
        };

        if (task.type !== 'sentence_order') {
            optionEls.forEach(el => (el.style.pointerEvents = 'none'));
            markCorrectOption();

            if (!isCorrect) {
                // Yanlış seçimi yumuşak renkle belirt
                if (chosenEl) chosenEl.classList.add('incorrect');
            }
        } else {
            // sentence_order: yanlışsa slotları kısa süre kırmızı vurgula
            if (!isCorrect) {
                document.querySelectorAll('.sentence-slot').forEach(slot => slot.classList.add('incorrect'));
                setTimeout(() => {
                    document.querySelectorAll('.sentence-slot').forEach(slot => slot.classList.remove('incorrect'));
                }, 800);
            }
        }

        // Geri Bildirim
        if (isCorrect) {
            // Yeni kural: bölümdeki her görev en fazla 1 yıldız verir (max 3)
            let starGained = false;
            if (!this._starsEarnedThisLevel.has(task.id) && this.levelStars < 3) {
                this._starsEarnedThisLevel.add(task.id);
                this.levelStars++;
                starGained = true;
            }
            audioManager.playSound('correct');
            this.showFeedback('correct', { starGained });
            speakMascot('correct');
            setTimeout(() => {
                this.currentTaskIndex++;
                this.updateStarsDisplay();
                this.startTask();
            }, 1500);
        } else {
            audioManager.playSound('incorrect');
            speakMascot('incorrect');
            this.showFeedback('incorrect');
            setTimeout(() => {
                this.renderTask(task);
                this.speakTask(task);
            }, 1500);
        }
    }

    // Cümle Sıralama Kontrolü
    checkSentenceOrder(task) {
        const slots = document.querySelectorAll('.sentence-slot');
        if (!slots.length) return false;

        const userOrder = Array.from(slots).map(slot => {
            const word = slot.querySelector('.word-piece');
            return word ? parseInt(word.dataset.order, 10) : null;
        });
        const correctOrder = task.question.words.map(w => w.order);
        return JSON.stringify(userOrder) === JSON.stringify(correctOrder);
    }

    // Yıldız Gösterimini Güncelle
    updateStarsDisplay() {
        for (let i = 1; i <= 3; i++) {
            const star = document.getElementById(`star-${i}`);
            if (i <= this.levelStars) {
                star.textContent = '⭐';
                star.classList.add('collected');
            } else {
                star.textContent = '☆';
                star.classList.remove('collected');
            }
        }
    }

    // Geri Bildirim Göster
    showFeedback(type, options = {}) {
        const overlay = document.getElementById('feedback-overlay');
        const content = document.getElementById('feedback-content');

        if (type === 'correct') {
            const starLine = options.starGained ? '<p>Yıldız!</p>' : '<p>Aferin!</p>';
            content.innerHTML = `
                <div style="font-size: 4em; margin-bottom: 20px;">🎉</div>
                <h2>Harika!</h2>
                ${starLine}
            `;
            if (options.starGained) audioManager.playSound('star');
        } else {
            content.innerHTML = `
                <div style="font-size: 4em; margin-bottom: 20px;">🙂</div>
                <h2>Bir daha</h2>
                <p>Tekrar dene.</p>
            `;
        }

        overlay.classList.remove('hidden');

        setTimeout(() => {
            overlay.classList.add('hidden');
            content.innerHTML = '';
        }, 1500);
    }

    hideFeedbackOverlay() {
        const overlay = document.getElementById('feedback-overlay');
        const content = document.getElementById('feedback-content');
        overlay.classList.add('hidden');
        content.innerHTML = '';
    }

    // Seviyi Tamamla
    completeLevel() {
        const completedLevelId = this.currentLevel.id;
        const completedLevelNum = parseInt(completedLevelId.split('_')[1], 10);

        gameState.updateProgress(this.currentLevel.id, this.levelStars);
        const earnedBadges = gameState.checkBadges();

        audioManager.playSound('level_complete');
        speakMascot('levelComplete');

        const proceedToLevelSelect = () => {
            this.showScreen('level-select');
            this.renderLevels();

            requestAnimationFrame(() => {
                const grid = document.getElementById('levels-grid');
                const currentCard = document.querySelector('.level-card.current');

                if (currentCard) {
                    currentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else if (grid) {
                    grid.scrollTop = grid.scrollHeight;
                }
            });
        };

        if (earnedBadges.length > 0) {
            setTimeout(() => {
                this.showEarnedBadges(earnedBadges);
            }, 2000);
        } else {
            setTimeout(proceedToLevelSelect, 3000);
        }
    }

    // Gelecek bölüm tipleri için güvenli davranış
    isSupportedTaskType(type) {
        return [
            'letter_identification',
            'letter_shape',
            'listen_and_choose',
            'drag_to_target',
            'match_letter_to_image',
            'harka_recognition',
            'harka_application',
            'word_reading',
            'match_word_to_image',
            'sentence_order',
            'mixed_review'
        ].includes(type);
    }

    shouldAutoAdvance(task) {
        return task.type !== 'sentence_order';
    }

    // Kazanılan Rozetleri Göster
    showEarnedBadges(badges) {
        const overlay = document.getElementById('feedback-overlay');
        const content = document.getElementById('feedback-content');

        let badgesHTML = '<h2>Yeni rozet!</h2><div style="margin-top: 20px;">';
        badges.forEach(badge => {
            badgesHTML += `
                <div style="text-align: center; margin: 20px;">
                    <div style="font-size: 3em; margin-bottom: 10px;">${badge.icon}</div>
                    <h3>${badge.name}</h3>
                    <p>${badge.description}</p>
                </div>
            `;
        });
        badgesHTML += '</div>';

        content.innerHTML = badgesHTML;
        overlay.classList.remove('hidden');

        setTimeout(() => {
            overlay.classList.add('hidden');
            this.showScreen('level-select');
            this.renderLevels();
        }, 4000);
    }

    // Rozet Ekranı
    showBadges() {
        this.showScreen('badges-screen');
        const grid = document.getElementById('badges-grid');
        grid.innerHTML = '';

        badgesData.forEach(badge => {
            const earned = gameState.state.badges.includes(badge.id);
            const card = document.createElement('div');
            card.className = `badge-card ${!earned ? 'locked' : ''}`;

            card.innerHTML = `
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-description">${badge.description}</div>
            `;

            grid.appendChild(card);
        });
    }

    // Ayarlar Ekranı
    showSettings() {
        this.showScreen('settings-screen');

        // Ses durumu
        const soundBtn = document.getElementById('sound-toggle');
        soundBtn.textContent = gameState.state.soundEnabled ? 'Açık' : 'Kapalı';
        soundBtn.className = `toggle-btn ${gameState.state.soundEnabled ? 'active' : 'inactive'}`;

        // Müzik durumu
        const musicBtn = document.getElementById('music-toggle');
        musicBtn.textContent = gameState.state.musicEnabled ? 'Açık' : 'Kapalı';
        musicBtn.className = `toggle-btn ${gameState.state.musicEnabled ? 'active' : 'inactive'}`;
    }

    // Ses Toggle
    toggleSound() {
        gameState.state.soundEnabled = !gameState.state.soundEnabled;
        audioManager.setEnabled(gameState.state.soundEnabled);
        this.showSettings();
    }

    // Müzik Toggle (placeholder)
    toggleMusic() {
        gameState.state.musicEnabled = !gameState.state.musicEnabled;
        this.showSettings();
    }

    // İlerlemeyi Sıfırla
    resetProgress() {
        if (confirm('Tüm ilerlemeniz silinecek! Emin misiniz?')) {
            localStorage.removeItem('arapcaMacerasi_state');
            location.reload();
        }
    }

    // UI Güncelleme
    updateUI() {
        // Streak güncelle
        document.getElementById('streak-count').textContent = gameState.state.streak.current;
        const totalStarsEl = document.getElementById('total-stars');
        if (totalStarsEl && typeof gameState.getTotalStars === 'function') {
            totalStarsEl.textContent = gameState.getTotalStars();
        }
    }
}

// Oyun Başlat
document.addEventListener('DOMContentLoaded', () => {
    const game = new GameManager();
    window.showScreen = (screenId) => game.showScreen(screenId);
});
