import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Calculator from '../components/Bmi/Bmi';
import Home from '../components/Hompage/Home';
import { BlogPage } from './BlogPage';
import { ChatPage } from './ChatPage';
import { Exercise } from './Exercise';
import Login  from './Login';
import { Privateauth } from '../hoc/Privateauth';
export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/chat' element={<Privateauth><ChatPage/></Privateauth>}/>
            <Route path='/blog' element={<Privateauth><BlogPage/></Privateauth>}/>
            <Route path='/bmi' element={<Privateauth><Calculator/></Privateauth>}/>
            <Route path='/todo' element={<Privateauth><Exercise/></Privateauth>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}
