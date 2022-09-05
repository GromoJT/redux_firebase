import React,{ Component, useEffect, useState } from "react";
import { Container,Form,Card, FormLabel, ButtonGroup, Button, Table } from "react-bootstrap";
import TodoElement from '../components/TodoElement'
import {UserAuth} from '../contexs/AuthContext'

import {db} from '../firebase'
import {query,collection, onSnapshot, addDoc, deleteDoc, doc} from 'firebase/firestore'



function ToDoList()  {

    const {user} = UserAuth()
    
    const [todos,setTodos] = useState([])

    const [input,setInput] = useState('')

    const createTodo = async (e) =>{
        e.preventDefault(e);
        input.trim()
        if(input === ''){
            alert('Tak łatwo to nie ma... coś trzeba robić...')
            return
        }

        await addDoc(collection(db,'todos'),{
            text: input,
            creator: user.email,
        })
        setInput('')

    } ;

    var i = 0;

    useEffect(()=>
    {
      const q = query(collection(db,'todos'))
      const unsubscribe = onSnapshot(q,(querySnapshot)=>{
        let todosArr=[]
        querySnapshot.forEach((doc) =>{
          todosArr.push({...doc.data(),id: doc.id})
        });
        setTodos(todosArr)
      })
      return()=> unsubscribe()
    },[])

    const deleteTodo=async (id)=>{
        await deleteDoc(doc(db,'todos',id))
    }
  

    return(

            <Container className="py-5 h-100">
                <div className="row d-flex justify-content-center aligne-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card rounded-3">
                            <div className="card-body p-4">
                                <h4 className="text-center my-3 pb-3">
                                    To Do App
                                </h4>
                                <Form className="container" onSubmit={createTodo}>
                                    <div className="row">
                                        <div className="col-10 ">
                                            <Form.Group className="form-outline">
                                                <Form.Control type="text" id="form1" value={input} onChange={(e)=>setInput(e.target.value)} className="form-control"/>
                                                <FormLabel className="form-label" >Enter a task here... current number: {todos.length}</FormLabel>
                                            </Form.Group>
                                        </div>

                                        <div className="col-2">
                                            <Button type="submit"  className="btn btn-primary">Save</Button>
                                        </div>
                                    </div>
                                </Form>
                                <Table className="table mb-4">
                                    <thead>
                                        <tr>
                                            
                                            <th scope="col">Todo item</th>
                                            <th scope="col">Creator</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {todos.map( (todo) =>
                                            <TodoElement key={todo.id} deleteTodo={deleteTodo} todo={todo}/>,
                                            i++
                                        )}
                                       
                                    </tbody>

                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
         
    );
};
 
export default ToDoList;