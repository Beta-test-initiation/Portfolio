import React, {useState, useEffect} from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, SectionText,  ListParagraph, ListTitle, SectionTitle } from './TechnologiesStyles';

const Technologies = ({scrollY}) => {
 
  return (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle scrollY={scrollY}>Technologies</SectionTitle>
    <SectionText scrollY={scrollY}>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design. Listed below are a few.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React JS<br/>
            Next JS<br/>
            Redux <br/>
            Socket.io <br/>
            React-DND<br/>

            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node JS <br/>
            Firebase <br/>
            GraphCMS <br/>
            GraphQL <br/>
            Apollo Client <br/>
           
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma<br/>
            Bootstrap <br/>
            Bulma <br/>
            Tailwind CSS <br/>
            Chakra UI <br/>
            Ant-Design <br/>
            Styled Components <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)};

export default Technologies;

// HTML, CSS, Sass -languages dev tools- bootstrap, Bulma, Codepen, Github
//design-figma, Pen and Paper
//front-end, React, Redux
//back-end - Node.js, Databases-MONGODB,MYSQL,GRAPHQL 