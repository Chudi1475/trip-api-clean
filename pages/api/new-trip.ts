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
      id: 'rider-jc12',
      name: 'Marcus Taylor',
    },
    driver: {
      id: 'driver-lx01',
      name: 'Leo Santana',
    },
    vehicle: {
      make: 'Lamborghini',
      model: 'Huracán EVO',
      licensePlate: 'LMB-640',
    },
    estimatedArrival: '4 mins',
    status: 'on-the-way',
    priceEstimate: '$850.00',
  });
}
