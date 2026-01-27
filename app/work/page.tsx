'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <h1 className="mb-4 mt-6 text-xl tracking-wide text-gray-800 md:text-2xl">
        UI/UX designs
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        <Link href="/work/design-system">
          <Card
            thumbnailUrl="/ds-Thumbnail.jpg"
            text="Building a Design System"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/ad-placement-strategy">
          <Card
            thumbnailUrl="/ap-Thumbnail.jpg"
            text="Ad Placement Strategy"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/lubumall">
          <Card
            thumbnailUrl="/lm-Thumbnail.jpg"
            text="Lubumall"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/museum-fun">
          <Card
            thumbnailUrl="/mf-Thumbnail.jpg"
            text="Museum Fun App"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/vnu-office">
          <Card
            thumbnailUrl="/vo-Thumbnail.jpg"
            text="VNU Office App"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card
            thumbnailUrl="/fj-Thumbnail.jpg"
            text="Fit Journey App"
            blobColor="#ffffff"
          />
        </Link>
      </div>

      <h1 className="mb-4 mt-10 text-xl tracking-wide text-gray-800 md:text-2xl">
        Other works
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        <Link href="/work/sme-iti">
          <Card
            thumbnailUrl="/si-Thumbnail.jpg"
            text="Cybersecurity Assessment for SMEs"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/graphic-designs">
          <Card
            thumbnailUrl="/gd-Thumbnail.jpg"
            text="Graphic Designs"
            blobColor="#ffffff"
          />
        </Link>
      </div>
    </div>
  );
}
