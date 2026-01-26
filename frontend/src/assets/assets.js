import room1 from "@/assets/images/room1.jpg"
import room2 from "@/assets/images/room2.jpg"
import room3 from "@/assets/images/room3.jpg"
import room4 from "@/assets/images/room4.jpg"
import room5 from "@/assets/images/room5.jpg"
export const problems = [
  {
    title: "Too many things to find",
    description:
      "Rooms, mess, libraries, gyms — all on different platforms, all with different pricing.",
    icon: "Layers",
  },
  {
    title: "No clear cost comparison",
    description:
      "It’s hard to calculate your total monthly expense before actually moving.",
    icon: "Wallet",
  },
  {
    title: "Decisions based on guesswork",
    description:
      "Without a clear overview, students often overspend or choose poorly.",
    icon: "HelpCircle",
  },
];

export const solutions = [
  {
    title: "Build your own packages",
    description:
      "Combine rooms, mess, libraries, gyms and more into custom packages based on your needs.",
    icon: "Package",
  },
  {
    title: "Compare total costs",
    description:
      "See your complete monthly expense upfront and compare multiple package options side by side.",
    icon: "BarChart3",
  },
  {
    title: "Choose with confidence",
    description:
      "Make informed decisions without stress, surprises, or hidden costs.",
    icon: "CheckCircle",
  },
];


export const steps = [
  {
    title: "Explore facilities",
    description:
      "Browse rooms, mess, libraries, gyms and other essentials available in your city.",
    value: "1",
  },
  {
    title: "Create packages",
    description:
      "Combine facilities into custom packages based on your lifestyle and budget.",
    value: "2",
  },
  {
    title: "Compare & decide",
    description:
      "Compare total costs and choose the package that fits you best — with confidence.",
    value: "3",
  },
];

export const rooms = [
  {
    id: 1,
    type: "rooms",
    name: "Single Room",
    features: ["WiFi", "RO", "Furnished"],
    price: 6000,
    images: [room1, room2, room3, room4, room5],
    description:
      "Spacious single room ideal for students with all basic amenities and a comfortable living setup.",
  },
  {
    id: 2,
    type: "rooms",
    name: "Double Sharing Room",
    features: ["WiFi", "Balcony", "Semi-furnished"],
    price: 5000,
    images: [room2, room1, room3, room4, room5],
    description:
      "Well-ventilated double sharing room suitable for students and working professionals.",
  },
  {
    id: 3,
    type: "rooms",
    name: "Studio Room",
    features: ["AC", "Kitchen", "Power Backup"],
    price: 9000,
    images: [room3, room1, room2, room4, room5],
    description:
      "Independent studio room with private kitchen and modern facilities for premium living.",
  },
  {
    id: 4,
    type: "rooms",
    name: "Budget Room",
    features: ["Shared Bathroom", "Fan"],
    price: 3500,
    images: [room4, room1, room2, room3, room5],
    description:
      "Affordable accommodation option with essential facilities for students on a budget.",
  },
  {
    id: 5,
    type: "rooms",
    name: "Premium Room",
    features: ["AC", "WiFi", "Attached Bathroom"],
    price: 11000,
    images: [room5, room1, room2, room3, room4],
    description:
      "Luxury room with top-class amenities, privacy, and a comfortable lifestyle experience.",
  },
];

export const hostels = [
  {
    id: 1,
    type: "hostels",
    name: "Boys Hostel",
    features: ["Shared Room", "Mess Included"],
    price: 4500,
    images: [room1, room2, room3, room4, room5],
    description:
      "Affordable boys hostel with shared rooms, daily meals, and a student-friendly environment.",
  },
  {
    id: 2,
    type: "hostels",
    name: "Girls Hostel",
    features: ["Secure", "Mess", "Warden"],
    price: 5000,
    images: [room2, room3, room1, room4, room5],
    description:
      "Safe and secure girls hostel with warden supervision and quality mess facilities.",
  },
  {
    id: 3,
    type: "hostels",
    name: "PG Hostel",
    features: ["2 Sharing", "Laundry", "WiFi"],
    price: 6500,
    images: [room3, room1, room2, room4, room5],
    description:
      "Comfortable PG hostel offering modern amenities like WiFi and laundry services.",
  },
  {
    id: 4,
    type: "hostelss",
    name: "Luxury Student Hostel",
    features: ["AC", "Gym", "Study Room"],
    price: 9000,
    images: [room5, room4, room3, room2, room1],
    description:
      "Premium student hostel with AC rooms, gym access, and dedicated study spaces.",
  },
];

export const tiffins = [
  {
    id: 1,
    type: "tiffins",
    name: "Veg Tiffin Service",
    features: ["Lunch", "Dinner"],
    price: 3000,
    images: [room1, room2, room3, room4, room5],
    description:
      "Pure vegetarian tiffin service providing healthy lunch and dinner meals daily.",
  },
  {
    id: 2,
    type: "tiffins",
    name: "Home Style Mess",
    features: ["North Indian", "Daily Menu"],
    price: 2800,
    images: [room2, room3, room1, room4, room5],
    description:
      "Home-style North Indian meals with a rotating daily menu for students.",
  },
  {
    id: 3,
    type: "tiffins",
    name: "South Indian Tiffin",
    features: ["Idli", "Dosa", "Sambar"],
    price: 3200,
    images: [room3, room1, room2, room4, room5],
    description:
      "Authentic South Indian tiffin service with fresh and hygienic food options.",
  },
  {
    id: 4,
    type: "tiffins",
    name: "Premium Mess",
    features: ["Veg", "Non-Veg", "Weekly Special"],
    price: 4000,
    images: [room5, room4, room3, room2, room1],
    description:
      "Premium mess service offering both veg and non-veg meals with weekly specials.",
  },
  {
    id: 5,
    type: "tiffins",
    name: "Budget Mess",
    features: ["Simple Meals", "Student Friendly"],
    price: 2200,
    images: [room4, room1, room2, room3, room5],
    description:
      "Low-cost mess service designed for students looking for simple daily meals.",
  },
];

export const libraries = [
  {
    id: 1,
    type: "libraries",
    name: "Silent Study Library",
    features: ["AC", "WiFi", "Individual Desks"],
    price: 800,
    images: [room1, room2, room3, room4, room5],
    description:
      "Peaceful library environment with AC, WiFi, and individual study desks.",
  },
  {
    id: 2,
    type: "libraries",
    name: "24x7 Reading Room",
    features: ["Open All Day", "Power Backup"],
    price: 1200,
    images: [room2, room3, room1, room4, room5],
    description:
      "Reading room accessible 24x7 with uninterrupted power supply.",
  },
  {
    id: 3,
    type: "libraries",
    name: "Student Library",
    features: ["Budget Friendly", "Quiet Atmosphere"],
    price: 500,
    images: [room4, room1, room2, room3, room5],
    description:
      "Low-cost library option providing a calm and focused study environment.",
  },
  {
    id: 4,
    type: "libraries",
    name: "Premium Study Lounge",
    features: ["AC", "Coffee", "Ergonomic Chairs"],
    price: 1800,
    images: [room5, room4, room3, room2, room1],
    description:
      "Premium study lounge with comfortable seating, refreshments, and a modern vibe.",
  },
];

export const gyms = [
  {
    id: 1,
    type: "gyms",
    name: "Fitness Gym",
    features: ["Cardio", "Weights", "Trainer"],
    price: 1200,
    images: [room1, room2, room3, room4, room5],
    description:
      "Well-equipped gym with cardio machines, weight training, and professional trainers.",
  },
  {
    id: 2,
    type: "gyms",
    name: "24x7 Gym",
    features: ["Open All Day", "Modern Equipment"],
    price: 1500,
    images: [room2, room3, room1, room4, room5],
    description:
      "Modern gym open 24x7 for flexible workout schedules.",
  },
  {
    id: 3,
    type: "gyms",
    name: "Budget Gym",
    features: ["Basic Equipment", "Morning Batch"],
    price: 800,
    images: [room4, room1, room2, room3, room5],
    description:
      "Affordable gym with essential fitness equipment and morning workout batches.",
  },
  {
    id: 4,
    type: "gyms",
    name: "CrossFit Center",
    features: ["HIIT", "Cross Training"],
    price: 2000,
    images: [room5, room4, room3, room2, room1],
    description:
      "High-intensity CrossFit center focused on strength, endurance, and agility.",
  },
];

export const allFacilities = [
  ...rooms,
  ...hostels,
  ...tiffins,
  ...gyms,
  ...libraries,
];
