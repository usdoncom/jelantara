
export interface Career {
  id: string;
  title: string;
  category: string;
  description: string;
  tasks: string[];
  skills: string[];
  certifications: string[];
  companies: string[];
  salaryRange: string;
  prospect: string;
  relatedStages: string[];
  tags: string[];
}

export const CAREERS: Career[] = [
  {
    id: "network-engineer",
    title: "Network Engineer",
    category: "Jaringan",
    description: "Bertanggung jawab merancang, mengelola, dan mengoptimalkan jaringan komputer perusahaan agar berjalan stabil dan aman.",
    tasks: ["Konfigurasi Router & Switch", "Monitoring Jaringan", "Troubleshooting Koneksi", "Optimasi Bandwidth"],
    skills: ["TCP/IP", "Routing & Switching", "Network Monitoring Tools", "OSPF/BGP"],
    certifications: ["MTCNA", "CCNA", "HCIA"],
    companies: ["Provider Internet", "Perusahaan IT", "Perbankan"],
    salaryRange: "Rp5.000.000 - Rp15.000.000+",
    prospect: "Sangat Tinggi - Dibutuhkan oleh hampir semua perusahaan.",
    relatedStages: ["gateway", "sumatera", "jawa"],
    tags: ["🔥 Karir Paling Dicari", "🚀 Pertumbuhan Cepat"]
  },
  {
    id: "telecom-engineer",
    title: "Telecommunications Engineer",
    category: "Telekomunikasi",
    description: "Pakar yang merancang dan memelihara sistem transmisi data nirkabel, satelit, dan infrastruktur telekomunikasi seluler.",
    tasks: ["Optimasi Sinyal BTS", "Manajemen Frekuensi", "Instalasi VSAT", "Troubleshooting Transmisi"],
    skills: ["Sistem Seluler", "Radio Frequency", "VSAT Technology", "GSM/LTE/5G"],
    certifications: ["iNARTE", "Vendor Specific (Ericsson, Huawei)"],
    companies: ["Telkomsel", "Indosat", "XL Axiata", "Provider Satelit"],
    salaryRange: "Rp6.000.000 - Rp20.000.000+",
    prospect: "Tinggi - Terus berkembang seiring implementasi 5G.",
    relatedStages: ["baliNusa", "papua"],
    tags: ["💰 Gaji Tinggi", "🌍 Peluang Internasional"]
  },
  {
    id: "fiber-optic-technician",
    title: "Fiber Optic Technician",
    category: "Fiber Optik",
    description: "Teknisi ahli yang menangani instalasi, penyambungan (splicing), dan pemeliharaan jaringan kabel serat optik.",
    tasks: ["Splicing Kabel Optik", "Pengukuran OTDR", "Pemasangan Tiang & Ducting", "Troubleshooting Redaman"],
    skills: ["Fiber Splicing", "OTDR Operation", "Optical Power Meter"],
    certifications: ["Installer FO", "Joiner FO", "OPM Certified"],
    companies: ["Telkom Indonesia", "First Media", "Biznet"],
    salaryRange: "Rp4.500.000 - Rp8.000.000+",
    prospect: "Stabil - Sangat dibutuhkan untuk perluasan internet broadband.",
    relatedStages: ["papua"],
    tags: ["🚀 Pertumbuhan Cepat"]
  },
  {
    id: "cyber-security-analyst",
    title: "Cyber Security Analyst",
    category: "Cyber Security",
    description: "Penjaga gerbang digital yang bertugas melindungi data dan infrastruktur jaringan dari serangan peretas atau malware.",
    tasks: ["Penetration Testing", "Audit Keamanan", "Monitoring Firewall", "Incident Response"],
    skills: ["Network Security", "Ethical Hacking", "Firewall Configuration", "SIEM Tools"],
    certifications: ["CEH", "CompTIA Security+", "CISA"],
    companies: ["BSSN", "Perusahaan E-commerce", "Sektor Finansial"],
    salaryRange: "Rp8.000.000 - Rp25.000.000+",
    prospect: "Sangat Tinggi - Kebutuhan ahli keamanan siber meningkat pesat.",
    relatedStages: ["sulawesi"],
    tags: ["💰 Gaji Tinggi", "🛡️ Keamanan Kritis"]
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    category: "Cloud",
    description: "Merancang dan mengelola infrastruktur server yang berjalan di platform cloud seperti AWS, Google Cloud, atau Azure.",
    tasks: ["Server Provisioning", "Cloud Networking", "Manajemen Storage", "Automasi Infrastruktur"],
    skills: ["AWS/GCP/Azure", "Virtualization", "Linux Administration", "Docker/Kubernetes"],
    certifications: ["AWS Solutions Architect", "Google Cloud Engineer"],
    companies: ["Startup Unicorn", "Google", "Microsoft"],
    salaryRange: "Rp10.000.000 - Rp30.000.000+",
    prospect: "Eksponensial - Masa depan infrastruktur IT adalah cloud.",
    relatedStages: ["kalimantan", "jawa"],
    tags: ["💰 Gaji Tinggi", "🌍 Peluang Internasional"]
  },
  {
    id: "iot-engineer",
    title: "IoT Engineer",
    category: "IoT",
    description: "Menghubungkan berbagai perangkat fisik ke internet untuk menciptakan sistem otomatisasi cerdas.",
    tasks: ["Sensor Integration", "Embedded Systems", "Data Analysis", "Gateway Configuration"],
    skills: ["Microcontroller", "MQTT Protocol", "IoT Security", "Arduino/Raspberry Pi"],
    certifications: ["Aruba Certified IoT", "AWS Certified IoT"],
    companies: ["Smart City Projects", "Perusahaan Manufaktur", "Agrikultur Modern"],
    salaryRange: "Rp7.000.000 - Rp18.000.000+",
    prospect: "Sangat Tinggi - Kunci dari pembangunan Smart City (IKN).",
    relatedStages: ["ikn", "kalimantan"],
    tags: ["🚀 Pertumbuhan Cepat", "🤖 Teknologi Baru"]
  },
  {
    id: "network-administrator",
    title: "Network Administrator",
    category: "Jaringan",
    description: "Mengelola operasional harian jaringan komputer internal organisasi, memastikan semua pengguna terhubung dengan lancar.",
    tasks: ["User Management", "Backup Data Jaringan", "Software Updates", "Network Policy Enforcement"],
    skills: ["Active Directory", "Windows Server", "Basic Routing", "VPN Configuration"],
    certifications: ["CompTIA Network+", "MTCRE"],
    companies: ["Instansi Pemerintah", "Sekolah/Universitas", "Perkantoran"],
    salaryRange: "Rp4.500.000 - Rp10.000.000",
    prospect: "Stabil - Dibutuhkan untuk pemeliharaan sistem internal.",
    relatedStages: ["gateway", "sumatera"],
    tags: ["✅ Stabil"]
  },
  {
    id: "noc-engineer",
    title: "NOC Engineer",
    category: "Jaringan",
    description: "Bekerja di pusat kendali jaringan (Network Operation Center) untuk memantau performa jaringan 24/7.",
    tasks: ["Monitoring Real-time", "Incident Logging", "Laporan Performa", "Level 1 Support"],
    skills: ["Network Monitoring System", "Linux Dasar", "Troubleshooting", "PRTG/Zabbix"],
    certifications: ["CCNA", "CompTIA A+"],
    companies: ["ISP", "Data Center", "E-commerce"],
    salaryRange: "Rp5.000.000 - Rp10.000.000",
    prospect: "Baik - Pintu masuk utama bagi lulusan baru ke dunia jaringan.",
    relatedStages: ["jawa", "kalimantan"],
    tags: ["🚀 Karir Awal Bagus"]
  },
  {
    id: "isp-engineer",
    title: "ISP Engineer",
    category: "Jaringan",
    description: "Spesialis yang bekerja di penyedia layanan internet untuk mengelola infrastruktur core dan akses pelanggan.",
    tasks: ["BGP Routing", "IP Management", "Metro-E Configuration", "Backbone Maintenance"],
    skills: ["MikroTik/Cisco High-end", "BGP/OSPF", "MPLS", "Network Planning"],
    certifications: ["MTCRE/MTCINE", "CCNP"],
    companies: ["Indihome", "Biznet", "Icon+"],
    salaryRange: "Rp7.000.000 - Rp18.000.000",
    prospect: "Tinggi - Pertumbuhan ISP di Indonesia sangat pesat.",
    relatedStages: ["sumatera", "jawa", "papua"],
    tags: ["🔥 Karir Paling Dicari"]
  },
  {
    id: "wireless-engineer",
    title: "Wireless Network Engineer",
    category: "Wireless",
    description: "Spesialis dalam merancang jangkauan dan performa jaringan nirkabel (WiFi) untuk area publik atau perkantoran.",
    tasks: ["Site Survey", "Heatmap Analysis", "Konfigurasi Wireless Controller", "Antenna Alignment"],
    skills: ["WLAN Standards", "Radio Frequency", "Survey Tools (Ekahau)", "MTCWE"],
    certifications: ["CWNA", "MTCWE", "ACMA"],
    companies: ["Hospitality", "Mall", "Airport", "ISP Wireless"],
    salaryRange: "Rp6.000.000 - Rp12.000.000",
    prospect: "Stabil - WiFi menjadi kebutuhan primer di sektor publik.",
    relatedStages: ["maluku", "baliNusa"],
    tags: ["📶 Spesialis Wireless"]
  },
  {
    id: "ftth-technician",
    title: "FTTH Technician",
    category: "Fiber Optik",
    description: "Teknisi khusus Fiber to the Home yang menangani pemasangan internet dari ODP ke rumah pelanggan.",
    tasks: ["Instalasi Drop Core", "Setting ONT/Modem", "Penarikan Kabel Udara", "Service Assurance"],
    skills: ["Fiber Splicing Dasar", "Setting Router Client", "Customer Service"],
    certifications: ["Teknisi IKR/FTTH", "Basic Networking"],
    companies: ["Telkom", "MyRepublic", "Indihome"],
    salaryRange: "Rp4.000.000 - Rp7.000.000",
    prospect: "Sangat Tinggi - Kebutuhan instalasi rumah meningkat tajam.",
    relatedStages: ["papua"],
    tags: ["👷 Pekerjaan Lapangan"]
  },
  {
    id: "data-center-technician",
    title: "Data Center Technician",
    category: "Data Center",
    description: "Menjaga infrastruktur fisik server dan perangkat jaringan di dalam gedung pusat data.",
    tasks: ["Racking Server", "Cabling Management", "Cooling Monitoring", "Power UPS Maintenance"],
    skills: ["Hardware Server", "Structured Cabling", "Basic Linux", "Cooling Systems"],
    certifications: ["CDCP", "CompTIA Server+"],
    companies: ["DCI Indonesia", "Google Data Center", "TelkomSigma"],
    salaryRange: "Rp6.000.000 - Rp13.000.000",
    prospect: "Tinggi - Indonesia menjadi hub Data Center di Asia Tenggara.",
    relatedStages: ["jawa", "kalimantan"],
    tags: ["🏢 Infrastruktur Kritis"]
  },
  {
    id: "soc-analyst",
    title: "SOC Analyst",
    category: "Cyber Security",
    description: "Bekerja di Security Operations Center untuk memantau ancaman siber secara real-time dan memberikan respon awal.",
    tasks: ["Log Monitoring", "Threat Hunting", "Alert Escalation", "Security Reporting"],
    skills: ["SIEM (Splunk/ELK)", "Threat Intelligence", "Wireshark", "Network Forensics"],
    certifications: ["CompTIA CySA+", "GSEC"],
    companies: ["Perbankan", "Financial Technology", "Cyber Security Firm"],
    salaryRange: "Rp7.000.000 - Rp15.000.000",
    prospect: "Tinggi - Dibutuhkan untuk pengawasan keamanan 24 jam.",
    relatedStages: ["sulawesi"],
    tags: ["🛡️ Penjaga Digital"]
  },
  {
    id: "system-administrator",
    title: "System Administrator",
    category: "System",
    description: "Mengelola server (Linux/Windows) dan sistem aplikasi agar selalu tersedia untuk operasional bisnis.",
    tasks: ["Server Hardening", "Patch Management", "Virtualization Management", "Identity Management"],
    skills: ["Linux/Windows Server", "VMware/Proxmox", "Scripting (Bash/Python)", "Backup Systems"],
    certifications: ["RHCSA", "MCSA", "LPIC"],
    companies: ["Hampir Semua Sektor Industri"],
    salaryRange: "Rp6.000.000 - Rp14.000.000",
    prospect: "Stabil - Fondasi dari semua sistem aplikasi perusahaan.",
    relatedStages: ["kalimantan", "jawa"],
    tags: ["💻 Ahli Server"]
  },
  {
    id: "infrastructure-engineer",
    title: "Infrastructure Engineer",
    category: "System",
    description: "Merancang fondasi IT yang menggabungkan jaringan, server, dan penyimpanan data dalam satu ekosistem.",
    tasks: ["IT Blueprint Design", "Disaster Recovery Planning", "Hybrid Cloud Design", "Vendor Management"],
    skills: ["Enterprise Networking", "Storage Area Network (SAN)", "Virtualization", "IT Service Management"],
    certifications: ["ITIL Dasar", "CCNP", "VCP"],
    companies: ["Perusahaan Multinasional", "BUMN", "Tech Giants"],
    salaryRange: "Rp9.000.000 - Rp22.000.000",
    prospect: "Tinggi - Memegang peran strategis dalam arsitektur IT.",
    relatedStages: ["ikn", "jawa", "kalimantan"],
    tags: ["🏗️ Arsitek Sistem"]
  }
];
