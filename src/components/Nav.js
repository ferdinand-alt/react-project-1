import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
      <StyledNav>
        <h1>
          <a id='logo' href="#">Utopus Agency</a>
        </h1>
        <ul>
          <li>
            <a href="#">About Utopus</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </StyledNav>
    );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: coral;
  a {
    color: white;
    text-decoration: none;
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
  }
`;


export default Nav
