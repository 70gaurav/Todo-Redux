import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { inputhandler,submithandler ,deletehandler ,edithandler ,indexhandler  } from './Feature/todoSlice'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
import './todo.css'


function Todo() {
    const dispatch = useDispatch()
    const inputvalue = useSelector((state) => { return state.todo })
    function submission(e) {
        e.preventDefault()
        dispatch(submithandler())

    }
    function deletetask(e,index){
        e.preventDefault()
        dispatch(deletehandler(index))
    }
    function edittask (e,task,index){
        e.preventDefault()
        dispatch(edithandler(task))
        dispatch(indexhandler(index))
    }
  return (
    <div className='wrapper'>
    <div className='todo'>
        <h1>Todo List</h1>
        <form onSubmit={ submission}>
            <input type="text" placeholder='Enter Here' value={inputvalue.value}onChange={(e) => dispatch(inputhandler(e.target.value))} autoFocus></input>
            <button type='submit'>Add</button>
        </form>
        <ul>
            {
                inputvalue.tasks.map((task, index) => {
                    return(
                        <div className='list' key={index}>
                        <li>{task} <a onClick={(e)=>{deletetask(e,index)}}><DeleteForeverIcon /></a> <a onClick={(e) => {edittask(e,task,index)}}><CreateIcon/></a></li>
                        </div>
                    )
                })

            }
        </ul>
    </div>
    </div>
  )
}

export default Todo