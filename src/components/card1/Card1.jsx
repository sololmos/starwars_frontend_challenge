import React from 'react';
import PropTypes from 'prop-types';
import './Card1.css';

import Button from '../button/Button';

const Card1 = ({ image, title ,description, styles, 
                button,color, onClick, text,
                
                }) => {
    
  return (
    <div className="card" style={styles}>
      <img className="card-image" src={image} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>

      {button && (
        <Button text={text} onClick={onClick} color={color} />
      )}

    </div>
  );
};

Card1.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  styles: PropTypes.object,
  button: PropTypes.bool,
  

  // Puedes agregar más propiedades aquí según tus necesidades
};

export default Card1;



// import React from "react";
// import "./Card1.css";



// const Card1 = () => {
   
//     return (

//         <div className="card1">


//         </div>
//         // <div  className="container">
//         //    <div  className="card1">soy una card 1</div>
//         // </div>
//     );
// };

// export default Card1;