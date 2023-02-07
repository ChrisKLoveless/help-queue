import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Q1 from './Q1';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      q1VisibleOnPage: false,
      q2VisibleOnPage: false,
      q3VisibleOnPage: false,
    };
  }
  
  formHandleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      q1VisibleOnPage: !prevState.q1VisibleOnPage,
      q2VisibleOnPage: !prevState.q2VisibleOnPage,
      q3VisibleOnPage: !prevState.q3VisibleOnPage,
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.q1VisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else if(this.state.q2VisibleOnPage) {

    }
    else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      <button onClick={this.formHandleClick}> {buttonText} </button>
      </React.Fragment>
    );
  }
}

export default TicketControl;