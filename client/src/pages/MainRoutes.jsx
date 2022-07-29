import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Calculator from '../components/Bmi/Bmi';
import Home from '../components/Hompage/Home';
import { BlogPage } from './BlogPage';
import { ChatPage } from './ChatPage';
import { Exercise } from './Exercise';
export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/chat' element={<ChatPage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/bmi' element={<Calculator/>}/>
            <Route path='/todo' element={<Exercise/>}/>
        </Routes>
    </div>
  )
}
