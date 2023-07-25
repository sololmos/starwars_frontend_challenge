import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card1.css';

import Button from '../button/Button';

const Card1 = ({character,  height, gender, species,
                 image, id, homeworld, name, description, styles, button, color, onClick, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      style={styles}
      onMouseEnter={handleToggleFlip}
      onMouseLeave={handleToggleFlip}
    >
      <div className="card-inner">

        <div className="card-front">
          <img className="card-image" src={character ? character.image : ""} alt={name} />
          <h2 className="card-title">Name: {character ? character.name : ""}</h2>
          <h4>id: {character ? character.id : ""}</h4>
          {button && <Button text={text} onClick={onClick} color={color} />}
        </div>

        <div className="card-back">
         
        
          <p className="card-description">Planet: {character ? character.homeworld : ""}</p>
          <p className="card-description">height: {character ? character.height : ""}</p>
          <p className="card-description">gender: {character ? character.gender : ""}</p>
          <p className="card-description">species: {character ? character.species : ""}</p>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  styles: PropTypes.object,
  button: PropTypes.bool,
};

export default Card1;




// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Card1.css';

// import Button from '../button/Button';

// const Card1 = ({ image, title, description, styles, button, color, onClick, text }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleToggleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`card ${isFlipped ? 'flipped' : ''}`}
//       style={styles}
//       onMouseEnter={handleToggleFlip}
//       onMouseLeave={handleToggleFlip}
//     >
//       <div className="card-inner">
//         <div className="card-front">
//           <img className="card-image" src={image} alt={title} />
//           <h2 className="card-title">{title}</h2>
//           {button && <Button text={text} onClick={onClick} color={color} />}
//         </div>
//         <div className="card-back">
//           <p className="card-description">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// Card1.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   styles: PropTypes.object,
//   button: PropTypes.bool,
//   color: PropTypes.string,
// };

// export default Card1;

//------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Card1.css';

// import Button from '../button/Button';

// const Card1 = ({ image, title, description, styles, button, color, onClick, text }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleToggleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`card ${isFlipped ? 'flipped' : ''}`}
//       style={styles}
//       onMouseEnter={handleToggleFlip}
//       onMouseLeave={handleToggleFlip}
//     >
//       <div className="card-inner">
//         <div className="card-front">
//           <img className="card-image" src={image} alt={title} />
//           <h2 className="card-title">{title}</h2>
//           {button && <Button text={text} onClick={onClick} color={color} />}
//         </div>
//         <div className="card-back">
//           <p className="card-description">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// Card1.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   styles: PropTypes.object,
//   button: PropTypes.bool,
// };

// export default Card1;

//-------------------------------------------------------------------------------------
// import React from 'react';
// import PropTypes from 'prop-types';
// import './Card1.css';

// import Button from '../button/Button';

// const Card1 = ({ image, title ,description, styles, 
//                 button,color, onClick, text,
                
//                 }) => {
    
//   return (
//     <div className="card" style={styles}>
//       <img className="card-image" src={image} alt={title} />
//       <h2 className="card-title">{title}</h2>
//       <p className="card-description">{description}</p>

//       {button && (
//         <Button text={text} onClick={onClick} color={color} />
//       )}

//     </div>
//   );
// };

// Card1.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   styles: PropTypes.object,
//   button: PropTypes.bool,
  

//   // Puedes agregar más propiedades aquí según tus necesidades
// };

// export default Card1;



