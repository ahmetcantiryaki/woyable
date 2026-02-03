import { LucideIcon } from 'lucide-react';

export type PageView = 'home' | 'services' | 'about' | 'contact' | 'admin';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  view: PageView;
}
