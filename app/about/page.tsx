'use client';

import DownloadButton from '../ui/pdf-download';
import Image from 'next/image';
import { montserrat } from '@/app/ui/fonts';
import FadeContent from '@/app/ui/fade-content';
import SplitText from '@/app/ui/split-text';

export default function Page() {
  return (
    <div className="w-full">
      <section className="mx-auto flex max-w-4xl flex-col items-center p-8 md:h-[93vh] md:flex-row">
        <FadeContent
          className="w-5/6 rounded-lg shadow-md md:w-full"
          blur={true}
          duration={600}
          easing="ease-out"
          initialOpacity={0}
        >
          <Image
            className="rounded-xl"
            src="/portrait.jpg"
            width={500}
            height={500}
            alt="portrait"
            priority
          />
        </FadeContent>
        <div className="w-full md:w-5/6 md:pl-8">
          <SplitText
            text="Thanh Pham"
            className={`${montserrat.className} mb-2 mt-8 text-4xl font-bold text-amber-800 opacity-60 md:mt-0 md:text-5xl`}
            delay={50}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-lg font-semibold text-gray-800">
            Thanh is a Visual & Interaction Designer focused on shaping
            experiences for innovative products.
          </p>
          <p className="mt-2 text-gray-800">
            They are dedicated to using UI/UX principles to develope creative
            solutions that can make an impact.
          </p>
          <p className="mt-2 text-gray-800">
            Beyond design, Thanh enjoys making music, spending time outdoors,
            and staying connected with the community.
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        <DownloadButton />
        <iframe
          src="/PhamCongThanh_UIUXDesigner_Resume.pdf"
          className="h-[435px] w-[300px] rounded-md md:h-[1173px] md:w-[802px]"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}
