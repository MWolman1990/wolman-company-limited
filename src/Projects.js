import React from 'react'
import './services.css'

const Services = () => {
   return (
    <div id="services" className="viewport">
        <div id="services-content">
            <div className="service-item">
                <div className="service-title">
                    <a href="https://pokeboard-d891a9b23226.herokuapp.com/" target="_blank">PókeBoard</a>
                </div>
                <div className="service-stacks">
                    Create React App, React Router DOM, PokeAPI
                </div>
                <div className="service-description">This is an on-going project that allows users to use advanced searchs and filters to find any and every pokemon that has ever existed. As I continue to develop this app, users will eventually be able to create their own profile and build their own Pokemon teams based on their specific battle needs!</div>
            </div>
        </div>
        <hr class="divider"/>
    </div>
   )
}

export default Services 