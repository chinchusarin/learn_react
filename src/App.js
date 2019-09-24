import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'

//import uuid from 'uuid';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos:[ ]
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=> this.setState({todos:res.data}))
    
  }
  //toggle status
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  
  }
  //delete TodoItem
  delTodo =(id) =>{
   axios.delete('http://jsonplaceholder.typicode.com/todos/$id')
   .then(res=>this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  //Add item to TodoList
  addTodo = (title) =>{
    console.log(title)
 // const newTodo = {
  //    id:uuid.v4(),
  //    title,
  //    completed: false
  //  }
  axios.post('http://jsonplaceholder.typicode.com/todos', {
    title,
    compled:false
  })
  .then (res =>
  this.setState({todos:[...this.state.todos, res.data]}))
  
  } 
  render() {
    console.log(this.state.todos)
  return (
    <Router>
      <div className="App">
        <div className="container">
    
        <Header />
        <Route exact path='/' render={props=>(
          <React.Fragment>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            <AddTodo  addTodo= {this.addTodo} />  
          </React.Fragment>
        )} />
        <Route path='/About' component={About} />
      
 
            
        </div>
      </div>
    </Router>
  );
}
}

export default App;
