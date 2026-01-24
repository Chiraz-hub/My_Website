
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="header-bar">
          <p className="title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px">
              <path fill="#0277bd" d="M19.847,41.956c-5.629-0.002-11.259,0.024-16.888-0.013c-2.855-0.019-3.374-0.7-2.731-3.525 c2.178-9.58,4.427-19.143,6.557-28.734C7.356,7.112,8.588,5.975,11.312,6C22.57,6.106,33.829,6.034,45.088,6.046 c2.824,0.003,3.298,0.614,2.664,3.511c-2.058,9.406-4.129,18.809-6.236,28.203c-0.789,3.516-1.697,4.187-5.353,4.195 C30.724,41.966,25.285,41.958,19.847,41.956z" />
              <path fill="#fafafa" d="M25.057 23.922c-.608-.687-1.114-1.267-1.531-1.732-2.43-2.728-4.656-5.27-7.063-7.869-1.102-1.189-1.453-2.344-.13-3.518 1.307-1.16 2.592-1.058 3.791.277 3.34 3.717 6.676 7.438 10.071 11.104 1.268 1.369.972 2.3-.424 3.315-5.359 3.895-10.687 7.833-16.01 11.778-1.196.887-2.337 1.109-3.304-.201-1.066-1.445-.08-2.305 1.026-3.114 3.955-2.893 7.903-5.798 11.834-8.725C23.865 24.83 24.595 24.267 25.057 23.922zM21.75 37C20.625 37 20 36 20 35s.625-2 1.75-2c4.224 0 6.112 0 9.5 0 1.125 0 1.75 1 1.75 2s-.625 2-1.75 2C29.125 37 25 37 21.75 37z" />
            </svg>
            Windows PowerShell
          </p>
          <div className="controls">
            <p>-</p>
            <p>□</p>
            <p>x</p>
          </div>
        </div>
        <div className="completed">
          <p>Windows PowerShell</p>
          <p>Copyright (C) 2016 Microsoft Corporation.</p>
          <p>All rights reserved.</p>
          <br />
          <p>PS C:\Users\emmess&gt; Downloading - 100%</p>
          <p>PS C:\Users\emmess&gt; Installing - 100%</p>
        </div>
        <div className="body">
          <div className="start">PS Starting GTA ViceCity...</div>
          <div className="content">
            <div className="slash">|</div>
            <div className="slash">/</div>
            <div className="slash">-</div>
            <div className="slash">\</div>
            <div className="slash">|</div>
            <div className="slash">/</div>
            <div className="slash">-</div>
            <div className="slash">\</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    color: white;
    font-family: "Gill Sans MT", sans-serif;
    width: 275px;
    height: 200px;
    background-color: black;
    display: flex;
    flex-direction: column;
    border-radius: 4px 4px 0 0;
    border: 1px solid black;
  }

  .loader .header-bar {
    background-color: white;
    display: flex;
    justify-content: space-between;
    color: black;

    .title {
      background-color: white;
      display: flex;
      gap: 4px;
      font-size: 15px;
      align-items: center;
      width: fit-content;
      padding: 0 8px;
      margin-top: 4px;
    }

    .controls {
      display: flex;
      gap: 16px;
      margin: 0 8px;
      cursor: pointer;
    }
  }

  .loader .body {
    display: flex;
  }

  .loader .content,
  .loader .start,
  .loader .completed {
    padding: 0 4px;
    font-size: 14px;

    .slash {
      position: absolute;
      visibility: hidden;
      animation: 2s infinite loading;
    }
  }

  .loader .slash:nth-child(1) {
    animation-delay: 0.25s;
  }
  .loader .slash:nth-child(2) {
    animation-delay: 0.5s;
  }
  .loader .slash:nth-child(3) {
    animation-delay: 0.75s;
  }
  .loader .slash:nth-child(4) {
    animation-delay: 1s;
  }
  .loader .slash:nth-child(5) {
    animation-delay: 1.25s;
  }
  .loader .slash:nth-child(6) {
    animation-delay: 1.5s;
  }
  .loader .slash:nth-child(7) {
    animation-delay: 1.75s;
  }
  .loader .slash:nth-child(8) {
    animation-delay: 2s;
  }

  @keyframes loading {
    0% {
      visibility: visible;
    }
    12.5% {
      visibility: hidden;
    }
    25% {
      visibility: hidden;
    }
    37.5% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    62.5% {
      visibility: hidden;
    }
    75% {
      visibility: hidden;
    }
    87.5% {
      visibility: hidden;
    }
    100% {
      visibility: hidden;
    }
  }`;

export default Loader;
