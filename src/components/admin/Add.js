import React from "react";

import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

const Add = () => {
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
                                        <form className="row g-3" action="/admin/add-action" method="POST" enctype="multipart/form-data">
                                            <div className="row">
                                                <div class="col-md-6">
                                                    <label for="name" class="form-label">Name</label>
                                                    <input type="text" class="form-control form-control-sm" id="name"/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="email" class="form-label">Email</label>
                                                    <input type="email" class="form-control form-control-sm" id="email"/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="username" class="form-label">User Name</label>
                                                    <input type="text" class="form-control form-control-sm" id="username"/>
                                                </div>
                                                <div className="col-md-6">
                                                <label for="group" class="form-label">Group</label>
                                                    <select class="form-control form-select form-select-sm mb-3" id="group">
                                                        <option value={'admin'}>Admin</option>
                                                        <option value={'manager'}>Manager</option>
                                                        <option value={'generalmanager'}>GM</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="image" class="form-label">Image</label>
                                                    <input type="file" class="form-control form-control-sm" id="image"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="status" class="form-label">Status</label>
                                                    <select class="form-control form-select form-select-sm mb-3" id="status">
                                                        <option value={'active'}>Active</option>
                                                        <option value={'inactive'}>Inactive</option>
                                                    </select>
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

export default Add;