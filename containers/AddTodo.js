import { connect } from "react-redux"
import {addTodo} from "../actions/index";

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form onsubmit={e=>{
                e.preventDefault();
                if (!input.value.trim()){return}
                dispatch(addTodo(input.value))
            }}>
                <input ref={node=>{input=node}}/>
                <button type="submit">
                    Add todo
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo