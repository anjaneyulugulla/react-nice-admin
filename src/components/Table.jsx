import React,{useEffect,useRef} from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";
import DataTableComponent2 from "./DataTableComponent2";
import DataTableComponent from "./DataTableComponent";

const Table = () => {        
    return(
        <div>
            <Header/>
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Users</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item">Users</li>
                            <li class="breadcrumb-item active">Data</li>
                        </ol>
                    </nav>
                </div>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Table</h5>
                                    <DataTableComponent/>
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

export default Table;