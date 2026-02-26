import SocialIcon from './Soc';
import './Soc.css'
function Socials(){
    return(
        <div className = 'hole-soc-container'>
      <div className='socials-container'>
         <div className = 'social-text'>
            <h1 className = 'social-title'>Contact Me</h1>
            <p className = 'socials-description'>Have a project in mind, a collaboration idea, or just want to connect?  
Feel free to reach out — I'm always open to meaningful conversations and opportunities.
</p>
         </div>
         <div className = 'social-icon'>
           <SocialIcon />
         </div>
     </div>
     <div className='Thanks'>
        <h1 className = 'thanks-title'>THANK YOU !</h1>
        <footer>
         <p>&copy; 2026 <span className = 'blue'>Boucenna Chiraz</span>. All rights reserved.</p>
        </footer>
     </div>
     </div>
    )
}
export default Socials ;