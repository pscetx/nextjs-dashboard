'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
import Carousel from '@/app/ui/carousel';

const images = [
  {
    src: '/mf-UserPersona1.jpg',
    alt: 'Persona #1',
  },
  {
    src: '/mf-UserPersona2.jpg',
    alt: 'Persona #2',
  },
];

const images2 = [
  {
    src: '/mf-Storyboard1.jpg',
    alt: 'Storyboard #1',
  },
  {
    src: '/mf-Storyboard2.jpg',
    alt: 'Storyboard #2',
  },
];

const images3 = [
  {
    src: '/mf-LoFiPrototype.jpg',
    alt: 'Lo Fi Prototype',
  },
  {
    src: '/mf-PaperWireframes.jpg',
    alt: 'Paper Wireframes',
  },
];

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
          src="/mf-HeroImage.jpg"
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
            </span>
            lead ux designer
          </div>
        </div>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          challenge
        </h1>
        <p>
          Designing a museum mobile app means weaving a digital layer into the
          physical environment, presenting a distinct set of design challenges:
        </p>
        <div className="border-l-4 border-red-500 bg-gray-50 p-2">
          Museum visitors often move between exhibits without clear context,
          missing connections or key displays,
        </div>
        <div className="border-l-4 border-red-500 bg-gray-50 p-2">
          Traditional museum visits can feel passive, especially for younger
          audiences,
        </div>
        <div className="border-l-4 border-red-500 bg-gray-50 p-2">
          Museums present large amounts of information, particularly as dense
          text, that can feel overwhelming.
        </div>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          solution
        </h1>
        <p>
          The idea was to shift the museum experience from a passive, linear
          walkthrough to an interactive adventure using AR technology and
          gamified elements.
        </p>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          understanding the user
        </h1>
        <p>
          To ground our ideas in real-world behavior, we observed how kids
          interact with physical exhibit spaces. We asked ourselves some key
          questions:
        </p>
        <ul className="list-disc pl-6 italic">
          <li>What would make a child want to explore more?</li>
          <li>How can we layer learning with fun?</li>
          <li>How might we guide kids without overwhelming them?</li>
        </ul>
        <p>
          We conducted interviews with parents and children aged 6 to 12, which
          revealed that kids are naturally drawn to movement, surprise and
          exploration. They engage most with experiences that are playful and
          hands-on while providing clear feedback. We translated these insights
          into user personas:
        </p>
        <Carousel images={images} imageClassName="w-5/6" />
        <p>
          The next step was creating storyboards to visually explore the user's
          journey. This process helped us highlight key interaction moments and
          refine the experience from the user's point of view.
        </p>
        <Carousel images={images2} imageClassName="w-5/6" />

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          starting the design
        </h1>
        <p>
          We drew some sketches to explore ways of streamlining the process and
          providing users with clear instructions. Taking the time to draft
          iterations of each screen of the app on paper made sure that the
          elements that made it to digital wireframes would be well-suited to
          address user pain points. For the home screen, we prioritized a
          visually appealing look to appeal to children. These concepts were
          then translated into low-fidelity wireframes, followed by a low
          fidelity prototype for usability testing.
        </p>
        <Carousel images={images3} imageClassName="w-5/6" />
        <p className="mt-4">
          We conducted usability testing with 5 participants age 8 to 12. The
          goal was to uncover:
        </p>
        <ul className="mt-2 list-disc pl-6 italic">
          <li>
            How long does it take for an user to scan a QR code and complete an
            exhibit challenge?
          </li>
          <li>
            What can we learn from the steps the children take to explore
            exhibits with the app, versus exploring exhibits without the app?
          </li>
        </ul>
        <div className="border-l-4 border-amber-300 bg-gray-50 p-2">
          It was observed that <strong>4 / 5</strong> participants were unsure
          what to do after scanning a QR code. This means that the post-scan
          experience was not immediately intuitive for many users,
        </div>
        <div className="border-l-4 border-amber-300 bg-gray-50 p-2">
          It was observed that <strong>2 / 5</strong> participants found the
          quiz questions exciting and wanted to complete more than required.
          This means that the quiz challenges were engaging for some users, but
          not yet for everyone,
        </div>
        <div className="border-l-4 border-amber-300 bg-gray-50 p-2">
          It was observed that <strong>5 / 5</strong> participants accidentally
          quit a quiz without receiving any confirmation or warning. This means
          that it was too easy for users to leave a challenge without realizing
          it, which could cause frustration or lost progress.
        </div>

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          refining the design
        </h1>
        <p>
          With usability insights in hand, we developed a flexible and adaptable
          design system - featuring a cohesive grid, color palette, typography,
          iconography and UI components. The system was built to scale and
          evolve with the project, ensuring consistency across screens while
          allowing for rapid iteration.
        </p>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/mf-DesignSystem.jpg"
          width={1000}
          height={50}
          alt="Design System"
          priority
        />
        <p>
          Next step was continuously refining the design based on usability
          testing insights to address key pain points and enhance the overall
          user experience.
        </p>
        <Image
          className="mx-auto w-full rounded-xl"
          src="/mf-Flow.jpg"
          width={1000}
          height={50}
          alt="Flow"
          priority
        />
        <p className="mt-8">
          And finally, a high-fidelity prototype was created to test the design!
        </p>
        <FigmaEmbed figmaUrl="https://www.figma.com/proto/3lgReeL93JbVcRhgVVRmAY/MuseumFun-App---Web?page-id=47%3A50&node-id=60-2550&starting-point-node-id=60%3A2550&t=vVJE0jTXwTmQGfoN-1" />

        <h1 className={`${montserrat.className} pt-8 text-3xl font-semibold`}>
          going forward
        </h1>
        <p>
          Even though we completed the initial design process, we see room for
          further improvement and iteration. Some areas we're excited to explore
          next include:
        </p>
        <ul className="list-disc pl-6 italic">
          <li>
            Introducing more diverse and dynamic challenges to keep users
            engaged throughout the visit,
          </li>
          <li>
            Creating personalized and interactive features to help users
            navigate the museum and feel more immersed in their journey.
          </li>
        </ul>
        <p>
          This project was a valuable learning experience for me, both
          creatively and professionally. I deepened my understanding of:
        </p>
        <div className="border-l-4 border-emerald-300 bg-emerald-50 p-2">
          From empathizing, defining and ideation to prototyping and testing, I
          experienced the full cycle of product design in a real-world context,
        </div>
        <div className="border-l-4 border-emerald-300 bg-emerald-50 p-2">
          I learned how to prioritize user needs, especially when designing for
          children by putting empathy at the core of every decision,
        </div>
        <div className="border-l-4 border-emerald-300 bg-emerald-50 p-2">
          I became much more confident using Figma to create wireframes,
          components and interactive prototypes, streamlining both design and
          collaboration.
        </div>
      </div>
    </div>
  );
}
