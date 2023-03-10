import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm() {

    const [newtodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)


    const onChange = (event) => {
        setNewTodoValue (event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newtodoValue)
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea 
            value={newtodoValue}
            onChange={onChange}
            placeholder='Corta la cebolla para el almuerzo'
            />

            <div className='TodoForm-button TodoForm-button--cancel'>
                <button
                type='button'
                onClick={onCancel}
                >
                    Cancelar 
                </button>
                <button
                type='submit'
                className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>               
            </div>
        </form>
    );
}



export {TodoForm};