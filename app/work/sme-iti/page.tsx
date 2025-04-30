import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className='flex flex-col items-center justify-center space-y-6 md:space-y-10'>
        <h1 className='text-4xl md:text-6xl'>Cybersecurity Assessment for SMEs</h1>
        <p className="mt-4 text-xl text-gray-800 text-center max-w-3xl mx-auto italic">
          Simple tool designed to help small and medium-sized enterprises identify vulnerabilities, evaluate their security posture, and strengthen their defenses against cyber threats.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 text-lg font-medium">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>TYPE</span> web app
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>DURATION</span> 3 months
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>COMPLETED</span> dec. 2024
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>ROLE</span>project lead | dev lead
          </div>
        </div>
      </div>
    </div>
  );
}
