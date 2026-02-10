
export interface Internship {
  id: number;
  title: string;
  description: string;
  duration?: string;
  discountPrice?: string;
  features: string[];
  category?: 'tech';
  popular?: boolean;
}