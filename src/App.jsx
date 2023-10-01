import { useState,useRef } from "react"
import ListItem from "./components/ListItem"
import { nanoid } from "nanoid"

function App() {
  
const [todoList,setTodoList] = useState(
  [
    
  ]
)
const [todo,setTodo] = useState("")

const [showValidation, setShowValidation] = useState(false)


function deleteTodo(id){
  setTodoList(todoList.filter(todo => todo.id !== id))
}

function handleSubmit(e){
  e.preventDefault()
  if(todo === ""){
    setShowValidation(true)
    return
  }

  setTodoList([...todoList,{id: nanoid(),content:todo}])
  setTodo("")
  setShowValidation(false)

}
  
  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 pt-2">
        <h1 className="text-3xl text-slate-100 mb-4">To-do s fsListe</h1>
        <form className="mb-10" onSubmit={handleSubmit}>
          <label htmlFor="todo-item"
          className="text-slate-50"
          >
            Ajouter à la Liste
          </label>
          <input 
          value={todo}
          onChange={e => setTodo(e.target.value)}
          type="text" id="todo-item"
          className="mt-1 block w-full rounded"
          />
          {
            showValidation && <p className="text-red-400">Ajoutez du contenu</p>
          }
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[15px]">
            Ajouter
          </button>
        </form>
        <ul>
          {
            todoList.length === 0 && (<li className="text-slate-50 text-md">Pas d'item à afficher</li>)
          }
          {
            
            todoList.length > 0 && todoList.map(item=>(<ListItem key={item.id} itemData={item} deleteTodo = {deleteTodo}/>))
          }
          
        </ul>
      </div>

    </div>
  )
}
export default App