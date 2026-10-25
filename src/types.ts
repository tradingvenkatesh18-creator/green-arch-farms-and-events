export interface BookingInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  stayType: 'overnight' | 'day_outing' | 'event_package';
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  addons: string[];
  totalPrice: number;
  status: 'Pending Review' | 'Approved' | 'Contacted';
  createdAt: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  imageUrl?: string;
}

export interface ExperiencePackage {
  id: string;
  title: string;
  description: string;
}

export interface PriceRate {
  stayType: 'overnight' | 'day_outing' | 'event_package';
  name: string;
  tagline: string;
  weekdayRate: number;
  weekendRate: number;
  description: string;
  capacity: string;
  rules: string[];
}

export interface PropertyPhoto {
  id: string;
  url: string;
  alt: string;
  category: string;
}
