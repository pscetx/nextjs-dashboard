'use client';

import { useRouter } from 'next/navigation';
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
            1 week
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              COMPLETED
            </span>{' '}
            december 2025
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              ROLE
            </span>
            lead ux designer
          </div>
        </div>

        <h1 className="pt-8 text-3xl font-bold">challenge</h1>
        <p>
          Increasing ad revenue without disrupting the creative flow proved
          difficult, as intrusive placements boosted short-term CTR but caused
          higher drop rates and weakened long-term LTV.
        </p>

        <h1 className="pt-8 text-3xl font-bold">solution</h1>
        <p>
          Revenue optimization was intentionally focused on the first-open
          experience. Language selection and interest surveys were split across
          several steps to create additional, natural surfaces for ad exposure.
          To further support ad interaction, the 'Next' buttons were
          repositioned across screens to avoid rapid skipping. Together, these
          layout and flow decisions increased ad visibility and engagement
          through spatial hierarchy and progression control.
        </p>
        <Image
          className="mx-auto w-full"
          src="/ap-FirstOpen.jpg"
          width={900}
          height={50}
          alt="First Open"
          priority
        />
        <p>
          Ad placements were designed to align with natural browsing behavior
          across Home, Gallery and Editing screens, prioritizing visibility
          without disrupting task-focused actions. By limiting ads to passive
          consumption moments and keeping high-focus workflows ad-free, this
          strategy balances CTR performance with user satisfaction and long-term
          LTV.
        </p>
        <Image
          className="mx-auto w-full"
          src="/ap-AdTypes.jpg"
          width={900}
          height={50}
          alt="Ad Types"
          priority
        />
        <p>
          One effective way to increase LTV is by improving accessibility
          through UX decisions such as introducing Dark Mode. Beyond usability
          benefits, it signals product maturity and user-centric design,
          increasing perceived value and trust, which supports retention and
          long-term monetization without relying on additional ad exposure.
        </p>
        <Image
          className="mx-auto w-full"
          src="/ap-DarkMode.jpg"
          width={900}
          height={50}
          alt="Dark Mode"
          priority
        />

        <h1 className="pt-8 text-3xl font-bold">takeaways</h1>
        <p>
          Focusing monetization on the onboarding experience delivered strong
          performance without harming retention. CTR on onboarding placements
          <strong> consistently reached ~30%</strong>, while screen-level drop
          rates remained <strong>below 4%</strong>, confirming that early and
          well-timed monetization can drive revenue without disrupting user flow
          or increasing churn.
        </p>
      </div>
    </div>
  );
}
