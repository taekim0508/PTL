export const programsIntro =
  "Every program includes Korean-English bilingual instruction woven throughout the week, Monday through Wednesday in English and Thursday through Friday in Korean.";

export const programs = [
  {
    id: "morning",
    image: "/home/activities-2.jpg" as string | null,
    imageAlt: "Morning classroom",
    name: "Morning Preschool",
    hours: "8:30 AM – 12:30 PM",
    tuition: "$900",
    summary:
      "A nurturing morning focused on learning through play, social development, and Kindergarten readiness.",
    lead: "Perfect for families looking for a nurturing preschool experience focused on learning through play, social development, and Kindergarten readiness. Includes:",
    includes: [
      "Circle Time",
      "Bible Devotions",
      "Literacy Activities",
      "Korean & English Language Learning",
      "Music & Movement",
      "Outdoor Play",
      "Story Time",
      "Art & Creative Exploration",
      "Snack",
    ],
  },
  {
    id: "full-day",
    image: "/home/kids-naptime.jpg" as string | null,
    imageAlt: "Preschoolers resting on cots during quiet time",
    name: "Full-Day Program",
    hours: "8:30 AM – 3:30 PM",
    tuition: "$1,700",
    summary:
      "A balanced full day of learning, rest, exploration, and enrichment.",
    lead: "Our full-day program provides children with a balanced day of learning, rest, exploration, and enrichment. Includes:",
    includes: [
      "Full morning curriculum",
      "Hot lunch",
      "Rest and quiet time",
      "Afternoon enrichment classes",
      "Additional snack",
    ],
  },
  {
    id: "aftercare",
    image: "/home/aftercare.jpg" as string | null,
    imageAlt: "A row of well-used crayons lined up on a classroom table",
    name: "Aftercare Program",
    hours: "3:30 PM – 4:00 PM",
    tuition: "$100",
    summary:
      "A little extra care at the end of the day, filled with play and gentle learning.",
    lead: "For families who need a little more time before pickup. Aftercare is the same familiar room and the same familiar teachers, with no rush to finish. Children spend the half hour:",
    includes: [
      "Finishing a project they weren't ready to put down",
      "Playing quietly with friends",
      "Reading and winding down",
      "Making a calm transition home",
    ],
  },
];

export const bilingual = {
  eyebrow: "Our Bilingual Program",
  heading: "More Than Learning Two Languages",
  body: "Our bilingual program helps children naturally develop confidence in both Korean and English while preserving cultural identity and strengthening family connections.",
  benefits: [
    "Build confidence",
    "Preserve cultural identity",
    "Connect with family",
    "Strengthen communication",
    "Develop cognitive flexibility",
  ],
  schedule: [
    { label: "Monday to Wednesday", line: "English-focused learning with Korean support." },
    { label: "Thursday to Friday", line: "Korean-focused learning with English support." },
  ],
  closing: "Both languages are naturally incorporated throughout the day.",
};
