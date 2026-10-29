import type { Education, Profile, Project, SkillGroup } from '../types'

/**
 * SEMUA konten website ada di file ini. Edit di sini, lalu simpan.
 *
 * Aturan pengisian:
 * - Kolom yang dikosongkan ('' atau tidak ditulis) tidak ditampilkan di website,
 *   sehingga tidak ada tombol atau tautan yang rusak.
 * - Saat `npm run dev`, kolom proyek yang masih kosong ditandai dengan catatan putus-putus
 *   agar mudah ditemukan. Catatan itu tidak muncul di hasil build.
 */

export const profile: Profile = {
  name: 'Muhammad Nadlif Zaidan', 
  headline: 'Sistem Informasi | Pengembangan Web dan Sistem Informasi',
  intro:
    'Saya menempuh pendidikan Sistem Informasi di Universitas Gunadarma dan terbiasa mengerjakan proyek akademik berupa website berbasis Laravel, perancangan database MySQL, serta sistem informasi geografis. Saya sedang mencari kesempatan untuk memulai karier di bidang IT.',
  targetRoles: ['Junior Web Developer', 'IT Staff', 'Junior System Analyst'],
  highlightStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
  photo: { src: '/images/foto.jpg', alt: 'Foto profil Muhammad Nadlif Zaidan' },
  about: [
    'Saya mahasiswa Sistem Informasi Universitas Gunadarma. Di perkuliahan saya mempelajari pemrograman web, basis data, analisis dan perancangan sistem, serta pengelolaan proyek sistem informasi.',
    'Pengalaman saya sejauh ini berasal dari proyek akademik: membangun website dengan Laravel dan MySQL, merancang alur data, dan menampilkan data lokasi pada peta. Saya masih di tahap awal karier, dan saya mencari tempat untuk belajar langsung dari pekerjaan nyata sambil menyumbang di tim.',
  ],
  links: {
    email: 'nadlifzaidan04@gmail.com', // mis. 'email@gmail.com'
    github: 'https://github.com/NadlifZaidan', // mis. 'https://github.com/username'
    linkedin: 'http://www.linkedin.com/in/MuhammadNadlifZaidan', // mis. 'https://www.linkedin.com/in/username'
    cv: '', // letakkan file di public/cv.pdf lalu isi '/cv.pdf'
  },
}

export const projects: Project[] = [
  {
    id: 'apotek-jwp',
    name: 'Apotek JWP',
    summary:
      'Website manajemen persediaan obat yang dikembangkan menggunakan Laravel, PHP, dan MySQL.',
    goal: 'Membantu pengelolaan persediaan obat, mulai dari pencatatan data obat dan kategori hingga pemantauan stok.',
    contribution: 'Proyek individu. Saya mengerjakan seluruh pengembangan, mulai dari perancangan database, backend dengan Laravel, hingga tampilan dashboard dan fitur pelaporan.', // ISI: bagian yang Anda kerjakan
    stack: ['Laravel', 'PHP', 'MySQL'],
    features: [
      'Pengelolaan persediaan obat',
      'Data obat dan kategori',
      'Pemantauan stok',
      'Manajemen pengguna',
      'Laporan',
    ],
    image: { src: '/images/projects/apotek1.png', alt: 'Halaman Dashboard' }, // ISI: { src: '/images/projects/apotek-jwp.png', alt: 'Halaman ...' }
    githubUrl: '',
    demoUrl: '',
    status: undefined, // mis. 'Selesai'
  },
  {
    id: 'sig-faskes-depok',
    name: 'SIG Fasilitas Kesehatan Kota Depok',
    summary:
      'Website Sistem Informasi Geografis untuk menampilkan lokasi fasilitas kesehatan di Kota Depok.',
    goal: 'Menampilkan lokasi fasilitas kesehatan di Kota Depok dalam bentuk peta.',
    contribution: 'Proyek individu. Saya mengerjakan seluruh pengembangan, mulai dari perancangan database, backend dengan Laravel, hingga tampilan dashboard dan fitur pelaporan.',
    stack: ['Laravel', 'Overpass API', 'Leaflet', 'OpenStreetMap'],
    features: ['Peta lokasi fasilitas kesehatan menggunakan Leaflet dan OpenStreetMap'],
    image: { src: '/images/projects/sig1.png', alt: 'Halaman Peta Faskes Depok' },
    githubUrl: '',
    demoUrl: '',
    status: undefined,
  },
  {
    id: 'jbk-online',
    name: 'JBK Online',
    summary:
      'Website showroom dan jual beli kendaraan dengan fitur CRUD untuk mengelola data kendaraan dan stok showroom.',
    goal: 'Mengelola data kendaraan dan stok showroom, serta menampilkan kendaraan yang tersedia kepada pelanggan.',
    contribution: 'sebagai Full-stack Developer yang merancang dan mengembangkan seluruh fitur website JBKonline dari awal, meliputi perancangan arsitektur database, pembuatan antarmuka pengguna (frontend), hingga pengembangan sistem fungsionalitas manajemen data kendaraan (backend dan CRUD) untuk pengelolaan stok showroom.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Tailwind CSS', 'JavaScript'], // ISI: teknologi yang dipakai
    features: [
      'CRUD data kendaraan dan stok showroom',
      'Pelanggan dapat melihat kendaraan yang tersedia beserta gambar, harga, dan deskripsi',
    ],
    image: { src: '/images/projects/jbk1.png', alt: 'Halaman Dashboard' },
    githubUrl: '',
    demoUrl: '',
    status: undefined,
  },

]

/**
 * Hanya teknologi yang disebut di brief. Tambahkan TypeScript, React, atau lainnya
 * hanya jika Anda benar-benar sudah memakainya.
 */
export const skillGroups: SkillGroup[] = [
  { title: 'Bahasa pemrograman', items: ['PHP', 'JavaScript', 'C#'] },
  { title: 'Markup & Styling', items: ['HTML 5', 'CSS'] },
  { title: 'Framework', items: ['Laravel', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Database', items: ['MySQL', 'SQL Server'] },
  { title: 'Pemetaan', items: ['Leaflet', 'OpenStreetMap'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Composer', 'npm'] },
]

export const education: Education = {
  institution: 'Universitas Gunadarma',
  program: 'Sistem Informasi',
  gpa: '3,46',
  showGpa: true,
  status: 'Lulus', 
  period: '2022 - 2026', 
  courses: [
    'Pemrograman Berbasis Web',
    'Sistem Basis Data 1 dan 2',
    'Analisis dan Perancangan Sistem Informasi',
    'Pemrograman Berorientasi Objek',
    'Testing dan Implementasi Sistem',
    'Pengelolaan Proyek Sistem Informasi',
  ],
}
