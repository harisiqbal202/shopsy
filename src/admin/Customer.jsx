import React from "react";
import { Table } from "react-bootstrap";

function Customer() {
  return (
    <div className="container">
      <Table bordered hover responsive striped className="rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Role</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ali</td>
            <td>ali@gmail.com</td>
            <td>0349434567</td>
            <td>23</td>
            <td>customer</td>
            <td>2/11/2023</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Customer;
