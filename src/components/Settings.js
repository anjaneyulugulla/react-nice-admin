import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

const Settings = () => {
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
                                    <form className="row g-3" action="/admin/setting-action" method="POST" enctype="multipart/form-data">
                                        <div className="row">
                                            <div class="col-md-12 mb-2">
                                                <label for="name" class="form-label">Name</label>
                                                <input type="text" class="form-control form-control-sm" id="name"/>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-3">
                                                        <label for="office_number" class="form-label">Office Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="office_number"/>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="contact_number" class="form-label">Contact Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="contact_number"/>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="mobile_number" class="form-label">Mobile Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="mobile_number"/>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="phone_number" class="form-label">Phone Number</label>
                                                        <input type="text" class="form-control form-control-sm" id="phone_number"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-6">
                                                        <label for="contact_email" class="form-label">Contact Email</label>
                                                        <input type="email" class="form-control form-control-sm" id="contact_email"/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="support_email" class="form-label">Support Email</label>
                                                        <input type="email" class="form-control form-control-sm" id="support_email"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-6">
                                                        <label for="logo" class="form-label">Logo</label>
                                                        <input type="file" class="form-control form-control-sm" id="logo"/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="favicon" class="form-label">Favicon</label>
                                                        <input type="file" class="form-control form-control-sm" id="favicon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <label for="address" class="form-label">Address</label>
                                                <textarea cols={3} rows={6} id="address" className="form-control form-control-sm"></textarea>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <label for="google_maps" class="form-label">Google Maps</label>
                                                <textarea cols={3} rows={6} id="google_maps" className="form-control form-control-sm"></textarea>
                                            </div>

                                            <div className="col-md-12 mb-2">
                                                <div className="row">
                                                    <div class="col-md-6">
                                                        <label for="seo_title" class="form-label">Seo Title</label>
                                                        <input type="text" class="form-control form-control-sm" id="seo_title"/>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="seo_keywords" class="form-label">Seo Keywords</label>
                                                        <input type="text" class="form-control form-control-sm" id="seo_keywords"/>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-md-12 mb-2">
                                                        <label for="seo_description" class="form-label">Seo Description</label>
                                                        <textarea cols={3} rows={6} id="seo_description" className="form-control form-control-sm"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <label for="copyrights" class="form-label">Copyrights</label>
                                                <input type="text" class="form-control form-control-sm" id="copyrights"/>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <label for="status" class="form-label">Status</label>
                                                <select class="form-control form-select form-select-sm mb-3" id="status">
                                                    <option value={'active'}>Active</option>
                                                    <option value={'inactive'}>Inactive</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-2"></div>
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

export default Settings;