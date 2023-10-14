import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import './article.css'

const Article = (props) => {
    const article = useLoaderData()
    const navigate = useNavigate()
    console.log()
    return (
        <div id="article-container">
            <span className="go-back-button" onClick={() => navigate(-1)}>Go back</span>
            <div className="article-header">
                {article.title}
            </div>
            <div className="article-meta">
                {article.meta.date} - {article.meta.author}
            </div>
            <div className="article-data">
                {article.data.split('\n').map((par) => <p style={{ padding: '0', marginBottom: '1rem'}}>{par}</p>)}
            </div>
        </div>
    )
}

export default Article