import React,{useState,} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { toastSuccess } from "../pages/Toast";


const Settings = () => {

    const navigate = useNavigate();  
    const [formData,setFormData] = useState({
        site_name : '',
        office_number : '',
        contact_number:'',
        mobile_number:'',
        phone_number:'',
        contact_email:'',
        support_email:'',
        google_maps:'',
        seo_title:'',
        seo_keywords:'',
        seo_description:'',
        copyrights:'',
        status:''
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
    
        if(!formData.site_name) {
            newErrors.site_name = 'Please enter site name.';
        }
        if(!formData.office_number) {
            newErrors.office_number = 'Please enter office number.';
        }
        if(!formData.contact_number) {
            newErrors.contact_number = 'Please enter contact number.';
        }
        if(!formData.mobile_number) {
            newErrors.mobile_number = 'Please enter mobile number.';
        }
        if(!formData.phone_number) {
            newErrors.phone_number = 'Please enter phone number.';
        }
        if(!formData.contact_email) {
            newErrors.contact_email = 'Please enter contact email.';
        }
        if(!formData.support_email) {
            newErrors.support_email = 'Please enter support email.';
        }
        if(!formData.copyrights) {
            newErrors.copyrights = 'Please enter copyrights.';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            console.log('From data submitted:',formData);
            toastSuccess('Setting updated successfully..!');
            navigate('/settings');
        }
    };
    return(
        <div>
        <Header/>            
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Settings</h1>
                <nav>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Settings</li>
                    </ol>
                </nav>
            </div>
            <section class="section">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body border border-2">
                                <h5 class="card-title"></h5>
                                <div className="col-md-12">
                                <ToastContainer/>
                                    <form className="row g-3" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div class="col-md-12 mb-2">
                                                <label for="name" class="form-label">Name</label>
                                                <input type="text" class="form-control form-control-sm" id="site_name" name="site_name" value={formData.site_name} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.site_name}</div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-3">
                                                        <label for="office_number" class="form-label">Office Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="office_number" name="office_number" value={formData.office_number} onChange={handleChange}/>
                                                        <div class="invalid-feedback d-block">{errors.office_number}</div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="contact_number" class="form-label">Contact Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="contact_number" name="contact_number" value={formData.contact_number} onChange={handleChange}/>
                                                        <div class="invalid-feedback d-block">{errors.contact_number}</div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="mobile_number" class="form-label">Mobile Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="mobile_number" name="mobile_number" value={formData.mobile_number} onChange={handleChange}/>
                                                        <div class="invalid-feedback d-block">{errors.mobile_number}</div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="phone_number" class="form-label">Phone Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange}/>
                                                        <div class="invalid-feedback d-block">{errors.phone_number}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-6">
                                                        <label for="contact_email" class="form-label">Contact Email</label>
                                                        <input type="email" class="form-control form-control-sm" id="contact_email" name="contact_email" value={formData.contact_email} onChange={handleChange}/>
                                                        <div class="invalid-feedback d-block">{errors.contact_email}</div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="support_email" class="form-label">Support Email</label>
                                                        <input type="email" class="form-control form-control-sm" id="support_email" name="support_email" value={formData.support_email} onChange={handleChange}/>
                                                        <div class="invalid-feedback d-block">{errors.support_email}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-6">
                                                        <label for="logo" class="form-label">Logo</label>
                                                        <input type="file" class="form-control form-control-sm" id="logo" name="logo"/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="favicon" class="form-label">Favicon</label>
                                                        <input type="file" class="form-control form-control-sm" id="favicon" name="favicon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <label for="address" class="form-label">Address</label>
                                                <textarea cols={3} rows={6} id="address" name="address" className="form-control form-control-sm"></textarea>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <label for="google_maps" class="form-label">Google Maps</label>
                                                <textarea cols={3} rows={6} id="google_maps" name="google_maps" className="form-control form-control-sm"></textarea>
                                            </div>

                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-6">
                                                        <label for="seo_title" class="form-label">Seo Title</label>
                                                        <input type="text" class="form-control form-control-sm" id="seo_title" name="seo_title"/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="seo_keywords" class="form-label">Seo Keywords</label>
                                                        <input type="text" class="form-control form-control-sm" id="seo_keywords" name="seo_keywords"/>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-md-12 mb-2">
                                                        <label for="seo_description" class="form-label">Seo Description</label>
                                                        <textarea cols={3} rows={6} id="seo_description" name="seo_description" className="form-control form-control-sm"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <label for="copyrights" class="form-label">Copyrights</label>
                                                <input type="text" class="form-control form-control-sm" id="copyrights" name="copyrights" value={formData.copyrights} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.copyrights}</div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <label for="status" class="form-label">Status</label>
                                                <select class="form-control form-select form-select-sm mb-3" id="status" name="status">
                                                    <option value={'active'}>Active</option>
                                                    <option value={'inactive'}>Inactive</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-2"></div>
                                            <div className="col-md-6">
                                                <button type="submit" className="btn btn-success btn-sm col-md-2">Submit</button>
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

export default Settings;