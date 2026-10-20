export type Language = 'en' | 'bn';

export interface Project {
  id: string;
  title: string;
  titleBn: string;
  category: 'shopify' | 'logo' | 'speed' | 'custom';
  client: string;
  industry: string;
  description: string;
  descriptionBn: string;
  metrics?: { label: string; value: string }[];
  tags: string[];
  thumbnail: string;
  featured?: boolean;
  liveUrl?: string;
  mockups?: {
    type: 'store' | 'dark' | 'business_card' | 'packaging' | 'app_icon';
    title: string;
    description: string;
  }[];
  challenge?: string;
  challengeBn?: string;
  solution?: string;
  solutionBn?: string;
  deliverables?: string[];
  colorPalette?: string[];
}

export interface Service {
  id: string;
  title: string;
  titleBn: string;
  icon: string;
  shortDesc: string;
  shortDescBn: string;
  deliverables: string[];
  deliverablesBn: string[];
  startingPrice: string;
  turnaround: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryFlag: string;
  avatar: string;
  rating: number;
  content: string;
  contentBn: string;
  projectType: string;
  date: string;
}

export interface FaqItem {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: string;
}
