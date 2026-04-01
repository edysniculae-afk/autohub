import {
  Wrench,
  Zap,
  Paintbrush,
  ShieldCheck,
  CircleDot,
  ClipboardCheck,
  Cog,
  type LucideIcon,
} from "lucide-react";
import mechanicsImg from "@/assets/service-mechanics.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import bodyworkImg from "@/assets/service-bodywork.jpg";
import tiresImg from "@/assets/service-tires.jpg";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  image: string | null;
  items: string[];
  description: string;
  highlight?: string;
  cta?: string;
  faq: ServiceFAQ[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "mecanica-auto",
    icon: Wrench,
    title: "Mecanică Auto",
    subtitle: "Reparații Mecanice Profesionale. Performanță și Siguranță.",
    metaTitle: "Mecanică Auto București | Autohub Service Pipera",
    metaDescription:
      "Reparații mecanice profesionale în București. Schimb distribuție, revizie completă, frâne, suspensie, turbo. Programare rapidă la Autohub Service Pipera.",
    image: mechanicsImg,
    items: [
      "Schimb ulei și filtre",
      "Sistem frânare",
      "Ambreiaj și cutii viteze",
      "Diagnoză motor",
      "Suspensie și direcție",
      "Geometrie roți 3D",
      "Distribuție",
      "Sistem răcire",
      "Aer condiționat",
      "Sistem alimentare",
      "Turbo",
      "Evacuare",
    ],
    description:
      "Departamentul de mecanică auto de la Autohub Service Pipera acoperă toate tipurile de intervenții mecanice, de la revizii periodice la reparații complexe de motor și transmisie. Folosim echipamente de diagnoză de ultimă generație pentru a identifica cu precizie fiecare problemă.\n\nEchipa noastră de mecanici auto din București are experiență cu toate mărcile de vehicule - de la mașini de oraș la SUV-uri și utilitare. Fiecare intervenție include verificarea completă a sistemelor conexe, pentru a preveni defecțiuni viitoare.\n\nLucrăm doar cu piese certificate și oferim garanție pentru manoperă și componente. Înainte de orice intervenție, primești un deviz transparent - fără surprize, fără costuri ascunse.",
    cta: "Ai altă problemă? Contactează-ne",
    faq: [
      {
        question: "Cât durează un schimb de distribuție?",
        answer:
          "Un schimb de distribuție durează în medie 4-8 ore, în funcție de modelul mașinii. La Autohub Service Pipera, efectuăm această operațiune cu piese originale sau OEM, inclusiv pompa de apă și rulourile auxiliare.",
      },
      {
        question: "Cât costă o revizie completă?",
        answer:
          "Prețul unei revizii complete variază în funcție de marca și modelul vehiculului. Include schimbul de ulei, filtre (ulei, aer, habitaclu, combustibil), verificarea frânelor, suspensiei și a nivelurilor de lichide. Contactează-ne pentru un deviz personalizat.",
      },
      {
        question: "Faceți reparații la toate mărcile auto?",
        answer:
          "Da, la Autohub Service Pipera lucrăm cu toate mărcile auto - de la Dacia și Volkswagen la BMW, Mercedes, Audi și alte mărci premium. Echipamentele noastre de diagnoză sunt multimarcă.",
      },
    ],
    relatedSlugs: ["electrica-auto", "vulcanizare", "piese-auto"],
  },
  {
    slug: "electrica-auto",
    icon: Zap,
    title: "Electrică Auto",
    subtitle: "Diagnoză Avansată și Reparații Electrice de Precizie",
    metaTitle: "Electrică Auto București | Autohub Service Pipera",
    metaDescription:
      "Diagnoză computerizată și reparații electrice auto în București. ECU, senzori, instalație electrică, alternator, multimedia. Autohub Service Pipera.",
    image: electricalImg,
    items: [
      "Diagnoză completă",
      "Instalație electrică",
      "Alternator / demaror",
      "Iluminare",
      "Baterii auto",
      "Chei & telecomenzi",
      "ECU / CAN bus",
      "Senzori",
      "Multimedia",
      "Camere parcare",
      "Climatizare",
    ],
    description:
      "Sistemele electrice și electronice reprezintă inima mașinilor moderne. La Autohub Service Pipera, dispunem de echipamente de diagnoză computerizată multimarcă capabile să citească și să interpreteze codurile de eroare din toate unitățile de control (ECU).\n\nDe la probleme simple precum înlocuirea bateriei sau repararea iluminării, până la intervenții complexe pe magistrala CAN bus, reprogramare ECU sau instalare sisteme multimedia - echipa noastră de electricieni auto din București rezolvă orice defecțiune electrică.\n\nOferăm și servicii de programare chei, codare telecomenzi și instalare camere de parcare sau sisteme de navigație aftermarket.",
    faq: [
      {
        question: "Cât durează o diagnoză computerizată?",
        answer:
          "O diagnoză computerizată completă durează aproximativ 30-60 de minute. Verificăm toate unitățile de control ale vehiculului și furnizăm un raport detaliat cu codurile de eroare și recomandările noastre.",
      },
      {
        question: "Puteți reprograma ECU-ul?",
        answer:
          "Da, oferim servicii de reprogramare ECU pentru majoritatea mărcilor auto. Aceasta poate include actualizări software, adaptări sau resetări necesare după înlocuirea anumitor componente.",
      },
      {
        question: "Instalați sisteme multimedia aftermarket?",
        answer:
          "Da, instalăm navigații, sisteme Android Auto/Apple CarPlay, camere de mers înapoi și sisteme audio. Toate instalările sunt realizate profesional, cu cablaje dedicate, fără a afecta garanția vehiculului.",
      },
    ],
    relatedSlugs: ["mecanica-auto", "daune-asigurare", "piese-auto"],
  },
  {
    slug: "tinichigerie-vopsitorie",
    icon: Paintbrush,
    title: "Tinichigerie & Vopsitorie",
    subtitle: "Aspect Impecabil. Finisaje Premium.",
    metaTitle: "Tinichigerie & Vopsitorie București | Autohub Pipera",
    metaDescription:
      "Tinichigerie, vopsitorie auto și detailing în București. Îndreptare caroserie, polish, ceramic coating, PDR, folii protecție. Autohub Service Pipera.",
    image: bodyworkImg,
    items: [
      "Îndreptare caroserie",
      "Vopsitorie",
      "Polish",
      "Faruri",
      "Anticoroziv",
      "Plastic",
      "Jante",
      "Folii",
      "Grindină (PDR)",
      "Ceramic coating",
      "Parbrize",
      "Detailing",
    ],
    description:
      "Departamentul de tinichigerie și vopsitorie de la Autohub Service Pipera, operat prin Central Paint Service, oferă servicii complete de estetică auto la standarde premium. Dispunem de cabine de vopsitorie profesionale și echipamente moderne pentru îndreptare caroserie.\n\nDe la reparații minore (zgârieturi, lovituri ușoare) la reconstrucții complexe de caroserie după accidente - fiecare lucrare este executată cu atenție la detalii. Folosim vopsele și lacuri de calitate superioară pentru un finisaj durabil și un aspect ca nou.\n\nOferăm și servicii premium de detailing, ceramic coating pentru protecție pe termen lung și reparații PDR (Paintless Dent Repair) pentru înlăturarea loviturilor fără vopsire - ideal după grindină.",
    faq: [
      {
        question: "Cât durează vopsirea unui element de caroserie?",
        answer:
          "Vopsirea unui singur element (aripă, ușă, bară) durează în medie 2-3 zile lucrătoare, incluzând pregătirea, grundul, vopsirea și lăcuirea. Pentru lucrări mai complexe, termenul poate fi de 5-7 zile.",
      },
      {
        question: "Ce este ceramic coating și cât rezistă?",
        answer:
          "Ceramic coating este un strat protector pe bază de siliciu care protejează vopseaua împotriva zgârieturilor minore, razelor UV și substanțelor chimice. Aplicat profesional, rezistă 2-5 ani în funcție de produs și întreținere.",
      },
      {
        question: "Reparați lovituri de grindină fără vopsire?",
        answer:
          "Da, folosim tehnica PDR (Paintless Dent Repair) pentru repararea loviturilor de grindină fără a afecta vopseaua originală. Este o metodă rapidă, eficientă și mai accesibilă decât revopsirea.",
      },
    ],
    relatedSlugs: ["daune-asigurare", "mecanica-auto", "piese-auto"],
  },
  {
    slug: "daune-asigurare",
    icon: ShieldCheck,
    title: "Daune & Asigurare",
    subtitle: "Gestionăm Tot Procesul. Fără Complicații pentru Tine.",
    metaTitle: "Daune & Asigurări Auto București | Autohub Pipera",
    metaDescription:
      "Gestionare completă dosare daune auto în București. Constatare, comunicare asigurator, reparație. Tu predai mașina, noi facem restul. Autohub Pipera.",
    image: null,
    items: [
      "Constatare daune",
      "Întocmire dosar complet",
      "Comunicare cu asiguratorul",
      "Reparație completă",
    ],
    highlight: "Tu predai mașina. Noi ne ocupăm de restul.",
    description:
      "Gestionarea unui dosar de daune auto poate fi un proces complicat și consumator de timp. La Autohub Service Pipera, preluăm întregul proces - de la constatarea daunelor și întocmirea dosarului, până la comunicarea cu compania de asigurări și efectuarea reparațiilor.\n\nLucrăm cu toate companiile de asigurări din România și cunoaștem procedurile specifice fiecăreia. Întocmim dosarul complet cu fotografii, estimări de cost și toate documentele necesare pentru o decontare rapidă.\n\nSingurul lucru pe care trebuie să-l faci este să ne aduci mașina. Noi ne ocupăm de tot restul - constatare, documentație, aprobare, reparație și predare. Transparent, fără complicații.",
    faq: [
      {
        question: "Lucrați cu toate companiile de asigurări?",
        answer:
          "Da, colaborăm cu toate companiile de asigurări din România - Euroins, Groupama, Allianz, Omniasig, Generali, City Insurance și altele. Cunoaștem procedurile fiecăreia pentru o decontare rapidă.",
      },
      {
        question: "Cât durează procesul de daune?",
        answer:
          "Durata depinde de complexitatea daunei și de asigurator. În medie, procesul complet (constatare + aprobare + reparație) durează 7-14 zile lucrătoare. Noi urgentăm comunicarea cu asiguratorul pentru a reduce timpul de așteptare.",
      },
      {
        question: "Trebuie să mă ocup eu de ceva?",
        answer:
          "Nu. Singurul lucru necesar este să ne aduci mașina și actele (carte identitate, talonul mașinii, polița de asigurare, procesul verbal de la poliție dacă e cazul). Noi preluăm tot procesul.",
      },
    ],
    relatedSlugs: ["tinichigerie-vopsitorie", "mecanica-auto", "electrica-auto"],
  },
  {
    slug: "vulcanizare",
    icon: CircleDot,
    title: "Vulcanizare",
    subtitle: "Anvelope și Jante - Servicii Complete",
    metaTitle: "Vulcanizare București | Autohub Service Pipera",
    metaDescription:
      "Vulcanizare profesională în București. Montaj anvelope, echilibrare, geometrie 3D, vânzare anvelope noi. Prețuri corecte la Autohub Service Pipera.",
    image: tiresImg,
    items: [
      "Montaj anvelope",
      "Echilibrare",
      "Geometrie",
      "Vânzare anvelope",
      "Reparații anvelope",
    ],
    description:
      "Serviciul de vulcanizare de la Autohub Service Pipera oferă tot ce ai nevoie pentru anvelopele și jantele mașinii tale. De la montajul și echilibrarea anvelopelor noi, la schimbul sezonier și geometria roților 3D.\n\nDispunem de echipamente profesionale de montaj și echilibrare care protejează jantele de zgârieturi. Geometria 3D computerizată asigură alinierea perfectă a roților, prelungind durata de viață a anvelopelor și îmbunătățind comportamentul rutier.\n\nOferim și vânzare de anvelope noi de la producători de top, la prețuri competitive. Te consiliem în alegerea anvelopelor potrivite pentru mașina ta și stilul tău de condus.",
    faq: [
      {
        question: "Cât costă un schimb de anvelope sezonier?",
        answer:
          "Prețul schimbului sezonier include demontarea, montajul și echilibrarea celor 4 roți. Contactează-ne pentru prețul exact, care variază în funcție de dimensiunea jantelor.",
      },
      {
        question: "Oferiți serviciu de hotel anvelope?",
        answer:
          "Momentan nu oferim depozitare de anvelope, dar te putem ajuta cu recomandări. Schimbul sezonier este rapid - de obicei în 30-45 de minute.",
      },
      {
        question: "Faceți geometrie 3D?",
        answer:
          "Da, dispunem de stand de geometrie 3D computerizat. Recomandăm verificarea geometriei la fiecare 15.000 km sau după orice intervenție la suspensie/direcție, pentru a preveni uzura neuniformă a anvelopelor.",
      },
    ],
    relatedSlugs: ["mecanica-auto", "piese-auto", "itp"],
  },
  {
    slug: "itp",
    icon: ClipboardCheck,
    title: "ITP",
    subtitle: "Inspecție Tehnică Rapidă și Corectă",
    metaTitle: "ITP București | Autohub Service Pipera",
    metaDescription:
      "ITP rapid și corect în București zona Pipera. Pregătire prealabilă, remediere probleme, inspecție tehnică periodică. Autohub Service Pipera.",
    image: null,
    items: [
      "Inspecție tehnică periodică",
      "Pregătire prealabilă ITP",
      "Remediere probleme depistate",
    ],
    description:
      "Inspecția Tehnică Periodică (ITP) este obligatorie pentru toate vehiculele înmatriculate în România. La Autohub Service Pipera, oferim un serviciu complet - de la pregătirea prealabilă a vehiculului, la efectuarea inspecției și remedierea eventualelor probleme depistate.\n\nÎnainte de ITP, verificăm gratuit principalele puncte de control: sistemul de frânare, direcția, suspensie, iluminarea, emisiile și starea generală a vehiculului. Dacă identificăm probleme care ar putea duce la respingere, le remediem rapid și eficient.\n\nAstfel, economisești timp și bani - nu mai trebuie să mergi la ITP de mai multe ori. Pregătire + inspecție + remediere, totul într-un singur loc.",
    faq: [
      {
        question: "Cât durează ITP-ul?",
        answer:
          "Inspecția tehnică propriu-zisă durează aproximativ 30 de minute. Dacă optezi și pentru verificarea prealabilă, adaugă încă 30-60 de minute. În total, poți pleca cu ITP-ul făcut în aceeași zi.",
      },
      {
        question: "Ce documente am nevoie pentru ITP?",
        answer:
          "Ai nevoie de: cartea de identitate a vehiculului (CIV), certificatul de înmatriculare (talonul) și polița RCA valabilă. Dacă mașina are modificări, ai nevoie și de omologarea RAR.",
      },
      {
        question: "Ce se întâmplă dacă mașina pică ITP-ul?",
        answer:
          "Dacă vehiculul nu trece ITP-ul, primești un raport cu deficiențele constatate. La Autohub, le putem remedia imediat și reprogramăm inspecția fără costuri suplimentare de manoperă pentru verificarea prealabilă.",
      },
    ],
    relatedSlugs: ["mecanica-auto", "electrica-auto", "vulcanizare"],
  },
  {
    slug: "piese-auto",
    icon: Cog,
    title: "Piese Auto",
    subtitle: "Piese Originale și Aftermarket, Garantate",
    metaTitle: "Piese Auto București | Autohub Service Pipera",
    metaDescription:
      "Piese auto originale și aftermarket premium în București. Garanție inclusă, prețuri competitive. Comandă și montaj la Autohub Service Pipera.",
    image: null,
    items: ["Piese originale", "Aftermarket premium", "Garanție inclusă"],
    description:
      "La Autohub Service Pipera, folosim și comercializăm piese auto de calitate - atât originale (OEM), cât și aftermarket premium de la producători de încredere precum Bosch, Mann, Sachs, TRW, Brembo și alții.\n\nFiecare piesă vine cu garanție și certificat de conformitate. Te consiliem în alegerea raportului optim calitate-preț, fără a compromite siguranța sau durabilitatea. Nu folosim niciodată piese de calitate îndoielnică.\n\nPiesele pot fi comandate și montate direct la noi în service - nu trebuie să pierzi timp căutând și aducând piese din alte părți. Prețurile noastre sunt competitive, iar pentru lucrările efectuate la noi, oferim piese la preț preferențial.",
    faq: [
      {
        question: "Ce diferență este între piese originale și aftermarket?",
        answer:
          "Piesele originale (OEM) sunt identice cu cele montate din fabrică. Piesele aftermarket premium sunt produse de furnizori de top (Bosch, Brembo, etc.) la standarde echivalente, de obicei la un preț mai accesibil. Ambele opțiuni sunt sigure și garantate.",
      },
      {
        question: "Pot aduce piese proprii pentru montaj?",
        answer:
          "Da, acceptăm montajul pieselor aduse de client. Totuși, în acest caz garanția se aplică doar pentru manoperă, nu și pentru piese. Recomandăm piesele noastre pentru garanție completă.",
      },
      {
        question: "Cât durează comanda unei piese?",
        answer:
          "Piesele comune sunt de obicei disponibile în 24 de ore. Pentru piese mai rare sau specifice anumitor modele, termenul poate fi de 2-5 zile lucrătoare. Te informăm întotdeauna despre disponibilitate și termen înainte de comandă.",
      },
    ],
    relatedSlugs: ["mecanica-auto", "electrica-auto", "vulcanizare"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
