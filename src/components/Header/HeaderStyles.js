import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows:${(props)=> (props.extendNavbar ? 'repeat(4, 60px)' :  'repeat(1, 60px)')};
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;


//the left side in small
export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1/ 1/ 2 / 4;
  
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 1 / 1;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1/ 5 / 1 / 6;
  
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 4/ 1 / 6;
    
   
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
    font-size: 1.5rem;
    display: none;
  }
`;

export const NavLinkExtended = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
    font-size: 1.5rem;
    
  }
`;

/// DropDown Contact button
export const ContactDropDown = styled.button`
  border: none;
  display: none;
  margin-left: 2rem;
  background: none;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    display: none; 
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display:flex;
  }
 
 
  
`;

export const MenuContainer = styled.div`
  grid-area: 2/1/4/6;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  margin-left: 2rem;
`;

// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;

  padding: 8px;
&:hover {
    
    transform: scale(1.3);
    cursor: pointer;
    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
    padding: 5px;
`