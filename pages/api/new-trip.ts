import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    id: 'trip-7890',
    pickupLocation: {
      latitude: 34.0522,
      longitude: -118.2437, // Los Angeles
    },
    dropoffLocation: {
      latitude: 36.1699,
      longitude: -115.1398, // Las Vegas
    },
    rider: {
      id: 'rider-CD18',
      name: 'Chudi Duru',
    },
    driver: {
      id: 'driver-lx01',
      name: 'Chuka Duru',
    },
    vehicle: {
      make: 'Lamborghini',
      model: 'Huracán EVO',
      licensePlate: 'LMB-640',
    },
    estimatedArrival: '80 mins',
    status: 'on-the-way',
    priceEstimate: '$8500.00',
  });
}



