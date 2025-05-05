import DownloadButton from "../ui/pdf-download";
import Image from "next/image";
import { montserrat } from '@/app/ui/fonts';

export default function Page() {
  return(
    <div className="w-full">
      <section className="md:h-[93vh] flex flex-col md:flex-row items-center max-w-4xl mx-auto p-8">
      <Image className="w-5/6 md:w-1/2 rounded-lg shadow-md" src="/portrait.jpg" width={2000} height={50} alt="portrait" priority />
      <div className="w-full md:w-5/6 md:pl-8">
        <h2 className={`${montserrat.className} mt-8 mb-4 md:mt-0 text-3xl md:text-5xl font-bold text-amber-800 opacity-60`}>Thanh Pham</h2>
        <p className="text-lg font-semibold text-gray-800">
          Thanh is a passionate student exploring the world of design and digital experiences.
        </p>
        <p className="mt-2 text-gray-800">
          Based in Hanoi, they are dedicated to learning UI/UX principles and developing creative solutions that can make an impact.
        </p>
        <p className="mt-2 text-gray-800">
          Besides design, Thanh enjoys playing the piano, embracing outdoor activities and staying in touch with the community.
        </p>
      </div>
    </section>

      <div className="flex flex-col items-center justify-center">
        <DownloadButton />
        <iframe
          src="/PhamCongThanh_UIUXDesigner_CV.pdf"
          className="md:w-[802px] md:h-[1173px] w-[300px] h-[435px] rounded-md"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
