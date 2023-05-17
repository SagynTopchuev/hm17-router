import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductsZone } from "../constants/constants";
import { useBack } from "../customHook/custom";
export const Products = () => {
  const { Back } = useBack();

  return (
    <Container>
      <DivStyled>
        {ProductsZone.map((el) => (
          <StyledLink key={el.id} to={`${el.id}/details`}>
            <img src={el.url} alt="phone" />
            <h4>{el.title}</h4>
            <h4>{el.price}</h4>
            <button>Info</button>
          </StyledLink>
        ))}
      </DivStyled>
      <button onClick={() => Back()} className="goBack">
        Go Back
      </button>
    </Container>
  );
};
const Container = styled.div`
  background: silver;
  height: 82.5vh;
  padding: 0 50px;
  .goBack {
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: #33ab87;
    color: white;
    margin-top: 20px;
  }
`;
const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  width: 240px;
  height: 320px;
  padding: 15px;
  border-radius: 30px;
  margin-top: 30px;
  box-shadow: 1px 1px 3px 3px red;
  /* text-align: center; */
  h4 {
    margin: 0;
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 30px;
  }
  button {
    width: 80px;
    height: 30px;
    transform: translateX(160px);
    border: 2px solid green;
    background-color: #fff;
    color: green;

    border-radius: 10px;
    &:hover {
      background-color: #acff2f4a;
    }
    &:active {
      background: green;
      color: black;
    }
  }
`;
