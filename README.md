# Auto Fill Survey iGracias Telkom

Script JavaScript untuk mengisi form survey iGracias Telkom University secara otomatis.

## 🚀 Cara Menggunakan

Tersedia 2 metode penggunaan:
- 1.Metode 1: Manual (Copy-Paste)
- 2.Metode 2: Otomatis (Tampermonkey)

### **Metode 1: Manual (Copy-Paste)**

Cara cepat tanpa perlu install extension.
#### Langkah-langkah:
1. **Buka halaman survey iGracias**
   - Login ke iGracias Telkom University
   - Buka halaman survey yang ingin diisi

2. **Buka Developer Console di browser**
   - **Chrome/Edge**: Tekan `F12` atau `Ctrl + Shift + J` (Windows/Linux) / `Cmd + Option + J` (Mac)
   - **Firefox**: Tekan `F12` atau `Ctrl + Shift + K` (Windows/Linux) / `Cmd + Option + K` (Mac)

3. **Copy script**
   - Buka file `main.js`
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

### **Metode 2: Otomatis (Tampermonkey)**

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
   - Buka file `versi-extension/index.js`
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


## ⚙️ Fitur

- ✅ Auto-fill radio button (4 pilihan → pilih ke-4, 2 pilihan → pilih ke-2)
- ✅ Auto-fill text input dengan "-"
- ✅ Auto-fill textarea dengan "-"
- ✅ Dua metode: Manual (copy-paste) dan Otomatis (Tampermonkey)
- ✅ Script otomatis mendeteksi perubahan DOM (untuk halaman yang load via AJAX)

## 📝 Catatan Penting

### ⚠️ Perhatian
- Script ini mengisi form di **halaman saat ini**
- Jika survey memiliki **beberapa halaman**, Anda perlu:
  - **Metode Manual**: Jalankan script di setiap halaman setelah klik "Simpan"
  - **Metode Otomatis**: Form akan terisi otomatis, cukup klik "Simpan" dan lanjut ke halaman berikutnya
- Pastikan halaman sudah **sepenuhnya dimuat** sebelum menjalankan script (untuk metode manual)

### 💡 Tips
- Untuk metode otomatis, pastikan Tampermonkey sudah aktif (ikon hijau di toolbar)
- Jika ada error, refresh halaman dan coba lagi
- Script akan mengisi **semua** radio button dan text input di halaman

## 🔧 Troubleshooting
### Script tidak bekerja?
1. Pastikan console tidak ada error (warna merah) - untuk metode manual
2. Pastikan Tampermonkey aktif - untuk metode otomatis
3. Pastikan halaman sudah sepenuhnya dimuat
4. Coba refresh halaman dan jalankan script lagi

### Form tidak terisi?
1. Cek apakah ada radio button atau text input di halaman
2. Pastikan form belum di-submit
3. Coba jalankan script sekali lagi

### Console tidak muncul? (Metode Manual)
- Pastikan Developer Tools sudah dibuka (F12)
- Cek apakah tab "Console" sudah dipilih

## 📄 Lisensi
Script ini dibuat untuk keperluan pembelajaran dan testing. Gunakan dengan bijak dan bertanggung jawab.

## 👤 Author
@marjauzann @afzaalis
Dibuat untuk mempermudah pengisian survey iGracias Telkom University.

---

**Selamat menggunakan! 🎉**
