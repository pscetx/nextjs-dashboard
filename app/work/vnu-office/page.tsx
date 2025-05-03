import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className='flex flex-col items-center justify-center text-gray-600 text-lg space-y-6 md:space-y-10'>
        <h1 className='text-4xl md:text-6xl text-gray-800'>VNU Office</h1>
        <p className="mt-4 text-xl text-center max-w-3xl mx-auto italic">
          Platform designed to streamline internal project management, communication, and document handling across departments at VNU. Aims to enhance collaboration, tracks progress, and ensures transparency in day-to-day operations for staff and administrators.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>TYPE</span> mobile app
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>DURATION</span> 3 weeks
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>COMPLETED</span> march 2025
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>ROLE</span> visual designer
          </div>
        </div>

        <Image className='rounded-xl' src="/vo-Thumbnail.jpg" width={1000} height={50} alt="Thumbnail" priority />

        <div className="w-full md:w-4/5">
          COMING SOON!
        </div>
      </div>
    </div>
  );
}
