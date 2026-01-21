'use client';

import { useRouter } from 'next/navigation';

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
        <p>
          (Under NDA) I worked as the lead visual & interaction designer at
          Lubumall for 6 months, contributed to an ecosystem of interconnected
          web and mobile applications. I focused on shaping cohesive, scalable
          experiences while balancing user needs, business goals, and technical
          constraints.
        </p>
        <p>Key duties included:</p>
        <ul className="list-disc pl-6">
          <li>Researching user needs and market trends,</li>
          <li>
            Designing experiences from early concepts to high-fidelity
            prototypes,
          </li>
          <li>Ensuring consistency and clarity across products,</li>
          <li>
            Collaborating closely with product managers, developers, and
            designers throughout the product lifecycle,
          </li>
          <li>
            Building and maintaining scalable design systems to support rapid
            development and long-term product growth.
          </li>
        </ul>
        <p>Please contact me for further details regarding this project.</p>
      </div>
    </div>
  );
}
