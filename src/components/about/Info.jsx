import React from 'react'
import './About.css'

function Info() {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className="bi bi-award about_icon"></i>
                <h3 className="about_title">Training</h3>
                <span className="about_subtitle">Java Full Stack</span>
            </div>

            <div className="about_box">
                <i className="bi bi-briefcase about_icon"></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10 +projects</span>
            </div>

            <div className="about_box">
                <i className="bi bi-headset about_icon"></i>
                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info
