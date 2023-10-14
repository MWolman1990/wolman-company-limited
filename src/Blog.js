import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    return (
        <div id="blogs-container">
            <div className="blog-card">
                <div className="blog-header">
                    <Link to={`blog/${props.props.id}`}><h3>{props.props.title}</h3></Link>
                </div>
                <div className="blog-meta">
                    {props.props.meta.date} - {props.props.meta.author}
                </div>
                <div className="blog-data">
                    {props.props.intro}
                </div>
            </div>
        </div>
    )
}

export default Blog