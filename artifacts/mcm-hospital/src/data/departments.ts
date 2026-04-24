export interface Department {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const D = (date: string, n: string) =>
  `https://www.mcmkoreanhospital.org/storage/department/${date}/department${n}.jpg`;
const G = (n: string) =>
  `https://www.mcmkoreanhospital.org/storage/gallery/30112024/Gallery_Image_${n}.jpg`;

export const DEPARTMENTS: Department[] = [
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    description:
      "Comprehensive care for adult conditions, managing complex illnesses and chronic diseases.",
    imageUrl: D("13032026", "7312"),
  },
  {
    id: "surgery",
    name: "Surgery",
    description:
      "Advanced surgical interventions including laparoscopic and minimally invasive procedures.",
    imageUrl: D("13032026", "6663"),
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Treatment of musculoskeletal system injuries and conditions, restoring mobility.",
    imageUrl: D("30112024", "7352"),
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery",
    description:
      "Specialized surgical care for disorders of the brain, spine, and nervous system.",
    imageUrl: D("30112024", "4364"),
  },
  {
    id: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    description:
      "Complete women's healthcare, maternity services, and fetal-maternal medicine.",
    imageUrl: D("13032026", "2071"),
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "Compassionate, specialized care for infants, children, and adolescents.",
    imageUrl: D("13032026", "7158"),
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    description:
      "Expert mental health support and treatment for a variety of psychiatric conditions.",
    imageUrl: D("30112024", "7845"),
  },
  {
    id: "international-health",
    name: "International Health Care Unit",
    description:
      "Dedicated healthcare services and support for our international patients.",
    imageUrl: G("5731"),
  },
  {
    id: "dentistry",
    name: "Dentistry",
    description:
      "Comprehensive dental care, from routine checkups to specialized oral procedures.",
    imageUrl: D("30112024", "9335"),
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology (DEC)",
    description:
      "Advanced eye care, vitreology, and vision-preserving surgical treatments.",
    imageUrl: D("13032026", "1204"),
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description:
      "Expert diagnosis and treatment of skin, hair, and nail conditions.",
    imageUrl: G("4480"),
  },
  {
    id: "icu",
    name: "ICU",
    description:
      "24/7 critical and intensive care for life-threatening conditions.",
    imageUrl: D("13032026", "1883"),
  },
  {
    id: "radiology",
    name: "Radiology",
    description:
      "State-of-the-art imaging including Ethiopia's first 1.5 Tesla MRI.",
    imageUrl: D("13032026", "9563"),
  },
  {
    id: "anesthesiology",
    name: "Anesthesiology",
    description:
      "Ensuring patient safety and comfort before, during, and after surgical procedures.",
    imageUrl: D("13032026", "1372"),
  },
  {
    id: "cath-lab",
    name: "Catheterization Laboratory",
    description:
      "Advanced interventional cardiology and specialized cardiovascular procedures.",
    imageUrl: D("13032026", "5404"),
  },
  {
    id: "aku",
    name: "AKU (Artificial Kidney Unit)",
    description:
      "Specialized hemodialysis and comprehensive care for patients with kidney failure.",
    imageUrl: D("13032026", "2277"),
  },
  {
    id: "nicu",
    name: "NICU",
    description:
      "Intensive care specialized for premature and critically ill newborns.",
    imageUrl: D("13032026", "2563"),
  },
  {
    id: "neurology",
    name: "Neurology",
    description:
      "Diagnosis and management of disorders affecting the nervous system.",
    imageUrl: D("13032026", "6154"),
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    description:
      "Rehabilitation services to restore function, alleviate pain, and improve mobility.",
    imageUrl: D("13032026", "5598"),
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    description:
      "24/7 access to authentic, high-quality medications and pharmaceutical counseling.",
    imageUrl: G("9061"),
  },
  {
    id: "laboratory",
    name: "Laboratory",
    description:
      "Advanced diagnostic testing with high precision and rapid turnaround times.",
    imageUrl: D("13032026", "4431"),
  },
];
