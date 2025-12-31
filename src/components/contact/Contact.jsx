
import './Contact.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ypz8yo', 'template_i6qva5e', e.target, '_A51rEmX2kWOLsrC3')
            .then(
                () => {
                    alert("✅ Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("❌ Failed to send message. Try again later.");
                    console.error(error.text);
                }
            );
    };

    return (
        <section className="contact section" id="contact">

            <h2 className="section_title">Get in touch</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                {/* Left Column */}
                <div className="contact_container">
                    <h3 className="contact_title">Talk to me</h3>

                    <div className="contact_info">
                        {/* Email Card */}
                        <div className="contact_card">
                            <i className="bi bi-envelope-at contact_card-icon"></i>
                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">sahilkumar.dev25@gmail.com</span>
                            <a
                                target="_blank"
                                href="mailto:sahilkumar.dev25@gmail.com"
                                className="contact_button"
                                rel="noreferrer"
                            >
                                Connect me <i className="bi bi-arrow-right contact_button-icon"></i>
                            </a>
                        </div>

                        {/* WhatsApp Card */}
                        <div className="contact_card">
                            <i className="bi bi-whatsapp contact_card-icon"></i>
                            <h3 className="contact_card-title">WhatsApp</h3>
                            <span className="contact_card-data">+91 9306214975</span>
                            <a
                                target="_blank"
                                href="https://api.whatsapp.com/send?phone=919306214975&text=Hello%20Sahil!"
                                className="contact_button"
                                rel="noreferrer"
                            >
                                Connect me <i className="bi bi-arrow-right contact_button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact_container">
                    <h3 className="contact_title">Write Me Your Project</h3>

                    <form ref={form} onSubmit={sendEmail} className="container_form">
                        <div className="container_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact_form-input"
                                placeholder="Insert your name"
                                required
                            />
                        </div>

                        <div className="container_form-div">
                            <label className="contact_form-tag">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact_form-input"
                                placeholder="Insert your email"
                                required
                            />
                        </div>

                        <div className="container_form-div contact_form-area">
                            <label className="contact_form-tag">Message</label>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                className="contact_form-input"
                                placeholder="Write your message"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="button button--flex">
                            Send Message
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
                                    fill="#fff"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="#fff"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
