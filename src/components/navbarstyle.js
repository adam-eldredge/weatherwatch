import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  font-family: "Medium";
  background: none;
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
`;
  
export const NavLink = styled(Link)`
  color: #aaaaaa;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  &.active {
    color: #FFFFFF;
    border-bottom: 2px;
    border-top-style: solid;
  }
`;

export const NavTitle = styled.div`
 color: #FFFFFF;
 line-height:10px;
 font-size: xx-large;
 position: relative;
 padding-left: 10px;
 justify-content: left;
 text-align: left;
 vertical-align: center;
`
  
export const NavMenu = styled.div`
  display: flex;
  position: relative;
  align-content: center;
  justifyContent: center;
  align-items: center;
  align-text: center;
`;
