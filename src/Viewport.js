import React, { useState, useEffect } from 'react'
import './blogs.css'
import Blog from './Blog'
import getBlogs from './loaders/getBlogs'

const Viewport = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const newBlogs = getBlogs()
        setBlogs(newBlogs)
    }, [])
    
    return (
    <div className="viewport">
        <div id="intro">
            <p>Hello!</p> 
            <p>Welcome to Wolman Company Limited! Right below here you'll find our blog where we write about different topics.</p> 
            <p>Please don't hesitate to reach out to us at any time through our contact page. We look forward to hearing from you!</p>
        </div>
        {
            blogs.length > 0 && 
            blogs.map((blog) => {
                return <Blog props={blog}/>
            })
        }
    </div>
   )
}

export default Viewport 