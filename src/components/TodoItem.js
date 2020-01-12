import React from 'react'

 const TodoItem = (props) => {
    return (
        <div>
            <h2 style={{textDecoration:props.item.checked?"line-through":"none"}} >{props.item.title}</h2>
            <button onClick={()=>props.delete(props.indice)} > Delete</button>
            <button onClick={()=>props.complete(props.indice)} >{props.item.checked?"undo":"complete"}</button>
        </div>
    )
}
export default TodoItem
