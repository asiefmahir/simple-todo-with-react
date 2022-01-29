import {useState} from 'react'
import './App.css';

function App() {


  /**
   * Todo = "todo 1"
   * todo = {
   *    id: Date.now(),
   *    titile: "todo 1"
   * }
   */

  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  /**
   * todolist =- []
   * "Todo 1" // setTodoList(["Todo 1"]) // todoList = ["Todo 1"]
   * "Todo 2" // setTodoList(["Todo 1", "Todo 2"]) // todoList = ["Todo 1", "Todo 2"]
   */

  // setCount(count + 1) // 1 // 2 // count = 1 // count = 2


  /***
   * todoTitle = ""
   * user tyuped = 'T' / setTodoTitle('T') // todoTitle = 'T'
   * setTodoTitle(e.target.value)
   */
  const changeTodoTitle = (val) => { // val === e.target.value
    setTodoTitle(val)
    /**
     * ""
     * setTodoTitle("T") // todoTitle = "T"
     */
  };

  const addTodo = (title) => {
    if(!title) {
      alert("Please provide a valid todo title")
    } else {
      const newTodo = {
        id: Date.now(),
        title: title
      }
      setTodoList([newTodo, ...todoList])
    }
  }

  return (
    <div className="App">
      <form>
        <input onChange = {(e) => changeTodoTitle(e.target.value)} value = {todoTitle} placeholder = 'Please Enter a Todo title' type = "text" name = "todo"/>
        <button onClick = {(e) => {
          e.preventDefault();
          addTodo(todoTitle);
          setTodoTitle("")
        }} >
          Add Todo
        </button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li>
            <span>{todo.title}</span>
            <button>Edit</button>
            <button onClick = {() => {
              const newTodoList = todoList.filter((item) => item.id !== todo.id);
              setTodoList(newTodoList)
            }} >Delete</button>
          </li>
        ))}
        {/* <li>
          <span> Todo 1 </span>
          <button>Edit</button>
          <button>Delete</button>
        </li>
        <li>
          <span> Todo 2 </span>
          <button>Edit</button>
          <button>Delete</button>
        </li>
        <li>
          <span> Todo 3 </span>
          <button>Edit</button>
          <button>Delete</button>
        </li>
        <li>
          <span> Todo 4 </span>
          <button>Edit</button>
          <button>Delete</button>
        </li> */}
      </ul>
    </div>
  );
}

export default App;
