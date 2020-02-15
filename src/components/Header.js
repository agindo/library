import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/style.css'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" style={{position:'fixed', zIndex:'1000', width:'100%'}}>
          <div  className="container">
          <NavbarBrand href="/">LearnIT Library App</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* Isi to dengan path yang akan dituju. Berikan kata yang merepresentasi Button yang bersanngkutan*/}
              <NavLink className="linkMenu" to="/tambah">Tambah Buku</NavLink>
            </NavItem>
          </Nav>
          {/* Ubah [isidDenganNama] menjadi nama peserta  */}
          <NavbarText>oleh Agindo</NavbarText>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
