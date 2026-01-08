'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';
import TextFlip from '@/app/ui/text-flip';
import Loader1 from '@/app/ui/loader-1';
import Loader2 from '@/app/ui/loader-2';
import FadeContent from '@/app/ui/fade-content'

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;

      animationFrameId = requestAnimationFrame(() => {
        if (blob1.current) blob1.current.style.transform = `translate(${x - 120}px, ${y - 120}px)`;
        if (blob2.current) blob2.current.style.transform = `translate(${x - 160}px, ${y - 160}px)`;
        if (blob3.current) blob3.current.style.transform = `translate(${x - 140}px, ${y - 140}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="w-full">
      <section className="relative h-[93vh] w-full flex flex-col justify-between p-10 border border-gray-50 bg-gradient-to-tr from-gray-50 to-amber-50 rounded-xl overflow-hidden">
        <div ref={blob1} className="md:block hidden absolute w-60 h-60 bg-amber-100 opacity-30 blur-3xl rounded-full transition-transform duration-300 ease-out" />
        <div ref={blob2} className="md:block hidden absolute w-80 h-80 bg-amber-300 opacity-20 blur-3xl rounded-full transition-transform duration-500 ease-out" />
        <div ref={blob3} className="md:block hidden absolute w-72 h-72 bg-amber-500 opacity-25 blur-3xl rounded-full transition-transform duration-700 ease-out" />

        <div className='item-center'>
          <TextFlip />
          <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0}>
            <div className="text-lg text-gray-800 mt-6 max-w-2xl">
              I'm Thanh, a designer with a passion for
              <span className='font-semibold'> User Experience</span>. I love coming up with clean, human-centered designs that make web and mobile applications both intuitive and visually engaging.
            </div>
            <p className="text-lg text-gray-800 mt-2 max-w-2xl">
              Welcome to my portfolio!
            </p>
          </FadeContent>
        </div>
        
        <div className="w-fit pt-4 grid grid-rows-2 grid-cols-2">
          
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


      <h1 className="mt-10 mb-4 text-xl md:text-2xl text-gray-800 tracking-wide">Featured works</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/museum-fun">
          <Card 
            thumbnailUrl="/mf-Thumbnail.jpg"
            text="MuseumFun"
            blobColor="#ffffff"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/fj-Thumbnail.jpg"
            text="FitJourney"
            blobColor="#ffffff"
          />
        </Link>
      </div>
    </div>
  );
}
