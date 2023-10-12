import React from "react";
import logo from './images/wolman.png'

const Header = () => {
    console.log(window.innerWidth)
    return (
        <div id="header">
            <div id="title">Wolman Company Limited</div>
            <div id="brand"><img src={logo}/></div>
        </div>
    )
}

export default Header