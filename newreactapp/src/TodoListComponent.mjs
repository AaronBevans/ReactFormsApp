import React from "react"


function TodoList(props){
        /*const completedStyle = {
            fontStyle:"italic",
            color:"gray",
            textDecoration: "line-through"
        }*/
        const completedStyle = {
            fontStyle:'italic',
            textDecoration:'line-through',
            textColor:'#cdcdcd'
        }

    return(
        <div>
            <input type='checkbox'
            checked={props.itemObj.completed}

            onChange={()=>props.handleChange(props.itemObj.id)}//event handler that uses a class method that changes state of checkboxes.
            //onChange ={()=>props.handleChange(props.itemObj.id)}
            />

            <h2 
                id='todoItems' 

                style={props.itemObj.completed ? completedStyle : null}>

                {props.itemObj.text}

            </h2>

            <hr/>
        </div>
    )
}

export default TodoList