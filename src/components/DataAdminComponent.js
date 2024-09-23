import React, { useEffect, useState } from "react";
import jsonData from "../services/admin.json";

const DataAdminComponent = ({ searchTerm }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(jsonData);

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
              <td>{item.id}-{searchTerm}</td>
              <td>{item.image}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.group_id}</td>
              <td>{item.status}</td>
              <td>
                <a className="p-1" href="/admin/edit">
                    <i className="bi bi-pencil-square"></i>
                </a>
                <a href="/admin/delete">
                    <i className="bi bi-trash-fill"></i>
                </a>
            </td>
            </tr>
          ))}
        </tbody>
    )
}

export default DataAdminComponent;
