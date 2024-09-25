import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { toastInfo } from "../pages/Toast";


const Contact = () => {
    const navigate = useNavigate();  
    const [formData, setFormData] = useState({
        
    });
    const [errors,setErrors] = useState({});
    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            console.log('From data submitted:',formData);
            toastInfo('Updated successfully..!');
            navigate('/contact');
        }
    }
    const validate = () =>{
        const newErrors = {};
        if(!formData.name) {
            newErrors.name = 'Please enter name.';
        }
        if(!formData.email) {
            newErrors.email = 'Please enter email.';
        }
        if(!formData.subject) {
            newErrors.subject = 'Please enter subject.';
        }
        if(!formData.message) {
            newErrors.message = 'Please enter message.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    return(
        <div>
            <Header/>            
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Contact</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Contact</li>
                        </ol>
                    </nav>
                </div>
                <section class="section contact">
                    <div class="row gy-4">
                        <div class="col-xl-6">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="info-box card">
                                        <i class="bi bi-geo-alt"></i>
                                        <h3>Address</h3>
                                        <p>A108 Adam Street,<br/>New York, NY 535022</p>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="info-box card">
                                        <i class="bi bi-telephone"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="info-box card">
                                        <i class="bi bi-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br/>contact@example.com</p>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="info-box card">
                                        <i class="bi bi-clock"></i>
                                        <h3>Open Hours</h3>
                                        <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card p-4">
                            <ToastContainer />
                                <form method="post" class="php-email-form" enctype="multipart/form-data" onSubmit={handleSubmit}>
                                    <div class="row gy-4">
                                        <div class="col-md-6">
                                            <input type="text" id="name" name="name" class="form-control" placeholder="Name" value={formData.name} onChange={handleChange}/>
                                            <div class="invalid-feedback d-block">{errors.name}</div>
                                        </div>
                                        <div class="col-md-6 ">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
                                            <div class="invalid-feedback d-block">{errors.email}</div>
                                        </div>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}/>
                                            <div class="invalid-feedback d-block">{errors.subject}</div>
                                        </div>
                                        <div class="col-md-12">
                                            <textarea class="form-control" name="message" id="message" rows="6" placeholder="Message" onChange={handleChange}>{formData.message}</textarea>
                                            <div class="invalid-feedback d-block">{errors.message}</div>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
};

export default Contact;