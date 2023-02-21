import React, { useState } from "react";
import { Button, Table, Image } from "react-bootstrap";
import { leerDeLocalStorage } from "../utils/localStorage";

export default function User() {
  const productosLocal = leerDeLocalStorage("productos") || [];

  const [productos, setProductos] = useState(productosLocal);
  const [tablaProductos, setTablaProductos] = useState(productos);
  const [busqueda, setBusqueda] = useState("");

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaProductos.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.sucursal
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProductos(resultadosBusqueda);
  };
  return (
    <div>
      <div className="containerInput mt-5">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Sucursal"
          onChange={handleSearch}
        />
        <button className="btn btn-success">Buscar</button>
      </div>

      <div className="table-responsive">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="table table-sm table-bordered"
        >
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Fecha</td>
              <td>Vencimientos</td>
              <td>Sucursal</td>
              <td>Cantidad</td>
              <td>Notas</td>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <div>
                <h5>No hay productos guardados</h5>
              </div>
            ) : (
              productos.map((producto, id) => (
                <tr key={id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.fecha}</td>
                  <td>{producto.vencimiento}</td>
                  <td>{producto.sucursal}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.notas}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
