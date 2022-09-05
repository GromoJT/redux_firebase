import React from 'react'
import { Button } from 'react-bootstrap'

const TodoElement = ({todo,deleteTodo}) => {

  return (
    <tr>
       
            <td>{todo.text}</td>
                <td>{todo.creator}</td>
                    <td>
                    <Button type="submit" onClick={()=>deleteTodo(todo.id)} className="btn btn-success ms-1">Finished</Button>
                </td>
    </tr>
  )
}

export default TodoElement