export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  category: string;
  sector?: string;
  province: string;
  location?: string;
  qualification_level: string;
  eligibility?: string[];
  documents_needed?: string[];
  description: string;
  benefits?: string;
  stipend?: string;
  closing_date: string;
  application_url: string;
  source_name: string;
  source_url: string;
  verified: boolean;
  featured: boolean;
  sponsored?: boolean;
  expired?: boolean;
  tags?: string[];
  posted_date: string;
  updated_date: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  category: string;
  intro: string;
  body_sections?: { heading: string; content: string }[];
  faq?: { q: string; a: string }[];
  related_links?: string[];
  meta_title: string;
  meta_description: string;
  published_date: string;
  updated_date: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  path: string;
  description: string;
}
