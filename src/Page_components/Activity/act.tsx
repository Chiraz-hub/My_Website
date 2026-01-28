import './act.css'
import Cards from '../Formats/Card'
import SecBtn from './ActIcon/SecBtn'
import Math from './ActIcon/Math'
import PrblmS from './ActIcon/PrblmS'
import Soft from './ActIcon/Soft'
  const Act = [
    {
     id: 1,
     title: 'Networking & Cybersecurity',
     description: 'I work on computer networking fundamentals and cybersecurity concepts, focusing on how systems communicate, detect vulnerabilities, and stay secure.',
     logo: <SecBtn />
    },
    {
     id: 2,
     title: 'Algorithmic Problem Solving',
     description: 'I enjoy solving algorithmic problems and translating real-world problems into structured pseudocode and efficient logic.',
     logo: <PrblmS />
    },
    {
     id: 3,
     title: 'Software Specializations',
     description: 'I design and build software solutions by combining web technologies, algorithmic thinking, and low-level system knowledge to create efficient, reliable, and well-structured applications.',
     logo: <Soft />
    },
    {
      id: 4,
      title: 'Mathematical & Analytical Thinking',
      description: 'I apply mathematical and statistical concepts to strengthen logical reasoning and problem-solving skills.',
      logo: <Math />
    }
  ];
function Activity(){
    return (
      <div className = 'act-container'>
        <h1>What I do</h1>
         <div className = 'card-container'>
        {Act.map((item, index) => (
          <Cards 
            logo={item.logo}  
            title={item.title} 
            description={item.description} 
            key={index} 
          />
        ))}
         </div>
      </div>
    );
}
 export default  Activity;