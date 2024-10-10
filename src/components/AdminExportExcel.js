import React, { useEffect ,useState } from 'react';
import * as XLSX from 'xlsx';
import { fetchData } from '../services/apiService';

const ExportExcel = () => {
const inlineStyle = {marginRight: '5px'};
const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
        const result = await fetchData('getadmin',{});
        const { data } = result;    
        setData(data.data);
    };
    fetchedData();
},[]);
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'Admin.xlsx'); // Change to .xls if needed
  };

  return (
    <div>
        <button className='btn btn-sm btn-success float-end mt-2' style={inlineStyle}  onClick={exportToExcel}>Export</button>
    </div>
  );
};

export default ExportExcel;
