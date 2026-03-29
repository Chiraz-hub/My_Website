 import './Description.css'
function Desc(){
    return(
        <div className="description-container">
      <div className ='text-description'>
             <h1 className = 'whoami'>
        RESUME
     </h1> 
     <p className ='textdes'>
     I'm Chiraz, a developer who enjoys turning complex problems into simple, elegant solutions. I specialize in algorithms, modern web technologies, and clean code architecture. I'm always learning, always building, and always improving.
     </p>

     <h1 className='whoami'>SKILLS</h1>
     <p className='textdes'>software development, networking, and cybersecurity fundamentals, with a strong foundation in algorithms, system-level concepts, 
                    and web technologies. I work with both theoretical and practical tools, and I continuously expand my skills 
                    through hands-on projects, problem-solving, and self-directed learning.
                    </p>
                    <div className = 'skill-icon'>
                        <div className = 'skill-security'>
                        <span className = 'skill-tag'>Algorithms & DSA</span>
                        <span className = 'skill-tag'>Linux</span>
                        <span className = 'skill-tag'>Security</span>
                        </div>
                        <div className = 'skill-security'>
                        <span className = 'skill-tag'>React</span>
                        <span className = 'skill-tag'>System Design</span>
                        <span className = 'skill-tag'>Networking</span>
                        </div>
                         <div className = 'skill-security'>
                        <span className = 'skill-tag'>Problem Sloving</span>
                        <span className = 'skill-tag'>Operating Systems</span>
                        <span className = 'skill-tag'>Debugging</span>
                        </div>
                    </div>
                    <p className= 'whoami'>EDUCATION</p>
                    <p className = 'textdes'>Driven by a passion for technical innovation, I am leveraging my academic background in Computer Science to build scalable, user-centric software solutions.</p>
                    <div className="timeline">
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Baccalauréat <span className = 'state'>Completed</span></h3>
      <span className="meta">Bahia Hidour High School • Mathematical Field</span>
      <span className="date">June 2024</span>
      <ul>
        <li>
            I chose this mathematical baccalaureate because I wanted to deepen my understanding of abstract concepts and transform them into actionable solutions
        </li>
      </ul>
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Bachelor Degree <span className = 'state-inprocess'>In Process</span></h3>
      <span className="meta">University Of Science And Technology Houari Boumedien (USTHB) • Bachelor Degree in General Computer Science Concepts (ACAD)</span>
      <span className="date">Expected in 2027</span>
      <ul>
        <li>While my background is in the rigor of mathematics, my goal is to use that analytical mindset in software engineering. I am fascinated by the process of designing structured systems that solve problems at scale</li>
      </ul>
    </div>
  </div>
</div>
      <p className = 'more'>More Coming Inshallah ...</p>
     </div>
     </div>
    );
}
export default Desc;