# Arapça Macerası - GDD Uyum Revizyon Raporu

## Yapılan kod değişiklikleri

1. **Ses sıralama hatası düzeltildi.** Türkçe yönerge artık ayrı bir TTS çağrısı tarafından kesilmiyor; GameManager görev seslerini AudioManager.speakSequence ile sıraya koyuyor. Akış: yönerge → kısa duraklama → Arapça harf/kelime.
2. **20 bölümlük tek sayfa seviye haritası yapıldı.** Scroll edilen uzun harita yerine 20 node tek ekranda görünür. map.png yerine assets/map-20.svg kullanıldı.
3. **GDD akışına geri dönüldü.** 30 seviyelik genişletme 20 bölümlük mikro görev yapısına çekildi. İlk 8 bölüm harf/ses/resim; 9-10 benzer harf ve harf şekilleri; 11-17 hareke/sükûn/şedde/med/tenvin; 18-20 kelime, cümle ve final.
4. **Sürükle-bırak geri getirildi.** drag_to_target görev tipi eklendi. Tablet için dokunma yedeği de var: çocuk kartı sürüklemek yerine karta dokunarak da cevap verebilir.
5. **Yanlış cevap tonu yumuşatıldı.** GDD'deki ceza yok ilkesine uygun olarak kırmızı/sallama etkisi yerine mor-yumuşak vurgu kullanıldı.
6. **RTL farkındalığı güçlendirildi.** Cümle sıralama bölümünde sağdan sola düzen desteklendi.
7. **Hareke adları netleştirildi.** Yönergedeki “şemme/fetih” kullanımı yerine çocuklara daha yaygın ve doğru ikili adlarla verildi: üstün/fetha, esre/kesra, ötre/damme. Esre “i sesi”, ötre “u sesi”, üstün “a sesi” olarak işlendi.
8. **Veri denetimi yapıldı.** 20 bölüm, 60 görev, 7 rozet; desteklenmeyen görev tipi veya bozuk doğru cevap yok.

## GDD'de olup bu aşamada kesin şart dediğim maddeler

- **Gerçek Arapça ses kayıtları:** Kod TTS ile çalışıyor; ama çocuklar için nihai sürümde harf, hece ve kelimeler ana dili Arapça olan biri tarafından MP3 olarak kaydedilmeli. Kod buna hazır hale getirilebilir, ancak dosyalar olmadığı için bu pakette TTS korunmuştur.
- **Her seviyede maksimum 3-5 dakika:** 20 bölümün her biri 3 mikro görevdir; bu hedefe daha uygun hale getirildi.
- **Cezasız hata deneyimi:** Yanlışta yıldız silinmiyor, sert kırmızı ve sallama yok.
- **Ses + görsel + dokunma kombinasyonu:** Çoklu seçim, dinle-seç, sürükle/dokun ve sıralama görevleri birlikte kullanıldı.

## Teknik kontrol sonucu

- node --check: levels.js, game.js, audio.js başarılı.
- Otomatik veri denetimi: 0 hata.
