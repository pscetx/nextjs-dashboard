'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';
import TextFlip from '@/app/ui/text-flip';
import Loader1 from '@/app/ui/loader-1';
import Loader2 from '@/app/ui/loader-2';
import FadeContent from '@/app/ui/fade-content';

import { useEffect, useRef } from 'react';
import { montserrat } from './ui/fonts';

export default function HeroSection() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;

      animationFrameId = requestAnimationFrame(() => {
        if (blob1.current)
          blob1.current.style.transform = `translate(${x - 120}px, ${y - 120}px)`;
        if (blob2.current)
          blob2.current.style.transform = `translate(${x - 160}px, ${y - 160}px)`;
        if (blob3.current)
          blob3.current.style.transform = `translate(${x - 140}px, ${y - 140}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full">
      <section className="relative flex h-[67vh] w-full flex-col justify-between overflow-hidden rounded-xl border border-gray-50 bg-gradient-to-tr from-gray-50 to-amber-50 p-10 md:h-[93vh]">
        <div
          ref={blob1}
          className="absolute hidden h-60 w-60 rounded-full bg-amber-100 opacity-30 blur-3xl transition-transform duration-300 ease-out md:block"
        />
        <div
          ref={blob2}
          className="absolute hidden h-80 w-80 rounded-full bg-amber-300 opacity-20 blur-3xl transition-transform duration-500 ease-out md:block"
        />
        <div
          ref={blob3}
          className="absolute hidden h-72 w-72 rounded-full bg-amber-500 opacity-25 blur-3xl transition-transform duration-700 ease-out md:block"
        />

        <div>
          <div
            className={`${montserrat.className} text-5xl font-semibold text-amber-800 md:text-6xl`}
          >
            Hello there!
          </div>
          {/* <TextFlip />
          <FadeContent
            blur={true}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="mt-6 max-w-2xl text-lg text-gray-800">
              I'm Thanh, a designer with a passion for
              <span className="font-semibold"> User Experience</span>. I love
              coming up with clean, human-centered designs that make web and
              mobile applications both intuitive and visually engaging.
            </div>
            <p className="mt-6 max-w-2xl text-lg text-gray-800">
              Welcome to my portfolio!
            </p>
          </FadeContent> */}
        </div>

        <div className="grid w-fit grid-cols-2 grid-rows-2 pt-4">
          <div className="flex items-end justify-end pl-8 md:pl-24">
            <Loader2 />
          </div>
          <div></div>
          <div></div>
          <div className="flex items-start justify-end pl-4">
            <Loader2 />
          </div>
        </div>
        <Loader1 />
      </section>

      <h1 className="mb-4 mt-10 text-xl tracking-wide text-gray-800 md:text-2xl">
        Featured works
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        <Link href="/work/museum-fun">
          <Card
            thumbnailUrl="/mf-Thumbnail.jpg"
            text="Museum Fun App"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card
            thumbnailUrl="/fj-Thumbnail.jpg"
            text="Fit Journey App"
            blobColor="#ffffff"
          />
        </Link>
      </div>
    </div>
  );
}
