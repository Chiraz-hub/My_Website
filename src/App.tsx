import Greating from "./Page_components/Intro_structure/Title";
import Nav from "./Page_components/Intro_structure/NavBar";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
import Skill from "./Page_components/SkillSet/SkillDes"
function App(){
 return (
     <div>
     <Nav />
    <Greating />
    <Desc />
    <Activity />
    <Skill/>
    </div>
      );
}
export default App;
