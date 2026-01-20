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

      <div className="flex w-full flex-col space-y-4 text-lg text-gray-600 md:space-y-6">
        <Image
          className="mx-auto w-full rounded-xl"
          src="/fj-Hero Image.jpg"
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

        <h1 className="text-3xl font-bold">challenge</h1>

        <p>
          In traditional fitness and workout apps, users often lose motivation
          due to overwhelming options, repetitive routines, and progress that
          feels slow or intangible, leading to inconsistent usage.
        </p>

        <h1 className="text-3xl font-bold">solution</h1>

        <p className="mt-2">
          We designed a gamified, challenge-based system with XP, missions, and
          milestone rewards that make progress immediately visible and encourage
          users to return and build lasting habits.
        </p>
        <p className="mt-2">
          FitJourney redefines the way you approach fitness by turning your
          workout routine into an immersive game where every step forward is a
          step up! Perfect for anyone looking to add a touch of fun and a
          competitive edge to their fitness goals, the app combines effective
          exercise with social interaction.
        </p>

        <Image
          className="mx-auto rounded-xl"
          src="/fj-Overview.jpg"
          width={1000}
          height={50}
          alt="Overview"
          priority
        />

        <h1 className="text-3xl font-bold">showcase</h1>

        <Image
          className="mx-auto rounded-xl"
          src="/fj-Showcase 1.jpg"
          width={1000}
          height={50}
          alt="Showcase #1"
          priority
        />

        <Image
          className="mx-auto rounded-xl"
          src="/fj-Showcase 2.jpg"
          width={1000}
          height={50}
          alt="Showcase #2"
          priority
        />

        <Image
          className="mx-auto rounded-xl"
          src="/fj-Showcase 3.jpg"
          width={1000}
          height={50}
          alt="Showcase #3"
          priority
        />

        <div>
          <Image
            className="mx-auto rounded-xl"
            src="/fj-Prototype.jpg"
            width={1000}
            height={50}
            alt="Prototype"
            priority
          />

          <FigmaEmbed figmaUrl="https://www.figma.com/proto/TodPd2jMFIJnpLEDqKQio5/FitJourney-App?node-id=16-45&p=f&t=ATN7GIXRND0ZjSIk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A45" />
          <Image
            className="mx-auto rounded-xl"
            src="/fj-Thank You.jpg"
            width={1000}
            height={50}
            alt="Thank You"
            priority
          />
        </div>
      </div>
    </div>
  );
}
