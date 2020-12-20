import React from "react";

const TableClient = () => {
  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                className="button is-small is-info mr-1"
                title="Modificar"
              >
                <span className="icon is-small">
                  <i className="fas fa-user-edit"></i>
                </span>
              </button>
              <button className="button is-small is-danger" title="Eliminar">
                <span className="icon is-small">
                  <i className="fas fa-trash"></i>
                </span>
              </button>
            </td>
            <td>Frank</td>
            <td>Jungla</td>
            <td>C/ Jaja</td>
            <td>6666666</td>
            <td>ana@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableClient;
