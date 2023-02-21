import React, { useState } from "react";
import { Button, Form, Image, Table } from "react-bootstrap";
import { guardarEnLocalStorage } from "../utils/localStorage";

export default function FormAdmin(props) {
  const { productos, setProductos } = props;
  const [tablaProductos, setTablaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({
    nombre: "",
    fecha: "",
    vencimiento: "",
    cantidad: "",
    sucursal: "",
    notas: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const nuevoArray = [...productos, input];
      setProductos(nuevoArray);
      setTablaProductos(nuevoArray);
      guardarEnLocalStorage({ key: "productos", value: nuevoArray });
      form.reset();
      setValidated(false);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

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
    <div className="container p-5">
      <h2 className="mt-5  text-center">Carga de productos</h2>
      <Form
        className="card p-5 m-auto mt-5 form-admin"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            required
            name="nombre"
            type="text"
            placeholder="Nombre del producto"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tus datos.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Fecha de subida</Form.Label>
          <Form.Control
            required
            name="fecha"
            type="date"
            placeholder="fecha de subida"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tu datos.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Fecha de Vencimiento</Form.Label>
          <Form.Control
            required
            name="vencimiento"
            type="date"
            placeholder="fecha de vencimiento"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tu datos.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Sucursal</Form.Label>
          <Form.Control
            required
            name="sucursal"
            type="text"
            placeholder="Lugar de carga del producto"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tu datos.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            required
            name="cantidad"
            type="number"
            placeholder="Lugar de carga del producto"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tu datos.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Notas</Form.Label>
          <Form.Control
            required
            name="notas"
            type="text"
            placeholder="comentario/nota"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tu datos.
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="mx-auto" type="submit">
          Cargar Producto
        </Button>
      </Form>

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
              <td>Acciones</td>
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
                  <td>
                    {" "}
                    <Button variant="none">
                      {" "}
                      <Image
                        src="https://icongr.am/clarity/eraser.svg?size=26&color=ff0000"
                        alt="icono eliminar"
                      />{" "}
                    </Button>
                    <Button variant="none">
                      {" "}
                      <Image
                        src="https://icongr.am/clarity/edit.svg?size=26&color=currentColor"
                        alt="icono editar"
                      />{" "}
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
