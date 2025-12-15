export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface Bonus {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
}

export interface Module {
  title: string;
  lessons: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}