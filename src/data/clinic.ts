// Content of the homepage. Every fact comes from veon/client.json (ids in comments). Nothing invented.

export const clinic = {
  name: "Dental Space", // C-001
  slogan: "Ми змінюємо життя, змінюючи посмішки", // C-014
  phone: { href: "tel:+380682885711", display: "+38 068 288 57 11" }, // C-004
  email: "dentalspaceif@gmail.com", // C-004
  address: "вул. Хіміків, 3б", // C-003
  city: "м. Івано-Франківськ",
  hours: [
    { days: "Пн–Пт", time: "9:00–19:00" },
    { days: "Сб", time: "9:00–17:00" },
  ], // C-005 (неділя не вказана — не пишемо)
  instagram: { href: "https://www.instagram.com/dentalspace__/", handle: "@dentalspace__" }, // C-028
  // C-003: Google map pin «Dental Space клініка естетичної стоматології»
  map: "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Dental Space клініка естетичної стоматології, вулиця Хіміків, Івано-Франківськ"),
  rating: { value: "4,9", count: 46, source: "Google Maps, листопад 2026" }, // C-030
};

export const nav = [
  { href: "#directions", label: "Напрями" },
  { href: "#doctors", label: "Лікарі" },
  { href: "#prices", label: "Ціни" },
  { href: "#trust", label: "Чому ми" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#contacts", label: "Контакти" },
];

export interface Price { label: string; value: string; }
export interface Direction { id: string; name: string; summary: string; prices: Price[]; short?: string; }

// C-007 (8 directions), prices: company.products_services, C-009
export const directions: Direction[] = [
  {
    id: "aesthetic",
    name: "Естетична стоматологія",
    summary: "Керамічні вініри та цифрове моделювання посмішки перед початком роботи.",
    prices: [
      { label: "Вінір керамічний", value: "300 €" },
      { label: "Цифрове моделювання посмішки", value: "2000 грн" },
    ],
    short: "вінір 300 €",
  },
  {
    id: "treatment",
    name: "Лікування зубів",
    summary: "Лікування під мікроскопами з флуоресцентним світлом, з фотопротоколом камерами Nikon.",
    prices: [],
  },
  {
    id: "surgery",
    name: "Хірургія",
    summary: "Видалення зубів, зокрема зубів мудрості.",
    prices: [{ label: "Видалення зуба мудрості (нижня щелепа)", value: "3000 грн" }],
    short: "3000 грн",
  },
  {
    id: "implants",
    name: "Імплантація",
    summary: "Імпланти Jdental, Matrix, Nobell, Strauman; синусліфтинг і кісткова аугментація.",
    prices: [
      { label: "Імплант Jdental (Італія)", value: "400 €" },
      { label: "Синусліфтинг", value: "від 350 €" },
      { label: "Кісткова аугментація", value: "від 300 €" },
    ],
    short: "від 400 €",
  },
  {
    id: "prosthetics",
    name: "Ортопедія",
    summary: "Коронки та вініри: відновлення форми й функції зубів.",
    prices: [{ label: "Коронка цирконієва", value: "200 €" }],
    short: "200 €",
  },
  {
    id: "orthodontics",
    name: "Ортодонтія",
    summary: "Брекет-системи та лікування елайнерами з необмеженою кількістю елайнерів.",
    prices: [
      { label: "Брекет-система (1 щелепа)", value: "500–750 $" },
      { label: "Лікування елайнерами", value: "120 000 грн" },
    ],
    short: "від 500 $",
  },
  {
    id: "whitening",
    name: "Відбілювання",
    summary: "Професійне відбілювання системою Beyond.",
    prices: [],
  },
  {
    id: "prevention",
    name: "Профілактика",
    summary: "Професійна гігієна апаратом AIR-FLOW Prophylaxis Master від EMS.",
    prices: [{ label: "Професійна гігієна складна", value: "2500 грн" }],
    short: "2500 грн",
  },
];

// C-010
export const founder = {
  name: "Коваль Олег Володимирович",
  role: "Засновник, головний лікар",
  spec: "Ортопед, хірург, ендодонтист",
};
export const doctors = [
  { key: "ivakhniuk", name: "Івахнюк Владислав Петрович", spec: "Терапевт" },
  { key: "myronyk", name: "Мироник Олександр Миколайович", spec: "Терапевт" },
  { key: "khariv", name: "Харів Юлія Романівна", spec: "Ортодонт" },
  { key: "voloshchak", name: "Волощак Володимир Михайлович", spec: "Хірург" },
  { key: "chopyk", name: "Чопик Мілада Віталієвна", spec: "Терапевт" },
] as const;

// C-012 (benefit wording kept factual, no medical promises)
export const tech = [
  { name: "Primescan Dentsply Sirona", text: "цифрові відбитки без відбиткової маси" },
  { name: "Мікроскопи з флуоресцентним світлом", text: "лікування під збільшенням" },
  { name: "Камери Nikon Full Frame", text: "фотопротокол до і під час лікування" },
  { name: "AIR-FLOW Prophylaxis Master", text: "професійна гігієна" },
];
// C-013
export const comfort = ["Плед", "Бездротові навушники під час процедур", "Кава, чай або вода", "Антистрес-іграшка"];

export const futureNote = "Розділ у розробці";
