import { Property } from '../models/property.model';

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Cozy Cottage',
    price: '$250,000',
    location: 'Los Angeles',
    description: 'A cozy cottage in a peaceful neighborhood.',
    imageUrl: 'https://source.unsplash.com/featured/?cottage',
    address: {
      governorate: 'California',
      district: 'LA County',
      street: 'Maple Street 101'
    },
    area: '1200 sq ft',
    rooms: 3,
    features: ['Garage', 'Garden'],
    amenities: ['Satellite Internet', 'Netflix'],
    nearby: ['Hospital', 'School'],
    gallery: [
      'https://source.unsplash.com/featured/?cottage,1',
      'https://source.unsplash.com/featured/?cottage,2'
    ],
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  },
  {
    id: 2,
    title: 'Luxury Villa',
    price: '$1,200,000',
    location: 'Miami',
    description: 'Beachfront villa with top-tier facilities.',
    imageUrl: 'https://source.unsplash.com/featured/?villa',
    address: {
      governorate: 'Florida',
      district: 'Miami-Dade',
      street: 'Ocean Drive 88'
    },
    area: '3500 sq ft',
    rooms: 5,
    features: ['Garage', 'Garden'],
    amenities: ['Satellite Internet', 'Netflix', 'Jacuzzi'],
    nearby: ['Hospital', 'Restaurant', 'School'],
    gallery: [
      'https://source.unsplash.com/featured/?villa,1',
      'https://source.unsplash.com/featured/?villa,2'
    ],
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  }
];
