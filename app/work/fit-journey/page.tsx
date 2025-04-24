import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className='flex flex-col items-center justify-center space-y-6 md:space-y-12'>
        <h1 className='text-4xl md:text-6xl'>Fit Journey</h1>
        <p className="mt-4 text-xl text-gray-800 text-center max-w-3xl mx-auto italic">
          A gamified fitness app that transforms your health goals into a rewarding journey. <br />
          Do excercises, complete challenges, and stay motivated every step of the way!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 text-lg font-medium">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>TYPE</span> concept
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>DURATION</span> 3 weeks
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>COMPLETED</span> oct. 2024
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-600 font-extrabold`}>ROLE</span>ux designer
          </div>
        </div>

        <Image className='rounded-xl' src="/fj-Thumbnail.png" width={1000} height={50} alt="Thumbnail" priority />
        <Image className='rounded-xl' src="/fj-Overview.png" width={1000} height={50} alt="Overview" priority />
        <Image className='rounded-xl' src="/fj-Design System.png" width={1000} height={50} alt="Design System" priority />
        <Image className='rounded-xl' src="/fj-Components.png" width={1000} height={50} alt="Components" priority />
        <Image className='rounded-xl' src="/fj-Showcase1.png" width={1000} height={50} alt="Showcase #1" priority />
        <Image className='rounded-xl' src="/fj-Showcase2.png" width={1000} height={50} alt="Showcase #2" priority />
        <Image className='rounded-xl' src="/fj-Showcase3.png" width={1000} height={50} alt="Showcase #3" priority />
        <Image className='rounded-xl' src="/fj-Prototype.png" width={1000} height={50} alt="Prototype" priority />
        <FigmaEmbed figmaUrl="https://www.figma.com/proto/TodPd2jMFIJnpLEDqKQio5/FitJourney-App?node-id=16-45&p=f&t=ATN7GIXRND0ZjSIk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A45" />
        <Image className='rounded-xl' src="/fj-Thank You.png" width={1000} height={50} alt="Thank You" priority />
      </div>
    </div>
  );
}
