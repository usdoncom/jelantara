
import { 
  Home, 
  Map, 
  BookOpen, 
  Award, 
  Briefcase, 
  User, 
  Info,
  Globe,
  Zap,
  Cpu,
  ShieldCheck,
  Smartphone,
  Wifi,
  Satellite,
  Building2,
  Lock
} from "lucide-react";

export interface SearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  route: string;
  icon: any;
}

export const SEARCH_INDEX: SearchItem[] = [
  // Menus
  { id: "m1", title: "Beranda", category: "Menu", description: "Halaman utama dashboard JELANTARA.", route: "/dashboard", icon: Home },
  { id: "m2", title: "Peta Nusantara", category: "Menu", description: "Eksplorasi pulau belajar JELANTARA.", route: "/dashboard/map", icon: Map },
  { id: "m3", title: "Quiz", category: "Menu", description: "Daftar tantangan quiz setiap pulau.", route: "/dashboard/quiz", icon: BookOpen },
  { id: "m4", title: "Badge Saya", category: "Menu", description: "Koleksi penghargaan yang telah diraih.", route: "/dashboard/badges", icon: Award },
  { id: "m5", title: "Karir TJKT", category: "Menu", description: "Eksplorasi profesi masa depan TJKT.", route: "/dashboard/career", icon: Briefcase },
  { id: "m6", title: "Profil", category: "Menu", description: "Data diri dan statistik petualang.", route: "/dashboard/profile", icon: User },
  { id: "m7", title: "Tentang", category: "Menu", description: "Informasi aplikasi JELANTARA.", route: "/dashboard/about", icon: Info },

  // Materi / Stages
  { id: "s1", title: "Gerbang Nusantara Digital", category: "Materi", description: "Pengenalan Media dan Jaringan.", route: "/dashboard/learn/gateway", icon: Globe },
  { id: "s2", title: "Sumatera: IP Address", category: "Materi", description: "Konsep pengalamatan perangkat.", route: "/dashboard/learn/sumatera", icon: Globe },
  { id: "s3", title: "Jawa: TCP/IP", category: "Materi", description: "Protokol komunikasi data global.", route: "/dashboard/learn/jawa", icon: Zap },
  { id: "s4", title: "Kalimantan: Layanan Jaringan", category: "Materi", description: "DNS, DHCP, dan Web Service.", route: "/dashboard/learn/kalimantan", icon: Cpu },
  { id: "s5", title: "Sulawesi: Keamanan Jaringan", category: "Materi", description: "Firewall dan proteksi digital.", route: "/dashboard/learn/sulawesi", icon: ShieldCheck },
  { id: "s6", title: "Bali & Nusa Tenggara: Sistem Seluler", category: "Materi", description: "Teknologi 4G/5G dan BTS.", route: "/dashboard/learn/bali-nusa", icon: Smartphone },
  { id: "s7", title: "Maluku: WLAN", category: "Materi", description: "Jaringan lokal nirkabel (Wi-Fi).", route: "/dashboard/learn/maluku", icon: Wifi },
  { id: "s8", title: "Papua: VSAT IP & Sistem Optik", category: "Materi", description: "Satelit dan Fiber Optic.", route: "/dashboard/learn/papua", icon: Satellite },
  { id: "s9", title: "IKN: Smart City", category: "Materi", description: "Integrasi teknologi masa depan.", route: "/dashboard/learn/ikn", icon: Building2 },

  // Quizzes
  { id: "q1", title: "Quiz Gerbang", category: "Quiz", description: "Uji dasar telekomunikasi.", route: "/dashboard/quiz/gateway", icon: BookOpen },
  { id: "q2", title: "Quiz Sumatera", category: "Quiz", description: "Uji pemahaman IP Address.", route: "/dashboard/quiz/sumatera", icon: BookOpen },
  { id: "q3", title: "Quiz Jawa", category: "Quiz", description: "Uji pemahaman TCP/IP.", route: "/dashboard/quiz/jawa", icon: BookOpen },
  { id: "q4", title: "Quiz Kalimantan", category: "Quiz", description: "Uji Layanan Jaringan.", route: "/dashboard/quiz/kalimantan", icon: BookOpen },
  { id: "q5", title: "Quiz Sulawesi", category: "Quiz", description: "Uji Keamanan Jaringan.", route: "/dashboard/quiz/sulawesi", icon: BookOpen },
  { id: "q6", title: "Quiz Bali Nusa", category: "Quiz", description: "Uji Sistem Seluler.", route: "/dashboard/quiz/bali-nusa", icon: BookOpen },
  { id: "q7", title: "Quiz Maluku", category: "Quiz", description: "Uji WLAN / Wi-Fi.", route: "/dashboard/quiz/maluku", icon: BookOpen },
  { id: "q8", title: "Quiz Papua", category: "Quiz", description: "Uji VSAT & Optik.", route: "/dashboard/quiz/papua", icon: BookOpen },
  { id: "q9", title: "Quiz Akhir IKN", category: "Quiz", description: "Evaluasi Smart City.", route: "/dashboard/quiz/ikn", icon: BookOpen },

  // Careers
  { id: "c1", title: "Network Engineer", category: "Karir", description: "Merancang infrastruktur jaringan.", route: "/dashboard/career", icon: Briefcase },
  { id: "c2", title: "Fiber Optic Technician", category: "Karir", description: "Instalasi kabel serat optik.", route: "/dashboard/career", icon: Briefcase },
  { id: "c3", title: "Cyber Security Analyst", category: "Karir", description: "Menjaga keamanan data.", route: "/dashboard/career", icon: ShieldCheck },
  { id: "c4", title: "Cloud Engineer", category: "Karir", description: "Manajemen server cloud.", route: "/dashboard/career", icon: Building2 },
  { id: "c5", title: "NOC Engineer", category: "Karir", description: "Monitoring jaringan 24/7.", route: "/dashboard/career", icon: Cpu },
  { id: "c6", title: "ISP Engineer", category: "Karir", description: "Mengelola layanan internet.", route: "/dashboard/career", icon: Globe },
];
