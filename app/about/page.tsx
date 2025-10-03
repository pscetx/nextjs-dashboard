"use client";

import DownloadButton from "../ui/pdf-download";
import Image from "next/image";
import { montserrat } from '@/app/ui/fonts';
import FadeContent from '@/app/ui/fade-content'
import SplitText from "@/app/ui/split-text";

export default function Page() {
  return(
    <div className="w-full">
      <section className="md:h-[93vh] flex flex-col md:flex-row items-center max-w-4xl mx-auto p-8">
        <FadeContent className="w-5/6 md:w-full rounded-lg shadow-md" blur={true} duration={600} easing="ease-out" initialOpacity={0}>
          <Image className="rounded-lg shadow-md" src="/portrait.jpg" width={2000} height={50} alt="portrait" priority />
        </FadeContent>
        <div className="w-full md:w-5/6 md:pl-8">
          <SplitText
              text="Thanh Pham"
              className={`${montserrat.className} mt-8 mb-4 md:mt-0 text-3xl md:text-5xl font-bold text-amber-800 opacity-60`}
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
            Thanh is working as Lead Visual Designer at Lubu Vietnam, shaping user experiences and designing for early-stage innovation.
          </p>
          <p className="mt-2 text-gray-800">
            Based in Hanoi, they are dedicated to using UI/UX principles to develope creative solutions that can make an impact.
          </p>
          <p className="mt-2 text-gray-800">
            Besides design, Thanh enjoys playing music, embracing outdoor activities and staying in touch with the community.
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        <DownloadButton />
        <iframe
          src="/PhamCongThanh_UIUXDesigner_Resume.pdf"
          className="md:w-[802px] md:h-[1173px] w-[300px] h-[435px] rounded-md"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
