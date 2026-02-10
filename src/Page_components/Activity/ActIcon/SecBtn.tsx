
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="fingerprint-container">
        <svg viewBox="0 0 256 256" height={256} width={256} xmlns="http://www.w3.org/2000/svg" className="fingerprint-svg">
          <path d="M126.42 24C70.73 24.85 25.21 70.09 24 125.81a103.53 103.53 0 0 0 13.52 53.54a4 4 0 0 0 7.1-.3a119.35 119.35 0 0 0 11.37-51A71.77 71.77 0 0 1 83 71.83a8 8 0 1 1 9.86 12.61A55.82 55.82 0 0 0 72 128.07a135.3 135.3 0 0 1-18.45 68.35a4 4 0 0 0 .61 4.85c2 2 4.09 4 6.25 5.82a4 4 0 0 0 6-1A151.2 151.2 0 0 0 85 158.49a8 8 0 1 1 15.68 3.19a167.3 167.3 0 0 1-21.07 53.64a4 4 0 0 0 1.6 5.63c2.47 1.25 5 2.41 7.57 3.47a4 4 0 0 0 5-1.61A183 183 0 0 0 120 128.28a8.16 8.16 0 0 1 7.44-8.21a8 8 0 0 1 8.56 8a198.94 198.94 0 0 1-25.21 97.16a4 4 0 0 0 2.95 5.92q4.55.63 9.21.86a4 4 0 0 0 3.67-2.1A214.9 214.9 0 0 0 152 128.8c.05-13.25-10.3-24.49-23.54-24.74A24 24 0 0 0 104 128a8.1 8.1 0 0 1-7.29 8a8 8 0 0 1-8.71-8a40 40 0 0 1 40.42-40c22 .23 39.68 19.17 39.57 41.16a231.4 231.4 0 0 1-20.52 94.57a4 4 0 0 0 4.62 5.51a104 104 0 0 0 10.26-3a4 4 0 0 0 2.35-2.22a244 244 0 0 0 11.48-34a8 8 0 1 1 15.5 4q-1.12 4.37-2.4 8.7a4 4 0 0 0 6.46 4.17A104 104 0 0 0 126.42 24M198 161.08a8 8 0 0 1-7.92 7a8 8 0 0 1-1-.06a8 8 0 0 1-6.95-8.93a253 253 0 0 0 1.92-31a56.08 56.08 0 0 0-56-56a57 57 0 0 0-7 .43a8 8 0 0 1-2-15.89a72.1 72.1 0 0 1 81 71.49a267 267 0 0 1-2.05 32.96" strokeWidth={1} stroke="currentColor" fill="currentColor" className="fingerprint-path" />
        </svg>
        <div className="scan-line" />
        <div className="matrix-rain" />
        <div className="ripple1" />
        <div className="ripple2" />
        <div className="ripple3" />
        <div className="glow" />
        <div className="status">Verifying...</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .fingerprint-container {
    position: relative;
    width: 160px;
    height: 160px;
    animation: flicker 3s infinite ease-in-out;
    border-radius: 50%;
  }

  .fingerprint-svg {
    width: 100%;
    height: 100%;
    color: #0077ffb5;
    filter: drop-shadow(0 0 5px #003cff);
    transition:
      transform 0.2s ease,
      filter 0.3s ease;
  }

  .fingerprint-path {
    stroke-dasharray: 500; /* Adjusted for new path length */
    stroke-dashoffset: 0;
    animation: draw 4s infinite linear;
  }

  /* Scan effect */
  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, transparent, #00b7ff, transparent);
    opacity: 0;
  }

  /* Matrix rain */
  .matrix-rain {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: linear-gradient(to bottom, rgba(0, 255, 0, 0.1), transparent);
    overflow: hidden;
    border-radius: 50%;
  }

  .matrix-rain::before {
    content: "101010 1100 0011 0101 1001 1110 0010 1101";
    position: absolute;
    color: #005eff;
    font-size: 14px;
    opacity: 0.2;
    animation: rain 1.5s infinite linear;
  }

  /* Ripples */
  .ripple1,
  .ripple2,
  .ripple3 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #006aff;
    opacity: 0;
    transform: scale(0);
  }

  /* Glow */
  .glow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: 0 0 20px #0095ff;
    opacity: 0;
  }

  .status {
    position: absolute;
    bottom: -30px;
    width: 100%;
    text-align: center;
    color: #0062ff;
    font-size: 16px;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: glitch-text 2s infinite;
  }

  /* Click effects */
  .fingerprint-container:active .fingerprint-svg {
    transform: scale(1.05) rotate(360deg);
    filter: drop-shadow(0 0 15px #005eff) blur(1px);
    animation:
      hack-spin 0.8s ease-out,
      glitch 0.3s infinite;
  }

  .fingerprint-container:active .fingerprint-path {
    animation: draw-fast 0.5s linear;
  }

  .fingerprint-container:active .glitch-line1 {
    animation: glitch-move1 0.3s infinite;
    opacity: 0.6;
  }

  .fingerprint-container:active .glitch-line2 {
    animation: glitch-move2 0.3s infinite;
    opacity: 0.6;
  }

  .fingerprint-container:active .ripple1 {
    animation: ripple-effect 0.6s ease-out;
  }

  .fingerprint-container:active .ripple2 {
    animation: ripple-effect 0.8s ease-out 0.2s;
  }

  .fingerprint-container:active .ripple3 {
    animation: ripple-effect 1s ease-out 0.4s;
  }

  .fingerprint-container:active .glow {
    box-shadow: 0 0 40px #0066ff;
    animation: glow-hack 0.8s ease-out;
  }

  .fingerprint-container:active .status {
    opacity: 1;
    animation: glitch-text 0.3s infinite;
  }

  /* Animations */
  @keyframes flicker {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.9;
    }
    75% {
      opacity: 0.95;
    }
  }

  @keyframes draw {
    0% {
      stroke-dashoffset: 500;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes draw-fast {
    0% {
      stroke-dashoffset: 500;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scan {
    0% {
      transform: translateY(0);
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(200px);
      opacity: 0.7;
    }
  }

  @keyframes rain {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes ripple-effect {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  @keyframes glow-hack {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes hack-spin {
    0% {
      transform: scale(1.05) rotate(0deg);
    }
    50% {
      transform: scale(1.15) rotate(180deg);
    }
    100% {
      transform: scale(1.05) rotate(360deg);
    }
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(2px, -2px);
    }
    60% {
      transform: translate(-2px, 0);
    }
    80% {
      transform: translate(2px, 0);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes glitch-move1 {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-55%) translateY(2px);
    }
    100% {
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes glitch-move2 {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-45%) translateY(-2px);
    }
    100% {
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes glitch-text {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-1px, 1px);
    }
    40% {
      transform: translate(1px, -1px);
    }
    60% {
      transform: translate(-1px, 0);
    }
    80% {
      transform: translate(1px, 0);
    }
    100% {
      transform: translate(0);
    }
  }`;

export default Button;
