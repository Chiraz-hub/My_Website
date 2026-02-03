import Greating from "./Page_components/Intro_structure/Title/Title";
import Nav from "./Page_components/Intro_structure/NavBar/NavBar";
import Desc from "./Page_components/About_Structure/Description"
import Activity from "./Page_components/Activity/act"
import Skill from "./Page_components/SkillSet/SkillDes"
import Socials from './Page_components/Social/Social'
import { ShaderGradientCanvas, ShaderGradient } from 'shader-gradient'
function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* --- Background Layer --- */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Keep it behind everything
        pointerEvents: 'none' // Ensures clicks pass through to your UI
      }}>
        <ShaderGradientCanvas 
           style={{ position: 'absolute', top: 0 }}
           // You can add camera controls here if needed
        >
            <ShaderGradient
              animate="on"
              axesHelper="off"
              bgColor1="#000000"
              bgColor2="#000000"
              brightness={0.8}
              cAzimuthAngle={270}
              cDistance={0.5}
              cPolarAngle={180}
              cameraZoom={15.1}
              color1="#73bfc4"
              color2="#ff810a"
              color3="#8da0ce"
              embedMode="off"
              envPreset="city"
              fov={45}
              gizmoHelper="hide"
              grain="on"
              lightType="env"
              pixelDensity={1}
              positionX={-0.1}
              positionY={0}
              positionZ={0}
              reflection={0.4}
              rotationX={0}
              rotationY={130}
              rotationZ={70}
              shader="defaults"
              type="sphere"
              uAmplitude={3.2}
              uDensity={0.8}
              uFrequency={5.5}
              uSpeed={0.3}
              uStrength={0.3}
            />
        </ShaderGradientCanvas>
      </div>

      {/* --- Foreground Content --- */}
      <main style={{ position: 'relative', zIndex: 1, color: 'white', padding: '2rem' }}>
        <h1>Welcome to My Site</h1>
        <p>The shader is flowing smoothly in the background.</p>
      </main>
    </div>
  )
}