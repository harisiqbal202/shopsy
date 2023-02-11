import React from "react";
import { useParams } from "react-router-dom";

function DeleteProduct() {
  const { id } = useParams();
  console.log("id ", id);
  return <div>DeleteProduct {id}</div>;
}

export default DeleteProduct;
