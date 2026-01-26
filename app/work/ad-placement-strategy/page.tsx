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
          Ads were moved to low-attention moments and redesigned as native,
          clearly labeled units, improving CTR while controlling drop rate and
          protecting retention and LTV.
        </p>

        <h1 className="pt-8 text-3xl font-bold">showcase</h1>
        <p>
          Revenue optimization was intentionally focused on the first-open
          experience, leveraging the language selection and onboarding screens
          as high-impact, low-friction monetization touchpoints. These moments
          capture peak user attention before task engagement begins, enabling
          strong CTR with minimal impact on drop rate. Ads and promotional units
          were introduced only after core value was clearly communicated,
          preventing early churn while maximizing early-session revenue. By
          front-loading monetization and keeping the core editing experience
          largely ad-free, this strategy increased early revenue per user while
          protecting retention and long-term LTV.
        </p>
        <Image
          className="mx-auto w-full"
          src="/si-Showcase1.jpg"
          width={900}
          height={50}
          alt="Showcase #1"
          priority
        />
        <p>
          Revenue optimization was intentionally focused on the first-open
          experience, leveraging the language selection and onboarding screens
          as high-impact, low-friction monetization touchpoints. These moments
          capture peak user attention before task engagement begins, enabling
          strong CTR with minimal impact on drop rate. Ads and promotional units
          were introduced only after core value was clearly communicated,
          preventing early churn while maximizing early-session revenue. By
          front-loading monetization and keeping the core editing experience
          largely ad-free, this strategy increased early revenue per user while
          protecting retention and long-term LTV. screens as high-impact,
          low-friction monetization touchpoints. These moments capture peak user
          attention before task engagement begins, enabling strong CTR with
          minimal impact on drop rate. Ads and promotional units were introduced
          only after core value was clearly communicated, preventing early churn
          while maximizing early-session revenue. By front-loading monetization
          and keeping the core editing experience largely ad-free, this strategy
          increased early revenue per user while protecting retention and
          long-term LTV.
        </p>
        <Image
          className="mx-auto w-full"
          src="/si-Showcase2.jpg"
          width={900}
          height={50}
          alt="Showcase #2"
          priority
        />
        <p>
          Revenue optimization was intentionally focused on the first-open
          experience, leveraging the language selection and onboarding   screens
          as high-impact, low-friction monetization touchpoints. These moments
          capture peak user attention before task engagement begins, enabling
          strong CTR with minimal impact on drop rate. Ads and promotional units
          were introduced only after core value was clearly communicated,
          preventing early churn while maximizing early-session revenue. By
          front-loading monetization and keeping the core editing experience
          largely ad-free, this strategy increased early revenue per user while
          protecting retention and long-term LTV.
        </p>
        <Image
          className="mx-auto w-full"
          src="/si-Showcase3.jpg"
          width={900}
          height={50}
          alt="Showcase #3"
          priority
        />
        <p>
          Ad placements were designed to align with natural browsing behavior
          across Home, Settings, and Gallery screens, prioritizing   visibility
          without disrupting task-focused actions. On the Home screen, ads are
          positioned alongside primary entry points, capturing high attention
          during exploration while avoiding interference with core actions like
          editing or capturing photos. In the Gallery, banner ads appear only
          during scroll-based browsing states, leveraging high impression volume
          and strong CTR while remaining outside selection, preview, and editing
          flows to control drop rate. The Settings screen includes minimal,
          low-frequency placements, targeting users in a low-intent,
          low-cognitive-load state without affecting retention. By limiting ads
          to passive consumption moments and keeping high-focus workflows
          ad-free, this strategy balances CTR performance with user satisfaction
          and long-term LTV.
        </p>
        <Image
          className="mx-auto w-full"
          src="/si-Showcase4.jpg"
          width={900}
          height={50}
          alt="Showcase #4"
          priority
        />
        <p>
          Native ad formats were used to further optimize performance. Ads adopt
          the same layout, spacing, and visual hierarchy as organic content,
          reducing banner blindness and improving scroll-based exposure. This
          consistency contributed to higher CTR without negatively impacting
          drop rate.
        </p>
        <p>
          One obvious way to increase LTV is by improving accessibility through
          UX decisions, such as introducing Dark Mode. By giving users control
          over visual comfort, especially in low-light or frequent-use scenarios
          like browsing and editing photos, the app reduces eye strain and
          fatigue, leading to longer sessions and higher return rates. Dark Mode
          also signals product maturity and user-centric design, increasing
          perceived value and trust, which directly supports retention and
          long-term monetization without relying on additional ad exposure.
          relying on additional ad exposure.
        </p>

        <h1 className="pt-8 text-3xl font-bold">takeaways</h1>
        <p>
          Focusing monetization on the onboarding experience delivered strong
          performance without harming retention. CTR on onboarding placements
          consistently reached ~30%, while screen-level drop rates remained
          below 4%, confirming that early, well-timed monetization can drive
          revenue without disrupting user flow or increasing churn.
        </p>
      </div>
    </div>
  );
}
