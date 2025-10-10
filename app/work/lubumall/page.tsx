'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  return (
    <div className="p-6 w-full">
      <button
        onClick={() => router.back()}
        className="mb-4 text-amber-900 hover:underline text-xl"
      >
        ← back
      </button>
      <div className='flex flex-col items-center justify-center text-gray-600 text-lg space-y-6 md:space-y-10'>
        <p className="text-xl text-center max-w-3xl mx-auto italic">
          <span className='italic'>*Under NDA*</span> I worked as the Lead UX Designer, responsible for competitor research and designing the app’s UIs. Please contact me to discuss our process and outcomes.
        </p>
        <Image className='rounded-xl' src="/lm-Thumbnail.jpg" width={1000} height={50} alt="Thumbnail" priority />
      </div>
    </div>
  );
}
