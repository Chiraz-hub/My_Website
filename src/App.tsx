import Greating from "./Page_components/Intro_structure/Title/Title";
import Nav from "./Page_components/Intro_structure/NavBar/NavBar";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
import Skill from "./Page_components/SkillSet/SkillDes"
import Hire from "./Page_components/HireMe/hire"
import Socials from './Page_components/Social/Soc'
function App(){
 return (
     <div>
     <Nav />
    <Greating />
    <Desc />
    <Activity />
    <Skill/>
    <Hire />
    <Socials />
    </div>
      );
}
export default App;
