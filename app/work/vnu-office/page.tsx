'use client';

import { useRouter } from 'next/navigation';
import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-full p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 text-xl text-amber-900 hover:underline"
      >
        ← back
      </button>

      <div className="flex w-full flex-col space-y-2 text-lg text-gray-600 md:space-y-4">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              TYPE
            </span>{' '}
            mobile app
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              DURATION
            </span>{' '}
            3 weeks
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              COMPLETED
            </span>{' '}
            march 2025
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              ROLE
            </span>
            visual designer
          </div>
        </div>

        <p>
          I briefly joined this project in February 2025 to design the visual
          interface of the VNU Office app, based on descriptions provided by our
          team's business analyst. Unfortunately, the project was shelved due to
          time constraints, but here's what we were able to accomplish during
          that time.
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          challenge
        </h1>
        <p>
          Design an internal office app that streamlines project management,
          ensures transparent communication and supports diverse workflows
          across departments at VNU, all while remaining intuitive for users
          with varying levels of tech experience.
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          solution
        </h1>
        <p>
          VNU Office is a centralized platform that enables staff to manage
          tasks, share documents and communicate efficiently. By simplifying
          collaboration and aligning teams around shared goals, the app
          strengthens day-to-day operations and improves overall coordination
          within the university.
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          showcase
        </h1>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/vo-Flow.jpg"
          width={1000}
          height={50}
          alt="Flow"
          priority
        />
        <FigmaEmbed figmaUrl="https://www.figma.com/proto/SHyeWN4Bg3ntK1QuvSkZl7/VNU-Office-App?page-id=105%3A2399&node-id=105-2400&p=f&viewport=-894%2C115%2C0.25&t=SsdflYq8dbt1vB8X-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=105%3A2400" />

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          takeaways
        </h1>
        <p>
          Working on the app, even briefly, was a valuable experience for me. It
          taught me how important it is to design with clarity and inclusivity,
          especially when the users range from tech-savvy staff to those less
          comfortable with digital tools. Collaborating with our business
          analyst helped me translate complex requirements into something visual
          and intuitive - a process I really enjoyed. Although the project was
          eventually shelved, it reminded me how powerful early design and
          prototyping can be in shaping direction and aligning goals.
        </p>
      </div>
    </div>
  );
}
