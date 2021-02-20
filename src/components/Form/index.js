
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './Form.css';


const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <input onChange={props.handleChange} value={props.novaTarefa} type="text" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}

export default Form
