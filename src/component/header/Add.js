import React from 'react'
import './header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Add = (props) => {
    return (<>
        <button className='btn btn-primary size' onClick={props.createList}>Add</button>
        <button className='btn btn-primary size' onClick={props.save}>Save</button>
        {/* <button className='btn btn-primary size' onClick={props.load}>Load</button> */}
    </>)
}