import styled, { keyframes } from 'styled-components';

const circleAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 0 150;
    stroke-dashoffset: 0;
  }
  47.5% {
    stroke-dasharray: 42 150;
    stroke-dashoffset: -16;
  }
  95%, to {
    stroke-dasharray: 42 150;
    stroke-dashoffset: -59;
  }
`;

const AnimatedContainer = styled.g`
  transform-origin: center;
  animation: ${circleAnimation} 2s linear infinite;

  circle {
    stroke-linecap: round;
    animation: ${dashAnimation} 1.5s ease-in-out infinite;
  }
`;

export function LoadingSpinner() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} stroke="#000">
      <AnimatedContainer>
        <circle cx={12} cy={12} r={9.5} fill="none" strokeWidth={3} />
      </AnimatedContainer>
    </svg>
  );
}
