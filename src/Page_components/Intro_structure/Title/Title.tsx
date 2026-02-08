import './Title.css';
function Greating(){
    return (
      <div className = 'great'>
          <nav>
        <ul> 
            <li><button className = 'abt-btn'>Home</button></li>
            <li><button className = 'abt-btn'>About</button></li>
            <li><button className = 'abt-btn'>TechStack</button></li>
            <li><button className= 'abt-btn'>Skills</button></li>
            <li><button className = 'abt-btn'>Socials</button></li>
        </ul>
      </nav>
      <div className = "intro">
     <h1 className ='gre-h1'>Hey, I Am Boucenna !</h1>
     <p className = 'small-des-gre'>Welcome To My Page. Software & Security </p>
     <button className = 'ScrollBtn'>Scroll Down ↓</button>
      </div>
      </div>
    );
}
export default Greating;