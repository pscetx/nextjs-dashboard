'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <h1 className="mt-6 mb-4 text-xl md:text-2xl text-gray-800 tracking-widest italic">UI/UX Design</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
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
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-vnu-office.png"
            text="VNU Office"
            blobColor="#7579de"
          />
        </Link>
      </div>

      <h1 className="mt-10 mb-4 text-xl md:text-2xl text-gray-800 tracking-widest italic">Other Work</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-museum-fun.png"
            text="Museum Fun"
            blobColor="#78b4e8"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-fit-journey.png"
            text="Fit Journey"
            blobColor="#94dfcf"
          />
        </Link>
      </div>

    </div>
  );
}
