import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TodoList } from '../components/TodoList'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center gap-6 justify-center h-screen bg-slate-600'>
        <h1 className='text-2xl text-white'>Hej Det här är din App</h1>
        <TodoList />
      </div>
    </>
  )
}
