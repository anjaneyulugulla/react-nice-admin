import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "./Auth";
import { postData } from "../services/apiService";
import { ToastContainer } from 'react-toastify';
import { toastSuccess,toastError } from "../pages/Toast";


const Login = () => {

const navigate = useNavigate();  
const [formData,setFormData] = useState({
    username : '',
    password : ''
});

const [errors,setErrors] = useState({});

const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};
const validate = () => {
    const newErrors = {};

    if(!formData.username) {
        newErrors.username = 'Please enter your username.';
    }
    if(!formData.password) {
        newErrors.password = 'Please enter your password.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
        console.log('From data submitted:',formData);
        const result = await postData('adminlogin',{'username':formData.username,'password':formData.password});
        const { data } = result;
        
        if(!data.success){
            navigate('/login');
            toastError(data.message);
        } else {
            const token  = data.token;
            authLogin(token,{'name':"Admin"},1000 * 60 * 60);
            navigate('/dashboard');
            toastSuccess(data.message);
        }
    }
};

// const handleLogin = () => {
//     navigate('/dashboard');
// };

return(
<div>        
    <main>
        <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div class="d-flex justify-content-center py-4">
                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    <img src="/assets/images/logo.png" alt=""/>
                                    <span class="d-none d-lg-block">{process.env.REACT_APP_PROJECT_NAME}</span>
                                </a>
                            </div>
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Login</h5>
                                        <p class="text-center small"></p>
                                        <ToastContainer/>
                                    </div>
                                    <form class="row g-3 needs-validation" onSubmit={handleSubmit}>
                                        <div class="col-12">
                                            <label for="username" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <input type="text" name="username" class="form-control" id="username" value={formData.username} onChange={handleChange}/>
                                                <div class="invalid-feedback d-block">{errors.username}</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" name="password" class="form-control" id="password" value={formData.password} onChange={handleChange}/>
                                            <div class="invalid-feedback d-block">{errors.password}</div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                                                <label class="form-check-label" for="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Login</button>
                                        </div>
                                        <div class="col-12">
                                            <p class="small mb-0">
                                                <a href="/forgot-password">Forgot Password</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="credits"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</div>    
)
};

export default Login;