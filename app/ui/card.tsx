import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface CardProps {
  thumbnailUrl: string;
  text: string;
  blobColor?: string;
}

const Card: React.FC<CardProps> = ({ thumbnailUrl, text, blobColor = '#ecfcca' }) => {
  return (
    <StyledWrapper $blobColor={blobColor}>
      <div className="scale-75 md:scale-90 group flex flex-col items-center transform hover:rotate-1 transition duration-300 ease-in-out">
        <div className="card">
          <Image className="rounded-xl" src={thumbnailUrl} width={400} height={225} alt="Card Image" />
          <div className="bg" />
          <div className="blob" />
        </div>
        <div className="flex flex-row group relative items-center justify-center gap-2 p-3 mt-2 tracking-widest text-center text-gray-500 text-lg italic before:absolute before:inset-0 before:m-auto before:h-[50%] before:w-full before:rounded-full before:bg-amber-500 before:opacity-0 before:blur-md before:transition-opacity before:duration-500 group-hover:text-amber-800 group-hover:before:opacity-50">
          <span>{text}</span>
          <ArrowRightIcon className="w-6 h-6 transition-transform duration-300 transform -rotate-45 group-hover:rotate-0" />
        </div>
      </div>
    </StyledWrapper>
  );
};

// Use `$blobColor` instead of `blobColor` to avoid passing it to the DOM
const StyledWrapper = styled.div.attrs<{ $blobColor: string }>(() => ({}))`
  .card {
    position: relative;
    width: 410px;
    height: 235px;
    border-radius: 14px;
    z-index: -1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 8px #f3f4f6, -1px -1px 2px #e5e7eb;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 400px;
    height: 225px;
    z-index: -2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 12px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: -3;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 200px;
    border-radius: 50%;
    background-color: ${({ $blobColor }) => $blobColor}; /* Fixed: Correct prop usage */
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default Card;
