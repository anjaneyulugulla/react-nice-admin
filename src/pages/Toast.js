import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = (messsage) => {
    toast.success(messsage,{
        className: 'custom-toast',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        position:"top-right"
    });
}

export const toastWarning = (messsage) => {
    toast.success(messsage,{
        className: 'custom-toast',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        position:"top-right"
    });
}

export const toastError = (messsage) => {
    toast.success(messsage,{
        className: 'custom-toast',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        position:"top-right"
    });
}

export const toastInfo = (messsage) => {
    toast.success(messsage,{
        className: 'custom-toast',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        position:"top-right"
    });
}

export const toastDefault = (messsage) => {
    toast.success(messsage,{
        className: 'custom-toast',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        position:"top-right"
    });
}