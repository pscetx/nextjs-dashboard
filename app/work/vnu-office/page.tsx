'use client';

import { useRouter } from 'next/navigation';
import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
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
        <h1 className='text-4xl md:text-6xl text-gray-800'>VNU Office</h1>
        <p className="mt-4 text-xl text-center max-w-3xl mx-auto italic">
          A platform designed to streamline internal project management, communication, and document handling across departments at VNU.
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
          <p className="mt-4">
            I briefly joined this project in February 2025 to design the visual interface of the VNU Office app, based on descriptions provided by our team's business analyst. Unfortunately, the project was shelved due to time constraints — but here's what we were able to accomplish during that time.
          </p>
          
          <h3 className="mt-20 text-3xl text-amber-800 font-bold">Challenges</h3>         
          <p className="mt-2">
            Design an internal office application that streamlines project management, fosters transparent communication, and supports diverse workflows across departments at VNU, all while remaining intuitive for users with varying levels of tech experience.
          </p>

          <div className="mt-20 p-6 bg-emerald-50 border border-emerald-300 rounded-2xl shadow-sm text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-4">
              <span className={`${montserrat.className} text-2xl text-emerald-700 font-bold`}>SOLUTION</span>
            </div>
            <p className="text-xl text-emerald-800 italic">
              VNU Office is a centralized platform that enables staff to manage tasks, share documents, and communicate efficiently. By simplifying collaboration and aligning teams around shared goals, the app strengthens day-to-day operations and improves overall coordination within the university.
            </p>
          </div>

          <h3 className="mt-20 text-3xl text-amber-800 font-bold">High fildelity prototype</h3>
          <Image className='mt-4 rounded-xl' src="/vo-Showcase 1.jpg" width={1000} height={50} alt="Showcase #1" priority />
          <Image className='mt-4 rounded-xl' src="/vo-Showcase 2.jpg" width={1000} height={50} alt="Showcase #2" priority />
          <FigmaEmbed figmaUrl="https://www.figma.com/proto/SHyeWN4Bg3ntK1QuvSkZl7/VNU-Office-App?page-id=105%3A2399&node-id=105-2400&p=f&viewport=-894%2C115%2C0.25&t=SsdflYq8dbt1vB8X-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=105%3A2400" />
          
          {/* Section 5 */}
          <h3 className="mt-16 text-3xl text-amber-800 font-bold">Takeaways</h3>
          <p className="mt-2">
            Working on the app, even briefly, was a valuable experience for me. It taught me how important it is to design with clarity and inclusivity, especially when the users range from tech-savvy staff to those less comfortable with digital tools. Collaborating with our business analyst helped me translate complex requirements into something visual and intuitive — a process I really enjoyed. Although the project was eventually shelved, it reminded me how powerful early design and prototyping can be in shaping direction and aligning a team around shared goals.
          </p>
        </div>
        
      </div>
    </div>
  );
}
