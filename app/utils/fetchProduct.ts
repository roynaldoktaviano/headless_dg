// "use server"

// import type { NextApiRequest, NextApiResponse } from 'next';

// const USERNAME = 'scissors';  // ganti sesuai
// const PASSWORD = 'steadfast';  // ganti sesuai

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await fetch('https://towering-name.localsite.io/wp-json/wp/v2/produk_doran', {
//       headers: {
//         'Authorization': 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64'),
//       },
//     });

//     if (!response.ok) {
//       return res.status(response.status).json({ message: `Failed to fetch: ${response.statusText}` });
//     }

//     const data = await response.json();
//     res.status(200).json(data);

//   } catch (error: any) {
//     res.status(500).json({ message: error.message || 'Internal Server Error' });
//   }
// }
