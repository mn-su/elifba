// Ses Yönetimi Sınıfı
class AudioManager {
    constructor() {
        this.enabled = true;
        this.speechSynth = window.speechSynthesis;
        this.currentUtterance = null;
        this._currentHtmlAudio = null;
        this._sequenceToken = 0;
    }

    // Dosyadan ses çal (relative path: "audio/foo.mp3")
    async playAudio(src) {
        if (!this.enabled) return;
        if (!src) return;

        if (this._currentHtmlAudio) {
            try { this._currentHtmlAudio.pause(); } catch {}
            this._currentHtmlAudio = null;
        }

        try {
            const audio = new Audio(src);
            this._currentHtmlAudio = audio;
            await audio.play();
        } catch (error) {
            console.warn('Ses dosyası çalınamadı:', src, error);
        }
    }

    // Ses Efektleri
    playSound(type) {
        if (!this.enabled) return;

        let audioContext;
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.warn('Ses efekti başlatılamadı:', error);
            return;
        }
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch (type) {
            case 'correct':
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
                break;

            case 'incorrect':
                oscillator.frequency.value = 320;
                oscillator.frequency.exponentialRampToValueAtTime(260, audioContext.currentTime + 0.18);
                gainNode.gain.setValueAtTime(0.12, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.18);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.18);
                break;

            case 'star':
                oscillator.frequency.value = 1000;
                gainNode.gain.setValueAtTime(0.12, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1300, audioContext.currentTime + 0.12);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.18);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.18);
                break;

            case 'level_complete':
                const notes = [523, 659, 784, 1047];
                notes.forEach((freq, i) => {
                    setTimeout(() => {
                        const osc = audioContext.createOscillator();
                        const gain = audioContext.createGain();
                        osc.connect(gain);
                        gain.connect(audioContext.destination);
                        osc.frequency.value = freq;
                        gain.gain.setValueAtTime(0.2, audioContext.currentTime);
                        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                        osc.start(audioContext.currentTime);
                        osc.stop(audioContext.currentTime + 0.3);
                    }, i * 150);
                });
                break;
        }
    }

    createUtterance(text, lang, options = {}) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = options.rate || (lang.startsWith('ar') ? 0.78 : 0.9);
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;
        return utterance;
    }

    speakSequence(items = []) {
        if (!this.enabled || !this.speechSynth || !items.length) return;
        this.stop();
        const token = ++this._sequenceToken;
        const playAt = (index) => {
            if (token !== this._sequenceToken || index >= items.length) return;
            const item = items[index];
            const delay = item.pauseBefore || 0;
            setTimeout(() => {
                if (token !== this._sequenceToken) return;
                const utterance = this.createUtterance(item.text, item.lang, item);
                this.currentUtterance = utterance;
                utterance.onend = () => {
                    const pause = item.pauseAfter == null ? 160 : item.pauseAfter;
                    setTimeout(() => playAt(index + 1), pause);
                };
                utterance.onerror = () => playAt(index + 1);
                this.speechSynth.speak(utterance);
            }, delay);
        };
        playAt(0);
    }

    speakArabic(text, options = {}) {
        if (!this.enabled || !this.speechSynth || !text) return;
        if (options.interrupt !== false) this.stop();
        const utterance = this.createUtterance(text, 'ar-SA', options);
        this.currentUtterance = utterance;
        this.speechSynth.speak(utterance);
    }

    speakTurkish(text, options = {}) {
        if (!this.enabled || !this.speechSynth || !text) return;
        if (options.interrupt !== false) this.stop();
        const utterance = this.createUtterance(text, 'tr-TR', options);
        this.currentUtterance = utterance;
        this.speechSynth.speak(utterance);
    }

    stop() {
        this._sequenceToken++;
        if (this.speechSynth) {
            this.speechSynth.cancel();
        }
        if (this._currentHtmlAudio) {
            try { this._currentHtmlAudio.pause(); } catch {}
            this._currentHtmlAudio = null;
        }
    }

    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled) this.stop();
    }
}

// Global Ses Yöneticisi
const audioManager = new AudioManager();

// Maskot Sesleri ve Mesajları
const mascotMessages = {
    welcome: [
        "Merhaba! Ben Aslan Ahmet.",
        "Hadi başlayalım.",
        "Hazır mısın?"
    ],
    correct: [
        "Aferin!",
        "Süper!",
        "Çok iyi!",
        "Harika!"
    ],
    incorrect: [
        "Bir daha.",
        "Tekrar dene.",
        "Sorun değil.",
        "Yavaş yavaş."
    ],
    levelComplete: [
        "Bitti!",
        "Yeni bölüme geçelim.",
        "Harika gidiyorsun.",
        "Devam edelim."
    ],
    encouragement: [
        "Hadi.",
        "Yavaş yavaş.",
        "Bir daha dene.",
        "Ben buradayım."
    ]
};

// Maskot Konuşma Fonksiyonu
function speakMascot(messageType, customMessage = null, options = {}) {
    const speechElement = document.getElementById('mascot-text');
    const mascotDiv = document.getElementById('mascot-speech');
    const silent = !!options.silent;

    // Mesajı göster
    if (customMessage) {
        speechElement.textContent = customMessage;
        if (!silent) audioManager.speakTurkish(customMessage);
    } else if (mascotMessages[messageType]) {
        const randomMessage = mascotMessages[messageType][
            Math.floor(Math.random() * mascotMessages[messageType].length)
        ];
        speechElement.textContent = randomMessage;
        if (!silent) audioManager.speakTurkish(randomMessage);
    }

    // Animasyon (daha kısa, daha az dikkat dağıtıcı)
    mascotDiv.classList.add('animate-bounce');
    setTimeout(() => {
        mascotDiv.classList.remove('animate-bounce');
    }, 400);
}

// Seviye Başlangıç Mesajı
function speakLevelIntro(levelData, options = {}) {
    if (!levelData) return;

    const levelNumber = parseInt(String(levelData.id || '').split('_')[1], 10);
    const messages = {
        1: 'Merhaba harfler. Dinle ve seç.',
        2: 'Resmi bul ve kutuya bırak.',
        3: 'Noktaları dikkatle izle.',
        4: 'Harfleri sesleriyle tanı.',
        5: 'Güçlü harfleri öğrenelim.',
        6: 'Yeni harfleri dinleyelim.',
        7: 'Son harfleri tamamlayalım.',
        8: 'Yıldız avcısı zamanı.',
        9: 'Benzer harfleri ayırt edelim.',
        10: 'Harf şekillerini görelim.',
        11: 'Üstün sesini öğrenelim.',
        12: 'Esre sesini öğrenelim.',
        13: 'Ötre sesini öğrenelim.',
        14: 'Sükûn ile duralım.',
        15: 'Şedde ile güçlü okuyalım.',
        16: 'Uzun ses köprüsünden geçelim.',
        17: 'Tenvin bahçesine girelim.',
        18: 'İlk kelimeleri okuyalım.',
        19: 'Kelime avına çıkalım.',
        20: 'Mini final zamanı.'
    };

    speakMascot(null, messages[levelNumber] || 'Hadi başlayalım.', options);
}

