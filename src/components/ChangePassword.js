import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";


const ChangePassword = () => {
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
                                    <div class="col-lg-6 mt-lg-5" id="">
                                        <form className="row g-3">
                                            <div class="col-12">
                                                <label for="currentPassword" class="form-label">Current Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="password" type="password" class="form-control" id="currentPassword"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="newPassword" class="form-label">New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="newpassword" type="password" class="form-control" id="newPassword"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="renewPassword" class="form-label">Re-enter New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="renewpassword" type="password" class="form-control" id="renewPassword"/>
                                                </div>
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