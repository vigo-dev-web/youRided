// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const escooters = [
  {
    manufacturer: 'Razor',
    model: 'A-35',
    scu: '123456',
    price: '4 500',
    type: 'escooter',
    new: true,
    bestSeller: false,
    warranty: 1,
    mainDetail: {
      speed: 30,
      distance: 40,
      power: 350,
      wheelDiameter: 8,
      weight: 14,
      chargeTime: 4
    },
    description: 'lorem14',
    mainPhoto: '',
    photos: []
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
