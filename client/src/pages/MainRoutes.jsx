import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../components/Hompage/Home';
import { ChatPage } from './ChatPage';
export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/chat' element={<ChatPage/>}/>
        </Routes>
    </div>
  )
}
