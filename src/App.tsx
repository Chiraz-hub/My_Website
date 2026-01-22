import Greating from "./Page_components/Intro_structure/Title";
import Nav from "./Page_components/Intro_structure/NavBar";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
import Skill from "./Page_components/SkillSet/SkillDes"
import Hire from "./Page_components/HireMe/hire"
import SecBtn from './Page_components/Activity/SecBtn'
import PrblmS from './Page_components/Activity/PrblmS'
function App(){
 return (
     <div>
     <Nav />
    <Greating />
    <Desc />
    <Activity />
    <SecBtn />
    <PrblmS />
    <Skill/>
    <Hire />
    </div>
      );
}
export default App;
