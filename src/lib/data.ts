export type NavSection =
  | "home"
  | "about"
  | "programs"
  | "why-ptl"
  | "parent-resources"
  | "contact";

export const navItems: { label: string; section: NavSection }[] = [
  { label: "About Us", section: "about" },
  { label: "Programs", section: "programs" },
  { label: "Why PTL", section: "why-ptl" },
  { label: "Parent Resources", section: "parent-resources" },
  { label: "Contact", section: "contact" },
];

export const homeFacts = [
  {
    label: "Ages 2.5–5",
    line: "A warm preschool community for early learners.",
  },
  {
    label: "Korean-English bilingual",
    line: "Both languages are naturally woven into the week.",
  },
  {
    label: "Christian preschool",
    line: "Faith is part of everyday rhythms and relationships.",
  },
  {
    label: "Play-based learning",
    line: "Children learn through hands-on discovery and joy.",
  },
  {
    label: "13+ years serving families",
    line: "A trusted school home for local families.",
  },
];

export const homeFoundations = [
  {
    label: "Play to Learn",
    line: "Children learn through hands-on experiences that support intellectual, emotional, physical, and creative growth.",
    icon: "sprout",
  },
  {
    label: "Pray to Learn",
    line: "Faith is part of daily life through worship, Bible stories, devotions, prayer, and gratitude before meals.",
    icon: "cross",
  },
  {
    label: "Prepare to Learn",
    line: "We help children build confidence, independence, and the academic and social foundations they need for kindergarten.",
    icon: "graduation-cap",
  },
];

export const programs = [
  {
    id: "morning",
    name: "Morning Preschool",
    hours: "8:30 AM – 12:00 PM",
    summary: "A nurturing morning focused on play-based learning and kindergarten readiness.",
    detail:
      "Children begin the day with worship and circle time, then move through learning centers, bilingual instruction, and outdoor play. Best for families easing into a preschool routine.",
  },
  {
    id: "morning-lunch",
    name: "Morning + Lunch",
    hours: "8:30 AM – 12:30 PM",
    summary: "Everything in the morning program, plus a warm lunch and extended learning time.",
    detail:
      "Includes the full morning curriculum plus a family-style lunch that builds independence and table manners, followed by extra learning-center time before pickup.",
  },
  {
    id: "full-day",
    name: "Full Day Program",
    hours: "8:30 AM – 3:30 PM",
    summary: "A balanced full day of learning, rest, and enrichment.",
    detail:
      "A complete day for working families: morning academics, lunch, quiet rest time, afternoon enrichment (art, music, movement), and unhurried outdoor play.",
  },
  {
    id: "aftercare",
    name: "Aftercare",
    hours: "3:30 PM – 4:00 PM",
    summary: "A short, steady close to the school day for families who need extra flexibility.",
    detail:
      "Children wind down with supervised play and a calm transition before pickup at the end of the afternoon.",
  },
];

export const homeTestimonials = [
  {
    quote:
      "Both of my kids attended PTL Treehouse, and they were well prepared academically for kindergarten. Even now, they still talk about their experiences there. That says a great deal about how meaningful those early years were for them.",
    attribution: "Angela Choi",
  },
  {
    quote:
      "The love and support our children received at PTL will carry them throughout their lives. Their staff and curriculum are second to none. We are deeply grateful for the joy, care, and strong foundation they received there.",
    attribution: "Sunjung Lee",
  },
  {
    quote:
      "Following my first child, my second child also attends PTL. For our family, choosing PTL again was a natural decision. The teachers have become more trustworthy with each passing day, and PTL’s Korean-English environment has been a tremendous gift for our family.",
    originalQuote:
      "첫째아이에 이어 둘째도 PTL에 다니고 있습니다. 우리집같은 편안한 환경에 너무나도 좋은 선생님들과, 영양뿐만 아니라 맛도 최고인 점심식사가 있는 곳을 찾았을 때 사막에서 오아시스를 찾은 기분이었습니다. 가족외 누군가를 믿는다는 것은 쉬운 일이 아닙니다만, PTL 선생님들께서는 날이 가면 갈 수록 더 믿음이 가는 분들입니다. 그렇기 때문에 제 아이들이 학교를 좋아하고 선생님들을 좋아하는 것이라 생각합니다.",
    showOriginalFirst: true,
    attribution: "Soyon Kim",
  },
];

export const homeDirectorMessage = {
  heading: "A Message from Esther and Julie",
  body:
    "Choosing a preschool means choosing the environment that will shape your child’s earliest experiences of learning, friendship, and faith. At PTL Treehouse, we want every child to feel safe, known, encouraged, and deeply loved.",
  signoff: [
    "Esther Koh, Founder",
    "Julie Kim, Co-Owner",
    "Co-Directors of PTL Treehouse",
  ],
};

export const bilingualSchedule = [
  {
    label: "Monday–Wednesday",
    line: "English-focused learning with Korean support.",
  },
  {
    label: "Thursday–Friday",
    line: "Korean-focused learning with English support.",
  },
];

export const whyPTL = [
  {
    label: "Christian Values",
    line: "Faith woven naturally into daily rhythms, prayer, and story — not a separate subject.",
    icon: "cross",
  },
  {
    label: "Bilingual Education",
    line: "Children hear and use both Korean and English throughout the week, immersively.",
    icon: "languages",
  },
  {
    label: "Play-Based Learning",
    line: "Curiosity-led exploration that builds real academic and social foundations.",
    icon: "sprout",
  },
  {
    label: "Kindergarten Readiness",
    line: "Children leave prepared academically, socially, and emotionally.",
    icon: "graduation-cap",
  },
];

export const admissionsSteps = [
  { step: 1, label: "Schedule a Tour" },
  { step: 2, label: "Apply" },
  { step: 3, label: "Enrollment Decision" },
  { step: 4, label: "Welcome Packet" },
];

export const teamPlaceholders = [
  { name: "Esther Koh", role: "Co-Owner & Director" },
  { name: "Julie Kim", role: "Co-Owner & Director" },
  { name: "Lead Teacher", role: "Morning Program" },
  { name: "Lead Teacher", role: "Full Day Program" },
];

export const contactInfo = {
  address: "17615 132nd Ave SE, Mill Creek, WA 98012",
  phone: "425-753-1550",
  email: "info@ptltreehouse.com",
};
