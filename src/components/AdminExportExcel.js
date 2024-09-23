import React from 'react';
import * as XLSX from 'xlsx';
import jsonData from "../services/admin.json";

const ExportExcel = () => {
const inlineStyle = {marginRight: '5px'};
  const data = jsonData;

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
