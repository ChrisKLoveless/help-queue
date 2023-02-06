import React from "react";
import Header from "./Header";
import Ticket from "./Ticket.js";
import TicketList from "./TicketList";
import "../index.css";


function App() {
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      {/* <h1>Help Queue</h1>    THIS CODE IS REPLACED BY HEADER COMPONENT */}
      <TicketList />
      {/* <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>    THIS COSE REPLACED BY TICKETLIST COMPONENT */}
      <hr />
    </React.Fragment>
  );
}

export default App;