import './Soc';
import SocialsIcon from './Soc';
import './Soc.css'
import Button from './DownCV'
function Socials(){
    return(
      <div className='social-container'>
         <div className = 'social-title'>
            <h1>Contact Me:</h1>
         </div>
     <div className = 'social-logo-container'>
        <div className = 'soc-icon-container'>
           <SocialsIcon />
        </div>
        <div className = 'downcv'>
           <Button />
        </div>
     </div>
     </div>
    )
}
export default Socials ;