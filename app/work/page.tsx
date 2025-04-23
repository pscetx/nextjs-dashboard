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
            thumbnailUrl="/placeholder.png"
            text="Coming soon"
            blobColor="#B3007B"
          />
        </Link>
        <Link href="/work/museum-fun">
          <Card 
            thumbnailUrl="/placeholder.png"
            text="Museum Fun"
            blobColor="#2BA6B3"
          />
        </Link>
        <Link href="/work/vnu-office">
          <Card 
            thumbnailUrl="/placeholder.png"
            text="VNU Office"
            blobColor="#B24716"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/fj-Thumbnail.png"
            text="Fit Journey"
            blobColor="#37d2b2"
          />
        </Link>
      </div>

      <h1 className="mt-10 mb-4 text-xl md:text-2xl text-gray-800 tracking-widest italic">Other works</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/sme-iti">
          <Card 
            thumbnailUrl="/si-Thumbnail.png"
            text="Cybersecurity Assessment for SMEs"
            blobColor="#c83e42"
          />
        </Link>
        <Link href="/work/graphic-design">
          <Card 
            thumbnailUrl="/gd-Thumbnail.png"
            text="Graphic Design"
            blobColor="#8040bb"
          />
        </Link>
      </div>

    </div>
  );
}
