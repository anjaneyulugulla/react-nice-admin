import React from "react";

const Footer = () => {
    return(
        <div>
            <footer id="footer" class="footer">
                <div class="copyright">
                &copy; Copyright <strong><span>{process.env.REACT_APP_PROJECT_NAME}</span></strong>. All Rights Reserved
                </div>
                <div class="credits"></div>
            </footer>
        </div>
    )
};

export default Footer; 