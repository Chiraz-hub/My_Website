 import './Cards.css'
 interface cardsComp {
  title: string;
  description: string;
  logo: React.ReactNode;
 }
const Cards : React.FC<cardsComp> = ({ title, description, logo }) => {
     return (
        <div className = "cards-struct">
          <div className = "logo-cards">
            {logo}
          </div>
          <div className = "desc-cards">
            <h3 className = 'cards-title'>{title}</h3> 
            <p className = 'cards-description'>{description}</p>
          </div>
        </div>
     );
    };
 export default Cards;