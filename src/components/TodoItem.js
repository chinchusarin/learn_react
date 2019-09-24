import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration : this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
   // markComplete=(e) =>{
   //     console.log(this.props)

   // }
   //     if(this.props.todo.completed){
   //         return {
   //             textDecoration:'line-through'
   //         }
   //     }else{
   //         return {
   //             textDecoration:'none'
   //         }
   //     }


    render() {
        return (
   //         <div style = {itemStyle}>
   //         <div style = {{backgroundColor:'#f4f4f4'}}  
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>
                    {' '}
                    {this.props.todo.title}
                    <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>x</button>
                    </p>

            </div>
        )
    }
}


//const itemStyle = {
//    backgroundColor:'#f4f4f4'
//}
const btnStyle={
    background: '#ff0000',
    color:'#fff',
    border:'1px',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}
//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }
export default TodoItem
