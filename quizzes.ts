
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizData {
  id: string;
  title: string;
  material: string;
  questions: Question[];
}

export const QUIZZES: QuizData[] = [
  {
    id: "gateway",
    title: "Quiz Gerbang Nusantara Digital",
    material: "Pengenalan Media dan Jaringan Telekomunikasi",
    questions: [
      {
        id: 1,
        question: "JELANTARA adalah bahan ajar interaktif untuk mata pelajaran apa?",
        options: ["Seni Budaya", "Bahasa Inggris", "Media dan Jaringan Telekomunikasi", "Matematika"],
        correctAnswer: "Media dan Jaringan Telekomunikasi",
        explanation: "JELANTARA dikhususkan untuk siswa SMK kelas X TJKT pada materi Media dan Jaringan Telekomunikasi."
      },
      {
        id: 2,
        question: "Konsep utama JELANTARA adalah?",
        options: ["Belajar di Kelas", "Eduventure Nusantara Digital", "Membaca Buku Teks", "Ujian Nasional"],
        correctAnswer: "Eduventure Nusantara Digital",
        explanation: "JELANTARA menggabungkan konsep petualangan (Adventure) dan pendidikan (Education) di seluruh Nusantara."
      },
      {
        id: 3,
        question: "Maskot utama JELANTARA bernama?",
        options: ["JELA", "JELI", "JELO", "JELU"],
        correctAnswer: "JELA",
        explanation: "JELA adalah kependekan dari JELajah Jaringan ANTARA."
      },
      {
        id: 4,
        question: "JELA digambarkan sebagai?",
        options: ["Kucing Teknologi", "Burung Cendrawasih Teknologi", "Ikan Robot", "Harimau Digital"],
        correctAnswer: "Burung Cendrawasih Teknologi",
        explanation: "JELA adalah Burung Cendrawasih dari Papua yang merepresentasikan keindahan dan kecanggihan teknologi Indonesia."
      },
      {
        id: 5,
        question: "Tujuan utama JELANTARA adalah?",
        options: ["Membuat game", "Mencari teman", "Membuat pembelajaran telekomunikasi lebih interaktif dan menyenangkan", "Berjualan alat jaringan"],
        correctAnswer: "Membuat pembelajaran telekomunikasi lebih interaktif dan menyenangkan",
        explanation: "Aplikasi ini dirancang sebagai inovasi media pembelajaran agar siswa lebih antusias belajar TJKT."
      }
    ]
  },
  {
    id: "sumatera",
    title: "Quiz Sumatera - IP Address",
    material: "Konsep Pengalamatan Internet",
    questions: [
      {
        id: 1,
        question: "IP Address digunakan untuk?",
        options: ["Menghias komputer", "Mengidentifikasi perangkat dalam jaringan", "Mempercepat internet", "Menyimpan file"],
        correctAnswer: "Mengidentifikasi perangkat dalam jaringan",
        explanation: "IP Address adalah identitas unik setiap perangkat agar bisa berkomunikasi dalam jaringan."
      },
      {
        id: 2,
        question: "IPv4 umumnya terdiri dari berapa oktet?",
        options: ["2 oktet", "4 oktet", "8 oktet", "16 oktet"],
        correctAnswer: "4 oktet",
        explanation: "IPv4 terdiri dari 32 bit yang dibagi menjadi 4 kelompok (oktet) yang dipisahkan titik."
      },
      {
        id: 3,
        question: "Contoh IP Address yang benar adalah?",
        options: ["192.168.1.1", "300.200.100.1", "abc.def.ghi.jkl", "192-168-1-1"],
        correctAnswer: "192.168.1.1",
        explanation: "Format IP Address yang benar menggunakan angka 0-255 dan dipisahkan oleh titik."
      },
      {
        id: 4,
        question: "Fungsi subnet mask adalah?",
        options: ["Menambah kecepatan", "Menentukan bagian network dan host", "Menyembunyikan IP", "Mengunci jaringan"],
        correctAnswer: "Menentukan bagian network dan host",
        explanation: "Subnet mask digunakan untuk membedakan identitas jaringan (network) dan identitas perangkat (host)."
      },
      {
        id: 5,
        question: "IP Address private biasanya digunakan untuk?",
        options: ["Internet publik", "Jaringan lokal", "Server Google", "Satelit"],
        correctAnswer: "Jaringan lokal",
        explanation: "IP Private digunakan di dalam jaringan lokal (LAN) dan tidak dapat diakses langsung dari internet luar."
      }
    ]
  },
  {
    id: "jawa",
    title: "Quiz Jawa - TCP/IP",
    material: "Protokol Komunikasi Data",
    questions: [
      {
        id: 1,
        question: "TCP/IP adalah?",
        options: ["Bahasa pemrograman", "Protokol komunikasi jaringan", "Sistem operasi", "Aplikasi desain"],
        correctAnswer: "Protokol komunikasi jaringan",
        explanation: "TCP/IP adalah standar komunikasi data yang digunakan di internet."
      },
      {
        id: 2,
        question: "TCP berfungsi untuk?",
        options: ["Mengirim data secara andal dan berurutan", "Mempercepat browser", "Mematikan virus", "Membuat email"],
        correctAnswer: "Mengirim data secara andal dan berurutan",
        explanation: "TCP memastikan semua paket data sampai ke tujuan dengan benar dan dalam urutan yang tepat."
      },
      {
        id: 3,
        question: "IP berfungsi untuk?",
        options: ["Mengedit gambar", "Pengalamatan dan pengiriman paket", "Menghitung angka", "Mencetak dokumen"],
        correctAnswer: "Pengalamatan dan pengiriman paket",
        explanation: "IP bertanggung jawab untuk memberikan alamat pada paket data dan mengarahkannya ke tujuan."
      },
      {
        id: 4,
        question: "Protokol yang digunakan untuk membuka website adalah?",
        options: ["FTP", "SMTP", "HTTP/HTTPS", "POP3"],
        correctAnswer: "HTTP/HTTPS",
        explanation: "Hypertext Transfer Protocol (HTTP) adalah protokol utama untuk mentransfer data di web."
      },
      {
        id: 5,
        question: "DNS berfungsi untuk?",
        options: ["Mengubah nama domain menjadi alamat IP", "Mengirim file", "Mengamankan password", "Membuat website"],
        correctAnswer: "Mengubah nama domain menjadi alamat IP",
        explanation: "DNS seperti buku telepon internet yang menerjemahkan nama domain (seperti google.com) ke IP Address."
      }
    ]
  },
  {
    id: "kalimantan",
    title: "Quiz Kalimantan - Layanan Jaringan",
    material: "DNS, DHCP, dan Web Service",
    questions: [
      {
        id: 1,
        question: "DHCP berfungsi untuk?",
        options: ["Memberikan IP Address otomatis", "Mematikan internet", "Mendesain website", "Memutar video"],
        correctAnswer: "Memberikan IP Address otomatis",
        explanation: "Dynamic Host Configuration Protocol (DHCP) memudahkan pengelolaan IP karena diberikan otomatis oleh server."
      },
      {
        id: 2,
        question: "DNS berfungsi untuk?",
        options: ["Mengirim surat", "Menerjemahkan domain ke IP Address", "Menghapus file", "Mengatur jam"],
        correctAnswer: "Menerjemahkan domain ke IP Address",
        explanation: "DNS memetakan nama yang mudah diingat manusia ke alamat yang dimengerti komputer."
      },
      {
        id: 3,
        question: "Web server digunakan untuk?",
        options: ["Mengedit video", "Menyediakan halaman website", "Main game", "Menggambar"],
        correctAnswer: "Menyediakan halaman website",
        explanation: "Web server menyimpan dan melayani permintaan halaman web kepada pengguna (klien)."
      },
      {
        id: 4,
        question: "File server berfungsi untuk?",
        options: ["Menyimpan dan berbagi file dalam jaringan", "Menghitung pajak", "Mendengar musik", "Memasang kabel"],
        correctAnswer: "Menyimpan dan berbagi file dalam jaringan",
        explanation: "File server adalah pusat penyimpanan data yang dapat diakses oleh banyak pengguna di jaringan."
      },
      {
        id: 5,
        question: "Mail server digunakan untuk?",
        options: ["Menonton film", "Mengelola layanan email", "Mengirim SMS", "Membaca koran"],
        correctAnswer: "Mengelola layanan email",
        explanation: "Mail server bertanggung jawab untuk menerima, menyimpan, dan meneruskan pesan email."
      }
    ]
  },
  {
    id: "sulawesi",
    title: "Quiz Sulawesi - Keamanan Jaringan",
    material: "Melindungi Infrastruktur Digital",
    questions: [
      {
        id: 1,
        question: "Firewall berfungsi untuk?",
        options: ["Mendinginkan komputer", "Menyaring lalu lintas jaringan", "Mempercepat download", "Membakar CD"],
        correctAnswer: "Menyaring lalu lintas jaringan",
        explanation: "Firewall adalah sistem keamanan yang memantau dan mengontrol lalu lintas masuk dan keluar berdasarkan aturan keamanan."
      },
      {
        id: 2,
        question: "Malware adalah?",
        options: ["Perangkat lunak gratis", "Perangkat lunak berbahaya", "Aplikasi kantoran", "Sistem operasi"],
        correctAnswer: "Perangkat lunak berbahaya",
        explanation: "Malware (Malicious Software) dirancang untuk merusak, mengganggu, atau mendapatkan akses tidak sah ke sistem."
      },
      {
        id: 3,
        question: "Password yang kuat sebaiknya?",
        options: ["Nama sendiri", "Tanggal lahir", "Menggunakan kombinasi huruf, angka, dan simbol", "123456"],
        correctAnswer: "Menggunakan kombinasi huruf, angka, dan simbol",
        explanation: "Kombinasi karakter yang beragam membuat password lebih sulit ditebak atau diretas (Brute Force)."
      },
      {
        id: 4,
        question: "Enkripsi digunakan untuk?",
        options: ["Menghapus data", "Mengamankan data dengan mengubahnya menjadi kode rahasia", "Mencetak data", "Mengganti nama data"],
        correctAnswer: "Mengamankan data dengan mengubahnya menjadi kode rahasia",
        explanation: "Enkripsi memastikan data tidak dapat dibaca oleh pihak yang tidak memiliki kunci dekripsi."
      },
      {
        id: 5,
        question: "Phishing adalah?",
        options: ["Memancing di laut", "Upaya penipuan untuk mencuri data sensitif", "Mencari teman online", "Mengunduh file besar"],
        correctAnswer: "Upaya penipuan untuk mencuri data sensitif",
        explanation: "Phishing biasanya dilakukan melalui email atau link palsu yang menyerupai institusi resmi."
      }
    ]
  },
  {
    id: "bali-nusa",
    title: "Quiz Bali & Nusa Tenggara - Sistem Seluler",
    material: "Teknologi Komunikasi Nirkabel Bergerak",
    questions: [
      {
        id: 1,
        question: "BTS berfungsi untuk?",
        options: ["Memasang antena TV", "Menghubungkan perangkat seluler ke jaringan operator", "Menghemat baterai HP", "Membuat casing HP"],
        correctAnswer: "Menghubungkan perangkat seluler ke jaringan operator",
        explanation: "Base Transceiver Station (BTS) adalah menara pemancar yang mengirim dan menerima sinyal dari ponsel."
      },
      {
        id: 2,
        question: "4G dan 5G adalah teknologi?",
        options: ["Kamera", "Jaringan seluler", "Layar sentuh", "Prosesor"],
        correctAnswer: "Jaringan seluler",
        explanation: "Ini adalah standar generasi jaringan seluler untuk akses internet berkecepatan tinggi."
      },
      {
        id: 3,
        question: "SIM card digunakan untuk?",
        options: ["Menyimpan foto", "Identitas pelanggan pada jaringan seluler", "Sebagai baterai cadangan", "Antena internal"],
        correctAnswer: "Identitas pelanggan pada jaringan seluler",
        explanation: "Subscriber Identity Module (SIM) berisi identitas unik pelanggan agar bisa terhubung ke operator."
      },
      {
        id: 4,
        question: "Handover dalam jaringan seluler berarti?",
        options: ["Mematikan HP", "Perpindahan koneksi antar BTS tanpa terputus", "Memberikan HP ke orang lain", "Mengganti kartu SIM"],
        correctAnswer: "Perpindahan koneksi antar BTS tanpa terputus",
        explanation: "Handover memungkinkan pengguna tetap menelepon atau internetan meskipun sedang bergerak berpindah lokasi."
      },
      {
        id: 5,
        question: "Jaringan seluler memungkinkan komunikasi?",
        options: ["Hanya lewat kabel", "Tanpa kabel dan bergerak (mobile)", "Hanya di dalam rumah", "Hanya untuk SMS"],
        correctAnswer: "Tanpa kabel dan bergerak (mobile)",
        explanation: "Sistem seluler dirancang untuk mobilitas tinggi pengguna di mana saja selama ada jangkauan sinyal."
      }
    ]
  },
  {
    id: "maluku",
    title: "Quiz Maluku - WLAN",
    material: "Wireless Local Area Network",
    questions: [
      {
        id: 1,
        question: "WLAN adalah jaringan?",
        options: ["Kabel bawah laut", "Lokal nirkabel", "Satelit global", "Radio amatir"],
        correctAnswer: "Lokal nirkabel",
        explanation: "WLAN memungkinkan perangkat terhubung di area terbatas tanpa menggunakan kabel fisik."
      },
      {
        id: 2,
        question: "Perangkat utama WLAN adalah?",
        options: ["Printer", "Access Point", "Mouse", "Keyboard"],
        correctAnswer: "Access Point",
        explanation: "Access Point bertindak sebagai pusat pemancar sinyal WiFi agar perangkat klien bisa terhubung ke jaringan."
      },
      {
        id: 3,
        question: "WiFi menggunakan media transmisi?",
        options: ["Kabel tembaga", "Gelombang radio", "Serat optik", "Sinar laser"],
        correctAnswer: "Gelombang radio",
        explanation: "WiFi mentransfer data melalui gelombang elektromagnetik di frekuensi tertentu (biasanya 2.4GHz atau 5GHz)."
      },
      {
        id: 4,
        question: "SSID adalah?",
        options: ["Sandi WiFi", "Nama jaringan WiFi", "Kecepatan WiFi", "Pemilik WiFi"],
        correctAnswer: "Nama jaringan WiFi",
        explanation: "Service Set Identifier (SSID) adalah nama yang muncul saat kita mencari jaringan WiFi yang tersedia."
      },
      {
        id: 5,
        question: "WPA digunakan untuk?",
        options: ["Mempercepat sinyal", "Keamanan jaringan WiFi", "Mengganti nama WiFi", "Membayar WiFi"],
        correctAnswer: "Keamanan jaringan WiFi",
        explanation: "Wi-Fi Protected Access (WPA) adalah protokol keamanan untuk melindungi jaringan WiFi dari akses ilegal."
      }
    ]
  },
  {
    id: "papua",
    title: "Quiz Papua - VSAT IP & Sistem Optik",
    material: "Satelit dan Fiber Optic",
    questions: [
      {
        id: 1,
        question: "VSAT digunakan untuk komunikasi melalui?",
        options: ["Kabel telepon", "Satelit", "Surat merpati", "Kabel listrik"],
        correctAnswer: "Satelit",
        explanation: "Very Small Aperture Terminal (VSAT) adalah stasiun penerima sinyal dari satelit menggunakan antena parabola kecil."
      },
      {
        id: 2,
        question: "Fiber optic menggunakan media?",
        options: ["Kabel besi", "Serat kaca/cahaya", "Air", "Kayu"],
        correctAnswer: "Serat kaca/cahaya",
        explanation: "Fiber Optic mentransmisikan data dalam bentuk pulsa cahaya melalui serat kaca super tipis."
      },
      {
        id: 3,
        question: "Keunggulan fiber optic adalah?",
        options: ["Harga sangat murah", "Kecepatan tinggi dan tahan gangguan elektromagnetik", "Bisa ditekuk tajam", "Mudah disambung manual"],
        correctAnswer: "Kecepatan tinggi dan tahan gangguan elektromagnetik",
        explanation: "Karena menggunakan cahaya, fiber optic tidak terpengaruh gangguan listrik dan memiliki bandwidth sangat besar."
      },
      {
        id: 4,
        question: "VSAT cocok digunakan di?",
        options: ["Pusat kota besar", "Daerah terpencil/pedalaman", "Di dalam lift", "Laboratorium"],
        correctAnswer: "Daerah terpencil/pedalaman",
        explanation: "VSAT menjadi solusi internet di daerah yang belum terjangkau jaringan kabel atau seluler."
      },
      {
        id: 5,
        question: "Sistem optik mengirim data menggunakan?",
        options: ["Sinyal suara", "Sinyal cahaya", "Sinyal asap", "Sinyal getaran"],
        correctAnswer: "Sinyal cahaya",
        explanation: "Data dikonversi menjadi cahaya oleh laser atau LED untuk dikirimkan melalui kabel fiber optic."
      }
    ]
  },
  {
    id: "ikn",
    title: "Quiz Akhir IKN Nusantara Digital",
    material: "Integrasi Smart City",
    questions: [
      {
        id: 1,
        question: "Smart City membutuhkan jaringan yang?",
        options: ["Lambat tapi stabil", "Terintegrasi dan andal", "Hanya bisa diakses pemerintah", "Hanya aktif di siang hari"],
        correctAnswer: "Terintegrasi dan andal",
        explanation: "Smart City mengandalkan konektivitas tanpa putus antar berbagai layanan publik dan sensor kota."
      },
      {
        id: 2,
        question: "Teknologi yang mendukung kota digital adalah?",
        options: ["Mesin uap", "Internet, sensor, jaringan, dan data", "Kertas dan pena", "Hanya listrik"],
        correctAnswer: "Internet, sensor, jaringan, dan data",
        explanation: "Integrasi IoT (Internet of Things) dan jaringan berkecepatan tinggi adalah pilar utama kota cerdas."
      },
      {
        id: 3,
        question: "Keamanan jaringan penting dalam Smart City karena?",
        options: ["Agar terlihat keren", "Melindungi data warga dan layanan publik dari serangan siber", "Mengurangi biaya listrik", "Menambah jumlah penduduk"],
        correctAnswer: "Melindungi data warga dan layanan publik dari serangan siber",
        explanation: "Karena seluruh sistem terhubung, perlindungan data sangat krusial untuk mencegah kelumpuhan infrastruktur kota."
      },
      {
        id: 4,
        question: "Fiber optic dalam Smart City berfungsi sebagai?",
        options: ["Hiasan jalan", "Infrastruktur jaringan utama berkecepatan tinggi (backbone)", "Tiang listrik", "Kabel telepon lama"],
        correctAnswer: "Infrastruktur jaringan utama berkecepatan tinggi (backbone)",
        explanation: "Fiber optic menyediakan jalur data kapasitas besar untuk kebutuhan ribuan sensor dan perangkat kota."
      },
      {
        id: 5,
        question: "Integrasi seluruh materi JELANTARA bertujuan untuk?",
        options: ["Membuat soal sulit", "Memahami penerapan telekomunikasi dalam kehidupan nyata (Smart City)", "Mencari kelemahan jaringan", "Menjual perangkat teknologi"],
        correctAnswer: "Memahami penerapan telekomunikasi dalam kehidupan nyata (Smart City)",
        explanation: "Peserta didik diharapkan mampu melihat gambaran besar bagaimana teknologi yang dipelajari membangun masa depan bangsa."
      }
    ]
  }
];

export function getQuizById(id: string) {
  return QUIZZES.find(q => q.id === id);
}
