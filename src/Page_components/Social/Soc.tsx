import styled from "styled-components";

const SocialIcon = () => {
  return (
    <Wrapper>
      <div className="main">

        <div className="row">
          <button className="card instagram">
            <svg viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </button>

          <button className="card twitter">
            <svg viewBox="0 0 24 24">
              <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.2 4.2 0 001.85-2.3 8.3 8.3 0 01-2.65 1.02 4.15 4.15 0 00-7.07 3.78A11.8 11.8 0 013 4.9a4.14 4.14 0 001.28 5.53 4.1 4.1 0 01-1.88-.52v.05c0 2 1.43 3.67 3.33 4.05a4.2 4.2 0 01-1.87.07 4.16 4.16 0 003.88 2.88A8.34 8.34 0 012 19.54a11.77 11.77 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.52A8.2 8.2 0 0022 5.92z"/>
            </svg>
          </button>
        </div>

        <div className="row">
          <button className="card github">
            <svg viewBox="0 0 24 24">
              <path d="M12 .5A11.5 11.5 0 000 12a11.5 11.5 0 008 10.94c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.54 1.01.11-.79.42-1.33.76-1.63-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.5.12-3.13 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.63.24 2.83.12 3.13.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A11.5 11.5 0 0024 12 11.5 11.5 0 0012 .5z"/>
            </svg>
          </button>

          <button className="card discord">
       <svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.317 4.369A19.791 19.791 0 0015.885 3c-.191.328-.403.775-.553 1.125a18.27 18.27 0 00-6.664 0A11.53 11.53 0 008.115 3a19.736 19.736 0 00-4.432 1.369C1.743 7.16 1.24 9.874 1.5 12.553c1.29.96 2.54 1.545 3.77 1.934.303-.414.572-.855.806-1.32-.444-.168-.867-.376-1.264-.617.106-.08.21-.162.31-.246 2.44 1.14 5.09 1.14 7.502 0 .102.084.205.166.31.246-.398.241-.821.45-1.266.617.236.465.505.906.81 1.32 1.23-.39 2.48-.974 3.77-1.934.32-3.29-.547-5.98-2.233-8.184zM9.75 10.75c-.73 0-1.33-.67-1.33-1.5s.59-1.5 1.33-1.5c.75 0 1.35.67 1.33 1.5 0 .83-.58 1.5-1.33 1.5zm4.5 0c-.73 0-1.33-.67-1.33-1.5s.59-1.5 1.33-1.5c.75 0 1.35.67 1.33 1.5 0 .83-.58 1.5-1.33 1.5z"/>
</svg>


          </button>
        </div>

      </div>
    </Wrapper>
  );
};

export default SocialIcon;

const Wrapper = styled.div`

  --size: 100px;
  --icon: calc(var(--size)/3);

  display:flex;
  justify-content:center;
  align-items:center;

  .main{
    display:flex;
    flex-direction:column;
    gap:1.4em;
    animation: float 4s ease-in-out infinite;
  }

  .row{
    display:flex;
    gap:1.4em;
  }

  .card{
    width:var(--size);
    height:var(--size);
    border:none;
    cursor:pointer;
    border-radius:24px;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.35s;
    box-shadow:
      rgba(0,0,0,0.25) 0px 10px 25px -5px,
      rgba(0,0,0,0.3) 0px 8px 10px -8px;
  }

  svg{
    width:var(--icon);
    height:var(--icon);
    transition:.35s;
  }

  /* colors */
  .instagram svg{ fill:#cc39a4; }
  .twitter svg{ fill:#03A9F4; }
  .github svg{ fill:#000; }
  .discord svg{ fill:#8c9eff; }

  /* hover effects */
  .card:hover{
    transform:scale(1.15) rotate(3deg);
    box-shadow:0 0 35px rgba(0,255,255,0.6);
  }

  .card:hover svg{
    fill:white;
  }

  .instagram:hover{ background:#cc39a4; }
  .twitter:hover{ background:#03A9F4; }
  .github:hover{ background:#000; }
  .discord:hover{ background:#8c9eff; }

  /* floating animation */
  @keyframes float{
    0%{ transform:translateY(0px); }
    50%{ transform:translateY(-15px); }
    100%{ transform:translateY(0px); }
  }

`;

