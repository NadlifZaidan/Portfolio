# Portofolio Sistem Informasi

Website portofolio pribadi untuk mahasiswa atau lulusan Sistem Informasi Universitas Gunadarma. Dibuat dengan React, TypeScript, Vite, Tailwind CSS, dan Lucide Icons. Tidak memerlukan backend atau database.

## Menjalankan project

Syarat: Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

Perintah lain:

```bash
npm run build     # build produksi ke folder dist/
npm run preview   # melihat hasil build secara lokal
npm run typecheck # memeriksa tipe TypeScript
```

## Mengisi konten

Semua konten ada di satu file: `src/data/profile.ts`.

Yang perlu Anda isi sebelum dibagikan ke recruiter:

1. `profile.name`: nama lengkap. Saat ini masih "Nama Lengkap Anda".
2. `profile.links`: email, GitHub, LinkedIn, dan CV. Kolom yang kosong tidak ditampilkan, jadi tidak ada tombol atau tautan yang rusak.
3. Setiap proyek di `projects`: `contribution` (bagian yang benar-benar Anda kerjakan), `githubUrl`, `demoUrl`, `status`, dan `image`.
   - Proyek JBK Online: isi `stack` (teknologi yang dipakai).
   - Proyek Within the Blur: isi `goal`, `features` (yang sudah jadi), `plannedFeatures` (yang masih direncanakan), dan teknologi frontend di `stack`.
4. `education.status` dan `education.period`: status kelulusan dan tanggal. Dikosongkan agar tidak ada data yang dikarang.
5. `skillGroups`: tambahkan TypeScript, React, atau teknologi lain hanya jika Anda memang sudah memakainya.

Saat `npm run dev`, kolom yang belum diisi ditandai dengan kotak putus-putus. Catatan itu tidak muncul di hasil build.

### Menambahkan screenshot proyek

1. Simpan gambar di `public/images/projects/`, misalnya `apotek-jwp.png` (disarankan rasio 16:10, lebar sekitar 1280 px, format PNG atau WebP).
2. Isi `image` pada proyek:

```ts
image: { src: '/images/projects/apotek-jwp.png', alt: 'Halaman daftar obat pada aplikasi Apotek JWP' },
```

Tanpa `image`, website menampilkan gambar sementara berlabel "Screenshot belum ditambahkan".

### Menambahkan CV

Letakkan file di `public/cv.pdf`, lalu isi `links.cv: '/cv.pdf'`. Tombol "Download CV" di bagian atas akan muncul otomatis.

## SEO

- Judul halaman mengikuti `profile.name` dan `profile.headline`.
- Ubah `<title>` dan `<meta name="description">` di `index.html` agar memuat nama Anda. Mesin pencari membaca file ini sebelum JavaScript berjalan.

## Deploy

Hasil build ada di folder `dist/` dan bisa diunggah ke hosting statis seperti Netlify, Vercel, Cloudflare Pages, atau GitHub Pages. Untuk GitHub Pages di sub-folder, ubah `base` di `vite.config.ts` menjadi `'/nama-repo/'`.

## Struktur folder

```
src/
  data/profile.ts      Seluruh konten yang bisa diedit
  types.ts             Tipe data TypeScript
  components/          Komponen React yang dapat dipakai ulang
  index.css            Tailwind dan gaya dasar
public/                Favicon, robots.txt, gambar proyek, CV
```
