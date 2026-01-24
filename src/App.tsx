import Greating from "./Page_components/Intro_structure/Title";
import Nav from "./Page_components/Intro_structure/NavBar";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
import Skill from "./Page_components/SkillSet/SkillDes"
import Hire from "./Page_components/HireMe/hire"
import SecBtn from './Page_components/Activity/ActIcon/SecBtn'
import PrblmS from './Page_components/Activity/ActIcon/PrblmS'
import Soft from './Page_components/Activity/ActIcon/Soft'
import Math from './Page_components/Activity/ActIcon/Math'
function App(){
 return (
     <div>
     <Nav />
    <Greating />
    <Desc />
    <Activity />
    <SecBtn />
    <PrblmS />
    <Soft />
    <Math />
    <Skill/>
    <Hire />
    </div>
      );
}
export default App;
