import React, { useState } from 'react'
import { addTodo, removeTodo, toggleTodo } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

export const TodoList = () => {

    const [inputEvent, setInputEvent] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector(state => state.todoReducer.list)
    console.log(selector)

    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='flex flex-row gap-4'>
                <input 
                    type='text' 
                    placeholder='skriv en task här..!' 
                    className='w-[300px] border rounded-md pl-2 border-black'
                    onChange={(e) => {setInputEvent(e.target.value)}}    
                    value={inputEvent}
                />
                <button 
                    className='bg-blue-400 text-white p-2 rounded-md'
                    onClick={()=> {dispatch(addTodo(inputEvent))
                        setInputEvent('')
                    }}
                >Lägg till Task!</button>
            </div>

            {/* Task container*/}
            {selector.map((item) => {
                return(
                    <div key={item.id} className='flex flex-row gap-4 items-center'> 
                        <p className={`w-[300px] bg-white border rounded-md p-2 ${item.completed ? 'line-through' : ''}`}>{item.data}</p>
                        {/* Färdig btn */}
                        <button 
                            className='bg-green-400 w-[100px] text-white p-2 rounded-md'
                            onClick={() => dispatch(toggleTodo(item.id))}
                        >Färdig</button>
                        {/* Radera btn */}
                        <button 
                            className='bg-red-400 text-white p-2 rounded-md'
                            onClick={()=> dispatch(removeTodo(item.id))}
                        >Radera Task!</button>
                    </div>
                )
            })}
        </div>
    )
}
