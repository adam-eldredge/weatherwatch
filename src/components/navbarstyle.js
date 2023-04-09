import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #9CC7E6;
  height: 85px;
  display: flex;
  justify-content: space-between;
`;
  
export const NavLink = styled(Link)`
  color: #777777;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  position: relative;
  justifyContent: center;
  align-items: center;
  align-text: center;
`;

export const NavBtnContain = styled.div`
  display: flex;
  align-items: right;
  align-text: center;
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  align-text: center;
  justify-content: center;
  margin-right: 10px;
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  width: auto;
  min-width: 6vh;
  align-text: center;
  align-items: center;
  justifyContent: center;
  background: #DDDDDD;
  padding: 10px 20px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #BBBBBB;
    color: #000000;
  }
`;