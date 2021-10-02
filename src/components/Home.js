import React from 'react';
import styled from 'styled-components';

function Home(cardImg, title, description, rating, regularPrice, specialPrice) {
  return (
    <Container>
      <FeaturedCategory>
        <h2>Featured Category</h2>
        <p>Get Your Desired Product from Featured Category!</p>
        <Row1>
          <ul>
            <li href="/">
              <img src="/images/catagory/laptop.png" alt="" />
              <span>All Laptop</span>
            </li>
            <li href="/">
              <img src="/images/catagory/dextop.png" alt="" />
              <span>Dextop</span>
            </li>
            <li href="/">
              <img src="/images/catagory/processor.png" alt="" />
              <span>Processor</span>
            </li>
            <li href="/">
              <img src="/images/catagory/graphics-card.png" alt="" />
              <span>Graphics Card</span>
            </li>
            <li href="/">
              <img src="/images/catagory/ssd.png" alt="" />
              <span>SSD</span>
            </li>
            <li href="/">
              <img src="/images/catagory/keyboard.png" alt="" />
              <span>Keyboard</span>
            </li>
            <li href="/">
              <img src="/images/catagory/mouse.png" alt="" />
              <span>Mouse</span>
            </li>
            <li href="/">
              <img src="/images/catagory/headphone.png" alt="" />
              <span>Headphone</span>
            </li>
          </ul>
        </Row1>
        <Row2>
          <ul>
            <li href="/">
              <img src="/images/catagory/laptop.png" alt="" />
              <span>All Laptop</span>
            </li>
            <li href="/">
              <img src="/images/catagory/dextop.png" alt="" />
              <span>Dextop</span>
            </li>
            <li href="/">
              <img src="/images/catagory/processor.png" alt="" />
              <span>Processor</span>
            </li>
            <li href="/">
              <img src="/images/catagory/graphics-card.png" alt="" />
              <span>Graphics Card</span>
            </li>
            <li href="/">
              <img src="/images/catagory/ssd.png" alt="" />
              <span>SSD</span>
            </li>
            <li href="/">
              <img src="/images/catagory/keyboard.png" alt="" />
              <span>Keyboard</span>
            </li>
            <li href="/">
              <img src="/images/catagory/mouse.png" alt="" />
              <span>Mouse</span>
            </li>
            <li href="/">
              <img src="/images/catagory/headphone.png" alt="" />
              <span>Headphone</span>
            </li>
          </ul>
        </Row2>
      </FeaturedCategory>
      <FeaturedProducts>
        <h2>Featured Products</h2>
        <p>Check & Get Your Desired Product !</p>
        <CardRow>
          <Card>
            <img src="/images/monitor/asus.png" alt="" />
            <CardDescription>
              <h3>ASUS Monitor</h3>
              <span>
                lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit
                amet
              </span>
              <Rating>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </Rating>
              <Price1>
                Regular Price <span>66,750</span>
              </Price1>
              <Price2>
                Special Price <span>62,500</span>
              </Price2>
              <Buttons>
                <a href="/">Add To Cart</a>
                <a href="/">Compare</a>
                {/* <i class="fas fa-heart"></i> */}
                <i class="far fa-heart"></i>
              </Buttons>
            </CardDescription>
          </Card>
          <Card>
            <img src="/images/monitor/asus.png" alt="" />
            <CardDescription>
              <h3>ASUS Monitor</h3>
              <span>
                lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit
                amet
              </span>
              <Rating>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </Rating>
              <Price1>
                Regular Price <span>66,750</span>
              </Price1>
              <Price2>
                Special Price <span>62,500</span>
              </Price2>
              <Buttons>
                <a href="/">Add To Cart</a>
                <a href="/">Compare</a>
                {/* <i class="fas fa-heart"></i> */}
                <i class="far fa-heart"></i>
              </Buttons>
            </CardDescription>
          </Card>
          <Card>
            <img src="/images/monitor/asus.png" alt="" />
            <CardDescription>
              <h3>ASUS Monitor</h3>
              <span>
                lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit
                amet
              </span>
              <Rating>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </Rating>
              <Price1>
                Regular Price <span>66,750</span>
              </Price1>
              <Price2>
                Special Price <span>62,500</span>
              </Price2>
              <Buttons>
                <a href="/">Add To Cart</a>
                <a href="/">Compare</a>
                {/* <i class="fas fa-heart"></i> */}
                <i class="far fa-heart"></i>
              </Buttons>
            </CardDescription>
          </Card>
          <Card>
            <img src="/images/monitor/asus.png" alt="" />
            <CardDescription>
              <h3>ASUS Monitor</h3>
              <span>
                lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit
                amet
              </span>
              <Rating>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </Rating>
              <Price1>
                Regular Price <span>66,750</span>
              </Price1>
              <Price2>
                Special Price <span>62,500</span>
              </Price2>
              <Buttons>
                <a href="/">Add To Cart</a>
                <a href="/">Compare</a>
                {/* <i class="fas fa-heart"></i> */}
                <i class="far fa-heart"></i>
              </Buttons>
            </CardDescription>
          </Card>
        </CardRow>
      </FeaturedProducts>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  font-family: 'Lato', sans-serif;
  width: 1500px;
  margin: 0 auto;
`;
const FeaturedCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  h2 {
    text-align: center;
    padding: 10px;
  }
  p {
    text-align: center;
    padding: 0 0 20px 0;
  }
`;
const Row1 = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;
      width: 150px;
      height: 130px;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
      }
      img {
        width: 50px;
      }
      span {
        padding-top: 10px;
      }
    }
  }
`;
const Row2 = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;
      width: 150px;
      height: 130px;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
      }
      img {
        width: 50px;
      }
      span {
        padding-top: 10px;
      }
    }
  }
`;
const FeaturedProducts = styled.div`
  margin: 30px 0;
  h2 {
    text-align: center;
    padding: 10px;
  }
  p {
    text-align: center;
    padding: 0 0 20px 0;
  }
`;
const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Card = styled.div`
  background: #fff;
  width: 300px;
  height: 480px;
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
  padding: 10px;
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
    color: #000;
    background: green;
    border-radius: 5px;
    font-weight: bold;
  }
  i {
    color: #e74c3c;
  }
`;
