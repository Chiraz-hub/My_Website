import Cards from '../Formats/Card'
//The text get rendred good
  const Act = [
    {
     id: 1,
     title: 'Networking & Cybersecurity',
     description: 'I work on computer networking fundamentals and cybersecurity concepts, focusing on how systems communicate, detect vulnerabilities, and stay secure.',
     logo: 'nothing for now'
    },
    {
     id: 2,
     title: 'Algorithmic Problem Solving',
     description: 'I enjoy solving algorithmic problems and translating real-world problems into structured pseudocode and efficient logic.',
     logo: 'nothing for now'
    },
    {
     id: 3,
     title: 'Software Specializations',
     description: 'I design and build software solutions by combining web technologies, algorithmic thinking, and low-level system knowledge to create efficient, reliable, and well-structured applications.',
     logo:'nothing for now'
    },
    {
      id: 4,
      title: 'Mathematical & Analytical Thinking',
      description: 'I apply mathematical and statistical concepts to strengthen logical reasoning and problem-solving skills.',
      logo: 'nothing for now'
    }
  ];
function Activity(){
    return (
      <div className = 'act-container'>
         <h1>What I do</h1> 
         <div className = 'card-container'>
        {Act.map((item, index) => (
          <Cards 
            key={index} 
            title={item.title} 
            description={item.description} 
            logo={item.logo} 
          />
        ))}
         </div>
      </div>
    );
}
 export default  Activity;