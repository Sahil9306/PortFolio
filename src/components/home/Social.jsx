import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './home.css'

function Social() {
    return (
        < div className="home_social" >
            <a href="https://www.instagram.com/_sahil_sharma_091?igsh=MTM5bjk1amNvZm1tcQ==" className="home_social-icon" traget="_blank">
                <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sahilkumar091" className="home_social-icon" traget="_blank">
                <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/Sahil9306" className="home_social-icon" traget="_blank">
                <i className="bi bi-github"></i>
            </a>
        </ div>
    )
}

export default Social
