import React from 'react';
import styled from 'styled-components';

const Loader2 = () => {
  return (
    <StyledWrapper>
      <div className="scale-75">
        <div className="cloud" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .cloud {
    width: 150px;
    height: 70px;
    background: #f9fafb;
    box-shadow: 5px 5px rgba(0,0,0,0.1);
    border-radius: 70px;
  }

  .cloud::after, .cloud::before {
    content: "";
    position: relative;
    display: inline-block;
    background: inherit;
    border-radius: inherit;
  }

  .cloud::after {
    width: 50px;
    height: 50px;
    top: -30px;
    left: -55px;
  }

  .cloud::before {
    width: 70px;
    height: 70px;
    top: -20px;
    left: 60px;
  }

  .cloud {
    animation: float 1.8s infinite alternate;
  }

  @keyframes float {
    0% {
      transform: translateY(15px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes sha {
    0% {
      transform: scale(1,1);
    }

    100% {
      transform: scale(.85,.85);
    }
  }
    
  }`;

export default Loader2;
