import Greating from "./Page_components/Intro_structure/Title";
import Nav from "./Page_components/Intro_structure/NavBar";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
function App(){
 return (
     <div>
     <Nav />
    <Greating />
    <Desc />
    <Activity />
    </div>
      );
}
export default App;
