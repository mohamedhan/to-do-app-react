import React from 'react'
import Item from './TodoItem'
 const LIstItem = (props) => {
    return (
        <div>
            {props.items.map((el,i)=> <Item item={el} delete={props.delete} complete={props.complete} indice={el.key} />

            )}
        </div>
    )
}
export default LIstItem
