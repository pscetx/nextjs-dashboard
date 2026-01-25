'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type CarouselImage = {
  src: string;
  alt: string;
};

type Props = {
  images: CarouselImage[];
  imageClassName?: string;
};

export default function Carousel({ images, imageClassName }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navButtonClass =
    'absolute top-1/2 -translate-y-1/2 rounded-md ' +
    'bg-amber-100 px-3 py-1 font-bold text-amber-900 ' +
    'shadow-[4px_4px_0_#7c2d12] ' +
    'transition-transform active:translate-y-[calc(-50%+2px)] ' +
    'active:shadow-[2px_2px_0_#7c2d12]';

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
          initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="cursor-grab active:cursor-grabbing"
        >
          <Image
            className={`mx-auto rounded-xl ${imageClassName ?? ''}`}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1000}
            height={50}
            priority
          />
        </motion.div>
      </AnimatePresence>

      <button onClick={prev} className={`${navButtonClass} left-2`}>
        ‹
      </button>

      <button onClick={next} className={`${navButtonClass} right-2`}>
        ›
      </button>

      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`mt-4 h-2.5 w-2.5 rounded-full transition ${
              i === currentIndex
                ? 'scale-110 bg-amber-800'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
