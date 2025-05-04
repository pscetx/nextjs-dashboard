'use client';

import { useRouter } from 'next/navigation';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
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
        <h1 className='text-4xl md:text-6xl text-gray-800'>Cybersecurity Assessment for SMEs</h1>
        <p className="mt-4 text-xl text-center max-w-3xl mx-auto italic">
          A simple tool designed to help small and medium-sized enterprises evaluate their cybersecurity posture and protect their digital assets efficiently and affordably.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>TYPE</span> wep app
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>DURATION</span> 3 months
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>COMPLETED</span> december 2024
          </div>
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className} text-xs text-amber-700 font-extrabold`}>ROLE</span> project manager / lead programmer
          </div>
        </div>

        <Image className='rounded-xl' src="/si-Thumbnail.png" width={1000} height={50} alt="Thumbnail" priority />

        <div className="w-full md:w-4/5">
          <h2 className="mt-10 text-3xl font-bold text-gray-800">
            <a href="https://sme.iti.edu.vn" target="_blank" rel="noopener noreferrer" className="hover:underline">
              sme.iti.edu.vn
            </a>
          </h2>
          <p className="mt-4">
            This project rethinks how small and medium enterprises understand and improve their cybersecurity. We created an application that makes assessment simple, practical, and action-oriented, built especially for organizations with limited resources but growing digital risks. Cybersecurity tools are often too complex, too expensive, or too abstract for the realities of SMEs. We saw a chance to cut through that noise with a focused, user-friendly solution that gives clear insights and helps teams take the next step with confidence.
          </p>
          
          <h3 className="mt-20 text-3xl text-amber-800 font-bold">The challenges</h3>
          
          <p className="mt-2">
            Most SMEs know cybersecurity is important—but they don’t always know where to start. We encountered several key obstacles in designing a tool that truly works for them:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li><strong>Lack of technical expertise:</strong> Many teams don’t have in-house security professionals. They need guidance, not jargon.</li>
            <li><strong>Limited time and budget:</strong> SMEs can’t afford to invest in expensive solutions or spend weeks learning complex systems. Our tool had to deliver value quickly and clearly.</li>
            <li><strong>Low awareness of risks:</strong> Without a clear picture of their vulnerabilities, businesses often underestimate threats or delay action. Raising awareness was a core design goal.</li>
            <li><strong>One-size-fits-all solutions:</strong> Generic tools often miss the nuances of how SMEs actually operate. We had to tailor our assessments to reflect real-world conditions and workflows.</li>
            <li><strong>Resistance to change:</strong> Even when risks are clear, shifting internal habits or processes can be tough. The app had to make that shift feel manageable.</li>
          </ul>

          <div className="mt-20 p-6 bg-emerald-50 border border-emerald-300 rounded-2xl shadow-sm text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-4">
              <span className={`${montserrat.className} text-2xl text-emerald-700 font-bold`}>SOLUTION</span>
            </div>
            <p className="text-xl text-emerald-800 italic">
              Cybersecurity Assessment for SMEs is a lightweight wep app that helps small businesses assess their cybersecurity posture, identify risks, and take meaningful action. By guiding users through a clear, step-by-step evaluation, the app translates technical concerns into understandable insights.
            </p>
          </div>

          <h3 className="mt-20 text-3xl text-amber-800 font-bold">Crafting the questionnaire</h3>
          
          <p className="mt-2">
            The questionnaire was developed based on a thorough integration and analysis of three foundational cybersecurity frameworks: the <a href="https://www.iso.org/standard/iso-iec-27000-family" target="_blank" rel="noopener noreferrer" className="underline">
              ISO/IEC 27000 series
            </a> (especially ISO/IEC 27001), <a href="https://csrc.nist.gov/publications/search?keywords-lg=800-&sortBy-lg=Number+DESC&viewMode-lg=brief&ipp-lg=all&status-lg=Final&series-lg=SP&topicsMatch-lg=ANY&controlsMatch-lg=ANY" target="_blank" rel="noopener noreferrer" className="underline">
              NIST SP 800-53 Rev 5.1.1
            </a> and <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="underline">
              NIST Cybersecurity Framework (CSF) 2.0
            </a>. It also references other trusted sources such as CIS Controls v8 and COBIT 2019 to ensure comprehensive coverage while remaining concise and accessible for senior executives and business managers.<br /><br />
            The goal is to provide a practical tool for leadership to quickly grasp their organization's overall cybersecurity status. This helps identify strengths and weaknesses, guiding informed decisions to improve information protection capabilities.<br /><br />
            The questions are grouped into five key areas: <strong>Governance, Organization, Human Resources, Investment and Operations</strong>. This structure aligns with relevant Vietnamese regulations, such as Decision 1013/QĐ-BTC (2023) and Circular 09/2020/TT-NHNN for the banking sector.<br /><br />
            The target users are business leaders, especially CEOs, who may not manage IT systems directly but make critical decisions on cybersecurity strategy, budget, and policy. This focus is crucial, as their decisions directly impact the organization’s security readiness. The tool is especially suitable for small and medium enterprises (SMEs), which often lack dedicated cybersecurity resources and are more vulnerable to attacks.<br /><br />
            Drawing from multiple standards, the questionnaire includes 40 carefully selected questions that reflect key organizational activities. Each question is scored from 0 to 4, representing five levels of cybersecurity maturity:<br />
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li><strong>0</strong> - Unaware of the issue</li>
            <li><strong>1</strong> - Aware, but no action taken</li>
            <li><strong>2</strong> - A plan exists, but implementation is weak</li>
            <li><strong>3</strong> - Effective measures are in place</li>
            <li><strong>4</strong> - Fully adapted and resilient</li>
          </ul>
          <br />
          <p className="mt-2">
            The output includes an overall score and breakdowns by each area, highlighting specific weaknesses. These scores serve not just as metrics, but as a foundation for informed decision-making. Leaders can:
          </p>
          <ul className="list-disc pl-6 italic mt-4">
            <li>Benchmark progress over time or against industry standards,</li>
            <li>Identify and prioritize areas needing improvement,</li>
            <li>Develop a step-by-step roadmap for enhancing cybersecurity, tailored to their size and capacity.</li>
          </ul>

          <h3 className="mt-20 text-3xl text-amber-800 font-bold">Final product</h3>
          <Image className='mt-4 rounded-xl' src="/si-Showcase 1.png" width={1000} height={50} alt="Showcase #1" priority />
          <Image className='mt-4 rounded-xl' src="/si-Showcase 2.png" width={1000} height={50} alt="Showcase #2" priority />
          <Image className='mt-4 rounded-xl' src="/si-Showcase 3.png" width={1000} height={50} alt="Showcase #3" priority />
          <Image className='mt-4 rounded-xl' src="/si-Showcase 4.png" width={1000} height={50} alt="Showcase #4" priority />
          
          <h3 className="mt-16 text-3xl text-amber-800 font-bold">Takeaways</h3>
          <p className="mt-2">
            Leading a team of four from concept to launch taught me that effective leadership is about creating clarity, trust, and momentum, not just managing tasks. I learned how to balance different skill sets, align the team around shared goals, and keep communication focused and open. At the same time, I had the chance to refine my full-stack coding and UI design skills, especially in building a smooth and engaging user experience for non-technical users.
          </p>
        </div>

      </div>
    </div>
  );
}
