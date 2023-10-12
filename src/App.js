import React from "react";
import Header from './Header.js'
import Content from './Content.js'

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Content/>
            <div className="float-menu">
                <div className="menu-button-container">
                    <div className="hamburger"></div>
                    
                </div>
                <div id="mini-menu">
                    <ul>
                        <li>Home</li>
                        <li>About WCL</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App