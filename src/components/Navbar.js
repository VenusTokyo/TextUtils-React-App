import React from 'react'
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
               

                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                        <div className={`d-flex text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            Change Color
                            <div className="bg-primary rounded mx-2" onClick={()=>{props.changeColor('primary')}} style={{height: '20px',width: '20px'}}></div>
                            <div className="bg-danger rounded mx-2" onClick={()=>{props.changeColor('danger')}} style={{height: '20px',width: '20px'}}></div>
                            <div className="bg-success rounded mx-2" onClick={()=>{props.changeColor('success')}} style={{height: '20px',width: '20px'}}></div>
                            <div className="bg-warning rounded mx-2" onClick={()=>{props.changeColor('warning')}} style={{height: '20px',width: '20px'}}></div>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                        {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" onChange={props.changeColor('primary')} name="btnradio" id="btnradio1" autocomplete="off" defaultChecked />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">Blue</label>

                            <input type="radio" className="btn-check" onChange={props.changeColor('danger')} name="btnradio" id="btnradio2" autocomplete="off" />
                            <label className="btn btn-outline-danger" htmlFor="btnradio2">Red</label>

                            <input type="radio" className="btn-check" onClick={props.changeColor('success')} name="btnradio" id="btnradio3" autocomplete="off" />
                            <label className="btn btn-outline-success" htmlFor="btnradio3">Green</label> */}
                        {/* </div> */}
                        {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                    </div>
                
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
//setting a type 
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'abouttexthere'
}
//setting default values if nothing is passed