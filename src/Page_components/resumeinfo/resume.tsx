import './resume.css'
function Resume(){
    return (
 <div className = 'res-skills-container'>
            <div className='resume-container'>
                <h1 className='whoami'>RESUME</h1> 
                <p className='textdes'>
                    Motivated <span className='soft-sec'>computer science student</span> with a strong interest in <span className='soft-sec'>software development</span> and <span className='soft-sec'>cybersecurity</span>. Skilled in <span className='soft-sec'>problem-solving</span>, <span className='soft-sec'>algorithms</span>, with a focus on building <span className='soft-sec'>efficient and secure applications</span>. <span className='soft-sec'>Continuously learning and improving technical skills</span>.
                </p>
            </div>
            
            <div className='skills-container'>
                <h1 className='whoami'>SKILLS</h1>
                <p className='textdes'>
                    <span className='soft-sec'>strong foundation</span> in cybersecurity, focusing on <span className='soft-sec'>identifying vulnerabilities</span>, <span className='soft-sec'>understanding threats</span>, and applying <span className='soft-sec'>secure coding practices</span>. With a <span className='soft-sec'>problem-solving mindset</span> and <span className='soft-sec'>programming background</span>, I approach <span className='soft-sec'>security challenges efficiently</span> while <span className='soft-sec'>continuously learning new tools and techniques</span>.
                </p>
            </div>
            </div>
    );
}
export default Resume;