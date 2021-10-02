import React from 'react';
import styled from 'styled-components';

function Dextop() {
  return (
    <Container>
      <Filtering></Filtering>
      <Products>
        <Heading>
          <Title>
            <h3>Dextop</h3>
          </Title>
          <ShowSort>
            <Show>
              <span>Show: </span>
              <select>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
              </select>
            </Show>
            <Sort>
              <span>Sort By: </span>
              <select>
                <option>Default</option>
                <option>Price(Low {'>'} High)</option>
                <option>Price(Hign {'>'} Low)</option>
              </select>
            </Sort>
          </ShowSort>
        </Heading>
      </Products>
    </Container>
  );
}

export default Dextop;

const Container = styled.main`
  font-family: 'Lato', sans-serif;
  width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
const Filtering = styled.div``;
const Products = styled.div``;
const Heading = styled.div``;
const Title = styled.div``;
const ShowSort = styled.div``;
const Show = styled.div``;
const Sort = styled.div``;
