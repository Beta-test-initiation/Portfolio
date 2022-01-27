import React, {useState} from 'react';
import Image from 'next/image'
import attachment from '../../../public/images/attachment.png';
import { LeftSection , Img, Button,  SectionTitle, Section, SectionSubText, Intro} from './HeroStyles';



const Hero = (props) => {
  
  const [clicked, setClicked] = useState(false)

  const copyToClip = async()=> {
    setClicked(true)
    await navigator.clipboard.writeText('tanyabansal2203@gmail.com')
  }
  return (
    <Section row >
    <LeftSection>
      <Intro>
        Hi! I am Tanya. I am a 
      </Intro>
      <SectionTitle main center>
        Frontend Developer
      </SectionTitle>
      <SectionSubText>I am looking for Freelancing Opportunities</SectionSubText>
      <Button onClick={copyToClip}>
        {clicked ? <Img> <Image src={attachment} alt="clip"/> </Img> : ''} 
        {clicked ? 'Email Copied!'  :  'Hire Me!'}
      </Button>
    </LeftSection>

  </Section>
  )
  
  };

export default Hero;