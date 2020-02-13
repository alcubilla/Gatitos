import React from "react";

const ContactCard = props => {
return(

  <div className="container" id="tarjeta">
  <div className="card border-danger mb-3" > 
  <img src={props.info.imgUrl} alt =" No se encontro la imagen"/>
  <div className="card-body">
    <h3 className="card-title">{props.info.name}</h3>
    <p className="card-text">  {props.info.phone} </p>
    <a href="#" className="btn btn-danger">{props.info.email} </a>
  </div>
</div>
</div>
);
}

export default ContactCard;