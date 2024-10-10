import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

import { toastSuccess,toastError } from "../../pages/Toast";
import { postData,fetchData } from "../../services/apiService"

const UpdateAdmin = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData,setFormData] = useState([]);
    useEffect(() => {
        const fetchedData = async () => {
            const result = await fetchData('admin',{id:id});
            const { data } = result;    
            setFormData(data.data);
        };
        fetchedData();
    },[]);
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
        } else if(!validateEmail(formData.email)){
            newErrors.email = 'Please enter vaild email.';
        }
        if(!formData.username) {
            newErrors.username = 'Please enter username.';
        }
        if(!formData.group_id) {
            newErrors.group_id = 'Please enter group.';
        }
        if(!formData.status) {
            newErrors.status = 'Please enter status.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validate()) {
            // console.log(e.target[4],'target');
            //const fileInput = e.target[4]; // Access the file input
            // const file = fileInput.files[0];
            // if (file) {
            //     console.log(file,'filess');
            //     //formData.append('image', file);
            // }
            console.log('From data submitted:',formData);
            const inputParams = {
                id:formData.id,
                name:formData.name,
                username:formData.username,
                password:"3214789",
                email:formData.email,
                group_id:formData.group_id,                
                status:formData.status
            };
            const result = await postData('updateadmin',inputParams);
            const { data } = result;
        
            if(!data.success) {
                toastError(data.message);
                setTimeout(() => {
                    navigate(`/admin/edit/${formData.id}`);
                  }, 1000);
                
            } else {
                toastSuccess(data.message);
                setTimeout(() => {
                    navigate('/admin');
                  }, 500);
            }
        }
    }
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return(
        <div>
            <Header/>            
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Edit Admin</h1>
                    <nav>
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/admin">Admin</a></li>
                        <li class="breadcrumb-item active">Edit</li>
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
                                            <input type="hidden" id="id" name="id" value={formData.id}/>
                                            <div className="row">
                                                <div class="col-md-6">
                                                    <label for="name" class="form-label">Name</label>
                                                    <input type="text" class="form-control form-control-sm" id="name" name="name" value={formData.name} onChange={handleChange}/>
                                                    <div class="invalid-feedback d-block">{errors.name}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="email" class="form-label">Email</label>
                                                    <input type="text" class="form-control form-control-sm" id="email" name="email" value={formData.email} onChange={handleChange}/>
                                                    <div class="invalid-feedback d-block">{errors.email}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="username" class="form-label">User Name</label>
                                                    <input type="text" class="form-control form-control-sm" id="username" name="username" value={formData.username} onChange={handleChange}/>
                                                    <div class="invalid-feedback d-block">{errors.username}</div>
                                                </div>
                                                <div className="col-md-6">
                                                <label for="group_id" class="form-label">Group</label>
                                                    <select class="form-control form-select form-select-sm mb-3" id="group_id" name="group_id" onChange={handleChange} value={formData.group_id}>
                                                        <option value=''>Select--</option>
                                                        <option value={1} >Admin</option>
                                                        <option value={2}>Manager</option>
                                                        <option value={3}>GM</option>
                                                    </select>
                                                    <div class="invalid-feedback d-block">{errors.group}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="image" class="form-label">Image</label>
                                                    <input type="file" class="form-control form-control-sm" id="image" name="image"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="status" class="form-label">Status</label>
                                                    <select class="form-control form-select form-select-sm mb-3" id="status" name="status" onChange={handleChange} value={formData.status}>
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

export default UpdateAdmin;