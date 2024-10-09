import React from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchData = async (reqUrl,params) => {
    const fullUrl = `${baseUrl}${reqUrl}`;
    try {
        const response = await axios.get(fullUrl, { params });
        return response;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Error fetching data');
    }
};
export const postData = async (reqUrl,params) => {
    const fullUrl = `${baseUrl}${reqUrl}`;
    try {
      const response = await axios.post(fullUrl, params);
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error posting data');
    }
};
