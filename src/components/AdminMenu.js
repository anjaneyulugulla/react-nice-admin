import React, { useEffect, useState } from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";
import jsonMenu from "../services/admin_menu.json";

const AdminMenu = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        setData(jsonMenu);
    },[]);
    const formatString = (str) => {
        return str
          .split('_')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
          .join(' ');
      };

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
                                    <h5 class="card-title"> </h5>
                                    <div className="col-md-12">
                                        <form className="row g-3" method="POST" enctype="multipart/form-data">
                                            <div className="row">
                                                {data.map((item) =>(
                                                <div class="col-md-6 mb-2">
                                                    <label for="name" class="form-label">{formatString(item.menu_display)}</label>
                                                    <input type="text" class="form-control form-control-sm" id={item.menu_display} name={item.menu_display} value={item.menu_url}/>
                                                    <div class="invalid-feedback d-block"></div>
                                                </div>
                                                ))}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 mt-2">
                                                    <button type="submit" name="submit" id="submit" className="btn btn-success btn-sm col-xxl-3">Submit</button>
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