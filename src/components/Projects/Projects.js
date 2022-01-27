import React, {useState} from 'react';
import BlogCard from '../BlogCard/BlogCard'
import {CardInfo, GridContainer,SectionTitle, SectionText} from './ProjectsStyles';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = ({scrollY}) =>{ 
  const projectsArray = {...projects}

  

  return(
  <Section  id="projects">
    <SectionDivider />
    <SectionTitle main scrollY={scrollY}>Projects</SectionTitle>
    <SectionText scrollY={scrollY}>Some of my recent projects. Click to navigate to the git repository.</SectionText>
    <GridContainer>
      <BlogCard data={projectsArray[0]}/>
      <BlogCard data={projectsArray[1]}/>
      <BlogCard data={projectsArray[2]}/>
      <BlogCard data={projectsArray[3]}/>
      <BlogCard data={projectsArray[4]}/>

    </GridContainer>
  </Section>
)};

export default Projects;