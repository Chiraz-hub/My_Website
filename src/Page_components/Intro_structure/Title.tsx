import './Title.css';
import image from '../../../mepic.jpg'
function Greating(){
    return (
      <div className = 'great'>
           <div className="top-page">
            <div className="top-name-container">

            </div>
            <nav>      
                          <p className = "name-gre">Boucenna Chiraz</p>
                <ul>
                    <li><button className= 'abt-btn'><a href = '#home'>HOME</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#about'>ABOUT</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#activity'>ACTIVITY</a></button></li>
                    <li><button className = 'abt-btn'><a href = '#socials'>CONTACT</a></button></li>
                </ul>
            </nav>
        </div>
      <div className = "intro">
        <div className = 'pic'><img src = {image} alt = 'picture of me'></img></div>
     <span className = 'typing-demo'><p className ='location-container'>I'm Boucenna Chiraz</p></span>
     <p className = 'intro-text-container'>
      <h1 className = 'text-name'>CyberSecurity Engineering</h1>
    <p className = 'text-profession'>Aspiring CyberSecurity Engineer Passionate About Solving Real-World Problems With Code While Working On<span className='soft-sec'> Software & Security </span></p>
     </p>
     <p className = 'Scrol-down'>Scroll down  ↓</p>
      </div>
      </div>
    );
}
export default Greating;