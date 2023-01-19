// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  num_squared: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let n: number  = +(req.query.num || 1)
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json({ num_squared: n*n })
}
