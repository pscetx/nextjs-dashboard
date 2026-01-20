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

      <div className="flex w-full flex-col space-y-4 text-lg text-gray-600 md:space-y-6">
        <Image
          className="mx-auto mb-16 w-full rounded-xl"
          src="/gd-Thumbnail.jpg"
          width={1000}
          height={50}
          alt="Thumbnail"
          priority
        />

        <h1 className="mt-8 text-3xl font-bold">media publications</h1>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-MediaPublications.jpg"
          width={1000}
          height={50}
          alt="Media Publications"
          priority
        />

        <h1 className="mt-8 text-3xl font-bold">infographics</h1>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Infographics.jpg"
          width={1000}
          height={50}
          alt="Infographics"
          priority
        />

        <h1 className="mt-8 text-3xl font-bold">illustrations</h1>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Illustrations.jpg"
          width={1000}
          height={50}
          alt="Illustrations"
          priority
        />

        <h1 className="mt-8 text-3xl font-bold">magazines</h1>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Magazines.jpg"
          width={1000}
          height={50}
          alt="Magazines"
          priority
        />

        <h1 className="mt-8 text-3xl font-bold">booklets</h1>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/gd-Booklets.jpg"
          width={1000}
          height={50}
          alt="Booklets"
          priority
        />

        <h1 className="mt-8 text-3xl font-bold">collages</h1>
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
