import './Title.css';
function Greating(){
    return (
      <div className = 'great'>
           <div className="top-page">
            <div className="logo">
                <div className="big-circle">
                    <div className="middle-circle">
                        <div className="small-circle">
                            <div className="min-circle"></div>
                        </div>
                    </div>
                </div>
                <h2>BOUCENNA CHIRAZ</h2>
            </div>
            <nav>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>SKILLS</a></li>
                    <li><a><button className="hire">HIRE ME</button></a></li>
                </ul>
            </nav>
        </div>
      <div className = "intro">
     <h1 className ='gre-h1'>Hey, I Am Boucenna !</h1>
     <p className = 'small-des-gre'>Welcome To My Page. Software & Security </p>
     <button className = 'ScrollBtn'>Scroll Down ↓</button>
      </div>
      </div>
    );
}
export default Greating;