import React from 'react';
import styled from 'styled-components';
import CardHome from './CardHome';

function Home({ cardImg, title, description, regularPrice, specialPrice }) {
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
        <CardContainer1>
          <CardHome
            cardImg="./images/dextop/dextop1.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/hdd/hdd1.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/laptop/laptop1.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/monitor/monitor1.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
        </CardContainer1>
        <CardContainer2>
          <CardHome
            cardImg="./images/motherboard/motherboard1.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/ram/ram1.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/ssd/ssd1.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/dextop/dextop2.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
        </CardContainer2>
        <CardContainer3>
          <CardHome
            cardImg="./images/hdd/hdd2.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/laptop/laptop2.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/monitor/monitor2.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/motherboard/motherboard2.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
        </CardContainer3>
        <CardContainer4>
          <CardHome
            cardImg="./images/ram/ram2.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/ssd/ssd2.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/dextop/dextop3.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/hdd/hdd3.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
        </CardContainer4>
        <CardContainer5>
          <CardHome
            cardImg="./images/laptop/laptop3.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/monitor/monitor3.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/motherboard/motherboard3.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/ram/ram3.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
        </CardContainer5>
        <CardContainer6>
          <CardHome
            cardImg="./images/ssd/ssd3.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/dextop/dextop4.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/hdd/hdd4.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
          <CardHome
            cardImg="./images/laptop/laptop4.png"
            title="ASUS Monitor"
            description="lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor sit amet"
            regularPrice="66,750"
            specialPrice="62,500"
          />
        </CardContainer6>
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
const CardContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;
const CardContainer2 = styled(CardContainer1)``;
const CardContainer3 = styled(CardContainer1)``;
const CardContainer4 = styled(CardContainer1)``;
const CardContainer5 = styled(CardContainer1)``;
const CardContainer6 = styled(CardContainer1)``;
