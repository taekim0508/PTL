export type FaqItem = {
  q: string;
  a: string;
  points?: string[];
  aAfter?: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  icon: string;
  items: FaqItem[];
};

export const faqIntro = {
  heading: "Frequently Asked Questions",
  lead: "Answers for new and current PTL Treehouse families.",
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "General Information",
    icon: "house",
    items: [
      {
        q: "What ages do you accept?",
        a: "Children ages 2.5 to 5 years old. Our programs are designed to support their growth and learning in an age-appropriate way.",
      },
      {
        q: "What are your hours of operation?",
        a: "Monday through Friday, 8:30 AM – 3:30 PM.",
      },
      {
        q: "Do you offer part-time or full-time programs?",
        a: "Yes. We offer both part-time and full-time options to fit your family's schedule.",
      },
      {
        q: "Do you follow a school-year schedule?",
        a: "Yes, we follow the Everett School District calendar, including holidays, Winter Break, Mid-Winter Break, Spring Break, snow days, and other weather-related closures. We are closed in August to prepare for the new school year. There are no make-up days for missed school.",
      },
      {
        q: "Does my child need to be potty trained?",
        a: "Yes. Children must be potty trained before enrollment. Our teachers are happy to assist with wiping and dressing if parents are comfortable with it.",
      },
      {
        q: "Do you have nap time?",
        a: "Yes. Full-day students participate in a daily rest time to recharge.",
      },
      {
        q: "What if my child doesn't want to nap?",
        a: "While we encourage rest time, children who don't want to sleep can play quietly on their cots.",
      },
      {
        q: "Do you go outside in bad weather?",
        a: "Yes, we go outside every day unless the weather is dangerous. During the rainy season, we play under cover to stay dry.",
      },
      {
        q: "What is your teacher-to-student ratio?",
        a: "We maintain a 1:7 teacher-to-student ratio to ensure each child receives individual attention.",
      },
    ],
  },
  {
    id: "curriculum",
    label: "Curriculum & Learning",
    icon: "book-open",
    items: [
      {
        q: "What is your core value?",
        a: "At PTL Treehouse, we believe every child should feel loved, valued, and accepted by the grace of God.",
      },
      {
        q: "What makes PTL Treehouse special?",
        a: "We focus on three key pillars:",
        points: [
          "Play to Learn: children learn best through play, and our curriculum supports intellectual, emotional, and physical growth.",
          "Pray to Learn: as a Christian preschool, we help children grow spiritually through worship, Bible stories, and daily devotionals.",
          "Prepare to Learn: we prepare children for Kindergarten and beyond, offering a dual-language program for Korean-American families to preserve cultural heritage.",
        ],
      },
      {
        q: "What do children learn at your preschool?",
        a: "We focus on learning through play, art, and hands-on activities. Children develop social skills, learn numbers and letters, and practice problem-solving.",
      },
      {
        q: "How do you prepare children for Kindergarten?",
        a: "We teach essential skills like sharing, listening, and basic reading and math to ensure a smooth transition to Kindergarten.",
      },
      {
        q: "Do you use technology in the classroom?",
        a: "We use a small amount of age-appropriate technology, but our focus is on hands-on, play-based learning.",
      },
      {
        q: "What curriculum do you use?",
        a: "",
        points: [
          "Korean Language & Culture: our K-Box program makes learning Korean fun with tools like Hello Hangul! and interactive activities.",
          "English Readiness: Zoo-phonics combines sounds, letters, and movement to teach reading, writing, and spelling.",
          "Kinder Readiness: the Mother Goose Time curriculum focuses on hands-on learning in literacy, math, science, and art.",
        ],
      },
      {
        q: "How do you handle discipline?",
        a: "We use positive guidance strategies to encourage emotional regulation, self-control, and social problem-solving, modeling good behavior, redirecting, and explaining clear, consistent rules. We never use physical punishment, isolation, or withholding food or sleep. If a behavior issue arises, we work with parents to find a solution.",
      },
      {
        q: "What language is used at school?",
        a: "We are a bilingual Korean-English preschool:",
        points: [
          "Monday to Wednesday: main circle time in English, with some Korean for explanation.",
          "Thursday to Friday: main circle time in Korean, focusing on teaching the language.",
          "Throughout the day, we use both Korean and English in activities.",
        ],
      },
      {
        q: "Are your teachers certified?",
        a: "Yes. All our teachers have degrees in Early Childhood Education and participate in ongoing training.",
      },
    ],
  },
  {
    id: "safety",
    label: "Safety & Health",
    icon: "shield-check",
    items: [
      {
        q: "How do you keep children safe?",
        a: "We have secure doors, safe play areas, and staff trained in CPR and first aid. Your child's safety is our top priority.",
      },
      {
        q: "What is your sick-child policy?",
        a: "If your child has a fever, is vomiting, or seems very sick, please keep them home until they feel better. This helps keep everyone healthy.",
      },
      {
        q: "Can you accommodate food allergies?",
        a: "Yes. We can work with you to accommodate food allergies, and we are a nut-free school.",
      },
    ],
  },
  {
    id: "enrollment",
    label: "Enrollment & Fees",
    icon: "wallet",
    items: [
      {
        q: "How do I enroll my child?",
        a: "Visit our website or send us a text message to schedule a tour. We'll guide you through the enrollment process and answer any questions.",
      },
      {
        q: "How much does it cost?",
        a: "See our Admissions page for current tuition and registration fees. Contact us for detailed pricing information.",
      },
      {
        q: "Do you have a waitlist?",
        a: "No. Enrollment is on a first-come, first-served basis.",
      },
    ],
  },
  {
    id: "involvement",
    label: "Parent Involvement",
    icon: "users",
    items: [
      {
        q: "Can I visit during the day?",
        a: "Yes, parents and guardians are welcome, but we recommend scheduling in advance to avoid disrupting the classroom.",
      },
      {
        q: "How will I know how my child is doing?",
        a: "We provide regular updates, photos, and reports through the Brightwheel app, and you're welcome to speak with teachers anytime.",
      },
      {
        q: "Can I volunteer?",
        a: "Absolutely. We'd love your help with events, trips, or classroom activities.",
      },
    ],
  },
  {
    id: "activities",
    label: "Programs & Activities",
    icon: "palette",
    items: [
      {
        q: "Do you provide meals and snacks?",
        a: "Yes, we offer healthy snacks and meals. You're also welcome to pack food if your child has special dietary needs.",
      },
      {
        q: "What should my child bring to school?",
        a: "A backpack, extra clothes, and anything your child needs for nap time. Please label everything. A full list is in our parent handbook.",
      },
      {
        q: "Do you offer extracurricular activities?",
        a: "Yes: music, art, soccer, and yoga. Soccer is the only program with an additional fee, and you sign up directly with Soccer Shots.",
      },
      {
        q: "Tell me more about the Soccer Shots program.",
        a: "Soccer Shots is required for enrolled students, and parents register separately. The fee is approximately $176 per season (8 weeks), across three seasons: fall, winter, and spring. Registration details are announced later. Soccer Shots provides no financial benefit to the school.",
      },
      {
        q: "How do you communicate with parents?",
        a: "We use the Brightwheel app for daily updates, photos, check-in and check-out, and school communication.",
      },
    ],
  },
];

export const faqCloser = {
  heading: "Still have questions?",
  body: "Message us at 425-753-1550 or email info@ptltreehouse.com. We're here to help.",
};
