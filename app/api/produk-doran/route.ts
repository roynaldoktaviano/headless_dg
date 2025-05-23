// app/api/produk-doran/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const wpUrl = 'https://towering-name.localsite.io/wp-json/wp/v2/produk_doran?_embed';
  const username = 'scissors';
  const password = 'steadfast';

  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'));

  try {
    const response = await fetch(wpUrl, { headers });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Fetch failed: ${response.status} - ${text}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
