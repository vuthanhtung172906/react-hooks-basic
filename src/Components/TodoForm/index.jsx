import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onTodoForm: PropTypes.func,
};
TodoForm.defaultProps = {
    onTodoForm: null
}

function TodoForm(props) {
    const {onTodoForm} = props
    const [value , setValue] = useState('')
    function handleOnChange(e){
        setValue(e.target.value)
    }
    function handleOnSubmit(e){
        e.preventDefault()
        if(!onTodoForm) return
        const addTodo = {
            title: value,
        }
        onTodoForm(addTodo)
        setValue('')
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={value} onChange={handleOnChange}/>
        </form>
    );
}

export default TodoForm;