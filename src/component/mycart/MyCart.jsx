import React from "react";
import styled from "styled-components";
import { useBack } from "../customHook/custom";

export const MyCart = () => {
  const { Back } = useBack();
  return (
    <Container>
      <DivStyled></DivStyled>
      <ButtonStyled onClick={() => Back()}>Go Back</ButtonStyled>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;

  text-align: center;
`;
const DivStyled = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #3ac;
  position: relative;
  margin-top: 30px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 40px;
    border-radius: 50%;
    background: #000;
    top: 40px;
    animation: eye 1s ease-in-out infinite;
    &::before {
      content: "";
      width: 20px;
      height: 30px;
      background-color: white;
      position: absolute;
      border-radius: 50%;
    }
  }
  &::before {
    left: 55px;
  }
  &::after {
    right: 55px;
  }
  @keyframes eye {
    90% {
      transform: none;
    }
    95% {
      transform: scaleY(0.1);
    }
  }
`;
const ButtonStyled = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #33ab87;
  color: white;
`;
