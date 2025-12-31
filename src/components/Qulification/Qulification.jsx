import React from 'react'
import './Qualification.css'

function Qulification() {
    return (
        <section className="qualification section">
            <h2 className="section_title">Qulification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container ">
                <div className="qualification_tabs">
                    Education
                </div>

                <div className="qualification_sections">
                    <div className="qualification_content">
                        <div className="qualification_data">
                            <div>
                                <div className="flex">
                                    <svg
                                        className='svg'
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z" />
                                    </svg>
                                    <h3 className="qualification_title ">Bachelor's</h3>
                                </div>
                                <span className="qualification_subtitle">
                                    Rao Birender Singh State Institute Of Engineering & Technology , Rewari
                                </span>
                                <div className="qualification_calender">
                                    <i className="bi bi-calendar3"></i>
                                    2021-2025
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                                    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                                    <path d="M6 9l12 0" />
                                    <path d="M6 12l3 0" />
                                    <path d="M6 15l2 0" />
                                </svg>
                                <h3 className="qualification_title">Java Full Stack</h3>
                                <span className="qualification_subtitle">
                                    Jspider,Bangaluru
                                </span>
                                <div className="qualification_calender">
                                    <i className="bi bi-calendar3"></i>
                                    07/2025-Prasent
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qulification
