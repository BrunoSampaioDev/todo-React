import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import './Tarefas.css'

const Tarefas = (props) => {
  return (
    <ul className="tarefas">
      {props.tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div>
            <FaEdit onClick={(e) => props.handleEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => props.handleDelete(e, index)} className="delete" />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Tarefas;
