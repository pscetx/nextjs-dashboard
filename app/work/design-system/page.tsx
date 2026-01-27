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
          As the product ecosystem scaled, we realized visual changes like
          theming, accessibility updates and rebranding became slow and
          error-prone due to tightly coupled design values.
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          solution
        </h1>
        <p>
          We adopted a scalable 3-tier design token system - Brand, Alias and
          Mapped - to decouple brand identity from UI implementation and enable
          rapid theming across products and platforms.
        </p>
        <p>
          This 3-tier design token system separates raw brand values, semantic
          intent, and UI usage to keep the interface flexible as the product
          scales. By decoupling identity from implementation, the system enables
          theming, rebranding and accessibility updates without refactoring UI.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Brand tokens define foundational values like colors, typography and
            spacing as a stable source of truth, independent of UI or platform.
          </li>
          <li>
            Alias tokens translate brand values into meaningful categories such
            as primary, error and warning, expressing design intent instead of
            visual specifics,
          </li>
          <li>
            Lastly mapped tokens connect alias tokens to concrete components or
            platforms, isolating implementation details.
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
          We built a set of UI components, including buttons, tags, inputs,
          tabs, menus, avatars and toggles, designed to cover the most common
          interaction patterns across the product. Each component supports
          multiple states (default, hover, active, disabled, error) and semantic
          variants (primary, success, warning, error), all driven by the design
          token system. This ensures visual consistency, accessibility, and easy
          theming while allowing components to scale across different contexts
          without duplication.
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
          Using the design system, we created a set of real-world screens across
          mobile and web. Each screen is composed entirely of shared components
          and semantic tokens, allowing the same system to adapt to different
          layouts, platforms, and product goals. This demonstrates how the
          system scales from simple flows to complex, content-heavy interfaces
          while maintaining consistency and flexibility.
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
          future requirements like accessibility and dark mode.
        </p>
      </div>
    </div>
  );
}
