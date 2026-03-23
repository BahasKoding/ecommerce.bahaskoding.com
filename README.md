# Bahas Koding - Ecommerce "Starter" IT/PC Edition

Situs ini adalah starter kit e-commerce sederhana namun elegan, yang dirancang khusus untuk toko perlengkapan IT dan aksesori PC. Dibuat dengan performa tinggi dan estetika modern untuk memberikan pengalaman belanja yang mulus.

## 🚀 Tech Stack

- **React 19**: Library UI modern untuk performa maksimal.
- **Vite**: Build tool super cepat untuk pengembangan dan bundling.
- **Tailwind CSS 4**: Styling utility-first untuk desain responsif dan kustomisasi penuh.
- **Framer Motion**: Library animasi untuk memberikan efek "snappy" dan interaktif.

## 💡 Tujuan

Memberikan fondasi kuat bagi pengembang atau pemilik bisnis untuk meluncurkan katalog produk IT dengan cepat, tanpa mengorbankan kualitas desain dan user experience.

## ✨ Fitur Utama

- **Katalog Produk Responsif**: Layout grid yang beradaptasi otomatis di mobile, tablet, dan desktop.
- **Sistem Pencarian Real-time**: Cari produk berdasarkan nama atau deskripsi secara instan.
- **Efek Animasi Snappy**: Hover effects dan transisi yang halus khas setup tech.
- **Image Fallback Logic**: Otomatis menampilkan gambar placeholder jika gambar asli tidak ditemukan.
- **Tombol Kembali ke Atas**: Navigasi cepat saat menelusuri katalog yang panjang.
- **Komponen Modular**: Struktur kode yang rapi, mudah dipahami, dan dapat digunakan kembali.

## 🛠️ Cara Deploy (cPanel / VPS)

Untuk menghosting situs ini, ikuti langkah-langkah berikut:

1.  **Build Project**: Jalankan perintah berikut di komputer lokal Anda:
    ```bash
    npm run build
    ```
2.  **Hasil Build**: Setelah perintah selesai, folder `dist` akan muncul di direktori utama proyek Anda.
3.  **Upload File**:
    -   **cPanel**: Masuk ke File Manager, lalu buka folder `public_html`. Upload semua isi dari folder `dist` (bukan folder dist-nya sendiri) ke sana.
    -   **VPS (Nginx/Apache)**: Upload isi folder `dist` ke direktori root web Anda (misalnya `/var/www/html`).
4.  **Selesai!** Situs Anda sekarang sudah aktif dan bisa diakses melalu domain Anda.

---
© 2026 Bahas Koding IT/PC Edition.
