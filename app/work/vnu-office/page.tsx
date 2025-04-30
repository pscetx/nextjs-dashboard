import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className='flex flex-col items-center justify-center space-y-6 md:space-y-10'>
        <h1 className='text-4xl md:text-6xl'>VNU Office App</h1>
        <p className="mt-4 text-xl text-gray-800 text-center max-w-3xl mx-auto italic">
          Streamlined mobile platform designed to simplify internal communication, document management, and task coordination for staff and students across departments.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 text-lg font-medium">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>TYPE</span> mobile app
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>DURATION</span> 2 weeks
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>COMPLETED</span> march. 2025
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>ROLE</span>visual designer
          </div>
        </div>
      </div>
    </div>
  );
}
