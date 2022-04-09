import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Lily Concepcion's Portfolio
        </SectionTitle>
        <SectionText>
        
        </SectionText>
        <Button onClick={props.handleClick}><a style={{color: "white"}} href="https://docs.google.com/document/d/1j1K5teDqYcg_8VapXqOm5Pbt89cu_NN3bTcdZKdLGNc/edit?usp=sharing">Resume</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;