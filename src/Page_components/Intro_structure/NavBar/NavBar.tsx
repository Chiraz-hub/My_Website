import './NavBar.css'
function Nav(){
    return (
      <nav>
        <ul> 
            <li><button className = 'abt-btn'>Home</button></li>
            <li><button className = 'abt-btn'>About</button></li>
            <li><button className = 'abt-btn'>TechStack</button></li>
            <li><button className = 'abt-btn'>Socials</button></li>
        </ul>
      </nav>
    );
};
export default Nav;