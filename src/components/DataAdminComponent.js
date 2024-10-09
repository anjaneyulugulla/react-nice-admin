import React, { useEffect, useState } from "react";
import jsonData from "../services/admin.json";
import { fetchData } from "../services/apiService"

const DataAdminComponent = ({ searchTerm , onSearchChange }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchedData = async () => {
            const result = await fetchData('getadmin',{});
            const { data } = result;    
            setData(data.data);
        };
        fetchedData();
    },[]);
    const getFilteredData = () => {
        if(!searchTerm) 
            return data;

        return data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };
    const filteredData = getFilteredData();

    return(
        <tbody>
            {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.image}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.group_id}</td>
              <td>{item.status}</td>
              <td>
                <a className="p-1" href={`/admin/edit/${item.id}`}>
                    <i className="bi bi-pencil-square"></i>
                </a>
                <a href={`/admin/delete/${item.id}`}>
                    <i className="bi bi-trash-fill"></i>
                </a>
            </td>
            </tr>
          ))}
        </tbody>
    )
}

export default DataAdminComponent;
