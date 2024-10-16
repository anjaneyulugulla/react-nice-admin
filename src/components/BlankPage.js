import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

const BlankPage = () => {
    return(
        <div>
            <Header/>            
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Blank Page</h1>
                    <nav>
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item">Page</li>
                        <li class="breadcrumb-item active">Blank</li>
                        </ol>
                    </nav>
                </div>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Example Card</h5>
                            <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                            </div>
                        </div>

                        </div>

                        <div class="col-lg-6">

                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Example Card</h5>
                            <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
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
export default BlankPage;