const Todo = ({onclick, completed, text}) => (
    <li
        onClick={onclick}
        style={{textDecoration:completed?"line-through":"none"}}>
    </li>
)