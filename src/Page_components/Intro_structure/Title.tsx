import './Title.css';
function Greating(){
    return (
      <div className = 'great'>
           <div className="top-page">
            <div className="top-name-container">
                <p className = "name-gre">Boucenna Chiraz</p>
            </div>
            <nav>
                <ul>
                    <li><button className= 'abt-btn'><a href = '#home'>HOME</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#about'>ABOUT</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#activity'>ACTIVITY</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#socials'>CONTACT</a></button></li>
                </ul>
            </nav>
        </div>
      <div className = "intro">
     <p className ='location-container'>I'm Boucenna Chiraz</p>
     <p className = 'intro-text-container'>
      <h1 className = 'text-name'>Software Engineering</h1>
    <p className = 'text-profession'>Aspiring Software Engineer Passionate About Solving Real-World Problems With Code While Working On<span className='soft-sec'> Software & Security </span></p>
     </p>
      </div>
      </div>
    );
}
export default Greating;