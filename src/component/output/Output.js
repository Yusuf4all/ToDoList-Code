import React from 'react';
import '../output/output.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Output = (props) => {
  return (
    <>
      <ul className="list-group list-group-flush" id="ul">
        {props.list.map(item => {
          if(item['checked'] === true)
          {
            return(
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center checked"
              onClick={(ev) => {
              props.toggle(ev, item);
              }}>
              {item.value}
              <button className='btn cross' onClick={(event) => {
                event.preventDefault();
                props.deletItem(item.id);
              }}>X</button>
            </li>
            )
          }
          else{
          return (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center"
              onClick={(ev) => {
              props.toggle(ev, item);
              }}>
              {item.value}
              <button className='btn cross' onClick={(event) => {
                event.preventDefault();
                props.deletItem(item.id);
              }}>X</button>
            </li>
          );
          }
        })}
      </ul>
    </>
  )
}