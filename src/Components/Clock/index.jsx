import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};
const formatDate = (time) =>{
    const hour = `0${time.getHours()}`.slice(-2)
    const minutes = `0${time.getMinutes()}`.slice(-2)
    const second = `0${time.getSeconds()}`.slice(-2)
    return `${hour}:${minutes}:${second}`
}
function Clock(props) {
    const [clock , setClock] = useState('')
    useEffect(() => {
        const abc = setInterval(()=>{
            const time = new Date()
            const timeClock = formatDate(time)
            setClock(timeClock)
        },1000)
        return () => {
          clearInterval(abc)
        }
    }, [])
    return (
        <p>{clock}</p>
    );
}

export default Clock;