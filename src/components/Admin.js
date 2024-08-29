import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

const Admin = () => {
    return(
        <div>
            <Header/>            
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Admin</h1>
                    <nav>
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Admin</li>
                        </ol>
                    </nav>
                </div>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">
                            <div    className="card table-height">
                                <div class="card-body mt-lg-3">          
                                    <table className="table table-bordered table-sm">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Jhine</td>
                                                <td>Jhine@fmIL.CON</td>
                                                <td>Jhine</td>
                                                <td>Jhine@fmIL.CON</td>
                                                <td>Jhine</td>
                                                <td>Jhine@fmIL.CON</td>
                                                <td>Jhine</td>
                                                <td>Jhine@fmIL.CON</td>
                                                <td>Jhine</td>
                                                <td>Jhine@fmIL.CON</td>
                                                <td>eDIT</td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Admin;