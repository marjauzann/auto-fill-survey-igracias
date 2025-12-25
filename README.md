# Auto Fill Survey iGracias Telkom

Script JavaScript untuk mengisi form survey iGracias Telkom University secara otomatis.

## 📁 Struktur Folder

```
auto-fill-survey-igracias/
├── desktop/
│   ├── manual/
│   │   └── script.js          # Script untuk copy-paste manual
│   └── tampermonkey/
│       └── script.js          # Script untuk Tampermonkey extension
├── mobile/
│   ├── bookmarklet/
│   │   └── script.js          # Bookmarklet untuk semua browser mobile
│   └── tampermonkey/
│       └── script.js          # Script untuk Tampermonkey mobile (Kiwi Browser)
└── README.md
```

## 🚀 Cara Menggunakan

> **📱 Catatan Platform**: Metode 1 dan 2 untuk **Desktop** (Windows/Mac/Linux).  
> Untuk **Mobile** (Android/iOS), gunakan Metode 3 atau 4 di bawah.

### **🖥️ DESKTOP**

#### **Metode 1: Manual (Copy-Paste)**

Cara cepat tanpa perlu install extension.
#### Langkah-langkah:
1. **Buka halaman survey iGracias**
   - Login ke iGracias Telkom University
   - Buka halaman survey yang ingin diisi

2. **Buka Developer Console di browser**
   - **Chrome/Edge**: Tekan `F12` atau `Ctrl + Shift + J` (Windows/Linux) / `Cmd + Option + J` (Mac)
   - **Firefox**: Tekan `F12` atau `Ctrl + Shift + K` (Windows/Linux) / `Cmd + Option + K` (Mac)

3. **Copy script**
   - Buka file `desktop/manual/script.js`
   - **Select All** (Ctrl+A) dan **Copy** (Ctrl+C)

4. **Paste ke Console**
   - Klik pada area console
   - **Paste** script (Ctrl+V)
   - Tekan **Enter**

5. **Selesai!**
   - Form akan otomatis terisi
   - Klik tombol "Simpan" atau "Submit"

**Catatan**: Jika survey memiliki beberapa halaman, jalankan script di setiap halaman setelah klik "Simpan".

---

#### **Metode 2: Otomatis (Tampermonkey)**

Cara otomatis yang lebih praktis, form akan terisi otomatis saat halaman dimuat.

#### Langkah-langkah:

1. **Install Extension Tampermonkey**
   - Buka Chrome Web Store
   - Cari "Tampermonkey" dan install
   - Atau kunjungi: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo

2. **Tambahkan Script ke Tampermonkey**
   - Klik ikon Tampermonkey di toolbar Chrome
   - Pilih "Create a new script..."
   - Hapus semua kode yang ada
   - Buka file `desktop/tampermonkey/script.js`
   - **Copy seluruh isi** file tersebut
   - **Paste** ke editor Tampermonkey
   - Tekan `Ctrl + S` untuk menyimpan

3. **Buka Halaman Survey**
   - Login ke iGracias Telkom University
   - Buka halaman survey
   - Form akan **otomatis terisi** saat halaman dimuat

4. **Simpan dan Submit**
   - Klik tombol "Simpan" untuk menyimpan jawaban
   - Jika ada halaman berikutnya, form akan otomatis terisi lagi
   - Ulangi sampai semua halaman selesai
   - Klik "Submit" di halaman terakhir

**Keuntungan**: Tidak perlu copy-paste manual di setiap halaman, script akan berjalan otomatis!

---

### **📱 MOBILE**

#### **Metode 3: Bookmarklet (Paling Mudah - Universal)**

Cara termudah untuk mobile, bekerja di semua browser mobile (Chrome, Safari, Firefox, dll).

##### Langkah-langkah:

1. **Buat Bookmark Baru**
   - Buka halaman survey iGracias di browser mobile
   - Tap menu browser (3 titik) → pilih "Bookmark" atau "Tambah Bookmark"
   - Atau buka halaman bookmark dan buat bookmark baru

2. **Edit Bookmark**
   - Buka file `mobile/bookmarklet/script.js`
   - **Copy seluruh isi** file tersebut
   - Edit bookmark yang baru dibuat
   - **Hapus URL** yang ada, lalu **paste** script yang sudah di-copy sebagai URL
   - Simpan bookmark

3. **Gunakan Bookmarklet**
   - Buka halaman survey iGracias
   - Tap bookmark yang sudah dibuat
   - Form akan **otomatis terisi**

4. **Simpan dan Submit**
   - Klik tombol "Simpan" untuk menyimpan jawaban
   - Jika ada halaman berikutnya, tap bookmark lagi untuk mengisi form
   - Ulangi sampai semua halaman selesai
   - Klik "Submit" di halaman terakhir

**Keuntungan**: Tidak perlu install extension, bekerja di semua browser mobile!

---

#### **Metode 4: Otomatis dengan Tampermonkey Mobile**

Cara otomatis untuk mobile, form akan terisi otomatis saat halaman dimuat.

**Catatan**: Hanya bekerja di browser yang support Tampermonkey:
- **Android**: Kiwi Browser (recommended) atau Firefox Mobile
- **iOS**: Tidak tersedia (iOS tidak support extension)

##### Langkah-langkah (Android - Kiwi Browser):

1. **Install Kiwi Browser**
   - Download dari Google Play Store: https://play.google.com/store/apps/details?id=com.kiwibrowser.browser

2. **Install Tampermonkey di Kiwi Browser**
   - Buka Kiwi Browser
   - Tap menu (3 titik) → Settings → Extensions
   - Aktifkan "Developer mode"
   - Buka Chrome Web Store di Kiwi Browser
   - Cari "Tampermonkey" dan install

3. **Tambahkan Script ke Tampermonkey**
   - Tap ikon Tampermonkey di toolbar Kiwi Browser
   - Pilih "Create a new script..."
   - Hapus semua kode yang ada
   - Buka file `mobile/tampermonkey/script.js`
   - **Copy seluruh isi** file tersebut
   - **Paste** ke editor Tampermonkey
   - Tap ikon Save (💾) untuk menyimpan

4. **Buka Halaman Survey**
   - Login ke iGracias Telkom University
   - Buka halaman survey
   - Form akan **otomatis terisi** saat halaman dimuat

5. **Simpan dan Submit**
   - Tap tombol "Simpan" untuk menyimpan jawaban
   - Jika ada halaman berikutnya, form akan otomatis terisi lagi
   - Ulangi sampai semua halaman selesai
   - Tap "Submit" di halaman terakhir

**Keuntungan**: Tidak perlu tap bookmark manual, script berjalan otomatis di setiap halaman!

---

## ⚙️ Fitur

- ✅ Auto-fill radio button (4 pilihan → pilih ke-4, 2 pilihan → pilih ke-2)
- ✅ Auto-fill text input dengan "-"
- ✅ Auto-fill textarea dengan "-"
- ✅ Tersedia untuk Desktop dan Mobile
- ✅ Desktop: Manual (copy-paste) dan Otomatis (Tampermonkey)
- ✅ Mobile: Bookmarklet (universal) dan Otomatis (Tampermonkey - Kiwi Browser)
- ✅ Script otomatis mendeteksi perubahan DOM (untuk halaman yang load via AJAX)

## 📝 Catatan Penting

### ⚠️ Perhatian
- Script ini mengisi form di **halaman saat ini**
- Jika survey memiliki **beberapa halaman**, Anda perlu:
  - **Desktop - Metode Manual**: Jalankan script di setiap halaman setelah klik "Simpan"
  - **Desktop - Metode Otomatis**: Form akan terisi otomatis, cukup klik "Simpan" dan lanjut ke halaman berikutnya
  - **Mobile - Bookmarklet**: Tap bookmark di setiap halaman setelah klik "Simpan"
  - **Mobile - Metode Otomatis**: Form akan terisi otomatis, cukup tap "Simpan" dan lanjut ke halaman berikutnya
- Pastikan halaman sudah **sepenuhnya dimuat** sebelum menjalankan script (untuk metode manual/bookmarklet)

### 💡 Tips
- **Desktop**: Untuk metode otomatis, pastikan Tampermonkey sudah aktif (ikon hijau di toolbar)
- **Mobile**: Untuk metode otomatis, pastikan Kiwi Browser sudah install Tampermonkey dan aktif
- Jika ada error, refresh halaman dan coba lagi
- Script akan mengisi **semua** radio button dan text input di halaman
- **Mobile Bookmarklet**: Pastikan bookmark sudah dibuat dengan benar (URL harus berisi script lengkap)

## 🔧 Troubleshooting

### Script tidak bekerja?
1. **Desktop - Metode Manual**: Pastikan console tidak ada error (warna merah)
2. **Desktop/Mobile - Metode Otomatis**: Pastikan Tampermonkey aktif
3. **Mobile - Bookmarklet**: Pastikan bookmark sudah dibuat dengan benar (URL berisi script)
4. Pastikan halaman sudah sepenuhnya dimuat
5. Coba refresh halaman dan jalankan script lagi

### Form tidak terisi?
1. Cek apakah ada radio button atau text input di halaman
2. Pastikan form belum di-submit
3. Coba jalankan script sekali lagi

### Console tidak muncul? (Desktop - Metode Manual)
- Pastikan Developer Tools sudah dibuka (F12)
- Cek apakah tab "Console" sudah dipilih

### Bookmarklet tidak bekerja di Mobile?
- Pastikan URL bookmark berisi script lengkap (dimulai dengan `javascript:`)
- Coba buat bookmark baru dan paste script lagi
- Pastikan browser mobile support JavaScript bookmarklet

## 📄 Lisensi
Script ini dibuat untuk keperluan pembelajaran dan testing. Gunakan dengan bijak dan bertanggung jawab.

## 👤 Author
- @marjauzann @afzaalis
- Dibuat untuk mempermudah pengisian survey iGracias Telkom University.

---

**Selamat menggunakan! 🎉**
