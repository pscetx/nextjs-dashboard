'use client';

import { useRouter } from 'next/navigation';
import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import React, { useState } from 'react'

const images = [
  {
    src: '/mf-Storyboard 1.jpg',
    alt: 'Sketches #1',
  },
  {
    src: '/mf-Storyboard 2.jpg',
    alt: 'Sketches #2',
  },
]

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
  const router = useRouter();
  
  return (
    <div className="p-6 w-full">
      <button
        onClick={() => router.back()}
        className="mb-6 text-amber-900 hover:underline text-xl"
      >
        ← back
      </button>
      <div className='flex flex-col items-center justify-center text-gray-600 text-lg space-y-6 md:space-y-10'>
        <h1 className='text-4xl md:text-6xl text-gray-800'>MuseumFun</h1>
        <p className="mt-4 text-xl text-center max-w-3xl mx-auto italic">
          Transforms the museum experience through augmented reality and interactive activities, bringing exhibits to life with immersive storytelling throughout the visitor’s journey!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>TYPE</span> concept
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>DURATION</span> 2 months
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>COMPLETED</span> april 2025
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>ROLE</span> lead ux designer
          </div>
        </div>

        <Image className='rounded-xl' src="/mf-Thumbnail.png" width={1000} height={50} alt="Thumbnail" priority />

        <div className="w-full md:w-4/5">
          <h2 className="mt-10 text-3xl font-bold text-gray-800">New ways to experience history.</h2>
          <p className="mt-4">
            This project reimagines how people explore exhibitions by making interaction seamless, educational, and fun. Above all, we designed the application with children in mind — curious, energetic, easily distracted, and full of questions. Traditional museums often struggle to hold the attention of young visitors, relying on static displays and lengthy labels that don’t speak their language. We saw an opportunity to bridge that gap with a more engaging, interactive experience.
          </p>
          
          {/* Section 1 */}
          <h3 className="mt-20 text-3xl text-amber-800 font-bold">The challenges</h3>
          
          <p className="mt-2">
            Designing a mobile app for a museum isn’t just about digitizing information — it’s about enriching the physical space through a meaningful digital layer. And that came with its own set of challenges:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li><strong>Fragmented Learning:</strong> Museum visitors often move between exhibits without clear context or continuity — sometimes getting lost or missing key displays. We needed to create a narrative layer that intuitively connects exhibits, guiding exploration in a way that feels both seamless and engaging.</li>
            <li><strong>Limited Engagement:</strong> Traditional museum visits can feel passive, especially for younger audiences. Our goal was to transform observation into active participation — encouraging curiosity through interaction, play, and discovery.</li>
            <li><strong>Overwhelming Content:</strong> Museums typically present large volumes of information, which can be daunting or off-putting — especially when delivered as dense text. The app had to distill content into accessible layers: concise summaries, engaging visuals, and optional deep dives for those who want to explore more.</li>
          </ul>

          <div className="mt-20 p-6 bg-emerald-50 border border-emerald-300 rounded-2xl shadow-sm text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-4">
              <span className={`${montserrat.className} text-2xl text-emerald-700 font-bold`}>SOLUTION</span>
            </div>
            <p className="text-xl text-emerald-800 italic">
              The goal was to shift the museum experience from a passive, linear walkthrough to an interactive, personalized adventure — enhanced through AR technology and playful, gamified elements.
            </p>
          </div>

          {/* Section 2 */}
          <h3 className="mt-20 text-3xl text-amber-800 font-bold">Understanding the User</h3>
          
          <p className="mt-2">
            To ground our ideas in real-world behavior, we observed how kids, families, and educators interact with physical exhibit spaces. We asked key questions like:
          </p>
          <ul className="list-disc pl-6 italic mt-2">
            <li>What would make a child want to explore more?</li>
            <li>How can we layer learning with fun?</li>
            <li>How might we guide different types of users without overwhelming them?</li>
          </ul>
          
          <p className="mt-2">
            To deepen our understanding, we conducted interviews with parents and children aged 6–12. Our research revealed that kids are naturally drawn to movement, surprise, and exploration. They engage most with experiences that are playful, hands-on, and provide clear goals or feedback.
            We translated these insights into user personas, which became essential tools for shaping every design decision moving forward.
          </p>
          <Image className='mt-4 rounded-xl' src="/mf-Persona.png" width={1000} height={50} alt="Persona" priority />
          
          <div className='grid grid-cols-1 md:grid-cols-4 mt-8 gap-4'>
            <p className="md:col-span-1">
              Mapping Semaj’s user journey helped uncover how the interactive museum app enhances the visitor experience — making it more engaging, informative, and tailored to their needs.
            </p>
            <Image className='rounded-xl md:col-span-3' src="/mf-User Journey Map.png" width={1000} height={50} alt="User Journey Map" priority />
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-4 mt-8 gap-4'>
            <div className="relative w-full mx-auto md:col-span-3">
              <div className="rounded-xl overflow-hidden">
                <Image
                  className="rounded-xl"
                  src={images[currentIndex].src}
                  width={1000}
                  height={50}
                  alt={images[currentIndex].alt}
                  priority
                />
              </div>
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full px-3 py-1 shadow"
              >
                &lt;
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full px-3 py-1 shadow"
              >
                &gt;
              </button>
            </div>
            <p className="md:col-span-1">
              The next step was creating storyboards to visually explore the user’s journey with the product. This process helped us understand user behaviors, highlight key interaction moments, and refine the experience from their point of view.
            </p>
          </div>

          {/* Section 3 */}
          <h3 className="mt-20 text-3xl text-amber-800 font-bold">Starting the design</h3>
          <p className="mt-2">
            We created concept sketches to explore ways of streamlining the process and providing users with clear instructions.
            Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, We prioritized a visually appealing look to appeal to children.
            These concepts were then translated into low-fidelity wireframes, followed by a low fildelity prototype for usability testing.
          </p>
          <Image className='mt-4 rounded-xl' src="/mf-Paper Wireframes.jpg" width={1000} height={50} alt="Paper Wireframes" priority />
          <Image className='mt-4 rounded-xl' src="/mf-Lo Fi Prototype.png" width={1000} height={50} alt="Lo-Fi Prototype" priority />

          <p className="mt-4">
            We conducted usability testing with 5 participants. The goal was to uncover:
          </p>
          <ul className="list-disc pl-6 italic mt-2">
            <li>How long does it take for an user to scan a QR code and complete an exhibit challenge?</li>
            <li>What can we learn from the steps children take to explore exhibits with the app, versus exploring exhibits without the app?</li>
          </ul>
          <p className="mt-2">
            We identified several common pain pointsusers experienced when using the prototype:
          </p>
          <div className="mt-4 p-2 bg-amber-50 border-b-2 border-amber-300 rounded-md shadow-sm">
            <p className="text-amber-900">
              It was observed that <strong>4 out of 5</strong> participants were unsure what to do after scanning a QR code. This means that the post-scan experience was not immediately intuitive for many users.
            </p>
          </div>
          <div className="mt-4 p-2 bg-amber-50 border-b-2 border-amber-300 rounded-md shadow-sm">
            <p className="text-amber-900">
              It was observed that <strong>5 out of 5</strong> participants accidentally quit a quiz without receiving any confirmation or warning. This means that it was too easy for users to leave a challenge without realizing it, which could cause frustration or lost progress.
            </p>
          </div>
          <div className="mt-4 p-2 bg-amber-50 border-b-2 border-amber-300 rounded-md shadow-sm">
            <p className="text-amber-900">
              It was observed that <strong>2 out of 5</strong> participants found the quiz questions exciting and wanted to complete more than required. This means that the quiz challenges were engaging for some users, but not yet for everyone.
            </p>
          </div>

          {/* Section 4 */}
          <h3 className="mt-20 text-3xl text-amber-800 font-bold">Refining the design</h3>
          <p className="mt-4">
            With usability insights in hand, we developed a flexible and adaptable design system — featuring a cohesive grid, color palette, typography, iconography and UI components. The system was built to scale and evolve with the project, ensuring consistency across screens while allowing for rapid iteration.
          </p>
          <Image className='mt-4 rounded-xl' src="/mf-Design System.png" width={1000} height={50} alt="Design System" priority />
          <p className="mt-8">
            Next step was to continuously refine the design based on testing feedback to address key pain points and enhance the overall user experience.
          </p>
          <Image className='mt-4 rounded-xl' src="/mf-Showcase 1.png" width={1000} height={50} alt="Showcase #1" priority />
          <Image className='mt-4 rounded-xl' src="/mf-Showcase 2.png" width={1000} height={50} alt="Showcase #2" priority />
          <p className="mt-8">
           And finally, a high-fidelity prototype was created to test the final design!
          </p>
          <FigmaEmbed figmaUrl="https://www.figma.com/proto/3lgReeL93JbVcRhgVVRmAY/MuseumFun-App---Web?page-id=47%3A50&node-id=60-2550&starting-point-node-id=60%3A2550&t=vVJE0jTXwTmQGfoN-1" />
          
          {/* Section 5 */}
          <h3 className="mt-16 text-3xl text-amber-800 font-bold">Going forward</h3>
          <p className="mt-2">
            Even though we completed the initial design process, we see room for further improvement and iteration. Some areas we’re excited to explore next include:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li><strong>Expanding Gameplay Variety:</strong> Introducing more diverse and dynamic challenges to keep users engaged throughout the visit.</li>
            <li><strong>Designing Map & Avatar Pages:</strong> Creating personalized and interactive features to help users navigate the museum and feel more immersed in their journey.</li>
          </ul>
          <p className="mt-2">
            This project was a valuable learning experience for me, both creatively and professionally. I deepened my understanding of:
          </p>
          <div className="mt-4 p-2 bg-emerald-50 border-b-2 border-emerald-300 rounded-md shadow-sm">
            <p className="text-emerald-900">
              <strong>The Design Process:</strong> From empathizing, defining and ideation to prototyping and testing, I experienced the full cycle of product design in a real-world context.
            </p>
          </div>
          <div className="mt-4 p-2 bg-emerald-50 border-b-2 border-emerald-300 rounded-md shadow-sm">
            <p className="text-emerald-900">
              <strong>Human-centered Design:</strong> I learned how to prioritize user needs, especially when designing for children, by putting empathy at the core of every decision.
            </p>
          </div>
          <div className="mt-4 p-2 bg-emerald-50 border-b-2 border-emerald-300 rounded-md shadow-sm">
            <p className="text-emerald-900">
              <strong>Figma:</strong> I became much more confident using Figma to create wireframes, components, and interactive prototypes, streamlining both design and collaboration.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
