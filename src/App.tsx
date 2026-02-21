import Greating from "./Page_components/Intro_structure/Title";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
import Skill from "./Page_components/SkillSet/SkillDes"
import Socials from './Page_components/Social/Social'
import './App.css'
function App() {
  return (
    <> 
    <main>
    <section className = 'section-Greating'><Greating /></section>
    <section className= 'section'><Desc /></section>
    <section className = 'section'><Activity /></section>
    <section className = 'section'><Skill /></section>
    <section className = 'section'><Socials /></section>
    </main>
    </>
  )
}
   export default App;