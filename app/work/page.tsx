'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <h1 className="mt-6 mb-4 text-xl md:text-2xl text-gray-800 tracking-widest italic">UI/UX design</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/fj-Thumbnail.png"
            text="Fit Journey"
            blobColor="#94dfcf"
          />
        </Link>
        <Link href="/work/vnu-office">
          <Card 
            thumbnailUrl="/placeholder.png"
            text="VNU Office"
            blobColor="#f8a720"
          />
        </Link>
        <Link href="/work/museum-fun">
          <Card 
            thumbnailUrl="/placeholder.png"
            text="Museum Fun"
            blobColor="#ed6325"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/placeholder.png"
            text="Coming soon"
            blobColor="#7579de"
          />
        </Link>
      </div>

      <h1 className="mt-10 mb-4 text-xl md:text-2xl text-gray-800 tracking-widest italic">Other work</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/sme-iti">
          <Card 
            thumbnailUrl="/si-Thumbnail.png"
            text="Cybersecurity Assessment for SMEs"
            blobColor="#b10913"
          />
        </Link>
        <Link href="/work/graphic-design">
          <Card 
            thumbnailUrl="/gd-Thumbnail.png"
            text="Graphic Design"
            blobColor="#9bcdd1"
          />
        </Link>
      </div>

    </div>
  );
}
