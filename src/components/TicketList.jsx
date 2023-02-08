import React from "react";
import Ticket from "./Ticket.jsx";


function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket, index) => // Loop through the list passed down from TicketControl.
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};
// Each ticket should have a unique "key" prop. (Index) assigned in the array map

export default TicketList;