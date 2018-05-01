import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Collapse, Button, ButtonGroup, CardBody, Card } from 'reactstrap';

// The Header creates links that can be used to navigate
// between routes.

//<nav>
//  <ul>
//    <li><Link to='/'>Home</Link></li>
//    <li><Link to='/roster'>Roster</Link></li>
//    <li><Link to='/schedule'>Schedule</Link></li>
//  </ul>
//</nav>


class Header extends Component {

  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed' };
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

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
      return (
  <header>

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <Link to='/Dashboard' className="navbar-brand">Watson Natural Language Understanding -  Current state: {this.state.status}</Link>
    <Button  className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </Button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav " id="exampleAccordion">

        <li className="nav-item" >
          <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseEntities" data-parent="#exampleAccordion">
            <i className="fa fa-fw fa-cog"></i>
            <span   onClick={this.toggle} className="nav-link-text">Entities</span>
          </a>
          <Collapse  isOpen={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited} >
            <Button className="navbar-brand" data-placement="right" type="button">
              <span className="nav-link-text" >Entities Navbar</span>
            </Button>
            <Button className="navbar-brand" data-placement="right" type="button">
              <span className="nav-link-text">Entities Navbar 2</span>
            </Button>
          </Collapse>
        </li>


        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
            <Link to='/Dashboard' className="nav-link">
            <i className="fa fa-fw fa-dashboard"></i>
            <span className="nav-link-text">Dashboard</span>
            </Link>
        </li>

        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
            <Link to='/Charts' className="nav-link">
            <i className="fa fa-fw fa-area-chart"></i>
            <span className="nav-link-text">Charts</span>
            </Link>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
            <Link to='/Table' className="nav-link">
            <i className="fa fa-fw fa-table"></i>
            <span className="nav-link-text">Tables</span>
            </Link>
        </li>

      </ul>
    </div>
  </nav>
  </header>
    );
  }
}

export default Header
