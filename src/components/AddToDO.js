import React, { Component } from 'react'

export default class AddToDO extends Component {
    state={
        input:""
    }
    handleChange=(e)=>{
        this.setState({
            input:e.target.value
        })
    }
    handleClickAdd=(e)=>{
        // e.preventDefaut();
        this.props.add({title:this.state.input,key:Math.random(),checked:false})
        this.setState({
            input:""
        })
    }
    render() {
        return (
            <div>
                <input 
                onChange={this.handleChange}
                value={this.state.input}
                />
                <button onClick={(e)=>this.handleClickAdd(e)} >Add</button>
            </div>
        )
    }
}
