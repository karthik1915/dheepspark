export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
  duration?: string;
  attendees?: string;
  status: "upcoming" | "past" | "ongoing";
  category: string;
  features: string[];
  outcomes: string[];
  content?: string[];
  quote?: string;
  author?: string;
}

export const events: Event[] = [
  {
    id: "speak-with-spark",
    title: "Speak with Spark",
    description:
      "On a mission to fulfill the communication gap among the students to express their talents in their specific field. Be a Fluent English Speaker in 2023 with our comprehensive 200-day program.",
    shortDescription:
      "Interactive sessions to ignite your inner potential and discover your hidden talents through personalized coaching.",
    image: "/api/placeholder/400/300",
    date: "2024-03-15",
    time: "10:00 AM",
    location: "Online",
    price: "₹99",
    duration: "200 Days",
    attendees: "500+",
    status: "upcoming",
    category: "Communication",
    features: [
      "Course Duration - 200 Days",
      "WhatsApp Engagement and Support",
      "Special Attention to students who are Active during the Course",
      "Monthly Live Sessions to brush up on your English and clarify doubts",
      "Grammar, Vocabulary, and Fluency will be covered",
      "Workshops on Soft Skills, Etiquette, and Interview skills will be conducted",
    ],
    outcomes: [
      "Will be a Fluent English Speaker",
      "Your Communication Skills will be improved",
      "Improvement in your Speaking and Writing style",
    ],
  },
  {
    id: "wonder-women-virtual-awards-2022",
    title: "Wonder Women Virtual Awards 2022!",
    description:
      "Wonder Woman Awards 2022 is a token of recognition towards women empowerment and their impeccable contribution towards the Society and to promote the positive impacts which help her to bring greater visibility to Women's Achievement.",
    shortDescription:
      "Celebrating exceptional women achievers who have made remarkable contributions to their fields and communities.",
    image: "/api/placeholder/400/300",
    date: "2024-03-08",
    time: "08:00 PM",
    location: "Virtual, India",
    price: "Free",
    status: "past",
    category: "Awards",
    features: [
      "National recognition for women across the nation and globe",
      "Recognition for proven excellence in domain areas",
      "Focus on Home Makers this year",
      "Virtual event accessible from anywhere",
      "Awards ceremony with distinguished guests",
    ],
    outcomes: [
      "Recognition of women's achievements",
      "Increased visibility for women's contributions",
      "Inspiration for future generations",
      "Networking opportunities with like-minded women",
    ],
    quote:
      "The Homemaker has the ultimate career. All other careers exist for one purpose only - and that is to support the ultimate career",
    author: "C.S. Lewis",
  },
  {
    id: "whats-your-tomorrow-career-guidance-session",
    title: "What's Your Tomorrow - Career Guidance Session",
    description:
      "A Career Guidance Program for final year students about the WFH opportunities and Gig Economy. More than 500+ students attended the session and got benefitted. Many tried working gig jobs using the profiles we created for them and started to earn.",
    shortDescription:
      "Personalized career guidance sessions to help you discover your path and make informed decisions about your future.",
    image: "/api/placeholder/400/300",
    date: "2024-02-20",
    time: "02:00 PM",
    location: "Online",
    price: "Free",
    attendees: "500+",
    status: "past",
    category: "Career Guidance",
    features: [
      "Focus on WFH opportunities",
      "Gig Economy insights",
      "Profile creation assistance",
      "Real earning opportunities",
      "Expert guidance from industry professionals",
    ],
    outcomes: [
      "Clear understanding of career options",
      "Practical skills for gig economy",
      "Profile optimization for better opportunities",
      "Immediate earning potential",
    ],
  },
  {
    id: "entrepreneurship-development-program",
    title: "Entrepreneurship Development Program",
    description:
      "Entrepreneurship Development Program on Aari Work. This program is to encourage women students to kick start their careers as a Designer and to begin a startup of their own. 300+ students attended the program and got benefitted.",
    shortDescription:
      "Build your entrepreneurial skills and mindset with comprehensive training programs designed for aspiring business leaders.",
    image: "/api/placeholder/400/300",
    date: "2024-01-15",
    time: "11:00 AM",
    location: "Online",
    price: "₹500",
    attendees: "300+",
    status: "past",
    category: "Entrepreneurship",
    features: [
      "Basics of Aari Designs",
      "Advanced Aari Designs",
      "Be your own Costume Designer",
      "How to start your own Aari Work Business in 30Days",
      "Hands-on practical training",
      "Business development guidance",
    ],
    outcomes: [
      "Master Aari design techniques",
      "Start your own design business",
      "Develop entrepreneurial mindset",
      "Create sustainable income streams",
    ],
  },
  {
    id: "motivational-program-for-10th-and-12th-std-students",
    title: "Motivational Program for 10th & 12th Standard Students",
    description:
      "Inspiring the next generation of leaders with motivational programs designed specifically for 10th and 12th standard students to help them discover their potential and plan their future.",
    shortDescription:
      "Inspiring the next generation of leaders with motivational programs designed specifically for 10th and 12th standard students.",
    image: "/api/placeholder/400/300",
    date: "2024-04-01",
    time: "03:00 PM",
    location: "Online",
    price: "Free",
    status: "upcoming",
    category: "Motivation",
    features: [
      "Age-appropriate motivational content",
      "Career guidance for students",
      "Study techniques and time management",
      "Goal setting and planning",
      "Interactive sessions with peers",
      "Parent-student engagement",
    ],
    outcomes: [
      "Increased motivation and confidence",
      "Clear career direction",
      "Better study habits",
      "Improved academic performance",
      "Enhanced life skills",
    ],
  },
];

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter((event) => event.category === category);
}

export function getUpcomingEvents(): Event[] {
  return events.filter((event) => event.status === "upcoming");
}

export function getPastEvents(): Event[] {
  return events.filter((event) => event.status === "past");
}
