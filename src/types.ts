export type ServiceCategory = 'all' | 'construction' | 'finishing' | 'renovation' | 'specialized';

export interface ConstructionService {
  id: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  imageUrl: string;
  estimatedTurnaround: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'construction' | 'renovation' | 'finishing' | 'exterior' | 'residential' | 'commercial';
  categoryLabel: string;
  location: string;
  parish: string;
  description: string;
  imageUrl: string;
  additionalImages?: string[];
  highlights: string[];
  completionTime: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  workDone: string[];
}

export interface CustomerReview {
  id: string;
  name: string;
  roleOrLocation: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  serviceUsed: string;
  avatarUrl?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  projectLocation: string;
  parish: string;
  projectType: 'Residential' | 'Commercial' | 'Renovation' | 'Finishing Only' | 'Industrial';
  estimatedBudget: string;
  projectDescription: string;
  files: string[];
}
