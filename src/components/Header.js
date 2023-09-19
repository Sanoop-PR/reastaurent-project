import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://www.pngall.com/wp-content/uploads/8/Restaurant-PNG-Free-Image.png"
          width=""
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Yummy Delights
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header