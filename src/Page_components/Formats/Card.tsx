 import './Cards.css'
 interface cardsComp {
  title: string;
  description: string;
  logo: React.ReactNode;
 }
const Cards : React.FC<cardsComp> = ({ title, description, logo }) => {
     return (
        <div className = "cards">
          <div className = "logo">
            {logo}
          </div>
          <div className = "desc">
            <h3>{title}</h3> 
            <p>{description}</p>
          </div>
        </div>
     );
    };
 export default Cards;