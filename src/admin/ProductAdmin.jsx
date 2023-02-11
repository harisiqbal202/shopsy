import React, { useState } from "react";
import { Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FeedIcon from "@mui/icons-material/Feed";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NavLink } from "react-router-dom";

function ProductAdmin() {
  const [data, setData] = useState([]);
  const id = 10;
  return (
    <div className="container">
      <Button variant="contained" className="mb-3">
        <AddCircleIcon />
        &nbsp;&nbsp;
        <NavLink to={`/admin/addproduct`} className="text-white">
          {" "}
          Add Product
        </NavLink>
      </Button>

      <Table bordered hover responsive striped className="rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Retail ($)</th>
            <th>Sale ($)</th>
            <th>Net Sales ($)</th>
            <th>Gross Profit ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">3</th>
            <td>Shirt</td>
            <td>Description</td>
            <td>mens</td>
            <td>35</td>
            <td>35</td>
            <td>40</td>
            <td>24</td>
            <td>{(40 - 35) * 24}</td>
            <td>
              <NavLink to={`/admin/editproduct/${id}`}>
                <EditIcon className="mx-2" color="success" />
              </NavLink>
              <NavLink to={`/admin/deleteproduct/${id}`}>
                <DeleteIcon className="mx-2 text-danger" />
              </NavLink>
              <NavLink to={`/admin/detailproduct/${id}`}>
                <FeedIcon className="mx-2" color="info" />
              </NavLink>
            </td>
          </tr>
          {data.map((product) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.qty}</td>
                <td>{product.retailp} </td>
                <td>{product.salep} </td>
                <td>{product.sale}</td>
                <td>{(product.salep - product.retailp) * product.sale} </td>
                <td>
                  <NavLink to={`/admin/editproduct/${product.id}`}>
                    <EditIcon className="mx-2" color="success" />
                  </NavLink>
                  <NavLink to={`/admin/deleteproduct/${product.id}`}>
                    <DeleteIcon className="mx-2 text-danger" />
                  </NavLink>
                  <NavLink to={`/admin/detailproduct/${product.id}`}>
                    <FeedIcon className="mx-2" color="info" />
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductAdmin;
