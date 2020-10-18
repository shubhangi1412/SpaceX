
import React from 'react';
import Styles from './Button.module.css'
import PropTypes from 'prop-types';
const button = (props)=>{

    return (
        <button 
            className={props.style && !props.disabled ? Styles.active : Styles.btn}
            onClick={props.onClicked}
            disabled={props.disabled}
            >{props.name}</button>);
}
button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
  }
export default button;