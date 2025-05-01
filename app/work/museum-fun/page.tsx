import FigmaEmbed from '@/app/ui/figma-embed';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className='flex flex-col items-center justify-center text-gray-600 text-lg space-y-6 md:space-y-10'>
        <h1 className='text-4xl md:text-6xl text-gray-800'>MuseumFun</h1>
        <p className="mt-4 text-xl text-center max-w-3xl mx-auto italic">
          Transforms the museum experience by using augmented reality and interactive activities to bring exhibits to life, offering immersive storytelling as visitors explore!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>TYPE</span> concept
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>DURATION</span> 2 months
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>COMPLETED</span> may 2025
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>ROLE</span> lead ux designer
          </div>
        </div>

        <Image className='rounded-xl' src="/mf-Thumbnail.png" width={1000} height={50} alt="Thumbnail" priority />

        <div className="w-full md:w-4/5">
          <h2 className="mt-20 text-3xl font-bold text-gray-800">New ways to experience history.</h2>
          <p className="mt-4">
            This project reimagines how people explore exhibitions by making interaction seamless, educational, and fun. More than anything, we designed the application with children in mind — curious, energetic, easily distracted, and full of questions. Traditional museums often struggle to capture the attention of young visitors, with static displays and long labels that don’t speak their language. We saw an opportunity to bridge that gap.
          </p>
          
          <h3 className="mt-20 text-2xl text-amber-800 font-bold">The challenges</h3>
          <p className="mt-2">
            Designing a mobile app for a museum isn't just about digitizing information—it’s about enhancing physical space through digital experience. And that brought its own set of challenges:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li><strong>Fragmented Learning</strong> — Visitors often move between exhibits without context or continuity, get lost or miss key exhibit. We needed to create a narrative layer that connects them in an intuitive, engaging way.</li>
            <li><strong>Limited Engagement</strong> — Traditional museum experiences can be passive. The app had to turn observation into active participation,  especially for younger visitors.</li>
            <li><strong>Overwhelming Content</strong> — Museums often present a lot of information, and too much text or complexity can turn users away. The app had to present knowledge in layered formats: brief summaries, visuals and optional deep dives.</li>
          </ul>

          <div className="mt-20 p-6 bg-emerald-50 border border-emerald-300 rounded-2xl shadow-sm text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-4">
              <span className={`${montserrat.className} text-2xl text-emerald-700 font-bold`}>SOLUTION</span>
            </div>
            <p className="text-xl text-emerald-800 italic">
              Transform a museum visit from a static, linear walk into an interactive, personalized, and gamified experience using AR technology.
            </p>
          </div>

          <h3 className="mt-20 text-2xl text-amber-800 font-bold">Understanding the User</h3>
          <p className="mt-2">
            To ground our ideas, we explored how kids, families, and educators move through physical exhibit spaces. We asked:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>What would make a child want to explore more?</li>
            <li>How can we layer learning with fun?</li>
            <li>How might we guide different types of users without overwhelming them?</li>
          </ul>
          <p className="mt-2">
            To better understand the needs of our audience, we conducted interviews with parents and children aged 6–12. Our research revealed that children are naturally drawn to exploration, movement, and surprise. They respond best to experiences that are playful, hands-on, and offer clear goals or feedback. User personas were created to help shape every design decision moving forward.
          </p>
          <Image className='mt-4 rounded-xl' src="/mf-Persona.png" width={1000} height={50} alt="Persona" priority />
          <p className="mt-2">
            Mapping out the flow of Semaj’s user journey revealed the benefits of the interactive museum app, by creating an engaging and informative experience.
          </p>
          <Image className='mt-4 rounded-xl' src="/mf-User Journey Map.png" width={1000} height={50} alt="User Journey Map" priority />

          <h3 className="mt-20 text-2xl text-amber-800 font-bold">Starting the design</h3>
          <Image className='mt-4 rounded-xl' src="/mf-Sketches 1.png" width={1000} height={50} alt="Sketches #1" priority />
          <Image className='mt-4 rounded-xl' src="/mf-Sketches 2.png" width={1000} height={50} alt="Sketches #2" priority />

        </div>
      </div>
    </div>
  );
}
