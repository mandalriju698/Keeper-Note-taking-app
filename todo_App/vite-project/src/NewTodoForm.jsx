import { useState } from "react"
import login from "./login"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
       <div className="login">
         <a href="/login"><button className="btn" style={{backgroundColor:'white',position:'absolute', right:'20px'}}>Login</button></a>
         <a href=""><button className="btn" style={{backgroundColor:'white',position:'absolute', left:'20px'}}>Signup</button></a>

        </div>
      <div className="form-row">
       
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}