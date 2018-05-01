import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import Header from './Header';
import Main from './Main';

//          <HeaderTop/>
//          <HeaderBottom/>
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {pageSize: 8};
    this.updateApplicationPageSize = this.updateApplicationPageSize.bind(this);
    console.log("Application:constructor this.state.pageSize " + this.state.pageSize);
  }

  updateApplicationPageSize(newPageSize)
  {
    this.setState({pageSize: newPageSize});
    console.log("Application:updateApplicationPageSize newPageSize " + newPageSize);
    console.log("Application:updateApplicationPageSize this.state.pageSize " + this.state.pageSize);
  }

  render() {
      return (
        <div>
        <HeaderTop updateApplicationPageSize={this.updateApplicationPageSize}/>
        <HeaderBottom pageSize={this.state.pageSize}/>

          <Main />
        </div>
      );
  }
}

export default Application;
