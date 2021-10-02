import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <FooterTop>
        <Support>
          <h3>Support</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16886.967957955174!2d90.42195354999998!3d23.774597800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c785841dd8e3%3A0xacd13b76f9b563b4!2sHatirjheel%20Park!5e1!3m2!1sen!2sbd!4v1633185632020!5m2!1sen!2sbd"
            title="hatirzheelPark"
            width="370"
            height="180"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Support>
        <AboutUs>
          <h3>About Us</h3>
          <Routes>
            <ul>
              <li>
                <a href="/">EMI Terms</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Career</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Star Point Policy</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Online Delivary</a>
              </li>
              <li>
                <a href="/">Refund and Return Policy</a>
              </li>
              <li>
                <a href="/">Write for Us</a>
              </li>
              <li>
                <a href="/">Brands</a>
              </li>
            </ul>
          </Routes>
        </AboutUs>
        <StayConnented>
          <h3>STAY CONNECTED</h3>
          <h4>Maruf Online Shopping</h4>
          <p>Rampura, Hatirzheel, Dhaka-1219</p>
          <label for="email">Subscribe Now</label>
          <input type="email" placeholder="Enter Your Email" />
          <Social>
            <a href="https://www.facebook.com/abdullahalmaruf21">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/md_marufsarker">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com/channel/UCPH3m-f9gmleXkq33G9CZKQ?sub_confirmation=1">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/abdullah_al_maruf21/">
              <i class="fab fa-instagram"></i>
            </a>
          </Social>
        </StayConnented>
      </FooterTop>
      <FooterBottom>
        <LeftPart>
          © 2021 Maruf Online Shopping Ltd | All rights reserved
        </LeftPart>
        <RightPart>Powered By: Abdullah Al Maruf</RightPart>
      </FooterBottom>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #130f40;
  padding: 50px 0;
`;

const FooterTop = styled.div`
  width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const Support = styled.div`
  h3 {
    padding-bottom: 30px;
  }
  iframe {
    border: 0;
  }
`;

const Routes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
`;
const AboutUs = styled.div`
  h3 {
    padding-left: 60px;
    padding-bottom: 30px;
  }
  ul {
    padding: 10px;
    li {
      list-style: none;
      padding: 10px 20px;

      a {
        color: #fff;
        padding: 10px 20px;
        font-size: 14px;
      }
    }
  }
`;

const StayConnented = styled.div`
  h3 {
    padding-bottom: 30px;
  }
  h4,
  p {
    padding: 10px 0;
  }

  input {
    margin: 10px;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 30px;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  a {
    padding: 10px;
    color: #fff;
    font-size: 25px;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: rotate(360deg);
    }
  }
`;

const FooterBottom = styled(FooterTop)`
  margin-top: 50px;
`;

const LeftPart = styled.div``;

const RightPart = styled.div``;
