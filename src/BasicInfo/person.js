import React, { Component } from 'react';

class Basicinfo extends Component{
          render(){
                    return(
                              <div>
                              <ul>
                                        {this.props.persons.map(el => ( 
                                                  <li key = {el.name}>{el.name} number{el.number} DOB {el.DOB}</li>
                                        ))}
                              </ul>
                              </div>
                    )
          }
}








export default Basicinfo