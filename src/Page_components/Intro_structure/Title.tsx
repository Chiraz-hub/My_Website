import './Title.css';
function Greating(){
    return (
      <div className = 'great'>
           <div className="top-page">
            <div className="logo-gre">
                <div className="big-circle">
                    <div className="middle-circle">
                        <div className="small-circle">
                            <div className="min-circle"></div>
                        </div>
                    </div>
                </div>
                <h2 className = "name-gre">BOUCENNA CHIRAZ</h2>
            </div>
            <nav>
                <ul>
                    <li><button className= 'abt-btn'><a href = '#home'>HOME</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#about'>ABOUT</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#activity'>ACTIVITY</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#skills'>SKILLS</a></button></li>
                </ul>
            </nav>
        </div>
      <div className = "intro">
     <h1 className ='gre-h1'>Hey, I Am Boucenna !</h1>
     <p className = 'small-des-gre'>Welcome To My Page.<span id="typing"><span className='soft-sec'> Software & Security </span></span></p>
     <button className = 'ScrollBtn'><a href = '#about'>Scroll Down ↓</a></button>
      </div>
      </div>
    );
}
export default Greating;