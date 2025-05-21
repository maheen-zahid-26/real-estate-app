export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  description: string;
  imageUrl: string;
  address: {
    governorate: string;
    district: string;
    street: string;
  };
  area: string;
  rooms: number;
  features: string[]; // e.g. ['Garage', 'Garden']
  amenities: string[]; // e.g. ['Netflix', 'Satellite Internet']
  nearby: string[]; // e.g. ['Hospital', 'Restaurant']
  gallery: string[]; // image URLs
  videoUrl: string; // video URL
}
