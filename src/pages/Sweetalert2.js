import Swal from "sweetalert2";
import { postData } from "../services/apiService";
import React from "react";

export const confirmDialog = async (params) => {

    const result = await Swal.fire({
        title: "Are you sure you want to delete?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
    });
    if (result.isConfirmed) {
        const fetchedData = async () => {
            const response = await postData('deleteadmin', { id: params.id });
            const { data } = response;
            // if (!data.success) {
            //     Swal.fire({
            //         title: "Deleted...!",
            //         text: data.message,
            //         icon: "info",
            //     });
            // } else {
            //     Swal.fire({
            //         title: "Deleted...!",
            //         text: data.message,
            //         icon: "success",
            //     });
            // }
            await Swal.fire({
                title: data.success ? "Deleted!" : "Error",
                text: data.message,
                icon: data.success ? "success" : "error",
            });
            window.location.reload();
        }
        fetchedData();
        
    }
};
