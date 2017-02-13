import React, { Component } from 'react';
import './Input.css'


const Input = (props) => {

  const { label } = props
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  )
}

export default Input;
