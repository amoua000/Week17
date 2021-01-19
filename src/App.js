
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import './BasicInfo/person.js';
import BasicInfo from './BasicInfo/person.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      persons:[
        {
          name:'Aaron',
          number:'12345678',
          DOB:'08/31/94'
        },
        {
          name:'Aaron',
          number:'12345678',
          DOB:'08/31/94'
        },
        {
          name:'Aaron',
          number:'12345678',
          DOB:'08/31/94'
        },
        {
          name:'Aaron',
          number:'12345678',
          DOB:'08/31/94'
        },
      ]
    }
  }
}
render(){
  return <Basicinfo persons={this.state.person} />; 
}

export default App;
