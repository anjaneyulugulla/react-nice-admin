import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

import { toastSuccess } from "../../pages/Toast";

const AddAdmin = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        name :'',
        email :'',
        username :'',
        status :'',
        group :''
    });
    const [ errors,setErrors ] = useState({});
    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const validate = () => {
        const newErrors = {};
    
        if(!formData.name) {
            newErrors.name = 'Please enter name.';
        }
        if(!formData.email) {
            newErrors.email = 'Please enter email.';
        }
        if(!formData.username) {
            newErrors.username = 'Please enter username.';
        }
        if(!formData.group) {
            newErrors.group = 'Please enter group.';
        }
        if(!formData.status) {
            newErrors.status = 'Please enter status.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            // console.log(e.target[4],'target');
            const fileInput = e.target[4]; // Access the file input
            const file = fileInput.files[0];

            if (file) {
                console.log(file,'filess');
                //formData.append('image', file);
            }
            console.log('From data submitted:',formData);
            toastSuccess('Admin added successfully..!');
            navigate('/admin/add');
        }
    }

    return(
        <div>
            <Header/>            
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Add Admin</h1>
                    <nav>
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
                        <li class="breadcrumb-item active">Add</li>
                        </ol>
                    </nav>
                </div>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body border border-2">
                                    <h5 class="card-title"></h5>
                                    <div className="col-md-8">
                                        <ToastContainer />
                                        <form className="row g-3" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div class="col-md-6">
                                                    <label for="name" class="form-label">Name</label>
                                                    <input type="text" class="form-control form-control-sm" id="name" name="name" value={formData.name} onChange={handleChange}/>
                                                    <div class="invalid-feedback d-block">{errors.name}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="email" class="form-label">Email</label>
                                                    <input type="email" class="form-control form-control-sm" id="email" name="email" value={formData.email} onChange={handleChange}/>
                                                    <div class="invalid-feedback d-block">{errors.email}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="username" class="form-label">User Name</label>
                                                    <input type="text" class="form-control form-control-sm" id="username" name="username" value={formData.username} onChange={handleChange}/>
                                                    <div class="invalid-feedback d-block">{errors.username}</div>
                                                </div>
                                                <div className="col-md-6">
                                                <label for="group" class="form-label">Group</label>
                                                    <select class="form-control form-select form-select-sm mb-3" id="group" name="group" onChange={handleChange}>
                                                        <option value=''>Select--</option>
                                                        <option value={'admin'}>Admin</option>
                                                        <option value={'manager'}>Manager</option>
                                                        <option value={'generalmanager'}>GM</option>
                                                    </select>
                                                    <div class="invalid-feedback d-block">{errors.group}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="image" class="form-label">Image</label>
                                                    <input type="file" class="form-control form-control-sm" id="image" name="image"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="status" class="form-label">Status</label>
                                                    <select class="form-control form-select form-select-sm mb-3" id="status" name="status" onChange={handleChange}>
                                                        <option value=''>Select--</option>
                                                        <option value={'active'}>Active</option>
                                                        <option value={'inactive'}>Inactive</option>
                                                    </select>
                                                    <div class="invalid-feedback d-block">{errors.status}</div>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="submit" className="btn btn-success btn-sm col-md-3">Save</button>
                                                </div>
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

export default AddAdmin;