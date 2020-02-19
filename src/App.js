import React from 'react'
import {ToDoList} from './container/ToDoList';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}; 
  }
  render(){
    return(
      <>
        <ToDoList/>
      </>
    );
  }
}
export default App;