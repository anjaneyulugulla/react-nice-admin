// src/DataTableComponent.jsx
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.css';


const DataTableComponent = () => {
  useEffect(() => {
    // Initialize DataTables
    $('#example').DataTable({
      // You can customize DataTable options here
    });

    // Cleanup DataTable instance on component unmount
    return () => {
      $('#example').DataTable().destroy(true);
    };
  }, []);

  return (
    <div>
      <table id="example" className="display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableComponent;
