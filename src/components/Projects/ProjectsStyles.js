import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
      display:flex;
      flex-direction:row;
      align-items:stretch;
      overflow:hidden;

      min-width:600px;
      max-width:900px;
      width:calc(100% - 100px);
      
      height:400px;
      
    
   
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  min-width: 400px;
  align-items: center;
  justify-content: center;
  width: auto;
 
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const BlogCard = styled.div`
  border-radius: 10px;
  position: relative;
  overflow:hidden;

  min-width:60px;
  margin:10px;
  cursor: pointer;
  transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;



export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  -webkit-animation:${(props)=> props.scrollY >= 500 ? 'bounce-in-top 1.1s both' : ''};
	        animation: ${(props)=>  props.scrollY >= 500 ? 'bounce-in-top 1.1s both' : ''};

  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
    -webkit-animation:${(props)=> props.scrollY >= 700 ? 'bounce-in-top 1.1s both' : ''};
	        animation: ${(props)=>  props.scrollY >= 700 ? 'bounce-in-top 1.1s both' : ''};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
    -webkit-animation:${(props)=> props.scrollY >= 300 ? 'bounce-in-top 1.1s both' : ''};
	        animation: ${(props)=>  props.scrollY >= 300 ? 'bounce-in-top 1.1s both' : ''};
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.4rem;
padding:1rem 1rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
margin-bottom : 1rem;
&:hover{
  background: #801414;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 20px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  -webkit-animation:${(props)=> props.scrollY >= 500 ? 'bounce-in-top 1.1s both' : ''};
	        animation: ${(props)=>  props.scrollY >= 500 ? 'bounce-in-top 1.1s both' : ''};


  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 18px;
    line-height: 32px;
    padding-bottom: 24px;
    -webkit-animation:${(props)=> props.scrollY >= 700 ? 'bounce-in-top 1.1s both' : ''};
	        animation: ${(props)=>  props.scrollY >= 700 ? 'bounce-in-top 1.1s both' : ''};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 16px;
    -webkit-animation:${(props)=> props.scrollY >= 300 ? 'bounce-in-top 1.1s both' : ''};
	        animation: ${(props)=>  props.scrollY >= 300 ? 'bounce-in-top 1.1s both' : ''};
  }
`
