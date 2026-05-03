# Elifba Macerası

Aslan Ahmet ile eğlenceli bir şekilde Elifba öğrenme macerası! 
20 farklı seviyeden oluşan ve oyunlaştırma dinamikleri (rozetler, streak, puanlama) içeren modern bir çocuk eğitim uygulaması.

🎮 **[Hemen Oynamak İçin Tıklayın (Canlı Demo)](https://mn-su.github.io/elifba/)**

## Özellikler

- **20 Öğretici Seviye:** Harf tanıma, eşleştirme, hareke ve kelime okuma.
- **Etkileşimli Görevler:** Sürükle-bırak, dinle-seç ve kelime sıralama gibi çeşitli oyun modları.
- **Görsel ve Sesli Geri Bildirim:** Maskot Aslan Ahmet'in sesli yönergeleri ve animasyonlu geri bildirimler.
- **Oyunlaştırma (Gamification):** Seri (streak) takibi, puan (yıldız) sistemi ve kazanılabilir başarı rozetleri.
- **Responsive Harita:** Tam ekran cihazlara uyumlu, 2000px genişliğe kadar ölçeklenen dinamik bölüm haritası.

## Teknolojiler

- HTML5
- CSS3 (Responsive Design, Flexbox/Grid, Animasyonlar)
- Vanilla JavaScript (ES6+)

## Kurulum ve Kullanım

Bu proje tamamen istemci taraflı (client-side) çalışacak şekilde tasarlanmıştır. Herhangi bir sunucu kurulumuna ihtiyaç yoktur.

1. Projeyi bilgisayarınıza indirin veya klonlayın:
   ```bash
   git clone https://github.com/mn-su/elifba.git
   ```
2. İndirdiğiniz klasördeki `index.html` dosyasını modern bir web tarayıcısında açın.
3. Elifba Macerası'na başlayın!

## Geliştirici Notları

Proje `GDD` (Oyun Tasarım Dokümanı) standartlarına uygun olarak modüler bir yapıda geliştirilmiştir.
- `js/levels.js`: Bölüm verilerini ve soru içeriklerini barındırır.
- `js/game.js`: Oyun döngüsünü ve UI etkileşimlerini yönetir.
- `js/audio.js`: Ses efektlerini ve sesli asistanı kontrol eder.
