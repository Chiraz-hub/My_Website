import Greating from "./Page_components/Intro_structure/Title";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
import Socials from './Page_components/Social/Social'
import './App.css'
function App() {
  return (
    <> 
    <main>
    <section className = 'section-Greating' id = 'home'><Greating /></section>
    <section className= 'section' id = 'about'><Desc /></section>
    <section className = 'section' id= 'activity'><Activity /></section>
    <section className = 'section' id = 'socials'><Socials /></section>
    </main>
    </>
  )
}
   export default App;