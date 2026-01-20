'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-full p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 text-xl text-amber-900 hover:underline"
      >
        ← back
      </button>

      <div className="flex w-full flex-col space-y-2 text-lg text-gray-600 md:space-y-4">
        <p className="mt-8">
          Various designs created using Adobe Photoshop, Adobe Illustrator, and
          Adobe InDesign.
        </p>

        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-MediaPublications.jpg"
          width={1000}
          height={50}
          alt="Media Publications"
          priority
        />

        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Infographics.jpg"
          width={1000}
          height={50}
          alt="Infographics"
          priority
        />

        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Illustrations.jpg"
          width={1000}
          height={50}
          alt="Illustrations"
          priority
        />

        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Magazines.jpg"
          width={1000}
          height={50}
          alt="Magazines"
          priority
        />

        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Booklets.jpg"
          width={1000}
          height={50}
          alt="Booklets"
          priority
        />

        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Collages.jpg"
          width={1000}
          height={50}
          alt="Collages"
          priority
        />
      </div>
    </div>
  );
}
