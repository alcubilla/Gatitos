import React, {Component} from "react";
import ContactCard from "./components/ContactCard";
import contactsData from "./contactsData";

class App extends Component {
constructor(){
super();
  this.state = {
    elemento : contactsData
}

  }

 


render () {
  const cards = this.state.elemento.map((contact, idx) => 
  <ContactCard info={contact} key={idx} />);
//IF ELSE
let  contenido;
if (cards.length > 0)
 {
  contenido = cards;
 } else {
   contenido = <p>No hay contactos disponibles</p>;
 }
return(
  <>
  {contenido}
  </>
);

}

}


export default App;
