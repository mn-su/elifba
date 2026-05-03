// Seviye Veri Yapısı - 40 bölümlük yatay harita yapısı
// 1-20: giriş, 21-40: orta seviye.

const levelsData = {
    "level_1": {
        id: "level_1",
        mapPage: 1,
        difficulty: "giris",
        title: "İlk Harfler 1",
        description: "ا ب harflerini öğren",
        unlocked: true,
        tasks: [
            {
                id: "task_1_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "ا",
                    options: ["Elif", "Ba", "Ta"],
                    correct: 0,
                    hint: "Elif"
                }
            },
            {
                id: "task_1_2",
                type: "match_letter_to_image",
                question: {
                    text: "ا harfiyle başlayanı seç",
                    arabic: "ا",
                    images: [
                        { id: "arnb", emoji: "🐰", name: "tavşan", arabic: "أرنب" },
                        { id: "tuffah", emoji: "🍎", name: "elma", arabic: "تفاحة" },
                        { id: "kitab", emoji: "📚", name: "kitap", arabic: "كتاب" },
                        { id: "kalb", emoji: "🐕", name: "köpek", arabic: "كلب" }
                    ],
                    correct: "arnb",
                    optionSpeech: ["tavşan", "elma", "kitap", "köpek"],
                    hint: "Tavşan"
                }
            },
            {
                id: "task_1_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ب",
                    options: ["Ba", "Ta", "Elif"],
                    correct: 0,
                    hint: "Ba"
                }
            },
            {
                id: "task_1_4",
                type: "match_letter_to_image",
                question: {
                    text: "ب harfiyle başlayanı seç",
                    arabic: "ب",
                    images: [
                        { id: "bab", emoji: "🚪", name: "kapı", arabic: "باب" },
                        { id: "banan", emoji: "🍌", name: "muz", arabic: "موز" },
                        { id: "tuffah", emoji: "🍎", name: "elma", arabic: "تفاحة" },
                        { id: "najm", emoji: "⭐", name: "yıldız", arabic: "نجم" }
                    ],
                    correct: "bab",
                    optionSpeech: ["kapı", "muz", "elma", "yıldız"],
                    hint: "Kapı"
                }
            }
        ]
    },
    "level_2": {
        id: "level_2",
        mapPage: 1,
        difficulty: "giris",
        title: "İlk Harfler 2",
        description: "ت ث harflerini öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_2_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "ت",
                    options: ["Ta", "Ba", "Se"],
                    correct: 0,
                    hint: "Ta"
                }
            },
{
                id: "task_2_2",
                type: "match_letter_to_image",
                question: {
                    text: "ت harfiyle başlayanı seç",
                    arabic: "ت",
                    images: [
                        { id: "tin", emoji: "🍇", name: "incir", arabic: "تين" },
                        { id: "tifl", emoji: "👶", name: "çocuk", arabic: "طفل" },
                        { id: "qalam", emoji: "✏️", name: "kalem", arabic: "قلم" },
                        { id: "rajul", emoji: "👨", name: "adam", arabic: "رجل" }
                    ],
                    correct: "tin",
                    optionSpeech: ["incir", "çocuk", "kalem", "adam"],
                    hint: "İncir"
                }
            },
            {
                id: "task_2_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ث",
                    options: ["Se", "Ta", "Ba"],
                    correct: 0,
                    hint: "Se (Th sesi)"
                }
            },
{
                id: "task_2_4",
                type: "match_letter_to_image",
                question: {
                    text: "ث harfiyle başlayanı seç",
                    arabic: "ث",
                    images: [
                        { id: "thalatha", emoji: "3️⃣", name: "üç", arabic: "ثلاثة" },
                        { id: "khubz", emoji: "🍞", name: "ekmek", arabic: "خُبْز" },
                        { id: "rajul", emoji: "👨", name: "adam", arabic: "رجل" },
                        { id: "tariq", emoji: "🌙", name: "yıldız", arabic: "طارق" }
                    ],
                    correct: "thalatha",
                    optionSpeech: ["üç", "ekmek", "adam", "yıldız"],
                    hint: "Üç"
                }
            }
        ]
    },
    "level_3": {
        id: "level_3",
        mapPage: 1,
        difficulty: "giris",
        title: "Harfler 3",
        description: "ج ح خ harflerini öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_3_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "ج",
                    options: ["Cim", "Ha", "Ba"],
                    correct: 0,
                    hint: "Cim (C sesi)"
                }
            },
            {
                id: "task_3_2",
                type: "match_letter_to_image",
                question: {
                    text: "ج harfiyle başlayanı seç",
                    arabic: "ج",
                    images: [
                        { id: "jabal", emoji: "⛰️", name: "dağ", arabic: "جبل" },
                        { id: "jan", emoji: "👻", name: "cin", arabic: "جن" },
                        { id: "rajul", emoji: "👨", name: "adam", arabic: "رجل" },
                        { id: "hajr", emoji: "🪨", name: "taş", arabic: "حجر" }
                    ],
                    correct: "jabal",
                    optionSpeech: ["dağ", "cin", "adam", "taş"],
                    hint: "Dağ"
                }
            },
            {
                id: "task_3_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ح",
                    options: ["Ha", "Hı", "Ain"],
                    correct: 0,
                    hint: "Ha"
                }
            },
            {
                id: "task_3_4",
                type: "match_letter_to_image",
                question: {
                    text: "ح harfiyle başlayanı seç",
                    arabic: "ح",
                    images: [
                        { id: "hajar", emoji: "🪨", name: "taş", arabic: "حجر" },
                        { id: "hamal", emoji: "🐏", name: "koyun", arabic: "حمل" },
                        { id: "harim", emoji: "👩", name: "kadın", arabic: "حريم" },
                        { id: "hubz", emoji: "🍞", name: "ekmek", arabic: "خبز" }
                    ],
                    correct: "hajar",
                    optionSpeech: ["taş", "koyun", "kadın", "ekmek"],
                    hint: "Taş"
                }
            }
        ]
    },
    "level_4": {
        id: "level_4",
        mapPage: 1,
        difficulty: "giris",
        title: "Harfler 4",
        description: "د ذ ر ز ط harflerini öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_4_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "د",
                    options: ["Dal", "Ra", "Ze"],
                    correct: 0,
                    hint: "Dal"
                }
            },
            {
                id: "task_4_2",
                type: "match_letter_to_image",
                question: {
                    text: "ذ harfiyle başlayanı seç",
                    arabic: "ذ",
                    images: [
                        { id: "zikr", emoji: "🗣️", name: "anma", arabic: "ذكر" },
                        { id: "zaman", emoji: "⏰", name: "zaman", arabic: "زمن" },
                        { id: "rajul", emoji: "👨", name: "adam", arabic: "رجل" },
                        { id: "khubz", emoji: "🍞", name: "ekmek", arabic: "خُبْز" }
                    ],
                    correct: "zikr",
                    optionSpeech: ["anma", "zaman", "adam", "ekmek"],
                    hint: "Anma"
                }
            },
            {
                id: "task_4_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ر",
                    options: ["Ra", "Za", "Dal"],
                    correct: 0,
                    hint: "Ra"
                }
            },
            {
                id: "task_4_4",
                type: "match_letter_to_image",
                question: {
                    text: "ط harfiyle başlayanı seç",
                    arabic: "ط",
                    images: [
                        { id: "tariq", emoji: "🌙", name: "yıldız", arabic: "طارق" },
                        { id: "tayr", emoji: "🐦", name: "kuş", arabic: "طائر" },
                        { id: "tifl", emoji: "👶", name: "çocuk", arabic: "طفل" },
                        { id: "tub", emoji: "🛁", name: "leğان", arabic: "حوض" }
                    ],
                    correct: "tariq",
                    optionSpeech: ["yıldız", "kuş", "çocuk", "leğen"],
                    hint: "Yıldız"
                }
            }
        ]
    },
    "level_5": {
        id: "level_5",
        mapPage: 1,
        difficulty: "giris",
        title: "Yeni Harfler 1",
        description: "ع غ harflerini öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_5_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "ع",
                    options: ["Ain", "Gayn", "Ha"],
                    correct: 0,
                    hint: "Ain"
                }
            },
            {
                id: "task_5_2",
                type: "match_letter_to_image",
                question: {
                    text: "ع harfiyle başlayanı seç",
                    arabic: "ع",
                    images: [
                        { id: "ayn", emoji: "👁️", name: "göz", arabic: "عين" },
                        { id: "ard", emoji: "🌍", name: "dünya", arabic: "أرض" },
                        { id: "ulw", emoji: "🔥", name: "ateş", arabic: "نار" },
                        { id: "amr", emoji: "📝", name: "emir", arabic: "أمر" }
                    ],
                    correct: "ayn",
                    optionSpeech: ["göz", "dünya", "ateş", "emir"],
                    hint: "Göz"
                }
            },
            {
                id: "task_5_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "غ",
                    options: ["Gayn", "Ain", "Ha"],
                    correct: 0,
                    hint: "Gayn (Gh sesi)"
                }
            },
            {
                id: "task_5_4",
                type: "match_letter_to_image",
                question: {
                    text: "غ harfiyle başlayanı seç",
                    arabic: "غ",
                    images: [
                        { id: "ghulam", emoji: "👦", name: "oğlan", arabic: "غلام" },
                        { id: "ghania", emoji: "🪶", name: "tüy", arabic: "ريش" },
                        { id: "gharq", emoji: "🕳️", name: "delik", arabic: "ثقب" },
                        { id: "gh_ds", emoji: "💰", name: "para", arabic: "مال" }
                    ],
                    correct: "ghulam",
                    optionSpeech: ["oğlan", "tüy", "delik", "para"],
                    hint: "Oğlan"
                }
            }
        ]
    },
    "level_6": {
        id: "level_6",
        mapPage: 1,
        difficulty: "giris",
        title: "Yeni Harfler 2",
        description: "ف ق harflerini öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_6_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "ف",
                    options: ["Fa", "Qaf", "Kaf"],
                    correct: 0,
                    hint: "Fa (F sesi)"
                }
            },
            {
                id: "task_6_2",
                type: "match_letter_to_image",
                question: {
                    text: "ف harfiyle başlayanı seç",
                    arabic: "ف",
                    images: [
                        { id: "fil", emoji: "🐘", name: "fil", arabic: "فيل" },
                        { id: "fur", emoji: "🕊️", name: "güvercin", arabic: "حمام" },
                        { id: "fahm", emoji: "🧠", name: "akıl", arabic: "فهم" },
                        { id: "fuad", emoji: "❤️", name: "yürek", arabic: "قلب" }
                    ],
                    correct: "fil",
                    optionSpeech: ["fil", "güvercin", "akıl", "yürek"],
                    hint: "Fil"
                }
            },
            {
                id: "task_6_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ق",
                    options: ["Qaf", "Kaf", "Fa"],
                    correct: 0,
                    hint: "Qaf (K sesinin kalın variantı)"
                }
            },
            {
                id: "task_6_4",
                type: "match_letter_to_image",
                question: {
                    text: "ق harfiyle başlayanı seç",
                    arabic: "ق",
                    images: [
                        { id: "qalam", emoji: "✏️", name: "kalem", arabic: "قلم" },
                        { id: "qamar", emoji: "🌙", name: "ay", arabic: "قمر" },
                        { id: "qubah", emoji: "🪣", name: "kova", arabic: "قُعبة" },
                        { id: "qalb", emoji: "❤️", name: "kalp", arabic: "قلب" }
                    ],
                    correct: "qalam",
                    optionSpeech: ["kalem", "ay", "kova", "kalp"],
                    hint: "Kalem"
                }
            }
        ]
    },
    "level_7": {
        id: "level_7",
        mapPage: 1,
        difficulty: "giris",
        title: "Yeni Harfler 3",
        description: "ك ل م harflerini öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_7_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "ك",
                    options: ["Kaf", "Qaf", "Nun"],
                    correct: 0,
                    hint: "Kaf"
                }
            },
            {
                id: "task_7_2",
                type: "match_letter_to_image",
                question: {
                    text: "ك harfiyle başlayanı seç",
                    arabic: "ك",
                    images: [
                        { id: "kitab", emoji: "📚", name: "kitap", arabic: "كتاب" },
                        { id: "kalb", emoji: "🐕", name: "köpek", arabic: "كلب" },
                        { id: "kursi", emoji: "🪑", name: "sandalye", arabic: "كرسي" },
                        { id: "kifl", emoji: "📦", name: "kutu", arabic: "علبة" }
                    ],
                    correct: "kitab",
                    optionSpeech: ["kitap", "köpek", "sandalye", "kutu"],
                    hint: "Kitap"
                }
            },
            {
                id: "task_7_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ل",
                    options: ["Lam", "Lam", "Mim"],
                    correct: 0,
                    hint: "Lam"
                }
            },
            {
                id: "task_7_4",
                type: "match_letter_to_image",
                question: {
                    text: "ل harfiyle başlayanı seç",
                    arabic: "ل",
                    images: [
                        { id: "lubnan", emoji: "🌲", name: "Lübnان", arabic: "لبنان" },
                        { id: "lawn", emoji: "🟩", name: "renk", arabic: "لون" },
                        { id: "libs", emoji: "👕", name: "elbise", arabic: "لباس" },
                        { id: "lisan", emoji: "👅", name: "dil", arabic: "لسان" }
                    ],
                    correct: "lubnan",
                    optionSpeech: ["Lübnan", "renk", "elbise", "dil"],
                    hint: "Lübnan"
                }
            }
        ]
    },
    "level_8": {
        id: "level_8",
        mapPage: 1,
        difficulty: "giris",
        title: "Yeni Harfler 4",
        description: "م ن harflerini öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_8_1",
                type: "letter_identification",
                question: {
                    text: "Bu harfi tanı",
                    arabic: "م",
                    options: ["Mim", "Nun", "Lam"],
                    correct: 0,
                    hint: "Mim (M sesi)"
                }
            },
            {
                id: "task_8_2",
                type: "match_letter_to_image",
                question: {
                    text: "م harfiyle başlayanı seç",
                    arabic: "م",
                    images: [
                        { id: "madrasa", emoji: "🏫", name: "okul", arabic: "مدرسة" },
                        { id: "madina", emoji: "🏙️", name: "şehir", arabic: "مدينة" },
                        { id: "malik", emoji: "👑", name: "kral", arabic: "مالك" },
                        { id: "marra", emoji: "⏰", name: "zaman", arabic: "مرة" }
                    ],
                    correct: "madrasa",
                    optionSpeech: ["okul", "şehir", "kral", "zaman"],
                    hint: "Okul"
                }
            },
            {
                id: "task_8_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ن",
                    options: ["Nun", "Mim", "Ra"],
                    correct: 0,
                    hint: "Nun (N sesi)"
                }
            },
            {
                id: "task_8_4",
                type: "match_letter_to_image",
                question: {
                    text: "ن harfiyle başlayanı seç",
                    arabic: "ن",
                    images: [
                        { id: "nahr", emoji: "🌴", name: "hurma", arabic: "نهر" },
                        { id: "najm", emoji: "⭐", name: "yıldız", arabic: "نجم" },
                        { id: "nair", emoji: "☀️", name: "ışık", arabic: "نور" },
                        { id: "nafs", emoji: "😤", name: "nefes", arabic: "نَفَس" }
                    ],
                    correct: "nahr",
                    optionSpeech: ["hurma", "yıldız", "ışık", "nefes"],
                    hint: "Hurma"
                }
            }
        ]
    },
    "level_9": {
        id: "level_9",
        mapPage: 1,
        difficulty: "giris",
        title: "Tekrar 1",
        description: "Öğrendiklerini tekrar et",
        unlocked: false,
        tasks: [
            {
                id: "task_9_1",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ع",
                    options: ["Ain", "Gayn", "Ha"],
                    correct: 0,
                    hint: "Ain"
                }
            },
            {
                id: "task_9_2",
                type: "match_letter_to_image",
                question: {
                    text: "ق harfiyle başlayanı seç",
                    arabic: "ق",
                    images: [
                        { id: "qalam", emoji: "✏️", name: "kalem", arabic: "قلم" },
                        { id: "qamar", emoji: "🌙", name: "ay", arabic: "قمر" },
                        { id: "kitab", emoji: "📚", name: "kitap", arabic: "كتاب" },
                        { id: "fil", emoji: "🐘", name: "fil", arabic: "فيل" }
                    ],
                    correct: "qamar",
                    optionSpeech: ["kalem", "ay", "kitap", "fil"],
                    hint: "Ay"
                }
            },
            {
                id: "task_9_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "م",
                    options: ["Mim", "Nun", "Lam"],
                    correct: 0,
                    hint: "Mim"
                }
            },
            {
                id: "task_9_4",
                type: "match_letter_to_image",
                question: {
                    text: "ك harfiyle başlayanı seç",
                    arabic: "ك",
                    images: [
                        { id: "kalb", emoji: "🐕", name: "köpek", arabic: "كلب" },
                        { id: "kitab", emoji: "📚", name: "kitap", arabic: "كتاب" },
                        { id: "tifl", emoji: "👶", name: "çocuk", arabic: "طفل" },
                        { id: "jan", emoji: "👻", name: "cin", arabic: "جن" }
                    ],
                    correct: "kalb",
                    optionSpeech: ["köpek", "kitap", "çocuk", "cin"],
                    hint: "Köpek"
                }
            }
        ]
    },
    "level_10": {
        id: "level_10",
        mapPage: 1,
        difficulty: "giris",
        title: "Tekrar 2",
        description: "Daha fazla tekrar",
        unlocked: false,
        tasks: [
            {
                id: "task_10_1",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "غ",
                    options: ["Gayn", "Ain", "Fa"],
                    correct: 0,
                    hint: "Gayn"
                }
            },
            {
                id: "task_10_2",
                type: "match_letter_to_image",
                question: {
                    text: "ل harfiyle başlayanı seç",
                    arabic: "ل",
                    images: [
                        { id: "lisan", emoji: "👅", name: "dil", arabic: "لسان" },
                        { id: "madrasa", emoji: "🏫", name: "okul", arabic: "مدرسة" },
                        { id: "nahr", emoji: "🌴", name: "hurma", arabic: "نهر" },
                        { id: "jabal", emoji: "⛰️", name: "dağ", arabic: "جبل" }
                    ],
                    correct: "lisan",
                    optionSpeech: ["dil", "okul", "hurma", "dağ"],
                    hint: "Dil"
                }
            },
            {
                id: "task_10_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ف",
                    options: ["Fa", "Qaf", "Kaf"],
                    correct: 0,
                    hint: "Fa"
                }
            },
            {
                id: "task_10_4",
                type: "match_letter_to_image",
                question: {
                    text: "ن harfiyle başlayanı seç",
                    arabic: "ن",
                    images: [
                        { id: "najm", emoji: "⭐", name: "yıldız", arabic: "نجم" },
                        { id: "nafs", emoji: "😤", name: "nefes", arabic: "نَفَس" },
                        { id: "fil", emoji: "🐘", name: "fil", arabic: "فيل" },
                        { id: "ard", emoji: "🌍", name: "dünya", arabic: "أرض" }
                    ],
                    correct: "najm",
                    optionSpeech: ["yıldız", "nefes", "fil", "dünya"],
                    hint: "Yıldız"
                }
            }
        ]
    },
    "level_11": {
        id: "level_11",
        mapPage: 1,
        difficulty: "giris",
        title: "Tekrar 3",
        description: "Harfleri karışık tekrar et",
        unlocked: false,
        tasks: [
            {
                id: "task_11_1",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ط",
                    options: ["Ta", "Dal", "Ra"],
                    correct: 0,
                    hint: "Ta"
                }
            },
            {
                id: "task_11_2",
                type: "match_letter_to_image",
                question: {
                    text: "م harfiyle başlayanı seç",
                    arabic: "م",
                    images: [
                        { id: "malik", emoji: "👑", name: "kral", arabic: "مالك" },
                        { id: "madrasa", emoji: "🏫", name: "okul", arabic: "مدرسة" },
                        { id: "hubz", emoji: "🍞", name: "ekmek", arabic: "خبز" },
                        { id: "rajul", emoji: "👨", name: "adam", arabic: "رجل" }
                    ],
                    correct: "malik",
                    optionSpeech: ["kral", "okul", "ekmek", "adam"],
                    hint: "Kral"
                }
            },
            {
                id: "task_11_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ز",
                    options: ["Ze", "Ra", "Dal"],
                    correct: 0,
                    hint: "Ze (Z sesi)"
                }
            },
            {
                id: "task_11_4",
                type: "match_letter_to_image",
                question: {
                    text: "ع harfiyle başlayanı seç",
                    arabic: "ع",
                    images: [
                        { id: "amr", emoji: "📝", name: "emir", arabic: "أمر" },
                        { id: "ayn", emoji: "👁️", name: "göz", arabic: "عين" },
                        { id: "qamar", emoji: "🌙", name: "ay", arabic: "قمر" },
                        { id: "basal", emoji: "🧅", name: "soğan", arabic: "بصل" }
                    ],
                    correct: "ayn",
                    optionSpeech: ["emir", "göz", "ay", "soğan"],
                    hint: "Göz"
                }
            }
        ]
    },
    "level_12": {
        id: "level_12",
        mapPage: 1,
        difficulty: "giris",
        title: "Tekrar 4",
        description: "Son tekrar",
        unlocked: false,
        tasks: [
            {
                id: "task_12_1",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ذ",
                    options: ["Ze", "Ra", "Dal"],
                    correct: 0,
                    hint: "Ze"
                }
            },
            {
                id: "task_12_2",
                type: "match_letter_to_image",
                question: {
                    text: "غ harfiyle başlayanı seç",
                    arabic: "غ",
                    images: [
                        { id: "ghulam", emoji: "👦", name: "oğlan", arabic: "غلام" },
                        { id: "najm", emoji: "⭐", name: "yıldız", arabic: "نجم" },
                        { id: "kitab", emoji: "📚", name: "kitap", arabic: "كتاب" },
                        { id: "tifl", emoji: "👶", name: "çocuk", arabic: "طفل" }
                    ],
                    correct: "ghulam",
                    optionSpeech: ["oğlan", "yıldız", "kitap", "çocuk"],
                    hint: "Oğlan"
                }
            },
            {
                id: "task_12_3",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ح",
                    options: ["Ha", "Hı", "Ain"],
                    correct: 0,
                    hint: "Ha"
                }
            },
            {
                id: "task_12_4",
                type: "match_letter_to_image",
                question: {
                    text: "ف harfiyle başlayanı seç",
                    arabic: "ف",
                    images: [
                        { id: "fahm", emoji: "🧠", name: "akıl", arabic: "فهم" },
                        { id: "fil", emoji: "🐘", name: "fil", arabic: "فيل" },
                        { id: "nahr", emoji: "🌴", name: "hurma", arabic: "نهر" },
                        { id: "kalb", emoji: "🐕", name: "köpek", arabic: "كلب" }
                    ],
                    correct: "fahm",
                    optionSpeech: ["akıl", "fil", "hurma", "köpek"],
                    hint: "Akıl"
                }
            }
        ]
    },
    "level_13": {
        id: "level_13",
        mapPage: 1,
        difficulty: "giris",
        title: "Harekeler 1",
        description: "Esre harekesini öğren (ِ)",
        unlocked: false,
        tasks: [
            {
                id: "task_13_1",
                type: "harka_recognition",
                question: {
                    text: "Bu işaret hangi ses?",
                    arabic: "ِ",
                    options: ["i sesi", "a sesi", "u sesi"],
                    correct: 0,
                    hint: "Esre - i sesi"
                }
            },
            {
                id: "task_13_2",
                type: "harka_application",
                question: {
                    text: "Bu harfle hangi ses?",
                    arabic: "بِ",
                    options: ["bi", "ba", "bu"],
                    correct: 0,
                    hint: "Bi"
                }
            },
            {
                id: "task_13_3",
                type: "harka_match",
                question: {
                    text: "Eşleştir",
                    pairs: [
                        { left: "سِ", right: "si" },
                        { left: "كِ", right: "ki" },
                        { left: "تِ", right: "ti" },
                        { left: "لِ", right: "li" }
                    ],
                    correct: [
                        { leftId: "سِ", rightId: "si" },
                        { leftId: "كِ", rightId: "ki" },
                        { leftId: "تِ", rightId: "ti" },
                        { leftId: "لِ", rightId: "li" }
                    ],
                    hint: "Her harfin esreli hali"
                }
            },
            {
                id: "task_13_4",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "كِتَاب",
                    options: ["kitap", "kalem", "defter"],
                    correct: 0,
                    hint: "Kitap"
                }
            }
        ]
    },
    "level_14": {
        id: "level_14",
        mapPage: 1,
        difficulty: "giris",
        title: "Harekeler 2",
        description: "Şemme harekesini öğren (ُ)",
        unlocked: false,
        tasks: [
            {
                id: "task_14_1",
                type: "harka_recognition",
                question: {
                    text: "Bu işaret hangi ses?",
                    arabic: "ُ",
                    options: ["u sesi", "a sesi", "i sesi"],
                    correct: 0,
                    hint: "Şemme - u sesi"
                }
            },
            {
                id: "task_14_2",
                type: "harka_application",
                question: {
                    text: "Bu harfle hangi ses?",
                    arabic: "بُ",
                    options: ["bu", "ba", "bi"],
                    correct: 0,
                    hint: "Bu"
                }
            },
            {
                id: "task_14_3",
                type: "harka_match",
                question: {
                    text: "Eşleştir",
                    pairs: [
                        { left: "سُ", right: "su" },
                        { left: "كُ", right: "ku" },
                        { left: "تُ", right: "tu" },
                        { left: "لُ", right: "lu" }
                    ],
                    correct: [
                        { leftId: "سُ", rightId: "su" },
                        { leftId: "كُ", rightId: "ku" },
                        { leftId: "تُ", rightId: "tu" },
                        { leftId: "لُ", rightId: "lu" }
                    ],
                    hint: "Her harfin şemeli hali"
                }
            },
            {
                id: "task_14_4",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "قُلْب",
                    options: ["kalp", "yürek", "can"],
                    correct: 0,
                    hint: "Kalp"
                }
            }
        ]
    },
    "level_15": {
        id: "level_15",
        mapPage: 1,
        difficulty: "giris",
        title: "Harekeler 3",
        description: "Damme harekesini öğren (َ)",
        unlocked: false,
        tasks: [
            {
                id: "task_15_1",
                type: "harka_recognition",
                question: {
                    text: "Bu işaret hangi ses?",
                    arabic: "َ",
                    options: ["a sesi", "i sesi", "u sesi"],
                    correct: 0,
                    hint: "Damme - a sesi"
                }
            },
            {
                id: "task_15_2",
                type: "harka_application",
                question: {
                    text: "Bu harfle hangi ses?",
                    arabic: "بَ",
                    options: ["ba", "bi", "bu"],
                    correct: 0,
                    hint: "Ba"
                }
            },
            {
                id: "task_15_3",
                type: "harka_match",
                question: {
                    text: "Eşleştir",
                    pairs: [
                        { left: "سَ", right: "sa" },
                        { left: "كَ", right: "ka" },
                        { left: "تَ", right: "ta" },
                        { left: "لَ", right: "la" }
                    ],
                    correct: [
                        { leftId: "سَ", rightId: "sa" },
                        { leftId: "كَ", rightId: "ka" },
                        { leftId: "تَ", rightId: "ta" },
                        { leftId: "لَ", rightId: "la" }
                    ],
                    hint: "Her harfin dammeli hali"
                }
            },
            {
                id: "task_15_4",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "بَيْت",
                    options: ["ev", "kapı", "oda"],
                    correct: 0,
                    hint: "Ev"
                }
            }
        ]
    },
    "level_16": {
        id: "level_16",
        mapPage: 1,
        difficulty: "giris",
        title: "Kelimeler 1",
        description: "Temel kelimeleri öğren",
        unlocked: false,
        tasks: [
            {
                id: "task_16_1",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "مَاء",
                    options: ["su", "ekmek", "et"],
                    correct: 0,
                    hint: "Su"
                }
            },
            {
                id: "task_16_2",
                type: "match_word_to_image",
                question: {
                    text: "Bu kelime hangi resim?",
                    arabic: "خُبْز",
                    images: [
                        { id: "bread", emoji: "🍞", name: "ekmek", arabic: "خُبْز" },
                        { id: "water", emoji: "💧", name: "su", arabic: "مَاء" },
                        { id: "meat", emoji: "🥩", name: "et", arabic: "لَحْم" },
                        { id: "cheese", emoji: "🧀", name: "peynir", arabic: "جُبْن" }
                    ],
                    correct: "bread",
                    optionSpeech: ["ekmek", "su", "et", "peynir"],
                    hint: "Ekmek"
                }
            },
            {
                id: "task_16_3",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "حَلِيب",
                    options: ["süt", "su", "yağ"],
                    correct: 0,
                    hint: "Süt"
                }
            },
            {
                id: "task_16_4",
                type: "match_word_to_image",
                question: {
                    text: "Bu kelime hangi resim?",
                    arabic: "لَحْم",
                    images: [
                        { id: "meat", emoji: "🥩", name: "et", arabic: "لَحْم" },
                        { id: "bread", emoji: "🍞", name: "ekmek", arabic: "خُبْز" },
                        { id: "water", emoji: "💧", name: "su", arabic: "مَاء" },
                        { id: "fruit", emoji: "🍎", name: "meyve", arabic: "فَاكِهَة" }
                    ],
                    correct: "meat",
                    optionSpeech: ["et", "ekmek", "su", "meyve"],
                    hint: "Et"
                }
            }
        ]
    },
    "level_17": {
        id: "level_17",
        mapPage: 1,
        difficulty: "giris",
        title: "Kelimeler 2",
        description: "Aile ve ev kelimeleri",
        unlocked: false,
        tasks: [
            {
                id: "task_17_1",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "أَبٌ",
                    options: ["baba", "anne", "çocuk"],
                    correct: 0,
                    hint: "Baba"
                }
            },
            {
                id: "task_17_2",
                type: "match_word_to_image",
                question: {
                    text: "Bu kelime hangi resim?",
                    arabic: "أُمٌّ",
                    images: [
                        { id: "mother", emoji: "👩", name: "anne", arabic: "أُمٌّ" },
                        { id: "father", emoji: "👨", name: "baba", arabic: "أَبٌّ" },
                        { id: "child", emoji: "👶", name: "çocuk", arabic: "وَلَدٌ" },
                        { id: "brother", emoji: "👦", name: "erkek kardeş", arabic: "أَخٌّ" }
                    ],
                    correct: "mother",
                    optionSpeech: ["anne", "baba", "çocuk", "erkek kardeş"],
                    hint: "Anne"
                }
            },
            {
                id: "task_17_3",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "وَلَدٌ",
                    options: ["çocuk", "baba", "amca"],
                    correct: 0,
                    hint: "Çocuk"
                }
            },
            {
                id: "task_17_4",
                type: "match_word_to_image",
                question: {
                    text: "Bu kelime hangi resim?",
                    arabic: "بَيْت",
                    images: [
                        { id: "house", emoji: "🏠", name: "ev", arabic: "بيت" },
                        { id: "school", emoji: "🏫", name: "okul", arabic: "مدرسة" },
                        { id: "mosque", emoji: "🕌", name: "cami", arabic: "مسجد" },
                        { id: "garden", emoji: "🌳", name: "bahçe", arabic: "حديقة" }
                    ],
                    correct: "house",
                    optionSpeech: ["ev", "okul", "cami", "bahçe"],
                    hint: "Ev"
                }
            }
        ]
    },
    "level_18": {
        id: "level_18",
        mapPage: 1,
        difficulty: "giris",
        title: "Kelimeler 3",
        description: "Renkler ve sayılar",
        unlocked: false,
        tasks: [
            {
                id: "task_18_1",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "أَحْمَر",
                    options: ["kırmızı", "mavi", "yeşil"],
                    correct: 0,
                    hint: "Kırmızı"
                }
            },
            {
                id: "task_18_2",
                type: "match_word_to_image",
                question: {
                    text: "Bu kelime hangi resim?",
                    arabic: "أَزْرَق",
                    images: [
                        { id: "blue", emoji: "🔵", name: "mavi", arabic: "أَزْرَق" },
                        { id: "red", emoji: "🔴", name: "kırmızı", arabic: "أَحْمَر" },
                        { id: "green", emoji: "🟢", name: "yeşil", arabic: "أَخْضَر" },
                        { id: "yellow", emoji: "🟡", name: "sarı", arabic: "أَصْفَر" }
                    ],
                    correct: "blue",
                    optionSpeech: ["mavi", "kırmızı", "yeşil", "sarı"],
                    hint: "Mavi"
                }
            },
            {
                id: "task_18_3",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "وَاحِد",
                    options: ["bir", "iki", "üç"],
                    correct: 0,
                    hint: "Bir"
                }
            },
            {
                id: "task_18_4",
                type: "match_word_to_image",
                question: {
                    text: "Bu kelime hangi resim?",
                    arabic: "اِثْنانِ",
                    images: [
                        { id: "two", emoji: "2️⃣", name: "iki", arabic: "اِثْنانِ" },
                        { id: "one", emoji: "1️⃣", name: "bir", arabic: "وَاحِد" },
                        { id: "three", emoji: "3️⃣", name: "üç", arabic: "ثَلاَثَة" },
                        { id: "four", emoji: "4️⃣", name: "dört", arabic: "أَرْبَعَة" }
                    ],
                    correct: "two",
                    optionSpeech: ["iki", "bir", "üç", "dört"],
                    hint: "İki"
                }
            }
        ]
    },
    "level_19": {
        id: "level_19",
        mapPage: 1,
        difficulty: "giris",
        title: "Karma Tekrar 1",
        description: "Hepsini karışık tekrar et",
        unlocked: false,
        tasks: [
            {
                id: "task_19_1",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ع",
                    options: ["Ain", "Gayn", "Ha"],
                    correct: 0,
                    hint: "Ain"
                }
            },
            {
                id: "task_19_2",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "مَدْرَسَة",
                    options: ["okul", "ev", "cami"],
                    correct: 0,
                    hint: "Okul"
                }
            },
            {
                id: "task_19_3",
                type: "harka_recognition",
                question: {
                    text: "Bu işaret hangi ses?",
                    arabic: "ِ",
                    options: ["i sesi", "a sesi", "u sesi"],
                    correct: 0,
                    hint: "i sesi"
                }
            },
            {
                id: "task_19_4",
                type: "match_letter_to_image",
                question: {
                    text: "م harfiyle başlayanı seç",
                    arabic: "م",
                    images: [
                        { id: "madrasa", emoji: "🏫", name: "okul", arabic: "مدرسة" },
                        { id: "malik", emoji: "👑", name: "kral", arabic: "مالك" },
                        { id: "kitab", emoji: "📚", name: "kitap", arabic: "كتاب" },
                        { id: "nahr", emoji: "🌴", name: "hurma", arabic: "نهر" }
                    ],
                    correct: "madrasa",
                    optionSpeech: ["okul", "kral", "kitap", "hurma"],
                    hint: "Okul"
                }
            }
        ]
    },
    "level_20": {
        id: "level_20",
        mapPage: 1,
        difficulty: "giris",
        title: "Son Seviye",
        description: "Final!",
        unlocked: false,
        tasks: [
            {
                id: "task_20_1",
                type: "letter_identification",
                question: {
                    text: "Bu hangi harf?",
                    arabic: "ق",
                    options: ["Qaf", "Kaf", "Fa"],
                    correct: 0,
                    hint: "Qaf"
                }
            },
            {
                id: "task_20_2",
                type: "word_reading",
                question: {
                    text: "Bu kelime ne?",
                    arabic: "كِتَاب",
                    options: ["kitap", "kalem", "defter"],
                    correct: 0,
                    hint: "Kitap"
                }
            },
            {
                id: "task_20_3",
                type: "match_word_to_image",
                question: {
                    text: "Bu kelime hangi resim?",
                    arabic: "بَيْت",
                    images: [
                        { id: "house", emoji: "🏠", name: "ev", arabic: "بَيْت" },
                        { id: "car", emoji: "🚗", name: "araba", arabic: "سَيَّارَة" },
                        { id: "book", emoji: "📚", name: "kitap", arabic: "كِتَاب" },
                        { id: "tree", emoji: "🌳", name: "ağaç", arabic: "شَجَرَة" }
                    ],
                    correct: "house",
                    optionSpeech: ["ev", "araba", "kitap", "ağaç"],
                    hint: "Ev"
                }
            },
            {
                id: "task_20_4",
                type: "mixed_review",
                question: {
                    text: "Son soru! Bu ne?",
                    arabic: "شَمْس",
                    options: ["güneş", "ay", "yıldız"],
                    correct: 0,
                    hint: "Güneş"
                }
            }
        ]
    },
    "level_21": {
        "id": "level_21",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Şekil Dedektifi 1",
        "description": "Harflerin başta, ortada ve sonda şekillerini ayırt et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_21_1",
                "type": "letter_shape",
                "question": {
                    "text": "Bu ortadaki şekil hangi harfe ait?",
                    "arabic": "ـبـ",
                    "options": [
                        "Be",
                        "Te",
                        "Se",
                        "Nun"
                    ],
                    "correct": 0,
                    "hint": "Be"
                }
            },
            {
                "id": "task_21_2",
                "type": "letter_shape",
                "question": {
                    "text": "Bu sondaki şekil hangi harfe ait?",
                    "arabic": "ـت",
                    "options": [
                        "Te",
                        "Be",
                        "Nun",
                        "Ya"
                    ],
                    "correct": 0,
                    "hint": "Te"
                }
            },
            {
                "id": "task_21_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "بَيْتٌ",
                    "options": [
                        "ev",
                        "kapı",
                        "kalem",
                        "balık"
                    ],
                    "correct": 0,
                    "hint": "ev"
                }
            }
        ]
    },
    "level_22": {
        "id": "level_22",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Şekil Dedektifi 2",
        "description": "Boğaz harflerinin kelime içindeki şekillerini tanı",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_22_1",
                "type": "letter_shape",
                "question": {
                    "text": "Bu baştaki şekil hangi harfe ait?",
                    "arabic": "عـ",
                    "options": [
                        "Ayn",
                        "Gayn",
                        "Ha",
                        "Hı"
                    ],
                    "correct": 0,
                    "hint": "Ayn"
                }
            },
            {
                "id": "task_22_2",
                "type": "letter_shape",
                "question": {
                    "text": "Bu ortadaki şekil hangi harfe ait?",
                    "arabic": "ـغـ",
                    "options": [
                        "Gayn",
                        "Ayn",
                        "Fe",
                        "Kaf"
                    ],
                    "correct": 0,
                    "hint": "Gayn"
                }
            },
            {
                "id": "task_22_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "غُرَابٌ",
                    "options": [
                        "karga",
                        "kitap",
                        "nehir",
                        "güneş"
                    ],
                    "correct": 0,
                    "hint": "karga"
                }
            }
        ]
    },
    "level_23": {
        "id": "level_23",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Kısa Sesler",
        "description": "Fetha, kesra ve dammeyi kelime içinde kullan",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_23_1",
                "type": "harka_application",
                "question": {
                    "text": "ب harfine üstün gelirse hangi ses çıkar?",
                    "arabic": "بَ",
                    "options": [
                        "بَ",
                        "بِ",
                        "بُ",
                        "بْ"
                    ],
                    "correct": 0,
                    "hint": "بَ",
                    "baseLetter": "ب"
                }
            },
            {
                "id": "task_23_2",
                "type": "harka_application",
                "question": {
                    "text": "م harfine esre gelirse hangi ses çıkar?",
                    "arabic": "مِ",
                    "options": [
                        "مَ",
                        "مِ",
                        "مُ",
                        "مْ"
                    ],
                    "correct": 1,
                    "hint": "مِ",
                    "baseLetter": "م"
                }
            },
            {
                "id": "task_23_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin heceyi seç",
                    "arabic": "تُ",
                    "options": [
                        "تَ",
                        "تِ",
                        "تُ",
                        "تْ"
                    ],
                    "correct": 2,
                    "hint": "تُ"
                }
            }
        ]
    },
    "level_24": {
        "id": "level_24",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Sükûn Köprüsü",
        "description": "Sükûnlu heceleri ve kısa kapanışları oku",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_24_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu işaret hangi okumayı gösterir?",
                    "arabic": "بْ",
                    "options": [
                        "sükûn",
                        "üstün",
                        "esre",
                        "ötre"
                    ],
                    "correct": 0,
                    "hint": "sükûn"
                }
            },
            {
                "id": "task_24_2",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "بَدْرٌ",
                    "options": [
                        "dolunay",
                        "ev",
                        "kapı",
                        "tilki"
                    ],
                    "correct": 0,
                    "hint": "dolunay"
                }
            },
            {
                "id": "task_24_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sükûnlu heceyi seç",
                    "arabic": "قَلْ",
                    "options": [
                        "قَلْ",
                        "قَلَ",
                        "قُلُ",
                        "قِلِ"
                    ],
                    "correct": 0,
                    "hint": "قَلْ"
                }
            }
        ]
    },
    "level_25": {
        "id": "level_25",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Şedde Gücü",
        "description": "Şeddeli harfi iki vuruş gibi fark et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_25_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Şedde hangi parçada var?",
                    "arabic": "دَرَّسَ",
                    "options": [
                        "دَرَّسَ",
                        "دَرَسَ",
                        "دَرْسٌ",
                        "دَارٌ"
                    ],
                    "correct": 0,
                    "hint": "دَرَّسَ"
                }
            },
            {
                "id": "task_25_2",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "قِطَّةٌ",
                    "options": [
                        "kedi",
                        "kalem",
                        "ay",
                        "kapı"
                    ],
                    "correct": 0,
                    "hint": "kedi"
                }
            },
            {
                "id": "task_25_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin kelimeyi seç",
                    "arabic": "رُمَّانٌ",
                    "options": [
                        "رَمَانٌ",
                        "رُمَّانٌ",
                        "زَمَانٌ",
                        "رَمْلٌ"
                    ],
                    "correct": 1,
                    "hint": "رُمَّانٌ"
                }
            }
        ]
    },
    "level_26": {
        "id": "level_26",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Med Sesleri",
        "description": "Uzun a, uzun i ve uzun u okumalarını ayırt et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_26_1",
                "type": "harka_application",
                "question": {
                    "text": "Uzun a sesi hangisidir?",
                    "arabic": "بَا",
                    "options": [
                        "بَ",
                        "بَا",
                        "بِ",
                        "بُ"
                    ],
                    "correct": 1,
                    "hint": "بَا",
                    "baseLetter": "ب"
                }
            },
            {
                "id": "task_26_2",
                "type": "harka_application",
                "question": {
                    "text": "Uzun i sesi hangisidir?",
                    "arabic": "بِي",
                    "options": [
                        "بِ",
                        "بِي",
                        "بُو",
                        "بَا"
                    ],
                    "correct": 1,
                    "hint": "بِي",
                    "baseLetter": "ب"
                }
            },
            {
                "id": "task_26_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin uzun sesi seç",
                    "arabic": "نُورٌ",
                    "options": [
                        "نَرٌ",
                        "نِيرٌ",
                        "نُورٌ",
                        "نَوْرٌ"
                    ],
                    "correct": 2,
                    "hint": "نُورٌ"
                }
            }
        ]
    },
    "level_27": {
        "id": "level_27",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Tenvin Bahçesi",
        "description": "An, in, un seslerini tanı",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_27_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu kelimenin sonunda hangi tenvin var?",
                    "arabic": "كِتَابٌ",
                    "options": [
                        "ötre tenvin / un",
                        "üstün tenvin / an",
                        "esre tenvin / in",
                        "sükûn"
                    ],
                    "correct": 0,
                    "hint": "ötre tenvin"
                }
            },
            {
                "id": "task_27_2",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu okuma hangisidir?",
                    "arabic": "قَلَمًا",
                    "options": [
                        "kaleman",
                        "kalemun",
                        "kalemin",
                        "kalem"
                    ],
                    "correct": 0,
                    "hint": "kaleman"
                }
            },
            {
                "id": "task_27_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin tenvinli kelimeyi seç",
                    "arabic": "بَيْتٍ",
                    "options": [
                        "بَيْتٌ",
                        "بَيْتًا",
                        "بَيْتٍ",
                        "بَيْتَ"
                    ],
                    "correct": 2,
                    "hint": "بَيْتٍ"
                }
            }
        ]
    },
    "level_28": {
        "id": "level_28",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Benzer Sesler",
        "description": "Yakın görünen ve yakın duyulan harfleri ayırt et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_28_1",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin kelimeyi seç",
                    "arabic": "سَمَكٌ",
                    "options": [
                        "سَمَكٌ",
                        "شَمْسٌ",
                        "صَخْرٌ",
                        "ثَمَرٌ"
                    ],
                    "correct": 0,
                    "hint": "سَمَكٌ"
                }
            },
            {
                "id": "task_28_2",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin kelimeyi seç",
                    "arabic": "شَمْسٌ",
                    "options": [
                        "سَمْسٌ",
                        "شَمْسٌ",
                        "صَمْتٌ",
                        "ثَمْرٌ"
                    ],
                    "correct": 1,
                    "hint": "شَمْسٌ"
                }
            },
            {
                "id": "task_28_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "صَخْرٌ",
                    "options": [
                        "kaya",
                        "balık",
                        "güneş",
                        "çiçek"
                    ],
                    "correct": 0,
                    "hint": "kaya"
                }
            }
        ]
    },
    "level_29": {
        "id": "level_29",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Kelime Avı 1",
        "description": "Harekeli kelimeleri okuyup görselle eşleştir",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_29_1",
                "type": "match_word_to_image",
                "question": {
                    "text": "كِتَابٌ kelimesinin resmini seç",
                    "arabic": "كِتَابٌ",
                    "images": [
                        {
                            "id": "kitab",
                            "emoji": "📘",
                            "name": "kitap",
                            "arabic": "كِتَابٌ"
                        },
                        {
                            "id": "qalam",
                            "emoji": "✏️",
                            "name": "kalem",
                            "arabic": "قَلَمٌ"
                        },
                        {
                            "id": "bab",
                            "emoji": "🚪",
                            "name": "kapı",
                            "arabic": "بَابٌ"
                        },
                        {
                            "id": "bayt",
                            "emoji": "🏠",
                            "name": "ev",
                            "arabic": "بَيْتٌ"
                        }
                    ],
                    "correct": "kitab",
                    "optionSpeech": [
                        "kitap",
                        "kalem",
                        "kapı",
                        "ev"
                    ],
                    "hint": "kitap"
                }
            },
            {
                "id": "task_29_2",
                "type": "match_word_to_image",
                "question": {
                    "text": "قَلَمٌ kelimesinin resmini seç",
                    "arabic": "قَلَمٌ",
                    "images": [
                        {
                            "id": "kitab",
                            "emoji": "📘",
                            "name": "kitap",
                            "arabic": "كِتَابٌ"
                        },
                        {
                            "id": "qalam",
                            "emoji": "✏️",
                            "name": "kalem",
                            "arabic": "قَلَمٌ"
                        },
                        {
                            "id": "bab",
                            "emoji": "🚪",
                            "name": "kapı",
                            "arabic": "بَابٌ"
                        },
                        {
                            "id": "bayt",
                            "emoji": "🏠",
                            "name": "ev",
                            "arabic": "بَيْتٌ"
                        }
                    ],
                    "correct": "qalam",
                    "optionSpeech": [
                        "kitap",
                        "kalem",
                        "kapı",
                        "ev"
                    ],
                    "hint": "kalem"
                }
            },
            {
                "id": "task_29_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "بَابٌ",
                    "options": [
                        "kapı",
                        "ev",
                        "kitap",
                        "kalem"
                    ],
                    "correct": 0,
                    "hint": "kapı"
                }
            }
        ]
    },
    "level_30": {
        "id": "level_30",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Kelime Avı 2",
        "description": "Yiyecek ve nesne kelimelerini oku",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_30_1",
                "type": "match_word_to_image",
                "question": {
                    "text": "تُفَّاحٌ kelimesinin resmini seç",
                    "arabic": "تُفَّاحٌ",
                    "images": [
                        {
                            "id": "tuffah",
                            "emoji": "🍎",
                            "name": "elma",
                            "arabic": "تُفَّاحٌ"
                        },
                        {
                            "id": "tamr",
                            "emoji": "🌴",
                            "name": "hurma",
                            "arabic": "تَمْرٌ"
                        },
                        {
                            "id": "samak",
                            "emoji": "🐟",
                            "name": "balık",
                            "arabic": "سَمَكٌ"
                        },
                        {
                            "id": "laban",
                            "emoji": "🥛",
                            "name": "süt",
                            "arabic": "لَبَنٌ"
                        }
                    ],
                    "correct": "tuffah",
                    "optionSpeech": [
                        "elma",
                        "hurma",
                        "balık",
                        "süt"
                    ],
                    "hint": "elma"
                }
            },
            {
                "id": "task_30_2",
                "type": "match_word_to_image",
                "question": {
                    "text": "تَمْرٌ kelimesinin resmini seç",
                    "arabic": "تَمْرٌ",
                    "images": [
                        {
                            "id": "tuffah",
                            "emoji": "🍎",
                            "name": "elma",
                            "arabic": "تُفَّاحٌ"
                        },
                        {
                            "id": "tamr",
                            "emoji": "🌴",
                            "name": "hurma",
                            "arabic": "تَمْرٌ"
                        },
                        {
                            "id": "samak",
                            "emoji": "🐟",
                            "name": "balık",
                            "arabic": "سَمَكٌ"
                        },
                        {
                            "id": "laban",
                            "emoji": "🥛",
                            "name": "süt",
                            "arabic": "لَبَنٌ"
                        }
                    ],
                    "correct": "tamr",
                    "optionSpeech": [
                        "elma",
                        "hurma",
                        "balık",
                        "süt"
                    ],
                    "hint": "hurma"
                }
            },
            {
                "id": "task_30_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin kelimeyi seç",
                    "arabic": "لَبَنٌ",
                    "options": [
                        "لَبَنٌ",
                        "لَيْلٌ",
                        "لِسَانٌ",
                        "لَعِبَ"
                    ],
                    "correct": 0,
                    "hint": "لَبَنٌ"
                }
            }
        ]
    },
    "level_31": {
        "id": "level_31",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Doğa Kelimeleri",
        "description": "Doğa kelimelerini harekeli oku",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_31_1",
                "type": "match_word_to_image",
                "question": {
                    "text": "شَمْسٌ kelimesinin resmini seç",
                    "arabic": "شَمْسٌ",
                    "images": [
                        {
                            "id": "shams",
                            "emoji": "☀️",
                            "name": "güneş",
                            "arabic": "شَمْسٌ"
                        },
                        {
                            "id": "qamar",
                            "emoji": "🌙",
                            "name": "ay",
                            "arabic": "قَمَرٌ"
                        },
                        {
                            "id": "nahr",
                            "emoji": "🏞️",
                            "name": "nehir",
                            "arabic": "نَهْرٌ"
                        },
                        {
                            "id": "zahra",
                            "emoji": "🌸",
                            "name": "çiçek",
                            "arabic": "زَهْرَةٌ"
                        }
                    ],
                    "correct": "shams",
                    "optionSpeech": [
                        "güneş",
                        "ay",
                        "nehir",
                        "çiçek"
                    ],
                    "hint": "güneş"
                }
            },
            {
                "id": "task_31_2",
                "type": "match_word_to_image",
                "question": {
                    "text": "قَمَرٌ kelimesinin resmini seç",
                    "arabic": "قَمَرٌ",
                    "images": [
                        {
                            "id": "shams",
                            "emoji": "☀️",
                            "name": "güneş",
                            "arabic": "شَمْسٌ"
                        },
                        {
                            "id": "qamar",
                            "emoji": "🌙",
                            "name": "ay",
                            "arabic": "قَمَرٌ"
                        },
                        {
                            "id": "nahr",
                            "emoji": "🏞️",
                            "name": "nehir",
                            "arabic": "نَهْرٌ"
                        },
                        {
                            "id": "zahra",
                            "emoji": "🌸",
                            "name": "çiçek",
                            "arabic": "زَهْرَةٌ"
                        }
                    ],
                    "correct": "qamar",
                    "optionSpeech": [
                        "güneş",
                        "ay",
                        "nehir",
                        "çiçek"
                    ],
                    "hint": "ay"
                }
            },
            {
                "id": "task_31_3",
                "type": "drag_to_target",
                "question": {
                    "text": "ن harfiyle başlayan resmi kutuya bırak",
                    "arabic": "ن",
                    "images": [
                        {
                            "id": "shams",
                            "emoji": "☀️",
                            "name": "güneş",
                            "arabic": "شَمْسٌ"
                        },
                        {
                            "id": "qamar",
                            "emoji": "🌙",
                            "name": "ay",
                            "arabic": "قَمَرٌ"
                        },
                        {
                            "id": "nahr",
                            "emoji": "🏞️",
                            "name": "nehir",
                            "arabic": "نَهْرٌ"
                        },
                        {
                            "id": "zahra",
                            "emoji": "🌸",
                            "name": "çiçek",
                            "arabic": "زَهْرَةٌ"
                        }
                    ],
                    "correct": "nahr",
                    "optionSpeech": [
                        "güneş",
                        "ay",
                        "nehir",
                        "çiçek"
                    ],
                    "hint": "nehir",
                    "dropText": "ن ile başlayan resim"
                }
            }
        ]
    },
    "level_32": {
        "id": "level_32",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Renk Kapısı",
        "description": "Renk kelimelerini oku ve ayırt et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_32_1",
                "type": "match_word_to_image",
                "question": {
                    "text": "أَحْمَرُ rengini seç",
                    "arabic": "أَحْمَرُ",
                    "images": [
                        {
                            "id": "ahmar",
                            "emoji": "🔴",
                            "name": "kırmızı",
                            "arabic": "أَحْمَرُ"
                        },
                        {
                            "id": "azraq",
                            "emoji": "🔵",
                            "name": "mavi",
                            "arabic": "أَزْرَقُ"
                        },
                        {
                            "id": "asfar",
                            "emoji": "🟡",
                            "name": "sarı",
                            "arabic": "أَصْفَرُ"
                        },
                        {
                            "id": "akhdar",
                            "emoji": "🟢",
                            "name": "yeşil",
                            "arabic": "أَخْضَرُ"
                        }
                    ],
                    "correct": "ahmar",
                    "optionSpeech": [
                        "kırmızı",
                        "mavi",
                        "sarı",
                        "yeşil"
                    ],
                    "hint": "kırmızı"
                }
            },
            {
                "id": "task_32_2",
                "type": "match_word_to_image",
                "question": {
                    "text": "أَخْضَرُ rengini seç",
                    "arabic": "أَخْضَرُ",
                    "images": [
                        {
                            "id": "ahmar",
                            "emoji": "🔴",
                            "name": "kırmızı",
                            "arabic": "أَحْمَرُ"
                        },
                        {
                            "id": "azraq",
                            "emoji": "🔵",
                            "name": "mavi",
                            "arabic": "أَزْرَقُ"
                        },
                        {
                            "id": "asfar",
                            "emoji": "🟡",
                            "name": "sarı",
                            "arabic": "أَصْفَرُ"
                        },
                        {
                            "id": "akhdar",
                            "emoji": "🟢",
                            "name": "yeşil",
                            "arabic": "أَخْضَرُ"
                        }
                    ],
                    "correct": "akhdar",
                    "optionSpeech": [
                        "kırmızı",
                        "mavi",
                        "sarı",
                        "yeşil"
                    ],
                    "hint": "yeşil"
                }
            },
            {
                "id": "task_32_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin renk kelimesini seç",
                    "arabic": "أَزْرَقُ",
                    "options": [
                        "أَحْمَرُ",
                        "أَزْرَقُ",
                        "أَصْفَرُ",
                        "أَخْضَرُ"
                    ],
                    "correct": 1,
                    "hint": "أَزْرَقُ"
                }
            }
        ]
    },
    "level_33": {
        "id": "level_33",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "ال Takısı",
        "description": "ال ile başlayan kelimeleri fark et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_33_1",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "الْقَمَرُ",
                    "options": [
                        "ay",
                        "güneş",
                        "ev",
                        "kitap"
                    ],
                    "correct": 0,
                    "hint": "ay"
                }
            },
            {
                "id": "task_33_2",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "الشَّمْسُ",
                    "options": [
                        "güneş",
                        "ay",
                        "nehir",
                        "çiçek"
                    ],
                    "correct": 0,
                    "hint": "güneş"
                }
            },
            {
                "id": "task_33_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin kelimeyi seç",
                    "arabic": "الْكِتَابُ",
                    "options": [
                        "الْبَيْتُ",
                        "الْكِتَابُ",
                        "الْقَلَمُ",
                        "الْبَابُ"
                    ],
                    "correct": 1,
                    "hint": "الْكِتَابُ"
                }
            }
        ]
    },
    "level_34": {
        "id": "level_34",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "İki Kelimelik Okuma 1",
        "description": "Sağdan sola iki kelimeyi sırala",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_34_1",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola doğru sırala",
                    "correct": "كِتَابٌ جَدِيدٌ",
                    "words": [
                        {
                            "arabic": "كِتَابٌ",
                            "order": 1
                        },
                        {
                            "arabic": "جَدِيدٌ",
                            "order": 2
                        }
                    ],
                    "hint": "كِتَابٌ جَدِيدٌ"
                }
            },
            {
                "id": "task_34_2",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola doğru sırala",
                    "correct": "بَيْتٌ كَبِيرٌ",
                    "words": [
                        {
                            "arabic": "بَيْتٌ",
                            "order": 1
                        },
                        {
                            "arabic": "كَبِيرٌ",
                            "order": 2
                        }
                    ],
                    "hint": "بَيْتٌ كَبِيرٌ"
                }
            },
            {
                "id": "task_34_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu ifadeyi oku: anlamı nedir?",
                    "arabic": "قَلَمٌ صَغِيرٌ",
                    "options": [
                        "küçük kalem",
                        "büyük ev",
                        "yeni kitap",
                        "kırmızı elma"
                    ],
                    "correct": 0,
                    "hint": "küçük kalem"
                }
            }
        ]
    },
    "level_35": {
        "id": "level_35",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "İki Kelimelik Okuma 2",
        "description": "Sıfatlı ifadeleri oku",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_35_1",
                "type": "word_reading",
                "question": {
                    "text": "Bu ifadeyi oku: anlamı nedir?",
                    "arabic": "كُرَةٌ حَمْرَاءُ",
                    "options": [
                        "kırmızı top",
                        "mavi kapı",
                        "sarı ay",
                        "yeşil ev"
                    ],
                    "correct": 0,
                    "hint": "kırmızı top"
                }
            },
            {
                "id": "task_35_2",
                "type": "word_reading",
                "question": {
                    "text": "Bu ifadeyi oku: anlamı nedir?",
                    "arabic": "بَابٌ أَزْرَقُ",
                    "options": [
                        "mavi kapı",
                        "kırmızı top",
                        "büyük ev",
                        "küçük kitap"
                    ],
                    "correct": 0,
                    "hint": "mavi kapı"
                }
            },
            {
                "id": "task_35_3",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola doğru sırala",
                    "correct": "زَهْرَةٌ صَفْرَاءُ",
                    "words": [
                        {
                            "arabic": "زَهْرَةٌ",
                            "order": 1
                        },
                        {
                            "arabic": "صَفْرَاءُ",
                            "order": 2
                        }
                    ],
                    "hint": "زَهْرَةٌ صَفْرَاءُ"
                }
            }
        ]
    },
    "level_36": {
        "id": "level_36",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Kısa Fiiller",
        "description": "Basit hareket kelimelerini tanı",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_36_1",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "قَرَأَ",
                    "options": [
                        "okudu",
                        "yazdı",
                        "gitti",
                        "oturdu"
                    ],
                    "correct": 0,
                    "hint": "okudu"
                }
            },
            {
                "id": "task_36_2",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelimeyi oku: anlamı nedir?",
                    "arabic": "كَتَبَ",
                    "options": [
                        "yazdı",
                        "okudu",
                        "açtı",
                        "kapattı"
                    ],
                    "correct": 0,
                    "hint": "yazdı"
                }
            },
            {
                "id": "task_36_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin fiili seç",
                    "arabic": "جَلَسَ",
                    "options": [
                        "جَلَسَ",
                        "ذَهَبَ",
                        "فَتَحَ",
                        "كَتَبَ"
                    ],
                    "correct": 0,
                    "hint": "جَلَسَ"
                }
            }
        ]
    },
    "level_37": {
        "id": "level_37",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Kısa Cümle 1",
        "description": "Basit cümleleri sağdan sola sırala",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_37_1",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola doğru sırala",
                    "correct": "قَرَأَ وَلَدٌ",
                    "words": [
                        {
                            "arabic": "قَرَأَ",
                            "order": 1
                        },
                        {
                            "arabic": "وَلَدٌ",
                            "order": 2
                        }
                    ],
                    "hint": "قَرَأَ وَلَدٌ"
                }
            },
            {
                "id": "task_37_2",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola doğru sırala",
                    "correct": "كَتَبَ أَبٌ",
                    "words": [
                        {
                            "arabic": "كَتَبَ",
                            "order": 1
                        },
                        {
                            "arabic": "أَبٌ",
                            "order": 2
                        }
                    ],
                    "hint": "كَتَبَ أَبٌ"
                }
            },
            {
                "id": "task_37_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu cümleyi oku: anlamı nedir?",
                    "arabic": "جَلَسَ وَلَدٌ",
                    "options": [
                        "bir çocuk oturdu",
                        "bir baba yazdı",
                        "bir kitap okudu",
                        "bir kapı açıldı"
                    ],
                    "correct": 0,
                    "hint": "bir çocuk oturdu"
                }
            }
        ]
    },
    "level_38": {
        "id": "level_38",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Kısa Cümle 2",
        "description": "Harekeli cümleleri oku, harekesiz görünüme de alış",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_38_1",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola doğru sırala",
                    "correct": "فَتَحَ بَابًا",
                    "words": [
                        {
                            "arabic": "فَتَحَ",
                            "order": 1
                        },
                        {
                            "arabic": "بَابًا",
                            "order": 2
                        }
                    ],
                    "hint": "فَتَحَ بَابًا"
                }
            },
            {
                "id": "task_38_2",
                "type": "word_reading",
                "question": {
                    "text": "Bu cümleyi oku: anlamı nedir?",
                    "arabic": "شَرِبَ لَبَنًا",
                    "options": [
                        "süt içti",
                        "kitap okudu",
                        "kapı açtı",
                        "kalem yazdı"
                    ],
                    "correct": 0,
                    "hint": "süt içti"
                }
            },
            {
                "id": "task_38_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin cümleyi seç",
                    "arabic": "أَكَلَ تُفَّاحًا",
                    "options": [
                        "أَكَلَ تُفَّاحًا",
                        "شَرِبَ لَبَنًا",
                        "فَتَحَ بَابًا",
                        "قَرَأَ كِتَابًا"
                    ],
                    "correct": 0,
                    "hint": "أَكَلَ تُفَّاحًا"
                }
            }
        ]
    },
    "level_39": {
        "id": "level_39",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Mini Metin",
        "description": "Kısa ve anlamlı ifadeleri oku",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_39_1",
                "type": "word_reading",
                "question": {
                    "text": "Bu ifadeyi oku: anlamı nedir?",
                    "arabic": "بِسْمِ اللهِ",
                    "options": [
                        "Allah’ın adıyla",
                        "büyük ev",
                        "güzel kitap",
                        "küçük kalem"
                    ],
                    "correct": 0,
                    "hint": "Allah’ın adıyla"
                }
            },
            {
                "id": "task_39_2",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola doğru sırala",
                    "correct": "رَبِّ زِدْنِي عِلْمًا",
                    "words": [
                        {
                            "arabic": "رَبِّ",
                            "order": 1
                        },
                        {
                            "arabic": "زِدْنِي",
                            "order": 2
                        },
                        {
                            "arabic": "عِلْمًا",
                            "order": 3
                        }
                    ],
                    "hint": "رَبِّ زِدْنِي عِلْمًا"
                }
            },
            {
                "id": "task_39_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu ifadeyi oku: anlamı nedir?",
                    "arabic": "رَبِّ زِدْنِي عِلْمًا",
                    "options": [
                        "Rabbim ilmimi artır",
                        "kapıyı aç",
                        "süt içti",
                        "ay doğdu"
                    ],
                    "correct": 0,
                    "hint": "Rabbim ilmimi artır"
                }
            }
        ]
    },
    "level_40": {
        "id": "level_40",
        "mapPage": 2,
        "difficulty": "orta",
        "title": "Orta Final",
        "description": "Harf, hareke, kelime ve cümleyi birlikte kullan",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_40_1",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin ifadeyi seç",
                    "arabic": "الْكِتَابُ جَدِيدٌ",
                    "options": [
                        "الْكِتَابُ جَدِيدٌ",
                        "الْبَيْتُ كَبِيرٌ",
                        "الشَّمْسُ صَفْرَاءُ",
                        "الْقَمَرُ جَمِيلٌ"
                    ],
                    "correct": 0,
                    "hint": "الْكِتَابُ جَدِيدٌ"
                }
            },
            {
                "id": "task_40_2",
                "type": "word_reading",
                "question": {
                    "text": "Bu cümleyi oku: anlamı nedir?",
                    "arabic": "الْقَمَرُ جَمِيلٌ",
                    "options": [
                        "Ay güzeldir",
                        "Güneş sarıdır",
                        "Kitap yenidir",
                        "Ev büyüktür"
                    ],
                    "correct": 0,
                    "hint": "Ay güzeldir"
                }
            },
            {
                "id": "task_40_3",
                "type": "sentence_order",
                "question": {
                    "text": "Son görev: kartları sağdan sola doğru sırala",
                    "correct": "الشَّمْسُ صَفْرَاءُ",
                    "words": [
                        {
                            "arabic": "الشَّمْسُ",
                            "order": 1
                        },
                        {
                            "arabic": "صَفْرَاءُ",
                            "order": 2
                        }
                    ],
                    "hint": "الشَّمْسُ صَفْرَاءُ"
                }
            }
        ]
    }
};

const badgesData = [
    {
        id: "first_step",
        name: "İlk Adım",
        description: "İlk seviyeyi tamamla",
        icon: "🌟",
        condition: { type: "level", level: 1 }
    },
    {
        id: "giris_harf_ustasi",
        name: "Giriş Harf Ustası",
        description: "Giriş harf bölümlerini tamamla",
        icon: "✨",
        condition: { type: "level", level: 8 }
    },
    {
        id: "giris_hareke_ustasi",
        name: "Giriş Hareke Ustası",
        description: "Giriş hareke bölümlerini tamamla",
        icon: "🎯",
        condition: { type: "level", level: 17 }
    },
    {
        id: "giris_fatihi",
        name: "Giriş Fatihi",
        description: "1-20 arasındaki giriş bölümlerini bitir",
        icon: "🦁",
        condition: { type: "complete_all", levels: 20 }
    },
    {
        id: "orta_kapisi",
        name: "Orta Kapısı",
        description: "İlk orta seviye bölümünü tamamla",
        icon: "🚪",
        condition: { type: "level", level: 21 }
    },
    {
        id: "orta_sekil_ustasi",
        name: "Orta Şekil Ustası",
        description: "Harf şekillerini orta seviyede pekiştir",
        icon: "🔎",
        condition: { type: "level", level: 26 }
    },
    {
        id: "orta_okuma_ustasi",
        name: "Okuma Ustası",
        description: "Orta seviyede kelime ve cümle okuma görevlerini tamamla",
        icon: "📚",
        condition: { type: "level", level: 35 }
    },
    {
        id: "iki_harita_ustasi",
        name: "İki Harita Ustası",
        description: "40 bölümün tamamını bitir",
        icon: "👑",
        condition: { type: "complete_all", levels: 40 }
    },
    {
        id: "gunluk_seri",
        name: "Günlük Seri",
        description: "3 gün boyunca oyna",
        icon: "🔥",
        condition: { type: "streak", days: 3 }
    }
];

// Oyun Durumu Yönetimi
class GameState {
    constructor() {
        this.storageKey = 'arapcaMacerasi_state';
        this.loadState();
        this.applyUnlocksFromProgress();
    }

    getDefaultState() {
        return {
            playerId: 'player_' + Date.now(),
            displayName: '',
            currentLevel: 1,
            totalStars: 0,
            badges: [],
            streak: { current: 0, lastPlayedDate: null },
            levelProgress: {},
            soundEnabled: true,
            musicEnabled: true
        };
    }

    loadState() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            this.state = saved ? { ...this.getDefaultState(), ...JSON.parse(saved) } : this.getDefaultState();
            this.state.streak = { current: 0, lastPlayedDate: null, ...(this.state.streak || {}) };
            this.state.levelProgress = this.state.levelProgress || {};
            this.state.badges = this.state.badges || [];
        } catch (error) {
            console.warn('Kayıtlı ilerleme okunamadı, temiz başlangıç yapılıyor.', error);
            this.state = this.getDefaultState();
        }
    }

    saveState() {
        this.state.totalStars = this.getTotalStars();
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    }

    getTotalStars() {
        return Object.values(this.state.levelProgress || {})
            .reduce((sum, level) => sum + (level.stars || 0), 0);
    }

    getOrderedLevelKeys() {
        return Object.keys(levelsData).sort((a, b) => parseInt(a.split('_')[1], 10) - parseInt(b.split('_')[1], 10));
    }

    applyUnlocksFromProgress() {
        const levelKeys = this.getOrderedLevelKeys();
        levelKeys.forEach((key, index) => {
            if (index === 0) {
                levelsData[key].unlocked = true;
                return;
            }
            const previousKey = levelKeys[index - 1];
            const previousProgress = this.state.levelProgress[previousKey];
            levelsData[key].unlocked = !!(previousProgress && previousProgress.completed);
        });
    }

    updateProgress(levelId, stars) {
        if (!this.state.levelProgress[levelId]) {
            this.state.levelProgress[levelId] = { stars: 0, completed: false };
        }

        const levelTaskCount = levelsData[levelId] && levelsData[levelId].tasks ? levelsData[levelId].tasks.length : 3;
        const starsToComplete = Math.min(3, levelTaskCount);
        const safeStars = Math.max(0, Math.min(3, stars));

        this.state.levelProgress[levelId].stars = Math.max(this.state.levelProgress[levelId].stars, safeStars);
        this.state.levelProgress[levelId].completed = this.state.levelProgress[levelId].stars >= starsToComplete;
        this.applyUnlocksFromProgress();
        this.saveState();
    }

    checkBadges() {
        const earnedBadges = [];
        badgesData.forEach(badge => {
            if (!this.state.badges.includes(badge.id) && this.isBadgeConditionMet(badge)) {
                earnedBadges.push(badge);
                this.state.badges.push(badge.id);
            }
        });
        this.saveState();
        return earnedBadges;
    }

    isBadgeConditionMet(badge) {
        switch (badge.condition.type) {
            case 'level': {
                const levelId = `level_${badge.condition.level}`;
                return !!(this.state.levelProgress[levelId] && this.state.levelProgress[levelId].completed);
            }
            case 'levels_completed': {
                const completedCount = Object.values(this.state.levelProgress).filter(level => level.completed).length;
                return completedCount >= badge.condition.count;
            }
            case 'complete_all': {
                for (let i = 1; i <= badge.condition.levels; i++) {
                    const id = `level_${i}`;
                    if (!this.state.levelProgress[id] || !this.state.levelProgress[id].completed) return false;
                }
                return true;
            }
            case 'streak':
                return this.state.streak.current >= badge.condition.days;
            default:
                return false;
        }
    }

    updateStreak() {
        const today = new Date().toDateString();
        const lastPlayed = this.state.streak.lastPlayedDate;
        if (lastPlayed === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastPlayed === yesterday.toDateString()) {
            this.state.streak.current += 1;
        } else {
            this.state.streak.current = 1;
        }
        this.state.streak.lastPlayedDate = today;
        this.saveState();
    }

    resetProgress() {
        const keepPlayerId = this.state.playerId;
        const keepDisplayName = this.state.displayName;
        const keepSound = this.state.soundEnabled;
        const keepMusic = this.state.musicEnabled;
        this.state = this.getDefaultState();
        this.state.playerId = keepPlayerId;
        this.state.displayName = keepDisplayName;
        this.state.soundEnabled = keepSound;
        this.state.musicEnabled = keepMusic;
        this.applyUnlocksFromProgress();
        this.saveState();
    }
}

const gameState = new GameState();
