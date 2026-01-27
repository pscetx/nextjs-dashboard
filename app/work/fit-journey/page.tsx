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

      <div className="flex w-full flex-col space-y-2 text-lg text-gray-600 md:space-y-4">
        <Image
          className="mx-auto w-full rounded-xl"
          src="/fj-HeroImage.jpg"
          width={1000}
          height={50}
          alt="Hero"
          priority
        />
        <div className="flex flex-wrap gap-x-6 gap-y-2">
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

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          challenge
        </h1>
        <p>
          In traditional fitness and workout apps, users often lose motivation
          due to overwhelming options, repetitive routines and progress that
          feels slow or intangible, leading to inconsistent usage.
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          solution
        </h1>
        <p>
          We designed a gamified, challenge-based system with XP, missions and
          milestone rewards that make progress immediately visible and encourage
          users to return and build lasting habits.
        </p>
        <p className="pb-2">
          FitJourney redefines the way you approach fitness by turning your
          workout routine into an immersive game where every step forward is a
          step up! Perfect for anyone looking to add a touch of fun and a
          competitive edge to their fitness goals, the app combines effective
          exercise with social interaction.
        </p>
        <p
          className={`${montserrat.className} w-fit rounded-xl bg-sky-100 px-4 py-2 text-sm font-medium text-gray-800`}
        >
          Weekly Quests & Daily Missions
        </p>
        <p
          className={`${montserrat.className} w-fit rounded-xl bg-sky-100 px-4 py-2 text-sm font-medium text-gray-800`}
        >
          Connect and Compete with Friends
        </p>
        <p
          className={`${montserrat.className} w-fit rounded-xl bg-sky-100 px-4 py-2 text-sm font-medium text-gray-800`}
        >
          Personalized Avatars & Rewards
        </p>
        <p
          className={`${montserrat.className} w-fit rounded-xl bg-sky-100 px-4 py-2 text-sm font-medium text-gray-800`}
        >
          Motivation & Achievement Tracking
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          showcase
        </h1>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/fj-Flow.jpg"
          width={1000}
          height={50}
          alt="Flow"
          priority
        />
        <Image
          className="mx-auto w-full rounded-xl"
          src="/fj-Styles.jpg"
          width={1000}
          height={50}
          alt="Styles"
          priority
        />
        <FigmaEmbed figmaUrl="https://www.figma.com/proto/TodPd2jMFIJnpLEDqKQio5/FitJourney-App?node-id=16-45&p=f&t=ATN7GIXRND0ZjSIk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A45" />
      </div>
    </div>
  );
}
