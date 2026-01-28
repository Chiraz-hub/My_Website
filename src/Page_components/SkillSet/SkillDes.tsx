 import './SkillSet.css'
 import Loader from './SkillLod'
function Skill() {
    return (
        <div className = 'container-skill'>
            <div className = 'des-skill'>
                <h1 className = 'title-skill'>SkillSet Description</h1>
                <p className = 'des-skill'>
                    software development, networking, and cybersecurity fundamentals, with a strong foundation in algorithms, system-level concepts, 
                    and web technologies. I work with both theoretical and practical tools, and I continuously expand my skills 
                    through hands-on projects, problem-solving, and self-directed learning.</p>
            </div>
            <div className = 'pic'>
                <Loader />
            </div>
        </div>
    )
};
export default Skill ;