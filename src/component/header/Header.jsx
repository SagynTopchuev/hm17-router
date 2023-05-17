import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  const active = ({ isActive }) => (isActive ? "true" : "false");

  return (
    <>
      <Container>
        <NavLink to="/istore" className={active}>
          <h4>iStore</h4>
        </NavLink>
        <div>
          <NavLink to="/products" className={active}>
            <h4>Products</h4>
          </NavLink>
          <NavLink to="/cart" className={active}>
            <h4>My Cart</h4>
          </NavLink>
          <NavLink to="/orders" className={active}>
            <h4>My Orders</h4>
          </NavLink>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #4483d6;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 60px;
  align-items: center;
  font-size: 25px;
  .false {
    color: #fff;
    text-decoration: none;
  }

  .true {
    color: #000;
    text-decoration: none;
  }
  div {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
`;
