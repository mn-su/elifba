# Font ve seçenek görünümü düzeltmesi - v3

## Sorun
Bazı Latin/Türkçe cevap seçenekleri (`Hı`, `Tı`, `Zı`, `Şın` vb.) Arapça seçenek gibi algılanıyordu. Eski sınıflandırma `[^\\u0000-\\u007F]` kontrolüyle yapıldığı için Türkçe karakterler de Arapça sanılıyordu. Bu nedenle Latin seçeneklere `.arabic-choice` sınıfı uygulanıyor, Arapça font ailesi devreye giriyor ve tarayıcı bazı karakterlerde Times benzeri fallback'e düşüyordu.

## Yapılan düzeltmeler

1. `game.js` içinde seçenek sınıflandırması ASCII dışı karakter kontrolünden gerçek Arapça Unicode aralığı kontrolüne geçirildi.
2. Latin/Türkçe cevaplar artık her zaman `.latin-choice` sınıfıyla ve `lang="tr"`, `dir="ltr"` değerleriyle render ediliyor.
3. Arapça cevaplar `.arabic-choice` sınıfıyla ve `lang="ar"`, `dir="rtl"` değerleriyle render ediliyor.
4. CSS'e iki ayrı font katmanı eklendi:
   - `--font-ui`: Türkçe/Latin arayüz ve cevap seçenekleri için.
   - `--font-arabic`: Arapça harf ve kelimeler için.
5. Buton, input ve seçeneklerde UI fontu zorunlu hale getirildi. Böylece Türkçe karakterlerde amatör Times/fallback görünümü engellendi.
6. Arapça kelime ve Arapça seçenek boyutları büyütüldü; büyük Arapça harf davranışı korundu.
7. Görsel eşleştirme kartlarında Arapça varsa Arapça fontu, Latin/transkripsiyon varsa UI fontu kullanılıyor.

## Kontrol sonucu

- `Hı` geçen görevler kontrol edildi: artık Arapça seçenek olarak işaretlenmiyor.
- `node --check` kontrolleri temiz.
- Proje doğrulama sonucu: 20 seviye, 60 görev, 7 rozet, 0 hata, 0 uyarı.
