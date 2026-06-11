
import { ProgressData } from "@/hooks/use-progress";

export interface StageData {
  id: keyof Omit<ProgressData, "master" | "finalAssessment">;
  title: string;
  material: string;
  route: string;
  imageAlt: string;
  description: string;
  keywords: string;
  color: string;
  simulationPrompt: string;
}

export const STAGES: StageData[] = [
  {
    id: "gateway",
    title: "Gerbang Nusantara Digital",
    material: "Pengenalan Media dan Jaringan",
    route: "/dashboard/learn/gateway",
    imageAlt: "Gerbang Nusantara Digital",
    description: "Langkah awal memulai petualangan di dunia telekomunikasi Nusantara.",
    keywords: "gateway network introduction",
    color: "from-blue-500 to-indigo-600",
    simulationPrompt: "Pahami dasar-dasar komponen jaringan sebelum melanjutkan."
  },
  {
    id: "sumatera",
    title: "Pulau Sumatera",
    material: "IP Address",
    route: "/dashboard/learn/sumatera",
    imageAlt: "Sumatera IP Address",
    description: "Mempelajari identitas unik setiap perangkat di jaringan global.",
    keywords: "sumatera ip address",
    color: "from-emerald-500 to-teal-600",
    simulationPrompt: "Tentukan Network ID, Host, dan Prefix dari alamat IP yang diberikan."
  },
  {
    id: "jawa",
    title: "Pulau Jawa",
    material: "TCP/IP",
    route: "/dashboard/learn/jawa",
    imageAlt: "Jawa TCP/IP",
    description: "Memahami cara data dikirimkan dan diterima dengan benar.",
    keywords: "jawa tcp ip protocol",
    color: "from-red-500 to-orange-600",
    simulationPrompt: "Urutkan layer TCP/IP dari Application hingga Network Interface."
  },
  {
    id: "kalimantan",
    title: "Pulau Kalimantan",
    material: "Layanan Jaringan",
    route: "/dashboard/learn/kalimantan",
    imageAlt: "Kalimantan Network Services",
    description: "Eksplorasi layanan penting seperti DNS, DHCP, dan Web Service.",
    keywords: "kalimantan network services",
    color: "from-orange-500 to-yellow-600",
    simulationPrompt: "Pilih layanan jaringan (DNS/DHCP/HTTP) yang sesuai untuk skenario tertentu."
  },
  {
    id: "sulawesi",
    title: "Pulau Sulawesi",
    material: "Keamanan Jaringan",
    route: "/dashboard/learn/sulawesi",
    imageAlt: "Sulawesi Network Security",
    description: "Membangun benteng pertahanan digital untuk melindungi data.",
    keywords: "sulawesi network security",
    color: "from-purple-500 to-indigo-600",
    simulationPrompt: "Identifikasi jenis ancaman jaringan (Malware/DDoS/Phishing) dari pola serangan."
  },
  {
    id: "bali-nusa",
    title: "Bali & Nusa Tenggara",
    material: "Sistem Seluler",
    route: "/dashboard/learn/bali-nusa",
    imageAlt: "Bali Nusa Tenggara Mobile Systems",
    description: "Teknologi komunikasi nirkabel yang menghubungkan mobilitas kita.",
    keywords: "bali mobile systems cellular",
    color: "from-yellow-400 to-orange-500",
    simulationPrompt: "Susun alur transmisi data dari BTS hingga mencapai perangkat pengguna."
  },
  {
    id: "maluku",
    title: "Pulau Maluku",
    material: "WLAN",
    route: "/dashboard/learn/maluku",
    imageAlt: "Maluku WLAN",
    description: "Dunia Wi-Fi dan koneksi lokal tanpa kabel.",
    keywords: "maluku wlan wifi",
    color: "from-pink-500 to-rose-600",
    simulationPrompt: "Tentukan jangkauan area cakupan WiFi berdasarkan posisi Access Point."
  },
  {
    id: "papua",
    title: "Pulau Papua",
    material: "VSAT IP dan Sistem Optik",
    route: "/dashboard/learn/papua",
    imageAlt: "Papua VSAT Optic",
    description: "Tulang punggung telekomunikasi melalui satelit dan fiber optik.",
    keywords: "papua vsat fiber optic",
    color: "from-indigo-500 to-blue-800",
    simulationPrompt: "Pilih media transmisi (Satelit vs Serat Optik) yang tepat untuk geografis tertentu."
  },
  {
    id: "ikn",
    title: "IKN Nusantara Digital",
    material: "Integrasi Smart City",
    route: "/dashboard/learn/ikn",
    imageAlt: "IKN Smart City",
    description: "Masa depan Indonesia dengan kota cerdas yang terintegrasi.",
    keywords: "ikn smart city integration",
    color: "from-cyan-600 to-blue-700",
    simulationPrompt: "Hubungkan sensor IoT ke pusat data kota digital untuk otomatisasi cerdas."
  }
];

export function getStageById(id: string) {
  return STAGES.find(stage => stage.id === id);
}
