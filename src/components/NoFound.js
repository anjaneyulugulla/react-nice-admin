import React from "react";

import Header from "../pages/Header";
import Footer from "../pages/Footer";

const NoFound = () => {
    return(
        <div>
            <Header/>            
            <main id="main" class="main">
                <div class="container">
                    <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <a class="btn" href="/dashboard">Back</a>
                        <img src="assets/images/not-found.svg" class="img-fluid py-5" alt="Page Not Found"/>
                        <div class="credits"></div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
};
export default NoFound;