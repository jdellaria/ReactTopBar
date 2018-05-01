import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import 'vendor/bootstrap/css/bootstrap.min.css'
import { Nav, NavItem, Collapse, Button, ButtonGroup, CardBody, Card } from 'reactstrap';
import HeaderTop from './HeaderTop';
// The Header creates links that can be used to navigate
// between routes.

//<nav>
//  <ul>
//    <li><Link to='/'>Home</Link></li>
//    <li><Link to='/roster'>Roster</Link></li>
//    <li><Link to='/schedule'>Schedule</Link></li>
//  </ul>
//</nav>


class SideBar extends Component {

  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed' };
  }


  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  render() {
      return (
<div>



          <p>List Based</p>
                      <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Nav>
            <NavItem>

          <Link to='/' >Watson Natural Language Understanding JOn  -  Current state: {this.state.status}</Link>
            </NavItem>
            <NavItem>
            <Link to='/Dashboard' >
              <i className="fa fa-fw fa-dashboard"></i>
              <span >Dashboard</span>
            </Link>
            </NavItem>
            <NavItem>
            <Link to='/Table'>
              <i className="fa fa-fw fa-table"></i>
              <span >Table</span>
            </Link>
            </NavItem>
            <NavItem>
            <Link to='/Charts' >
              <i className="fa fa-fw fa-bar-chart"></i>
              <span >Charts</span>
            </Link>
            </NavItem>
          </Nav>
    </div>

    );
  }
}

export default SideBar
