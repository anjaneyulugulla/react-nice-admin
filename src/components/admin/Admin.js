import React from "react";

import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

const Admin = () => {
    const inlineStyle = {
        marginRight: '18px',
      };
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
                                            <a href="/admin/add" className="btn btn-sm btn-success float-end mb-2 mt-2" style={inlineStyle}>
                                            <i className="bi bi-plus-circle-fill"></i> Add
                                            </a>
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
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>image</td>
                                                <td>Jhone</td>
                                                <td>Jhone@fmIL.CON</td>
                                                <td>Manager</td>
                                                <td>Active</td>
                                                <td>
                                                    <a className="p-1" href="/admin/edit"><i className="bi bi-pencil-square"></i></a>
                                                    <a href="/admin/delete"><i className="bi bi-trash-fill"></i></a>
                                                </td>
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