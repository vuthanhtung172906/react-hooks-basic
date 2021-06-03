import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit : PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {
    const {onSubmit} = props
    const [searchItem , setSearchItem ] = useState('')
    const typingTimeoutRef = useRef(null)
    const handleOnChange = (e) =>{
        const value = e.target.value
        setSearchItem(value)
        if(!onSubmit) return

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(()=>{
            const formValue = {
                serchTerm : value
            }
            onSubmit(formValue)
        },300)

    }
    return (
        <form>
            <input type="text" value={searchItem} onChange={handleOnChange}/>
        </form>
    );
}

export default PostFilterForm;