import React, { Component } from 'react'
import Add from './AddToDO'
import List from './LIstItem'
export default class Main extends Component {
    state={
        list:[]
    }
    addItem=(newItem)=>{
        this.setState({
            list:[...this.state.list,newItem]
        })
    }
    deleteItem=(key)=>{
        this.setState({
            list:this.state.list.filter((el,indice)=> (el.key!=key))
        })

    }
    completeItem=(key)=>{
        this.setState({
            list:this.state.list.map((el,index)=>
                (el.key==key)? {...el,checked:!el.checked}:el
            )
        })
    }
    render() {
        return (
            <div>
                 <Add add={this.addItem} />
                 <List delete={this.deleteItem} complete={this.completeItem} items={this.state.list} />
            </div>
        )
    }
}
