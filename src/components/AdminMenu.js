import React, { useEffect, useState } from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";
import jsonMenu from "../services/admin_menu.json";

const AdminMenu = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        setData(jsonMenu);
    },[]);
    return(
        <div>
            <Header/>            
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Admin Menu</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Admin Menu</li>
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
                                        <form className="row g-3" method="POST" enctype="multipart/form-data">
                                            <div className="row">
                                                <div class="col-md-8 mb-2">
                                                    <label for="name" class="form-label">Name</label>
                                                    <input type="text" class="form-control form-control-sm" id="site_name" name="site_name"/>
                                                    <div class="invalid-feedback d-block"></div>
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
export default AdminMenu;