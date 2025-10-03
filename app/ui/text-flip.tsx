import React from 'react';
import styled from 'styled-components';
import { montserrat } from '@/app/ui/fonts';
import SplitText from "@/app/ui/split-text";

const TextFlip = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <SplitText
              text="Hello there!"
              className={`${montserrat.className} text-4xl md:text-6xl text-amber-800 font-semibold tracking-wider`}
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div className="card-back">
            <p className='text-3xl md:text-5xl text-amber-800 italic font-bold tracking-wider'>GENERAL KENOBI!</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 500px;
    height: 50px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }`;

export default TextFlip;
