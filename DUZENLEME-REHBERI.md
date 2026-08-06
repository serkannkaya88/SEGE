# SEGE Technologies — Site Düzenleme Rehberi

Bu site sade HTML dosyalarından oluşur; içeriği kendiniz kolayca değiştirebilirsiniz.
Site hızlı kalır — metin/numara değiştirmek siteyi **yavaşlatmaz.**

## Klasördeki dosyalar

- `index.html` — Anasayfa
- `hakkimizda.html` — Hakkımızda (değerler, süreç, referanslar)
- `hizmetler.html` — Hizmetler
- `iletisim.html` — İletişim (form + bilgiler)
- `style.css` — Tasarım (renk, yazı tipi). **Buraya dokunmanıza gerek yok.**
- `script.js` — Animasyon/form kodu. **Buraya dokunmanıza gerek yok.**
- `logo.png`, `logo-mark.png`, `favicon.png` — Logo görselleri

## Nasıl açılır / düzenlenir

1. Bir metin editörü kullanın. Öneri: **Visual Studio Code** (ücretsiz) veya **Notepad++**.
   (Mac'te TextEdit kullanacaksanız "Format → Make Plain Text" seçin.)
2. Değiştirmek istediğiniz `.html` dosyasını editörde açın.
3. `Ctrl + F` (Mac'te `Cmd + F`) ile aramak istediğiniz metni bulun.
4. Değişikliği yapıp **kaydedin** (`Ctrl + S`).
5. Değişen dosyayı hosting'e (Netlify vb.) yeniden yükleyin.

### Altın kural
Sadece **`>` ile `<` işaretleri arasındaki yazıyı** değiştirin. Etiketleri (`<div>`, `<p>` gibi),
tırnak işaretlerini ve `<` `>` işaretlerini silmeyin. Örnek:

    <h3>ERP Çözümleri</h3>
           ^^^^^^^^^^^^  → sadece burayı değiştirin

> İpucu: Düzenlemeden önce klasörün bir **yedeğini** kopyalayın. Bir şey bozulursa geri dönebilirsiniz.

---

## Sık yapılan değişiklikler

### 1) Telefon numarasını değiştirmek
Numara birkaç yerde geçtiği için editörün **"Tümünü Değiştir" (Replace All)** özelliğini kullanın.
İki farklı biçimi ayrı ayrı değiştirin (tüm dosyalarda):

- Görünen numara: `0531 392 13 31`  →  yeni numaranız
- Bağlantılardaki numara (tıkla-ara & WhatsApp): `905313921331`  →  `90` + yeni numara (başında 0 olmadan)

VS Code'da "Replace in Files" ile tek seferde tüm dosyalarda değiştirebilirsiniz.

### 2) E-posta adresini değiştirmek
Tüm dosyalarda `info@segetechnology.com` → yeni adresiniz (Tümünü Değiştir).

### 3) Metin (yazı) değiştirmek
İlgili dosyayı açın, `Ctrl + F` ile değiştirmek istediğiniz yazıyı bulun, `>` ile `<` arasını yenisiyle değiştirin.

### 4) Yeni REFERANS eklemek
`index.html` **ve** `hakkimizda.html` dosyalarında `referanslar` yazısını arayın. Şuna benzer bir blok göreceksiniz:

    <div class="ref reveal"><div class="rlogo">ECT</div><div class="rname">ECT Reklam</div><div class="rcat">Reklam &amp; Tanıtım</div></div>

Bir satırın tamamını kopyalayıp hemen altına yapıştırın ve üç yeri değiştirin:
- `ECT` → yeni firmanın kısa kodu (2-3 harf)
- `ECT Reklam` → firma adı
- `Reklam &amp; Tanıtım` → firmanın alanı

### 5) Yeni HİZMET eklemek
`hizmetler.html` dosyasında bir hizmet kartı bloğunu (`<article class="card...` ile başlayan)
kopyalayıp yapıştırın; başlığı (`<h3>...</h3>`), açıklamayı (`<p>...</p>`) ve maddeleri değiştirin.

### 6) Adres değiştirmek
Tüm dosyalarda `İstanbul, Türkiye` → yeni adresiniz (Tümünü Değiştir).

---

## Yayına aldıktan sonra güncelleme
Netlify kullanıyorsanız: değişen dosyaları/klasörü tekrar "Deploy" alanına sürükleyin, birkaç saniyede güncellenir.
Bir hosting/cPanel kullanıyorsanız: değiştirdiğiniz dosyayı FTP/dosya yöneticisi ile eskisinin üzerine yükleyin.

Takıldığınız bir yer olursa bana söyleyin, birlikte hallederiz.
