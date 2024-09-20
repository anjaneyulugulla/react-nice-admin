import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { toastSuccess } from "../pages/Toast";

const SocialMedia = () => {
    const navigate = useNavigate();  
    const [formData,setFormData] = useState({
        facebook:'',
        twitter:'',
        google:'',
        youtube:'',
        linkedin:'',
        instagram:'',
        pinterest:'' 
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
    
        if(!formData.facebook) {
            newErrors.facebook = 'Please enter facebook.';
        }
        if(!formData.twitter) {
            newErrors.twitter = 'Please enter twitter.';
        }
        if(!formData.google) {
            newErrors.google = 'Please enter google.';
        }
        if(!formData.youtube) {
            newErrors.youtube = 'Please enter youtube.';
        }
        if(!formData.linkedin) {
            newErrors.linkedin = 'Please enter linkedin.';
        }
        if(!formData.instagram) {
            newErrors.instagram = 'Please enter instagram.';
        }
        if(!formData.pinterest) {
            newErrors.pinterest = 'Please enter pinterest.';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            console.log('From data submitted:',formData);
            toastSuccess('Updated successfully..!');
            navigate('/social-media');
        }
    };
    return(
        <div>
        <Header/>            
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Social Media</h1>
                <nav>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Social Media</li>
                    </ol>
                </nav>
            </div>
            <section class="section">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body border border-2">
                                <h5 class="card-title"></h5>
                                <div className="col-md-10">
                                    <ToastContainer />
                                    <form className="row g-3" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div class="col-md-10">
                                                <label for="facebook" class="form-label">Facebook</label>
                                                <input type="text" class="form-control form-control-sm" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.facebook}</div>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="twitter" class="form-label">Twitter</label>
                                                <input type="text" class="form-control form-control-sm" id="twitter" name="twitter" value={formData.twitter} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.twitter}</div>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="google" class="form-label">Google</label>
                                                <input type="text" class="form-control form-control-sm" id="google" name="google" value={formData.google} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.google}</div>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="youtube" class="form-label">Youtube</label>
                                                <input type="text" class="form-control form-control-sm" id="youtube" name="youtube" value={formData.youtube} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.youtube}</div>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="linkedin" class="form-label">LinkedIn</label>
                                                <input type="text" class="form-control form-control-sm" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.linkedin}</div>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="instagram" class="form-label">Instagram</label>
                                                <input type="text" class="form-control form-control-sm" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.instagram}</div>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="pinterest" class="form-label">Pinterest</label>
                                                <input type="text" class="form-control form-control-sm" id="pinterest" name="pinterest" value={formData.pinterest} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.pinterest}</div>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="submit" className="btn btn-success btn-sm mt-3">Save</button>
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

export default SocialMedia;