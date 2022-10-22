import Link from 'next/link';
import React, {useState} from 'react';
import github from '../../../public/images/github.png';
import linkedin from '../../../public/images/linkedin.png';
import codepen from '../../../public/images/codepen.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import Image from 'next/image';

import {  Container,MenuContainer, ContactDropDown, NavLinkExtended, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>{ 
  const[expanded, setExpanded] = useState(false);

  return (
  <Container extendNavbar={expanded}>
    <Div2>
      <li>
         <ContactDropDown 
          onClick = {() => 
            setExpanded((curr)=> !curr)}
          >
            {expanded ? <AiOutlineClose/>: <AiOutlineMenu/>}
          </ContactDropDown>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    
    </Div2>
    {expanded &&(
      <MenuContainer>
        <li>
        <Link href="#projects">
          <NavLinkExtended>Projects</NavLinkExtended>
        </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLinkExtended>Technologies</NavLinkExtended>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLinkExtended>About</NavLinkExtended>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLinkExtended>Contact</NavLinkExtended>
          </Link>
        </li>
      </MenuContainer>
    )}
    <Div3>
      <SocialIcons href="https://github.com/Beta-test-initiation">
        <Image src={github} styles={{innerHeight:'12px' , innerWidth: '12px'}} alt="github" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tanya-75a03a254/">
        <Image src={linkedin} styles={{innerHeight:'12px' , innerWidth: '12px'}} alt="github" />
      </SocialIcons>
      <SocialIcons href="https://codepen.io/beta-test-initiation">
        <Image src={codepen} styles={{innerHeight:'12px' , innerWidth: '12px'}} alt="github" />
      </SocialIcons>
    </Div3>
  </Container>

)};

export default Header;
