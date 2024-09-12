import React, { useState } from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const ChangePassword = () => {
    const notify = () => { 
        toast.success("Changed Password Successfully....!",{
            className: 'custom-toast',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            position:"top-right"
        });
    }

    const navigate = useNavigate();  
    const [formData,setFormData] = useState({
        currentPassword : '',
        password : '',
        renewpassword:''
    });

    const [errors,setErrors] = useState({});

    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validate = () => {
        const newErrors = {};
    
        if(!formData.currentPassword) {
            newErrors.currentPassword = 'Please enter current password.';
        }
        if(!formData.password) {
            newErrors.password = 'Please enter your password.';
        }
        if(!formData.renewpassword) {
            newErrors.renewpassword = 'Please enter confirm password.';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            console.log('From data submitted:',formData);
            notify();
            navigate('/change-password');
        }
    };
    return(
        <div>
            <Header/>
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Change Password</h1>
                    <nav>
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Change Password</li>
                        </ol>
                    </nav>
                </div>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">          
                                    <div class="col-lg-6 mt-lg-5">
                                        <ToastContainer />
                                        <form className="row g-3" onSubmit={handleSubmit}>
                                            <div class="col-12">
                                                <label for="currentPassword" class="form-label">Current Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="currentPassword" type="password" class="form-control" id="currentPassword" value={formData.currentPassword} onChange={handleChange}/>
                                                </div>
                                                <div class="invalid-feedback d-block">{errors.currentPassword}</div>
                                            </div>
                                            <div class="col-12">
                                                <label for="password" class="form-label">New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="password" type="password" class="form-control" id="password" value={formData.password} onChange={handleChange}/>
                                                </div>
                                                <div class="invalid-feedback d-block">{errors.password}</div>
                                            </div>
                                            <div class="col-12">
                                                <label for="renewPassword" class="form-label">Re-enter New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="renewpassword" type="password" class="form-control" id="renewPassword" value={formData.renewpassword} onChange={handleChange}/>
                                                </div>
                                                <div class="invalid-feedback d-block">{errors.renewpassword}</div>
                                            </div>
                                            <div class="text-left">
                                                <button type="submit" class="btn btn-success btn-sm">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
};

export default ChangePassword;