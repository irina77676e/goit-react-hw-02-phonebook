import React, { Component } from 'react';
import Phonebook from './Phonebook/phonebook';

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <Phonebook onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}

export default App;
