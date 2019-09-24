import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class AddTodo extends Component {
    state = {
        title:''
    }
    onChange = (e)=>{
        this.setState({[e.target.name] :e.target.value});
     //   console.log({this.state.title})
    };
    onSubmit=(e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{padding: '10px', display: 'flex'}}>
                <input 
                type='text' 
                name = 'title' 
                placeholder = 'Add Todo...' 
                style={{flex:'10'}} 
                onChange = {this.onChange}></input>
                <input 
                type ='submit' 
                value='submit' 
                className ='btn' style={{flex: '1'}}></input>
            </form>
        )
    }
}
//PropTypes
AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired
    
  }
export default AddTodo
