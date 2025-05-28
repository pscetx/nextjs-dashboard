'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <h1 className="mt-6 mb-4 text-xl md:text-2xl text-gray-800 tracking-wide">UI/UX design</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/placeholder.jpg"
            text="Coming soon"
            blobColor="#ededee"
          />
        </Link>
        <Link href="/work/museum-fun">
          <Card 
            thumbnailUrl="/mf-Thumbnail.jpg"
            text="MuseumFun"
            blobColor="#ffe197"
          />
        </Link>
        <Link href="/work/vnu-office">
          <Card 
            thumbnailUrl="/vo-Thumbnail.jpg"
            text="VNU Office"
            blobColor="#00833f"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/fj-Thumbnail.jpg"
            text="FitJourney"
            blobColor="#37d2b2"
          />
        </Link>
      </div>

      <h1 className="mt-10 mb-4 text-xl md:text-2xl text-gray-800 tracking-wide">Other works</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/sme-iti">
          <Card 
            thumbnailUrl="/si-Thumbnail.jpg"
            text="Cybersecurity Assessment for SMEs"
            blobColor="#c83e42"
          />
        </Link>
        <Link href="/work/graphic-designs">
          <Card 
            thumbnailUrl="/gd-Thumbnail.jpg"
            text="Graphic Designs"
            blobColor="#8040bb"
          />
        </Link>
      </div>

    </div>
  );
}
