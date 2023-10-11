import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Content = () => {
   return (
    <div id="content">
        <Sidebar/>
        <Outlet/>
    </div>
   )
}

export default Content 