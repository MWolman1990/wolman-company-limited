import React from "react";
import Header from './Header.js'
import Content from './Content.js'
import Menu from './Menu'

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
                    <Menu/>
                </div>
            </div>
        </div>
    )
}

export default App