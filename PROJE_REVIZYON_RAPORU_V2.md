# Arapça Macerası - Proje Revizyon Raporu v2

## Uygulanan 3 Ana Düzeltme

### 1. Harita ve seviye yuvarlakları
- Seviye yuvarlakları artık rastgele/yaklaşık yüzde noktalarına değil, `assets/map-20.svg` içindeki 1200x760 viewBox koordinatlarına göre yerleştiriliyor.
- `game.js` içinde `mapViewBox` ve 20 adet yol koordinatı tanımlandı.
- `style.css` içinde `cover` ölçekleme yerine `background-size: 100% 100%` ve sabit `aspect-ratio: 1200 / 760` kullanıldı.
- Yeni SVG haritada yol eğrisi, JS koordinatlarıyla aynı görsel hatta çizildi. Bu yüzden ekran genişliği değişse bile node'lar yol üzerinde kalır.

### 2. Harekeli Arapça kelimeler
- Öğretim ve kelime eşleştirme görevlerindeki kelimeler tam harekeli biçime çekildi.
- Örnekler: `كِتَابٌ`, `قَلَمٌ`, `بَيْتٌ`, `مَدْرَسَةٌ`, `خُبْزٌ`, `نَهْرٌ`.
- Önceki `نهر = hurma` hatası düzeltildi; artık `نَهْرٌ = nehir`.
- Geç seviyelerde kademeli geçiş için `game.js` 18. seviyeden itibaren küçük bir “Harekesiz görünüm” satırı gösterir. Ana öğretim metni harekeli kalır, çocuk harekesiz biçime de alışır.

### 3. GDD uyumu ve proje taraması
- Harita tek sayfa 20 bölümlük yapıda tutuldu.
- Kırmızı/cezalandırıcı yanlış geri bildirimin etkisi korunmadı; mevcut yumuşak tekrar yaklaşımı sürdürüldü.
- GDD'deki mikro görev mantığına uygun olarak 20 seviye ve toplam 60 görev yapısı korundu.
- Çoklu seçim, sürükle-bırak, dinle ve tanı görev tipleri korunarak desteklendi.
- RTL/Arapça metin görüntüleme için CSS tarafındaki `direction: rtl` ve `unicode-bidi` korunup geç seviye harekesiz görünüm desteği eklendi.

## Otomatik Kontrol Özeti

- Seviye sayısı: 20
- Görev sayısı: 60
- Rozet sayısı: 7
- Hata durumu: Temiz

Ayrıntılar `KONTROL_RAPORU_V2.json` dosyasındadır.

## Bilinen Sınır

Tarayıcıda canlı oynatma testi bu ortamda yapılmadı. Sözdizimi, veri yapısı, görev tipi ve içerik tutarlılığı otomatik kontrol edildi. Arapça sesler hâlâ tarayıcı TTS üzerinden çalışıyor; nihai yayın sürümü için ana dili Arapça olan kayıtlarla MP3 varlıkları eklenmesi gerekir.
