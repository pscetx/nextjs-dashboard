'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-40">
        <Link href="/work/fit-journey">
          <Card />
        </Link>
      </div>
    </div>
  );
}
