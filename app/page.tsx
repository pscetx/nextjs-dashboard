'use client';

import Card from '@/app/ui/card';
import Link from 'next/link';
import TextFlip from '@/app/ui/text-flip';
import Loader1 from '@/app/ui/loader-1';
import Loader2 from '@/app/ui/loader-2';

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

      <section className="relative h-[93vh] w-full flex flex-col justify-between p-10 border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 via-amber-50 to-amber-100 rounded-xl overflow-hidden">
      <div ref={blob1} className="md:block hidden absolute w-60 h-60 bg-amber-100 opacity-30 blur-3xl rounded-full transition-transform duration-300 ease-out" />
      <div ref={blob2} className="md:block hidden absolute w-80 h-80 bg-amber-300 opacity-20 blur-3xl rounded-full transition-transform duration-500 ease-out" />
      <div ref={blob3} className="md:block hidden absolute w-72 h-72 bg-amber-500 opacity-25 blur-3xl rounded-full transition-transform duration-700 ease-out" />

        <div>
          <TextFlip />
          <div className="text-lg text-gray-800 mt-4 max-w-3xl">
            I'm Thanh, a student passionate about
            <span className='font-semibold'> UI/UX Design</span>. I love crafting intuitive and visually appealing interfaces for web and mobile applications.
          </div>
          <p className="text-lg text-gray-800 mt-4 max-w-2xl italic">
            Welcome to my portfolio!
          </p>
        </div>
      <Loader2 />  
      <Loader1 />
    </section>


      <h1 className="mt-10 mb-4 text-xl md:text-2xl text-gray-800 tracking-widest italic">Featured work</h1>
      <div className="flex md:flex-row md:flex-wrap flex-col">
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/fj-Thumbnail.png"
            text="Fit Journey"
            blobColor="#94dfcf"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-vnu-office.png"
            text="VNU Office"
            blobColor="#7579de"
          />
        </Link>
        <Link href="/work/fit-journey">
          <Card 
            thumbnailUrl="/thumbnail-museum-fun.png"
            text="Museum Fun"
            blobColor="#78b4e8"
          />
        </Link>
      </div>
    </div>
  );
}
