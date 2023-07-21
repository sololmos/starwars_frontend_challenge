import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; 

const Button = ({ text, color, opacity, onClick }) => {
    const buttonStyle = {
        backgroundColor: color,
        opacity: opacity,
       
      };
     

  return (
    <button id="btn"  style={buttonStyle}  onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  opacity: PropTypes.number,
  onClick: PropTypes.func,
 
};

Button.defaultProps = {

   color: '',
   opacity: 1,
  onClick: () => {}, // Función vacía por defecto // <Button text="Haz clic" color="#ff0000" size="large" onClick={handleClick} />
};

export default Button;
