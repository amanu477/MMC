export interface Department {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const G = (n: string) =>
  `https://www.mcmkoreanhospital.org/storage/gallery/30112024/Gallery_Image_${n}.jpg`;
const G2 = (n: string) =>
  `https://www.mcmkoreanhospital.org/storage/gallery/08022025/Gallery_Image_${n}.jpg`;

export const DEPARTMENTS: Department[] = [
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    description:
      "Comprehensive care for adult conditions, managing complex illnesses and chronic diseases.",
    imageUrl: G("6983"),
  },
  {
    id: "surgery",
    name: "Surgery",
    description:
      "Advanced surgical interventions including laparoscopic and minimally invasive procedures.",
    imageUrl: G("6132"),
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Treatment of musculoskeletal system injuries and conditions, restoring mobility.",
    imageUrl: G("3346"),
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery",
    description:
      "Specialized surgical care for disorders of the brain, spine, and nervous system.",
    imageUrl: G("3430"),
  },
  {
    id: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    description:
      "Complete women's healthcare, maternity services, and fetal-maternal medicine.",
    imageUrl: G("6355"),
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "Compassionate, specialized care for infants, children, and adolescents.",
    imageUrl: G("8347"),
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    description:
      "Expert mental health support and treatment for a variety of psychiatric conditions.",
    imageUrl: G("5536"),
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
    imageUrl: G("1694"),
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology (DEC)",
    description:
      "Advanced eye care, vitreology, and vision-preserving surgical treatments.",
    imageUrl: G("9889"),
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
    imageUrl: G("4659"),
  },
  {
    id: "radiology",
    name: "Radiology",
    description:
      "State-of-the-art imaging including Ethiopia's first 1.5 Tesla MRI.",
    imageUrl: G("9493"),
  },
  {
    id: "anesthesiology",
    name: "Anesthesiology",
    description:
      "Ensuring patient safety and comfort before, during, and after surgical procedures.",
    imageUrl: G("6887"),
  },
  {
    id: "cath-lab",
    name: "Catheterization Laboratory",
    description:
      "Advanced interventional cardiology and specialized cardiovascular procedures.",
    imageUrl: G("2175"),
  },
  {
    id: "aku",
    name: "AKU (Artificial Kidney Unit)",
    description:
      "Specialized hemodialysis and comprehensive care for patients with kidney failure.",
    imageUrl: G("2738"),
  },
  {
    id: "nicu",
    name: "NICU",
    description:
      "Intensive care specialized for premature and critically ill newborns.",
    imageUrl: G("2499"),
  },
  {
    id: "neurology",
    name: "Neurology",
    description:
      "Diagnosis and management of disorders affecting the nervous system.",
    imageUrl: G("8665"),
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    description:
      "Rehabilitation services to restore function, alleviate pain, and improve mobility.",
    imageUrl: G("3119"),
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
    imageUrl: G2("4674"),
  },
];
