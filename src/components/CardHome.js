import React from 'react';
import styled from 'styled-components';
// import Home from './Home';

function CardHome({ cardImg, title, description, regularPrice, specialPrice }) {
  console.log(cardImg);
  return (
    <CardRow>
      <Card>
        <img src={cardImg} alt="" />
        <CardDescription>
          <h3>{title}</h3>
          <span>{description}</span>
          <Rating>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </Rating>
          <Price1>
            Regular Price <span>{regularPrice}</span>
          </Price1>
          <Price2>
            Special Price <span>{specialPrice}</span>
          </Price2>
          <Buttons>
            <a href="/">Add To Cart</a>
            <a href="/">Compare</a>
            <i class="fas fa-heart"></i>
            {/* <i class="far fa-heart"></i> */}
          </Buttons>
        </CardDescription>
      </Card>
    </CardRow>
  );
}

export default CardHome;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Card = styled.div`
  background: #fff;
  width: 330px;
  height: 460px;
  color: #000;
  margin: 0 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 45%;
  }
  h3 {
    text-align: center;
    padding: 10px 0;
    padding: 0 0 15px 0;
  }
  span {
    opacity: 0.8;
    width: 100%;
  }
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  }
`;
const CardDescription = styled.div`
  padding: 0 25px;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  color: #e74c3c;
`;
const Price1 = styled.div`
  span {
    color: #e74c3c;
  }
`;
const Price2 = styled.div`
  span {
    color: #e74c3c;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  a {
    padding: 10px 20px;
    margin: 20px 0;
    cursor: pointer;
    color: #fff;
    background-color: #5352ed;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.4s;
    &:hover {
      background-color: #3742fa;
    }
  }
  i {
    color: #e74c3c;
    &:hover {
    }
  }
`;
