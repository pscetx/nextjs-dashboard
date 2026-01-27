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
        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          challenge
        </h1>
        <p>
          As product development scaled, we realized that visual changes like
          theming, accessibility updates or rebranding became slow and easy to
          break because design values were baked directly into the system.
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          solution
        </h1>
        <p>
          We adopted the 3-tier design token system - Brand, Alias and Mapped -
          to decouple brand identity from UI implementation and also enable
          rapid theming across products and platforms. This system separates raw
          brand values, semantic intent, and UI usage to keep the interface
          flexible as the product scales.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Brand tokens define foundational values including
            <span className="italic"> colors, typography and spacing</span> as
            the stable source of truth,
          </li>
          <li>
            Alias tokens translate brand values into meaningful semantic
            categories such as
            <span className="italic"> primary, error and success</span>,
          </li>
          <li>
            Lastly mapped tokens connect alias tokens to concrete UI roles like
            <span className="italic"> text, icon, surface and border</span>.
          </li>
        </ul>
        <Image
          className="mx-auto w-full"
          src="/ds-Chart.jpg"
          width={900}
          height={50}
          alt="Chart"
          priority
        />

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          showcase
        </h1>
        <p>
          We built a core set of UI components, which cover the most common
          interaction patterns across typical products. Each component supports
          multiple states (default, hover, active, disabled, error) and semantic
          variants (primary, success, warning, error), all driven by the design
          token system. This ensures visual consistency and accessibility while
          allowing components to scale across different contexts without
          duplication.
        </p>
        <Image
          className="mx-auto w-full"
          src="/ds-Components.jpg"
          width={900}
          height={50}
          alt="Component"
          priority
        />
        <p>
          With the new system, we created several test mobile and web screens
          using shared components and tokens, which allowed the design to stay
          consistent while remain flexible across different layouts and
          platforms.
        </p>
        <Image
          className="mx-auto w-full"
          src="/ds-Examples.jpg"
          width={900}
          height={50}
          alt="Examples"
          priority
        />

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          takeaways
        </h1>
        <p>
          This project reinforced that scalable design systems are built around
          change. By constraining decisions through tokens and foundational
          components, the system reduced inconsistency, improved speed and
          proved flexible enough to support multiple platforms, screen types and
          future requirements like accessibility or dark mode.
        </p>
      </div>
    </div>
  );
}
