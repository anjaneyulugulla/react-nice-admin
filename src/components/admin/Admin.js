import React, {  useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import DataAdminComponent from "../DataAdminComponent";
import AdminExportExcel from "../AdminExportExcel"

const Admin = () => {
    const inlineStyle = {marginRight: '18px'};
    const inlineStyle2 = {marginRight: '12px',border:"1px solid"};
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
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
                            <div className="card">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6">
                                            <a href="/admin/add" className="btn btn-sm btn-success float-end mt-2" style={inlineStyle}>
                                                <i className="bi bi-plus-circle-fill"></i> Add
                                            </a>
                                            <AdminExportExcel/>
                                            <input type="text" id="searchInput" name="searchInput" value={searchTerm} onChange={handleSearchChange} placeholder="Search" className="float-end form-control-sm mt-2" style={inlineStyle2}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body mt-lg-3">          
                                    <table className="table table-bordered table-sm">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Group Name</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <DataAdminComponent/>
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