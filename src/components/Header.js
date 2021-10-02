import React from 'react';
import styled from 'styled-components';
import SearchNav from './Search';

function Header() {
  return (
    <Nav>
      <SearchNav />
      <Navbar>
        <ul>
          <li>
            <a href="/">Dextop</a>
          </li>
          <li>
            <a href="/">Laptop</a>
          </li>
          <li>
            <a href="/">Component</a>
          </li>
          <li>
            <a href="/">Monitor</a>
          </li>
          <li>
            <a href="/">Camera</a>
          </li>
          <li>
            <a href="/">Security</a>
          </li>
          <li>
            <a href="/">Networking</a>
          </li>
          <li>
            <a href="/">Accessories</a>
          </li>
          <li>
            <a href="/">Software</a>
          </li>
          <li>
            <a href="/">Gadget</a>
          </li>
          <li>
            <a href="/">Gaming</a>
          </li>
        </ul>
      </Navbar>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  height: 170px;
  font-family: 'Lato', sans-serif;
`;
const Navbar = styled.div`
  border-top: 2px solid #5628b4;
  padding-top: 12px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    list-style: none;
    padding: 50 0px;
    li {
      margin: 0 10px;
      border-radius: 10px;
      background-color: #ecf0f1;
      transition: all 0.4s;
      padding: 10px 20px;
      &:hover {
        color: #fff;
        transform: scale(1.1);
        background-color: #5628b4;
      }
      a {
        cursor: pointer;
        color: #000;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
