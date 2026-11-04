bu README.md dosyası, vsitual studio co-pilot yardımıyla yazılmıştır. 
# KBÜ Not Hesaplayıcı

Karabük Üniversitesi için vize, final ve bütünleme notlarına göre başarı notunu ve harf notunu hesaplayan basit bir web uygulaması.

## Özellikler

- Vize, final ve bütünleme notlarını 0–100 aralığında kontrol eder.
- Bütünleme notu girildiğinde final notu yerine bütünleme notunu kullanır.
- Başarı notunu aşağıdaki ağırlıklarla hesaplar:

  ```text
  Başarı notu = (Vize × 0,40) + (Final veya bütünleme × 0,60)
  ```

- Devamsızlık, sınava girmeme ve başarısızlık durumlarını ayrı ayrı gösterir.
- Hesaplama alanlarını ve sonucu sıfırlama olanağı sunar.

## Notlandırma kuralları

| Koşul | Sonuç |
| --- | --- |
| Devamsızlık işaretlenmiş | F1 – Kaldı |
| Sınava girilmedi olarak seçilmiş | F2 – Kaldı |
| Kullanılan sınav notu 50'nin altında veya başarı notu 60'ın altında | F3 – Kaldı |
| Başarı notu 90 ve üzeri | A1 |
| Başarı notu 80–89,99 | A2 |
| Başarı notu 70–79,99 | B1 |
| Başarı notu 65–69,99 | B2 |
| Başarı notu 60–64,99 | C |

Devamsızlık ve sınava girmeme kontrolleri not hesaplamasından önce yapılır. Hesaplama için vize notu ile final veya bütünleme notundan en az biri girilmelidir.

## Çalıştırma

Projede kurulum veya ek paket gerekmez. `sevko.html` dosyasını bir web tarayıcısında açın, notları girip **Hesapla** düğmesine basın. **Sıfırla** düğmesi alanları ve sonucu temizler.

## Dosyalar

- `sevko.html` — Uygulamanın arayüzü ve not giriş alanları
- `sevko.js` — Not doğrulama, hesaplama ve sonuç gösterme işlemleri
- `sevko.css` — Stil dosyası
