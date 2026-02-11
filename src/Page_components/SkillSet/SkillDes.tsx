 import './SkillSet.css'
 import Loader from './SkillLod'
function Skill() {
    return (
        <div className = 'container-skill'>
            <div className = 'des-skill'>
                <div className = 'desc-text'>
                <h1 className = 'title-skill'>SkillSet Description</h1>
                <p className = 'desc-skill'>
                    software development, networking, and cybersecurity fundamentals, with a strong foundation in algorithms, system-level concepts, 
                    and web technologies. I work with both theoretical and practical tools, and I continuously expand my skills 
                    through hands-on projects, problem-solving, and self-directed learning.</p>
                    </div>
                    <div className = 'skill-icon'>
                        <div className = 'skill-security'>
                        <span className = 'skill-tag'>Algorithms</span>
                        <span className = 'skill-tag'>Data Structures</span>
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
            </div>
            <div className = 'pic'>
                <Loader />
            </div>
        </div>
    )
};
export default Skill ;