// Seviye Veri Yapısı - GDD uyumlu 20 bölümlük yapı
// 1-8: harf tanıma + ses + resim eşleştirme
// 9-10: benzer harfler ve harfin konuma göre şekilleri
// 11-17: hareke, sükûn, şedde, med ve tenvin
// 18-20: kelime, görsel eşleştirme, sağdan sola sıralama ve mini final

const levelsData = {
    "level_1": {
        "id": "level_1",
        "title": "Merhaba Harfler",
        "description": "ا ب ت harflerini tanı",
        "unlocked": true,
        "tasks": [
            {
                "id": "task_1_1",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "ا",
                    "options": [
                        "Elif",
                        "Be",
                        "Te",
                        "Se"
                    ],
                    "correct": 0,
                    "hint": "Elif"
                }
            },
            {
                "id": "task_1_2",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sesi seç",
                    "arabic": "ب",
                    "options": [
                        "ا",
                        "ب",
                        "ت",
                        "ث"
                    ],
                    "correct": 1,
                    "hint": "ب"
                }
            },
            {
                "id": "task_1_3",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "ت",
                    "options": [
                        "Te",
                        "Se",
                        "Be",
                        "Nun"
                    ],
                    "correct": 0,
                    "hint": "Te"
                }
            }
        ]
    },
    "level_2": {
        "id": "level_2",
        "title": "Harfleri Bul",
        "description": "ث ج ح خ harfleriyle resim eşleştir",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_2_1",
                "type": "drag_to_target",
                "question": {
                    "text": "ث harfiyle başlayan resmi kutuya bırak",
                    "arabic": "ث",
                    "images": [
                        {
                            "id": "tha_thalab",
                            "emoji": "🦊",
                            "name": "tilki",
                            "arabic": "ثَعْلَبٌ"
                        },
                        {
                            "id": "jim_jamal",
                            "emoji": "🐪",
                            "name": "deve",
                            "arabic": "جَمَلٌ"
                        },
                        {
                            "id": "ha_hisan",
                            "emoji": "🐴",
                            "name": "at",
                            "arabic": "حِصَانٌ"
                        },
                        {
                            "id": "kha_khiyar",
                            "emoji": "🥒",
                            "name": "salatalık",
                            "arabic": "خِيَارٌ"
                        }
                    ],
                    "correct": "tha_thalab",
                    "optionSpeech": [
                        "tilki",
                        "deve",
                        "at",
                        "salatalık"
                    ],
                    "hint": "Tilki",
                    "dropText": "Buraya bırak"
                }
            },
            {
                "id": "task_2_2",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "ج",
                    "options": [
                        "Cim",
                        "Ha",
                        "Hı",
                        "Dal"
                    ],
                    "correct": 0,
                    "hint": "Cim"
                }
            },
            {
                "id": "task_2_3",
                "type": "drag_to_target",
                "question": {
                    "text": "خ harfiyle başlayan resmi kutuya bırak",
                    "arabic": "خ",
                    "images": [
                        {
                            "id": "kha_khiyar",
                            "emoji": "🥒",
                            "name": "salatalık",
                            "arabic": "خِيَارٌ"
                        },
                        {
                            "id": "tha_thalab",
                            "emoji": "🦊",
                            "name": "tilki",
                            "arabic": "ثَعْلَبٌ"
                        },
                        {
                            "id": "jim_jamal",
                            "emoji": "🐪",
                            "name": "deve",
                            "arabic": "جَمَلٌ"
                        },
                        {
                            "id": "ha_hisan",
                            "emoji": "🐴",
                            "name": "at",
                            "arabic": "حِصَانٌ"
                        }
                    ],
                    "correct": "kha_khiyar",
                    "optionSpeech": [
                        "salatalık",
                        "tilki",
                        "deve",
                        "at"
                    ],
                    "hint": "Salatalık",
                    "dropText": "Buraya bırak"
                }
            }
        ]
    },
    "level_3": {
        "id": "level_3",
        "title": "Nokta Takibi",
        "description": "د ذ ر ز harflerini ayırt et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_3_1",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "د",
                    "options": [
                        "Dal",
                        "Zel",
                        "Ra",
                        "Ze"
                    ],
                    "correct": 0,
                    "hint": "Dal"
                }
            },
            {
                "id": "task_3_2",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sesi seç",
                    "arabic": "ذ",
                    "options": [
                        "د",
                        "ذ",
                        "ر",
                        "ز"
                    ],
                    "correct": 1,
                    "hint": "ذ"
                }
            },
            {
                "id": "task_3_3",
                "type": "match_letter_to_image",
                "question": {
                    "text": "ز harfiyle başlayanı seç",
                    "arabic": "ز",
                    "images": [
                        {
                            "id": "zay_zahra",
                            "emoji": "🌸",
                            "name": "çiçek",
                            "arabic": "زَهْرَةٌ"
                        },
                        {
                            "id": "dal_dajaj",
                            "emoji": "🐔",
                            "name": "tavuk",
                            "arabic": "دَجَاجٌ"
                        },
                        {
                            "id": "dhal_dhurra",
                            "emoji": "🌽",
                            "name": "mısır",
                            "arabic": "ذُرَةٌ"
                        },
                        {
                            "id": "ra_rumman",
                            "emoji": "🍎",
                            "name": "nar",
                            "arabic": "رُمَّانٌ"
                        }
                    ],
                    "correct": "zay_zahra",
                    "optionSpeech": [
                        "çiçek",
                        "tavuk",
                        "mısır",
                        "nar"
                    ],
                    "hint": "Çiçek"
                }
            }
        ]
    },
    "level_4": {
        "id": "level_4",
        "title": "Işık Sesleri",
        "description": "س ش ص ض harflerini öğren",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_4_1",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "س",
                    "options": [
                        "Sin",
                        "Şın",
                        "Sad",
                        "Dad"
                    ],
                    "correct": 0,
                    "hint": "Sin"
                }
            },
            {
                "id": "task_4_2",
                "type": "match_letter_to_image",
                "question": {
                    "text": "ش harfiyle başlayanı seç",
                    "arabic": "ش",
                    "images": [
                        {
                            "id": "shin_shams",
                            "emoji": "☀️",
                            "name": "güneş",
                            "arabic": "شَمْسٌ"
                        },
                        {
                            "id": "sin_samaka",
                            "emoji": "🐟",
                            "name": "balık",
                            "arabic": "سَمَكَةٌ"
                        },
                        {
                            "id": "sad_saqr",
                            "emoji": "🦅",
                            "name": "şahin",
                            "arabic": "صَقْرٌ"
                        },
                        {
                            "id": "dad_difda",
                            "emoji": "🐸",
                            "name": "kurbağa",
                            "arabic": "ضِفْدَعٌ"
                        }
                    ],
                    "correct": "shin_shams",
                    "optionSpeech": [
                        "güneş",
                        "balık",
                        "şahin",
                        "kurbağa"
                    ],
                    "hint": "Güneş"
                }
            },
            {
                "id": "task_4_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sesi seç",
                    "arabic": "ض",
                    "options": [
                        "س",
                        "ش",
                        "ص",
                        "ض"
                    ],
                    "correct": 3,
                    "hint": "ض"
                }
            }
        ]
    },
    "level_5": {
        "id": "level_5",
        "title": "Güçlü Harfler",
        "description": "ط ظ ع غ harflerini öğren",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_5_1",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "ط",
                    "options": [
                        "Tı",
                        "Zı",
                        "Te",
                        "Dad"
                    ],
                    "correct": 0,
                    "hint": "Tı"
                }
            },
            {
                "id": "task_5_2",
                "type": "drag_to_target",
                "question": {
                    "text": "ظ harfiyle başlayan resmi kutuya bırak",
                    "arabic": "ظ",
                    "images": [
                        {
                            "id": "za_zarf",
                            "emoji": "✉️",
                            "name": "zarf",
                            "arabic": "ظَرْفٌ"
                        },
                        {
                            "id": "ta_taira",
                            "emoji": "✈️",
                            "name": "uçak",
                            "arabic": "طَائِرَةٌ"
                        },
                        {
                            "id": "ayn_ayn",
                            "emoji": "👁️",
                            "name": "göz",
                            "arabic": "عَيْنٌ"
                        },
                        {
                            "id": "ghayn_ghayma",
                            "emoji": "☁️",
                            "name": "bulut",
                            "arabic": "غَيْمَةٌ"
                        }
                    ],
                    "correct": "za_zarf",
                    "optionSpeech": [
                        "zarf",
                        "uçak",
                        "göz",
                        "bulut"
                    ],
                    "hint": "Zarf",
                    "dropText": "Buraya bırak"
                }
            },
            {
                "id": "task_5_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sesi seç",
                    "arabic": "غ",
                    "options": [
                        "ع",
                        "غ",
                        "خ",
                        "ق"
                    ],
                    "correct": 1,
                    "hint": "غ"
                }
            }
        ]
    },
    "level_6": {
        "id": "level_6",
        "title": "Son Harfler 1",
        "description": "ف ق ك ل harflerini öğren",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_6_1",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "ف",
                    "options": [
                        "Fe",
                        "Kaf",
                        "Kef",
                        "Lam"
                    ],
                    "correct": 0,
                    "hint": "Fe"
                }
            },
            {
                "id": "task_6_2",
                "type": "match_letter_to_image",
                "question": {
                    "text": "ق harfiyle başlayanı seç",
                    "arabic": "ق",
                    "images": [
                        {
                            "id": "qaf_qamar",
                            "emoji": "🌙",
                            "name": "ay",
                            "arabic": "قَمَرٌ"
                        },
                        {
                            "id": "fa_fil",
                            "emoji": "🐘",
                            "name": "fil",
                            "arabic": "فِيلٌ"
                        },
                        {
                            "id": "kaf_kitab",
                            "emoji": "📚",
                            "name": "kitap",
                            "arabic": "كِتَابٌ"
                        },
                        {
                            "id": "lam_laymun",
                            "emoji": "🍋",
                            "name": "limon",
                            "arabic": "لَيْمُونٌ"
                        }
                    ],
                    "correct": "qaf_qamar",
                    "optionSpeech": [
                        "ay",
                        "fil",
                        "kitap",
                        "limon"
                    ],
                    "hint": "Ay"
                }
            },
            {
                "id": "task_6_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sesi seç",
                    "arabic": "ك",
                    "options": [
                        "ق",
                        "ك",
                        "ل",
                        "ف"
                    ],
                    "correct": 1,
                    "hint": "ك"
                }
            }
        ]
    },
    "level_7": {
        "id": "level_7",
        "title": "Son Harfler 2",
        "description": "م ن ه و ي harflerini öğren",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_7_1",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "م",
                    "options": [
                        "Mim",
                        "Nun",
                        "He",
                        "Vav"
                    ],
                    "correct": 0,
                    "hint": "Mim"
                }
            },
            {
                "id": "task_7_2",
                "type": "match_letter_to_image",
                "question": {
                    "text": "ن harfiyle başlayanı seç",
                    "arabic": "ن",
                    "images": [
                        {
                            "id": "nun_najm",
                            "emoji": "⭐",
                            "name": "yıldız",
                            "arabic": "نَجْمٌ"
                        },
                        {
                            "id": "mim_mawz",
                            "emoji": "🍌",
                            "name": "muz",
                            "arabic": "مَوْزٌ"
                        },
                        {
                            "id": "ha_hadiya",
                            "emoji": "🎁",
                            "name": "hediye",
                            "arabic": "هَدِيَّةٌ"
                        },
                        {
                            "id": "waw_warda",
                            "emoji": "🌹",
                            "name": "gül",
                            "arabic": "وَرْدَةٌ"
                        }
                    ],
                    "correct": "nun_najm",
                    "optionSpeech": [
                        "yıldız",
                        "muz",
                        "hediye",
                        "gül"
                    ],
                    "hint": "Yıldız"
                }
            },
            {
                "id": "task_7_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sesi seç",
                    "arabic": "ي",
                    "options": [
                        "ه",
                        "و",
                        "ي",
                        "ن"
                    ],
                    "correct": 2,
                    "hint": "ي"
                }
            }
        ]
    },
    "level_8": {
        "id": "level_8",
        "title": "Yıldız Avcısı",
        "description": "Öğrenilen harfleri karışık tekrar et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_8_1",
                "type": "letter_identification",
                "question": {
                    "text": "Bu hangi harf?",
                    "arabic": "ع",
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
                "id": "task_8_2",
                "type": "match_letter_to_image",
                "question": {
                    "text": "ش harfiyle başlayanı seç",
                    "arabic": "ش",
                    "images": [
                        {
                            "id": "shin_shams",
                            "emoji": "☀️",
                            "name": "güneş",
                            "arabic": "شَمْسٌ"
                        },
                        {
                            "id": "sin_samaka",
                            "emoji": "🐟",
                            "name": "balık",
                            "arabic": "سَمَكَةٌ"
                        },
                        {
                            "id": "sad_saqr",
                            "emoji": "🦅",
                            "name": "şahin",
                            "arabic": "صَقْرٌ"
                        },
                        {
                            "id": "dad_difda",
                            "emoji": "🐸",
                            "name": "kurbağa",
                            "arabic": "ضِفْدَعٌ"
                        }
                    ],
                    "correct": "shin_shams",
                    "optionSpeech": [
                        "güneş",
                        "balık",
                        "şahin",
                        "kurbağa"
                    ],
                    "hint": "Güneş"
                }
            },
            {
                "id": "task_8_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin sesi seç",
                    "arabic": "ق",
                    "options": [
                        "ق",
                        "ك",
                        "ف",
                        "ل"
                    ],
                    "correct": 0,
                    "hint": "ق"
                }
            }
        ]
    },
    "level_9": {
        "id": "level_9",
        "title": "Benzer Harfler",
        "description": "Nokta farklarını dikkatle gör",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_9_1",
                "type": "letter_shape",
                "question": {
                    "text": "Üstünde iki nokta olanı seç",
                    "arabic": "ت",
                    "options": [
                        "ب",
                        "ت",
                        "ث",
                        "ن"
                    ],
                    "correct": 1,
                    "hint": "ت"
                }
            },
            {
                "id": "task_9_2",
                "type": "letter_shape",
                "question": {
                    "text": "Üstünde nokta olanı seç",
                    "arabic": "خ",
                    "options": [
                        "ج",
                        "ح",
                        "خ",
                        "د"
                    ],
                    "correct": 2,
                    "hint": "خ"
                }
            },
            {
                "id": "task_9_3",
                "type": "letter_shape",
                "question": {
                    "text": "Noktalı kardeşi seç",
                    "arabic": "ذ",
                    "options": [
                        "د",
                        "ذ",
                        "ر",
                        "ز"
                    ],
                    "correct": 1,
                    "hint": "ذ"
                }
            }
        ]
    },
    "level_10": {
        "id": "level_10",
        "title": "Harf Şekilleri",
        "description": "Harflerin başta, ortada ve sonda görünüşü",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_10_1",
                "type": "letter_shape",
                "question": {
                    "text": "Be harfinin baştaki şekli hangisi?",
                    "arabic": "ب",
                    "options": [
                        "بـ",
                        "ـبـ",
                        "ـب",
                        "تـ"
                    ],
                    "correct": 0,
                    "hint": "بـ"
                }
            },
            {
                "id": "task_10_2",
                "type": "letter_shape",
                "question": {
                    "text": "Ayn harfinin ortadaki şekli hangisi?",
                    "arabic": "ع",
                    "options": [
                        "عـ",
                        "ـعـ",
                        "ـع",
                        "غـ"
                    ],
                    "correct": 1,
                    "hint": "ـعـ"
                }
            },
            {
                "id": "task_10_3",
                "type": "letter_shape",
                "question": {
                    "text": "Mim harfinin sondaki şekli hangisi?",
                    "arabic": "م",
                    "options": [
                        "مـ",
                        "ـمـ",
                        "ـم",
                        "نـ"
                    ],
                    "correct": 2,
                    "hint": "ـم"
                }
            }
        ]
    },
    "level_11": {
        "id": "level_11",
        "title": "Hareke Şov: Üstün",
        "description": "Fetha/üstün ile a-e sesi",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_11_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu işaret: üstün / fetha. Hangi ses?",
                    "arabic": "َ",
                    "options": [
                        "a sesi",
                        "i sesi",
                        "u sesi",
                        "durma işareti"
                    ],
                    "correct": 0,
                    "hint": "a sesi"
                }
            },
            {
                "id": "task_11_2",
                "type": "harka_application",
                "question": {
                    "text": "Bu hece nasıl okunur?",
                    "arabic": "بَ",
                    "options": [
                        "ba",
                        "bi",
                        "bu",
                        "b"
                    ],
                    "correct": 0,
                    "hint": "ba"
                }
            },
            {
                "id": "task_11_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin heceyi seç",
                    "arabic": "تَ",
                    "options": [
                        "ta",
                        "ti",
                        "tu",
                        "t"
                    ],
                    "correct": 0,
                    "hint": "ta"
                }
            }
        ]
    },
    "level_12": {
        "id": "level_12",
        "title": "Esre Yolu",
        "description": "Kesra/esre ile i sesi",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_12_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu işaret: esre / kesra. Hangi ses?",
                    "arabic": "ِ",
                    "options": [
                        "i sesi",
                        "u sesi",
                        "a sesi",
                        "durma işareti"
                    ],
                    "correct": 0,
                    "hint": "i sesi"
                }
            },
            {
                "id": "task_12_2",
                "type": "harka_application",
                "question": {
                    "text": "Bu hece nasıl okunur?",
                    "arabic": "بِ",
                    "options": [
                        "bi",
                        "ba",
                        "bu",
                        "b"
                    ],
                    "correct": 0,
                    "hint": "bi"
                }
            },
            {
                "id": "task_12_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin heceyi seç",
                    "arabic": "لِ",
                    "options": [
                        "la",
                        "li",
                        "lu",
                        "l"
                    ],
                    "correct": 1,
                    "hint": "li"
                }
            }
        ]
    },
    "level_13": {
        "id": "level_13",
        "title": "Ötre Partisi",
        "description": "Damme/ötre ile u sesi",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_13_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu işaret: ötre / damme. Hangi ses?",
                    "arabic": "ُ",
                    "options": [
                        "u sesi",
                        "i sesi",
                        "a sesi",
                        "durma işareti"
                    ],
                    "correct": 0,
                    "hint": "u sesi"
                }
            },
            {
                "id": "task_13_2",
                "type": "harka_application",
                "question": {
                    "text": "Bu hece nasıl okunur?",
                    "arabic": "بُ",
                    "options": [
                        "bu",
                        "ba",
                        "bi",
                        "b"
                    ],
                    "correct": 0,
                    "hint": "bu"
                }
            },
            {
                "id": "task_13_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin heceyi seç",
                    "arabic": "كُ",
                    "options": [
                        "ka",
                        "ki",
                        "ku",
                        "k"
                    ],
                    "correct": 2,
                    "hint": "ku"
                }
            }
        ]
    },
    "level_14": {
        "id": "level_14",
        "title": "Sükûn Durağı",
        "description": "Sükûn ile sesi durdur",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_14_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu işaret: sükûn. Hangi ses?",
                    "arabic": "ْ",
                    "options": [
                        "durma işareti",
                        "a sesi",
                        "i sesi",
                        "u sesi"
                    ],
                    "correct": 0,
                    "hint": "durma işareti"
                }
            },
            {
                "id": "task_14_2",
                "type": "harka_application",
                "question": {
                    "text": "Bu hece nasıl okunur?",
                    "arabic": "بْ",
                    "options": [
                        "b",
                        "ba",
                        "bi",
                        "bu"
                    ],
                    "correct": 0,
                    "hint": "b"
                }
            },
            {
                "id": "task_14_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelime ne?",
                    "arabic": "بَيْتٌ",
                    "options": [
                        "ev",
                        "kapı",
                        "kitap",
                        "su"
                    ],
                    "correct": 0,
                    "hint": "ev"
                }
            }
        ]
    },
    "level_15": {
        "id": "level_15",
        "title": "Şedde Tepesi",
        "description": "Şedde ile harfi güçlü oku",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_15_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu işaret: şedde. Hangi ses?",
                    "arabic": "ّ",
                    "options": [
                        "harfi güçlü okur",
                        "durma işareti",
                        "a sesi",
                        "i sesi"
                    ],
                    "correct": 0,
                    "hint": "harfi güçlü okur"
                }
            },
            {
                "id": "task_15_2",
                "type": "harka_application",
                "question": {
                    "text": "Bu hece nasıl okunur?",
                    "arabic": "مُدَّ",
                    "options": [
                        "mudda",
                        "muda",
                        "midi",
                        "mada"
                    ],
                    "correct": 0,
                    "hint": "mudda"
                }
            },
            {
                "id": "task_15_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelime ne?",
                    "arabic": "أُمّ",
                    "options": [
                        "anne",
                        "baba",
                        "ev",
                        "el"
                    ],
                    "correct": 0,
                    "hint": "anne"
                }
            }
        ]
    },
    "level_16": {
        "id": "level_16",
        "title": "Med Köprüsü",
        "description": "Uzun sesleri fark et",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_16_1",
                "type": "harka_application",
                "question": {
                    "text": "Uzun okunan heceyi seç",
                    "arabic": "بَا",
                    "options": [
                        "baa",
                        "ba",
                        "bi",
                        "bu"
                    ],
                    "correct": 0,
                    "hint": "baa"
                }
            },
            {
                "id": "task_16_2",
                "type": "harka_application",
                "question": {
                    "text": "Uzun okunan heceyi seç",
                    "arabic": "بُو",
                    "options": [
                        "buu",
                        "bu",
                        "bi",
                        "ba"
                    ],
                    "correct": 0,
                    "hint": "buu"
                }
            },
            {
                "id": "task_16_3",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin uzun heceyi seç",
                    "arabic": "بِي",
                    "options": [
                        "ba",
                        "bii",
                        "bu",
                        "b"
                    ],
                    "correct": 1,
                    "hint": "bii"
                }
            }
        ]
    },
    "level_17": {
        "id": "level_17",
        "title": "Tenvin Bahçesi",
        "description": "Tenvinli sesleri tanı",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_17_1",
                "type": "harka_recognition",
                "question": {
                    "text": "Bu işaret: iki üstün / tenvin. Hangi ses?",
                    "arabic": "ً",
                    "options": [
                        "an sesi",
                        "in sesi",
                        "un sesi",
                        "a sesi"
                    ],
                    "correct": 0,
                    "hint": "an sesi"
                }
            },
            {
                "id": "task_17_2",
                "type": "harka_application",
                "question": {
                    "text": "Bu hece nasıl okunur?",
                    "arabic": "بٌ",
                    "options": [
                        "bun",
                        "ban",
                        "bin",
                        "bu"
                    ],
                    "correct": 0,
                    "hint": "bun"
                }
            },
            {
                "id": "task_17_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelime ne?",
                    "arabic": "كِتَابٌ",
                    "options": [
                        "bir kitap",
                        "kitaplar",
                        "kapı",
                        "kalem"
                    ],
                    "correct": 0,
                    "hint": "bir kitap"
                }
            }
        ]
    },
    "level_18": {
        "id": "level_18",
        "title": "İlk Kelimeler",
        "description": "3-4 harfli basit kelimeleri oku",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_18_1",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelime ne?",
                    "arabic": "بَابٌ",
                    "options": [
                        "kapı",
                        "ev",
                        "kitap",
                        "su"
                    ],
                    "correct": 0,
                    "hint": "kapı"
                }
            },
            {
                "id": "task_18_2",
                "type": "match_word_to_image",
                "question": {
                    "text": "Bu kelime hangi resim?",
                    "arabic": "بَيْتٌ",
                    "images": [
                        {
                            "id": "door",
                            "emoji": "🚪",
                            "name": "kapı",
                            "arabic": "بَابٌ"
                        },
                        {
                            "id": "house",
                            "emoji": "🏠",
                            "name": "ev",
                            "arabic": "بَيْتٌ"
                        },
                        {
                            "id": "book",
                            "emoji": "📚",
                            "name": "kitap",
                            "arabic": "كِتَاب"
                        },
                        {
                            "id": "water",
                            "emoji": "💧",
                            "name": "su",
                            "arabic": "مَاءٌ"
                        }
                    ],
                    "correct": "house",
                    "optionSpeech": [
                        "kapı",
                        "ev",
                        "kitap",
                        "su"
                    ],
                    "hint": "Ev"
                }
            },
            {
                "id": "task_18_3",
                "type": "word_reading",
                "question": {
                    "text": "Bu kelime ne?",
                    "arabic": "مَاءٌ",
                    "options": [
                        "su",
                        "ay",
                        "güneş",
                        "kalem"
                    ],
                    "correct": 0,
                    "hint": "su"
                }
            }
        ]
    },
    "level_19": {
        "id": "level_19",
        "title": "Kelime Avcıları",
        "description": "Kelimeleri resimle eşleştir ve sırala",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_19_1",
                "type": "match_word_to_image",
                "question": {
                    "text": "Bu kelime hangi resim?",
                    "arabic": "كِتَاب",
                    "images": [
                        {
                            "id": "door",
                            "emoji": "🚪",
                            "name": "kapı",
                            "arabic": "بَابٌ"
                        },
                        {
                            "id": "house",
                            "emoji": "🏠",
                            "name": "ev",
                            "arabic": "بَيْتٌ"
                        },
                        {
                            "id": "book",
                            "emoji": "📚",
                            "name": "kitap",
                            "arabic": "كِتَاب"
                        },
                        {
                            "id": "water",
                            "emoji": "💧",
                            "name": "su",
                            "arabic": "مَاءٌ"
                        }
                    ],
                    "correct": "book",
                    "optionSpeech": [
                        "kapı",
                        "ev",
                        "kitap",
                        "su"
                    ],
                    "hint": "Kitap"
                }
            },
            {
                "id": "task_19_2",
                "type": "match_word_to_image",
                "question": {
                    "text": "Bu kelime hangi resim?",
                    "arabic": "قَمَر",
                    "images": [
                        {
                            "id": "moon",
                            "emoji": "🌙",
                            "name": "ay",
                            "arabic": "قَمَر"
                        },
                        {
                            "id": "sun",
                            "emoji": "☀️",
                            "name": "güneş",
                            "arabic": "شَمْسٌ"
                        },
                        {
                            "id": "pen",
                            "emoji": "✏️",
                            "name": "kalem",
                            "arabic": "قَلَم"
                        },
                        {
                            "id": "star",
                            "emoji": "⭐",
                            "name": "yıldız",
                            "arabic": "نَجْم"
                        }
                    ],
                    "correct": "moon",
                    "optionSpeech": [
                        "ay",
                        "güneş",
                        "kalem",
                        "yıldız"
                    ],
                    "hint": "Ay"
                }
            },
            {
                "id": "task_19_3",
                "type": "sentence_order",
                "question": {
                    "text": "Kartları sağdan sola sırala",
                    "correct": "بَابٌ كَبِيرٌ",
                    "words": [
                        {
                            "arabic": "بَابٌ",
                            "order": 1
                        },
                        {
                            "arabic": "كَبِيرٌ",
                            "order": 2
                        }
                    ],
                    "hint": "بَابٌ كَبِيرٌ"
                }
            }
        ]
    },
    "level_20": {
        "id": "level_20",
        "title": "Mini Final",
        "description": "Dinle, oku ve kısa cümle kur",
        "unlocked": false,
        "tasks": [
            {
                "id": "task_20_1",
                "type": "listen_and_choose",
                "question": {
                    "text": "Dinlediğin kelimeyi seç",
                    "arabic": "شَمْسٌ",
                    "options": [
                        "قَمَر",
                        "شَمْسٌ",
                        "نَجْم",
                        "قَلَم"
                    ],
                    "correct": 1,
                    "hint": "شَمْسٌ"
                }
            },
            {
                "id": "task_20_2",
                "type": "mixed_review",
                "question": {
                    "text": "Bu kelime ne?",
                    "arabic": "قَلَم",
                    "options": [
                        "kalem",
                        "kitap",
                        "kapı",
                        "ev"
                    ],
                    "correct": 0,
                    "hint": "Kalem"
                }
            },
            {
                "id": "task_20_3",
                "type": "sentence_order",
                "question": {
                    "text": "Son görev: kartları sağdan sola sırala",
                    "correct": "كِتَاب جَدِيد",
                    "words": [
                        {
                            "arabic": "كِتَاب",
                            "order": 1
                        },
                        {
                            "arabic": "جَدِيد",
                            "order": 2
                        }
                    ],
                    "hint": "كِتَاب جَدِيد"
                }
            }
        ]
    }
};

const badgesData = [
    {
        "id": "first_step",
        "name": "İlk Adım",
        "description": "İlk seviyeyi tamamla",
        "icon": "🌟",
        "condition": {
            "type": "level",
            "level": 1
        }
    },
    {
        "id": "harf_ustasi",
        "name": "Harf Ustası",
        "description": "Harf seviyelerini tamamla",
        "icon": "✨",
        "condition": {
            "type": "level",
            "level": 8
        }
    },
    {
        "id": "sekil_ustasi",
        "name": "Şekil Ustası",
        "description": "Benzer harfleri ve şekilleri ayırt et",
        "icon": "🔎",
        "condition": {
            "type": "level",
            "level": 10
        }
    },
    {
        "id": "hareke_ustasi",
        "name": "Hareke Ustası",
        "description": "Hareke seviyelerini tamamla",
        "icon": "🎯",
        "condition": {
            "type": "level",
            "level": 17
        }
    },
    {
        "id": "kelime_avcisi",
        "name": "Kelime Avcısı",
        "description": "Kelime seviyelerini tamamla",
        "icon": "📚",
        "condition": {
            "type": "level",
            "level": 19
        }
    },
    {
        "id": "yildiz_krali",
        "name": "Yıldız Kralı",
        "description": "20 bölümün tamamını bitir",
        "icon": "👑",
        "condition": {
            "type": "complete_all",
            "levels": 20
        }
    },
    {
        "id": "gunluk_seri",
        "name": "Günlük Seri",
        "description": "3 gün boyunca oyna",
        "icon": "🔥",
        "condition": {
            "type": "streak",
            "days": 3
        }
    }
];

class GameState {
    constructor() {
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
            const saved = localStorage.getItem('arapcaMacerasi_state');
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
        localStorage.setItem('arapcaMacerasi_state', JSON.stringify(this.state));
    }

    getTotalStars() {
        return Object.values(this.state.levelProgress || {})
            .reduce((sum, level) => sum + (level.stars || 0), 0);
    }

    applyUnlocksFromProgress() {
        const levelKeys = Object.keys(levelsData).sort((a, b) => parseInt(a.split('_')[1], 10) - parseInt(b.split('_')[1], 10));
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
