import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
      <StyledNav>
        <h1>
          <Link id="logo" to="/">
            Utopus Agency
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">About Utopus</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </StyledNav>
    );
}

const StyledNav = styled.nav`
  position: sticky;
  top:0;
  z-index: 10;
  min-height: 10vh;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: coral;
  a {
    color: white;
    text-decoration: none;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
  ul {
    display: flex;
  }
  li {
    list-style-type: none;
    padding-left: 5rem;
    position: relative;
  }
  #logo {
    font-size: 1.9rem;
    font-family: "Monoton", cursive;
    font-weight: lighter;
    letter-spacing: 2px;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;


export default Nav
