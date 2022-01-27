import styled from 'styled-components';

export const Intro = styled.div`

  color: white;
  font-size: 24px;
  padding: 0 2rem;
  margin-bottom: 2rem;
  margin-top: auto;
  line-height: 18px;
  display: none;
  z-index:2;

 
  
`;

export const TagList = styled.div`
  display: none;
  justify-content: space-around;
  padding: 0 2rem;
  margin-bottom: 1rem;
 
  z-index:2;
`;


export const Tag = styled.div`
  
  color: white;
  font-size: 18px;
  margin-bottom: 1rem;
  line-height: 18px;
  display: flex;
  z-index:2;
  padding-right: 1rem;
`;




export const Img = styled.img`
    position: absolute;
    width:100%;
    height: 100%;
    margin: auto;
    padding: auto;
    display: none;
    
    
  border-radius: 30px;
  object-fit: cover;
  overflow: hidden;
`

export const Icon = styled.img`
    position: absolute;
    width: 70%;
    height: 30%px;
    margin: auto;
    
    @media ${(props) => props.theme.breakpoints.sm} {
    width: 40px;
    height: 40px;
    
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  border-radius: 30px;
  position: relative;
  overflow:hidden;
  color: white;
  min-width:60px;
  margin:10px;
  flex: 1;
  cursor: pointer;
  background: ${(props) => props.background}
  -webkit-transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

 
  &:hover {
            
            -webkit-box-flex: 10000;
            flex-grow: 10000;
            -webkit-transform: scale(1);
            transform: scale(1);

            flex-direction: column;
           
            justify-content: flex-start;
            align-items: flex-start;
            margin:0px;
            
           
            background-size:auto 100%;
         
            transition: all 1s cubic-bezier(0.05, 0.61, 0.5, 1);
            

            @for $i from 1 through 4 {
                @media screen and (max-width:798px - $i*80) {
                    min-width:600px - $i*80;
                    .option:nth-child(#{6-$i}) {
                    display:none;
                }
             }
            }
            
            
            ${Img}{
                display: flex;
            }  
            ${Intro}{
                display: flex;
            } 
            ${TagList}{
                display: flex;
            } 

            ${Icon}{
                display: none;
            }
              
        }

          
            /*&:active {
               transform:scale(0.9);
            }*/
         }
    
     
         

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    
  }
`;



