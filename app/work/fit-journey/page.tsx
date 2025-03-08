import FigmaEmbed from '@/app/ui/figma-embed';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className='flex flex-col items-center justify-center space-y-6'>
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
