export interface Driver {
  id: string;
  name: string;
  vehicle: {
    model: string;
    year: string;
    capacity: string;
  };
  rating: number;
  reviews: Review[];
  available: boolean;
}

export interface Review {
  id: string;
  companyId: string;
  companyName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FreightJob {
  id: string;
  companyId: string;
  companyName: string;
  title: string;
  description: string;
  origin: string;
  destination: string;
  price: number;
  deadline: string;
  requirements: string[];
  status: 'open' | 'assigned' | 'completed';
}