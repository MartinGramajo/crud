import React from "react";
import FormAdmin from "../components/FormAdmin";

export default function Admin({ productos, setProductos }) {
  return (
    <div className="bg-home">
      <FormAdmin productos={productos} setProductos={setProductos} />
    </div>
  );
}
