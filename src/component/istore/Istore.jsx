import React from "react";
import styled from "styled-components";
import { useBack } from "../customHook/custom";

export const Istore = () => {
  const { Back } = useBack();
  return (
    <Container>
      Продаются 👶🏿 👶 👶🏻 👶🏼 👶🏽 👶🏾 <button onClick={Back}>Go Back</button>
    </Container>
  );
};
const Container = styled.div`
  width: 30%;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  font-size: 70px;
  button {
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: #33ab87;
    color: white;
    margin-top: 20px;
  }
`;
