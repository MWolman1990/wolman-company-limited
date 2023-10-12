import React from 'react'
import './services.css'

const Services = () => {
   return (
    <div id="services" className="viewport">
        <div id="services-content">
            <div className="service-item">
                <div className="service-title">
                    Web Development
                </div>
                <div className="service-stacks">
                    React, Node.js, Express, MongoDB
                </div>
                <div className="service-description">Wolman Company Limited provides full-stack web development services. We can build amazing user interfaces and combine them with secure data services. We serve different types of customer needs, including:</div>
                <ul class="service-list">
                    <li> - Landing Pages</li>
                    <li> - E-commerce Stores</li>
                    <li> - Data Dashboards</li>
                    <li> - Software As A Service (WebApps)</li>
                </ul>
            </div>
        </div>
        <hr class="divider"/>
        <div id="services-content">
            <div className="service-item">
                <div className="service-title">
                    Data Management
                </div>
                <div className="service-stacks">
                    Google Sheets, Microsoft Excel, MongoDB, Sequel
                </div>
                <div className="service-description">With 7 years of Data Management experience, WCL can provide the best solutions to your data structure possible. Every business has a different way their data needs to be structured. Wolman Company Limited provides unique insight as to how your data should be structured and why!</div>
                <ul class="service-list">
                    <li> - Data Structuring</li>
                    <li> - Spreadsheet Automation</li>
                    <li> - Data Consulting</li>
                </ul>
            </div>
        </div>
        <hr class="divider"/>
        <div id="services-content">
            <div className="service-item">
                <div className="service-title">
                    Business Intelligence
                </div>
                <div className="service-stacks">
                    Spreadsheet Formulas, Google Data Studio
                </div>
                <div className="service-description">One of our biggest accomplishments was writing a revenue projection algorithm for a multi-million dollar Substance Abuse Rehab. Wolman Company Limited offers something that is fairly unique in all business industries... intelligence. The core of our algorithms comes from our founders inherent ability to understand both business and data together. With this instrinsic skillset, we can promise that only the best and most accurate calculations will be provided</div>
                <ul class="service-list">
                    <li> - 90%+ Revenue Projection & Timing Accuracy</li>
                    <li> - Data Piping into Google Data Studio or your preferred BI App  </li>
                </ul>
            </div>
        </div>
    </div>
   )
}

export default Services 