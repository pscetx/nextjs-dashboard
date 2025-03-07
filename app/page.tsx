'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-fit-journey.png"
            text="Fit Journey"
            blobColor="#94dfcf"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-vnu-office.png"
            text="VNU Office"
            blobColor="#7579de"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-museum-fun.png"
            text="Museum Fun"
            blobColor="#78b4e8"
          />
        </Link>
      </div>
    </div>
  );
}
