import React from 'react';
import './header.css';
export const Input = (props) => {
    return (
        <>
            <input id='txt' type='text' className='form-control' placeholder='Title....' onChange={(event) => {
                props.takeInput('newItem', event)
            }} />
        </>
    );
}