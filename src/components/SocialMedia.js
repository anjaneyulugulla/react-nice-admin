import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

const SocialMedia = () => {
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
                                    <form className="row g-3" action="/admin/social-media-action" method="POST" enctype="multipart/form-data">
                                        <div className="row">
                                            <div class="col-md-10">
                                                <label for="facebook" class="form-label">Facebook</label>
                                                <input type="text" class="form-control form-control-sm" id="facebook"/>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="twitter" class="form-label">Twitter</label>
                                                <input type="text" class="form-control form-control-sm" id="twitter"/>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="google" class="form-label">Google</label>
                                                <input type="text" class="form-control form-control-sm" id="google"/>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="youtube" class="form-label">Youtube</label>
                                                <input type="text" class="form-control form-control-sm" id="youtube"/>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="linkedin" class="form-label">LinkedIn</label>
                                                <input type="text" class="form-control form-control-sm" id="linkedin"/>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="instagram" class="form-label">Instagram</label>
                                                <input type="text" class="form-control form-control-sm" id="instagram"/>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="pinterest" class="form-label">Pinterest</label>
                                                <input type="text" class="form-control form-control-sm" id="pinterest"/>
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