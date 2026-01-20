'use client';

import { useRouter } from 'next/navigation';
import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-full p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 text-xl text-amber-900 hover:underline"
      >
        ← back
      </button>

      <div className="flex w-full flex-col space-y-4 text-lg text-gray-600 md:space-y-8">
        <Image
          className="w-full rounded-xl"
          src="/fj-HeroImage.jpg"
          width={1000}
          height={50}
          alt="Hero"
          priority
        />

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              TYPE
            </span>{' '}
            concept
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
            october 2024
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              ROLE
            </span>
            lead visual designer
          </div>
        </div>

        <h2 className="mt-20 text-3xl font-bold text-amber-800">Challenge</h2>

        <p className="mt-2">
          Users struggled to stay motivated and consistent, feeling overwhelmed
          by choices and unable to see meaningful progress early on.
        </p>

        <h2 className="mt-20 text-3xl font-bold text-amber-800">Solution</h2>

        <p className="mt-2">
          Ads were moved to low-attention moments and redesigned as native,
          clearly labeled units, improving CTR while controlling drop rate and
          protecting retention and LTV.
        </p>
      </div>

      <Image
        className="rounded-xl"
        src="/fj-Overview.jpg"
        width={1000}
        height={50}
        alt="Overview"
        priority
      />
      <Image
        className="rounded-xl"
        src="/fj-Design System.jpg"
        width={1000}
        height={50}
        alt="Design System"
        priority
      />
      <Image
        className="rounded-xl"
        src="/fj-Components.jpg"
        width={1000}
        height={50}
        alt="Components"
        priority
      />
      <Image
        className="rounded-xl"
        src="/fj-Showcase 1.jpg"
        width={1000}
        height={50}
        alt="Showcase #1"
        priority
      />
      <Image
        className="rounded-xl"
        src="/fj-Showcase 2.jpg"
        width={1000}
        height={50}
        alt="Showcase #2"
        priority
      />
      <Image
        className="rounded-xl"
        src="/fj-Showcase 3.jpg"
        width={1000}
        height={50}
        alt="Showcase #3"
        priority
      />
      <div>
        <Image
          className="rounded-xl"
          src="/fj-Prototype.jpg"
          width={1000}
          height={50}
          alt="Prototype"
          priority
        />
        <FigmaEmbed figmaUrl="https://www.figma.com/proto/TodPd2jMFIJnpLEDqKQio5/FitJourney-App?node-id=16-45&p=f&t=ATN7GIXRND0ZjSIk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A45" />
        <Image
          className="rounded-xl"
          src="/fj-Thank You.jpg"
          width={1000}
          height={50}
          alt="Thank You"
          priority
        />
      </div>
    </div>
  );
}
