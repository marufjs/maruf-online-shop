import React from 'react';
import styled from 'styled-components';
function Search() {
  return (
    <SearchNav>
      <Bg>
        <LeftSide>
          <img src="/logo.png" alt="Search" />
        </LeftSide>
        <Searchbar>
          <input type="text" placeholder="Search" />
          <i class="fas fa-search"></i>
        </Searchbar>
        <RightSide>
          <Account href="#">
            <IconPart>
              <i class="fas fa-user"></i>
            </IconPart>
            <Acc>
              <h3>Account</h3>
              <span>Register or Login</span>
            </Acc>
          </Account>
          <Button href="#">PC Builder</Button>
        </RightSide>
      </Bg>
    </SearchNav>
  );
}

export default Search;

const SearchNav = styled.div`
  background: #0984e3;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
`;
const Bg = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Searchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;
  input {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    width: 50%;
    margin-right: 10px;
    font-size: 18px;
    letter-spacing: 1.5px;
  }
  i {
    background-color: #fff;
    padding: 10px;
    position: absolute;
    right: 190px;
  }
`;
const LeftSide = styled.div`
  img {
    height: 100px;
    width: 300px;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-right: 20px;
`;
const Account = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const IconPart = styled.div`
  color: #fff;
`;
const Acc = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: #fff;
  }
  span {
    color: #fff;
    opacity: 0.8;
  }
`;
const Button = styled.a`
  padding: 10px 20px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;
