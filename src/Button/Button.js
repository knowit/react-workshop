import React, { Component } from 'react';
import './Button.css'


const Button = ({onClickHandler, children, className}) => {
  return (
    <button className={className} onClick={onClickHandler}>{children}</button>
  )
}

export default Button;
