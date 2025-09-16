# Kuis Interaktif Oseanografi - HMO "TRITON" ITB

Website ini dikembangkan oleh **Divisi Akademik Keilmuan Komisariat HMO "TRITON" ITB** sebagai media pembelajaran interaktif. Berisi kuis oseanografi dari berbagai mata kuliah dengan penjelasan setiap jawaban. Dibangun dengan **HTML, CSS, dan JavaScript** serta dapat diakses secara gratis melalui GitHub Pages.

---

## 📂 Struktur Folder

```
kuis-interaktif-hmo/
│
├── 📁 css/
│   └── style.css          # Styling utama (tema dark + animasi teks)
│
├── 📁 js/
│   └── main.js            # Logika kuis (soal, jawaban, penjelasan, slider topik)
│
├── 📁 img/                # Background untuk tiap mata kuliah
│   ├── arus.jpg
│   ├── gelombang.jpg
│   ├── remote.jpg
│   ├── pesisir.jpg
│   ├── proyek.jpg
│   ├── bencana.jpg
│   ├── bio.jpg
│   ├── geo.jpg
│   ├── indo.jpg
│   └── kimia.jpg
│
└── index.html             # Halaman utama (UI + pemilihan topik)
```

---

## 🚀 Menjalankan Website

Karena website ini **statis**, cukup:

1. Clone repository:

   ```bash
   git clone https://github.com/username/kuis-interaktif-hmo.git
   cd kuis-interaktif-hmo
   ```
2. Buka `index.html` di browser, atau aktifkan **GitHub Pages** di repository untuk akses online.

---

## ✍️ CRUD & Kontribusi

Walaupun versi statis **tidak mendukung CRUD soal langsung di website**, pengelolaan soal dilakukan dengan **mengedit file `main.js`** secara manual.

### Hal-hal yang harus diperhatikan sebelum melakukan CRUD:

* **Jangan commit langsung ke branch utama (`main`)**.
* Buat branch baru untuk setiap perubahan:

  ```bash
  git checkout -b update-soal-arus
  ```
* Setelah edit dan commit, lakukan **pull request** agar perubahan dapat direview.
* **Jangan push paksa (`git push -f`)** karena bisa merusak histori branch utama.
* Pastikan deskripsi commit jelas, contoh:

  ```
  git commit -m "Menambahkan soal baru pada mata kuliah Arus Laut"
  ```

---

## 📌 Catatan

* Tambahkan soal/penjelasan hanya dengan format yang sudah ada di `main.js`.
* Gunakan gambar background sesuai topik dan simpan di folder `img/`.
* Setiap kontribusi akan diperiksa terlebih dahulu oleh tim akademik HMO "TRITON" ITB.
