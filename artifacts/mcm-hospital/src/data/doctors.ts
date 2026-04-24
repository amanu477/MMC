import { DEPARTMENTS } from "./departments";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  departmentId: string;
  photoUrl: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-milkiyas-getaneh",
    name: "Dr. Milkiyas Getaneh",
    specialty: "Emergency and Critical Care Specialist",
    departmentId: "icu",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/29112024/Physician_674a141185942.jpg"
  },
  {
    id: "dr-samrawit-getachew",
    name: "Dr. Samrawit Getachew",
    specialty: "Senior Dermatology, Dermatovenerologist (Specialist) & Dept Head",
    departmentId: "dermatology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/29112024/Physician_674a14228c709.jpg"
  },
  {
    id: "dr-yared-nigussie",
    name: "Dr. Yared Nigussie",
    specialty: "Radiologist (Subspecialist)",
    departmentId: "radiology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/29112024/Physician_674a14426705a.jpg"
  },
  {
    id: "dr-jikssa-dabessa",
    name: "Dr. Jikssa Dabessa",
    specialty: "Internist & Gastroenterologist (Subspecialist), Director of Medical Planning",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/29112024/Physician_674a148c39d26.jpg"
  },
  {
    id: "dr-solomon-amsalu",
    name: "Dr. Solomon Amsalu",
    specialty: "Pediatrician, Dept Head",
    departmentId: "pediatrics",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/29112024/Physician_674a196b430fc.jpg"
  },
  {
    id: "dr-emebet-getahun",
    name: "Dr. Emebet Getahun",
    specialty: "Ophthalmologist & Vitreologist (Subspecialist), Dept Head",
    departmentId: "ophthalmology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_675690ae474ac.JPG"
  },
  {
    id: "dr-haile-gilcha",
    name: "Dr. Haile Gilcha",
    specialty: "OBGYN Specialist & Feto-Maternal Medicine (Subspecialist), Dept Head",
    departmentId: "obstetrics-gynecology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_67568f34c3ae6.JPG"
  },
  {
    id: "dr-filagot-bizuneh",
    name: "Dr. Filagot Bizuneh",
    specialty: "Senior Medical Specialist (General Surgery)",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/29112024/Physician_674a1592d6f97.jpg"
  },
  {
    id: "dr-mekonen-kebede",
    name: "Dr. Mekonen Kebede",
    specialty: "OBGYN Specialist",
    departmentId: "obstetrics-gynecology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/29112024/Physician_674a154701ac2.jpg"
  },
  {
    id: "dr-abebe-tesfa",
    name: "Dr. Abebe Tesfa",
    specialty: "Internist (Specialist), Dept Head",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_2088.jpg"
  },
  {
    id: "dr-zewdu-assefa",
    name: "Dr. Zewdu Assefa",
    specialty: "Internal Medicine / Nephrology",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_5948.jpg"
  },
  {
    id: "dr-temesgen-amlaku",
    name: "Dr. Temesgen Amlaku",
    specialty: "Cardiologist / Hematologist",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_8249.JPG"
  },
  {
    id: "dr-isreal-hgiorgis",
    name: "Dr. Isreal H/Giorgis",
    specialty: "Internist & Hematologist (Subspecialist)",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_4706.JPG"
  },
  {
    id: "dr-lidya-ayele",
    name: "Dr. Lidya Ayele",
    specialty: "Senior Internist",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_1949.jpg"
  },
  {
    id: "dr-mamo-desalegn",
    name: "Dr. Mamo Desalegn",
    specialty: "Neurologist (Specialist)",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_1641.JPG"
  },
  {
    id: "dr-aklilu-getachew",
    name: "Dr. Aklilu Getachew",
    specialty: "Senior Medical Specialist (Urology)",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_7166.JPG"
  },
  {
    id: "dr-solomon-bekele",
    name: "Dr. Solomon Bekele",
    specialty: "General Surgery, Deputy Medical Director",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/25122024/Physician_676bfdaca773f.jpg"
  },
  {
    id: "dr-samson-demissie",
    name: "Dr. Samson Demissie",
    specialty: "Urosurgeon (Subspecialist)",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_4085.JPG"
  },
  {
    id: "dr-dereje-negash",
    name: "Dr. Dereje Negash",
    specialty: "Orthopedic Surgeon",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/26122024/Physician_676d1ad7cf3b1.jpg"
  },
  {
    id: "dr-sergute-sellassie-tebebe",
    name: "Dr. Sergute-sellassie Tebebe",
    specialty: "OBGYN",
    departmentId: "obstetrics-gynecology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_8030.JPG"
  },
  {
    id: "dr-gebresilassie-andualem",
    name: "Dr. Gebresilassie Andualem",
    specialty: "OBGYN",
    departmentId: "obstetrics-gynecology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/23122024/Physician_6769161b21443.png"
  },
  {
    id: "dr-tsegazeab-tsehaye",
    name: "Dr. Tsegazeab Tsehaye",
    specialty: "OBGYN, Clinical V.Dean",
    departmentId: "obstetrics-gynecology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_1511.JPG"
  },
  {
    id: "dr-senayit-gebrewold",
    name: "Dr. Senayit Gebrewold",
    specialty: "OBGYN",
    departmentId: "obstetrics-gynecology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_8849.JPG"
  },
  {
    id: "dr-tsegaye-estifanos",
    name: "Dr. Tsegaye Estifanos",
    specialty: "Radiologist",
    departmentId: "radiology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_1679.JPG"
  },
  {
    id: "dr-biniam-araya",
    name: "Dr. Biniam Araya",
    specialty: "Radiologist (Specialist), Dept Head",
    departmentId: "radiology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_6932.JPG"
  },
  {
    id: "dr-meron-tadesse",
    name: "Dr. Meron Tadesse",
    specialty: "Psychiatrist",
    departmentId: "psychiatry",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/23122024/Physician_6769216cb1dc0.png"
  },
  {
    id: "dr-yohannes-adugna",
    name: "Dr. Yohannes Adugna",
    specialty: "Dentist GP",
    departmentId: "dentistry",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_9773.JPG"
  },
  {
    id: "dr-demeke-kebede",
    name: "Dr. Demeke Kebede",
    specialty: "Anesthesiologist",
    departmentId: "anesthesiology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/21042026/Physician_69e720af8e8f9.jpg"
  },
  {
    id: "dr-tibebu-bekele",
    name: "Dr. Tibebu Bekele",
    specialty: "Anesthesiologist",
    departmentId: "anesthesiology",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/21042026/Physician_69e72114f1402.jpg"
  },
  {
    id: "dr-selam-habtu",
    name: "Dr. Selam Habtu",
    specialty: "Emergency Medicine",
    departmentId: "icu",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_3838.JPG"
  },
  {
    id: "dr-hibist-tefera",
    name: "Dr. Hibist Tefera",
    specialty: "Emergency Medicine",
    departmentId: "icu",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/09122024/Physician_3748.JPG"
  },
  {
    id: "dr-fikiru-delessa",
    name: "Dr. Fikiru Delessa",
    specialty: "Plastic Surgeon",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/26122024/Physician_676d1b45abcc4.jpg"
  },
  {
    id: "dr-dessalegn-lemessa",
    name: "Dr. Dessalegn Lemessa",
    specialty: "Pediatrician",
    departmentId: "pediatrics",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/25122024/Physician_676bfe7080ffb.jpg"
  },
  {
    id: "dr-aster-bekele",
    name: "Dr. Aster Bekele",
    specialty: "Pediatrician & Neonatologist",
    departmentId: "pediatrics",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/26122024/Physician_676d2256c0aec.jpg"
  },
  {
    id: "dr-taddesse-mitiku",
    name: "Dr. Taddesse Mitiku",
    specialty: "Clinical Oncologist",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/16122024/Physician_2706.jpg"
  },
  {
    id: "dr-efeson-thomas",
    name: "Dr. Efeson Thomas",
    specialty: "General Surgery",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/24122024/Physician_8163.jpg"
  },
  {
    id: "dr-philimon-getu",
    name: "Dr. Philimon Getu",
    specialty: "General Surgery",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/26122024/Physician_676d26576aabf.JPG"
  },
  {
    id: "dr-ebenezer-gezahegn",
    name: "Dr. Ebenezer Gezahegn",
    specialty: "General Surgery",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/25122024/Physician_676bfdffad598.jpg"
  },
  {
    id: "dr-daniel-adugna",
    name: "Dr. Daniel Adugna",
    specialty: "Emergency and Critical Care Medicine",
    departmentId: "icu",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/06012025/Physician_677b95e654ee6.jpg"
  },
  {
    id: "dr-andinet-dessalegn",
    name: "Dr. Andinet Dessalegn",
    specialty: "General & Pediatric Surgical Oncologist",
    departmentId: "surgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/04032026/Physician_4753.jpg"
  },
  {
    id: "dr-kalkidan-kassahun",
    name: "Dr. Kalkidan Kassahun",
    specialty: "Pediatric Specialist",
    departmentId: "pediatrics",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/04032026/Physician_4894.jpg"
  },
  {
    id: "dr-biruk-mulugeta",
    name: "Dr. Biruk Mulugeta",
    specialty: "Neurosurgeon",
    departmentId: "neurosurgery",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/25032026/Physician_6215.jpg"
  },
  {
    id: "dr-mizan-yeshaw",
    name: "Dr. Mizan Yeshaw",
    specialty: "ENT Specialist",
    departmentId: "internal-medicine",
    photoUrl: "https://www.mcmkoreanhospital.org/storage/physicians/02042026/Physician_7754.jpg"
  }
];
