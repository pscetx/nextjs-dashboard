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
      <div className="flex flex-col items-center justify-center space-y-6 text-lg text-gray-600 md:space-y-10">
        <h1 className="text-4xl text-gray-800 md:text-6xl">
          Ad Placement Strategy
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl italic">
          Transforms the museum experience through augmented reality,
          interactive activities and immersive storytelling!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
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
            2 months
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              COMPLETED
            </span>{' '}
            april 2025
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${montserrat.className} text-xs font-extrabold text-amber-700`}
            >
              ROLE
            </span>{' '}
            lead ux designer
          </div>
        </div>

        <Image
          className="rounded-xl"
          src="/mf-Thumbnail.jpg"
          width={1000}
          height={50}
          alt="Thumbnail"
          priority
        />

        <div className="w-full md:w-4/5">
          <section>
            <h3 className="mt-20 text-3xl font-bold text-amber-800">
              Challenge
            </h3>

            <p className="mt-2">
              Increasing ad revenue without disrupting the creative flow proved
              difficult, as intrusive placements boosted short-term CTR but
              caused higher drop rates and weakened long-term LTV.
            </p>

            <h3 className="mt-20 text-3xl font-bold text-amber-800">
              Solution
            </h3>

            <p className="mt-2">
              Ads were moved to low-attention moments and redesigned as native,
              clearly labeled units, improving CTR while controlling drop rate
              and protecting retention and LTV.
            </p>

            <p className="mt-2">
              Revenue optimization was intentionally focused on the first-open
              experience, leveraging the language selection and onboarding
              screens as high-impact, low-friction monetization touchpoints.
              These moments capture peak user attention before task engagement
              begins, enabling strong CTR with minimal impact on drop rate. Ads
              and promotional units were introduced only after core value was
              clearly communicated, preventing early churn while maximizing
              early-session revenue. By front-loading monetization and keeping
              the core editing experience largely ad-free, this strategy
              increased early revenue per user while protecting retention and
              long-term LTV.
            </p>

            <p className="mt-2">
              Ad placements were designed to align with natural browsing
              behavior across Home, Settings, and Gallery screens, prioritizing
              visibility without disrupting task-focused actions. On the Home
              screen, ads are positioned alongside primary entry points,
              capturing high attention during exploration while avoiding
              interference with core actions like editing or capturing photos.
              In the Gallery, banner ads appear only during scroll-based
              browsing states, leveraging high impression volume and strong CTR
              while remaining outside selection, preview, and editing flows to
              control drop rate. The Settings screen includes minimal,
              low-frequency placements, targeting users in a low-intent,
              low-cognitive-load state without affecting retention. By limiting
              ads to passive consumption moments and keeping high-focus
              workflows ad-free, this strategy balances CTR performance with
              user satisfaction and long-term LTV.
            </p>

            <p className="mt-2">
              Native ad formats were used to further optimize performance. Ads
              adopt the same layout, spacing, and visual hierarchy as organic
              content, reducing banner blindness and improving scroll-based
              exposure. This consistency contributed to higher CTR without
              negatively impacting drop rate.
            </p>

            <p className="mt-2">
              One obvious way to increase LTV is by improving accessibility
              through UX decisions, such as introducing Dark Mode. By giving
              users control over visual comfort, especially in low-light or
              frequent-use scenarios like browsing and editing photos, the app
              reduces eye strain and fatigue, leading to longer sessions and
              higher return rates. Dark Mode also signals product maturity and
              user-centric design, increasing perceived value and trust, which
              directly supports retention and long-term monetization without
              relying on additional ad exposure.
            </p>

            <div className="mt-6 rounded-md border-b-2 border-amber-300 bg-amber-50 p-3 shadow-sm">
              <p className="text-amber-900">
                Focusing monetization on the onboarding experience delivered
                strong performance without harming retention. CTR on onboarding
                placements consistently reached ~30%, while screen-level drop
                rates remained below 4%, confirming that early, well-timed
                monetization can drive revenue without disrupting user flow or
                increasing churn.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
