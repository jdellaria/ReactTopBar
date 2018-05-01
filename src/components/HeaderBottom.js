import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import 'vendor/bootstrap/css/bootstrap.min.css'
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import {VarPageSize} from './Dashboard';
class HeaderBottom extends Component {

  constructor(props) {
    super(props);
//    this.setState({pageSize: this.props.pageSize});
    this.state = { pageSize: this.props.pageSize, sort:"year,desc"};
console.log("HeaderBottom: this.props.pageSize " + this.props.pageSize);
console.log("HeaderBottom: this.state.pageSize " + this.state.pageSize);
  }


    render() {
      return (
        <div>
        VarPageSize from HeaderTop={VarPageSize}  pageSize: {this.state.pageSize}
          <Container>
            <Row>
             <Col xs="2"></Col>
             <Col xs="auto">
              <Navbar color="faded" light expand="md">
              <h1>
                <ul className="navbar-nav " id="exampleAccordion">
                  <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                    <Link to={{pathname: '/Dashboard', state: {pageSize: this.state.pageSize}}} className="nav-link">
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
                </h1>
              </Navbar>
            </Col>
            <Col xs="2"></Col>
            </Row>
          </Container>
        </div>
        );

      }
  }
export default HeaderBottom
