import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ProductsZone } from "../constants/constants";
import { useBack } from "../customHook/custom";

export const ProductDetails = () => {
  const { Back } = useBack();

  const params = useParams();
  const findProduct = ProductsZone.find((el) => el.id === params.id);

  return (
    <Container>
      <DivStyled>
        <img src={findProduct.url} alt="img" />
        <div>
          <button onClick={() => Back()}>Go Back</button>
          <h2>{findProduct.title}</h2>
          <h4>
            Price: <span>{findProduct.price}</span>
          </h4>
          <p>{findProduct.info}</p>
        </div>
      </DivStyled>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 82.5vh;
  background-color: #b2b4bec6;
  display: flex;
  margin: 0 auto;
`;
const DivStyled = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: 90%;
  height: 400px;
  background-color: white;

  button {
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: #33ab87;
    color: white;
  }

  p {
    width: 70%;
    font-weight: 700;
  }
  span {
    font-weight: 500;
  }
`;
