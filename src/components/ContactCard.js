import React from "react";

const ContactCard = props => (

<div className="card m-4">
<img src={props.info.imgUrl} alt="no se encontro" ></img>
  <div className="card-body">
    <p>Nombre: {props.info.name}</p>
    <p>telefono: {props.info.phone} </p>
    <p>Email: {props.info.email} </p>
    <a href="#" className="btn btn-danger" onClick="Este botón agregará un contacto al directorio">Agregar</a> 
  </div>
</div>
);

export default ContactCard;
