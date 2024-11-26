import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import promoVideo from '../assets/Ask DaViD Promo Vid24.mp4';

// Add type declarations for assets
declare module '*.mp4' {
  const src: string;
  export default src;
}

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background: linear-gradient(to bottom, 
    rgb(178, 34, 34) 0%,
    rgba(128, 0, 0, 0.95) 50%,
    rgba(10, 10, 10, 1) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 20px;
  color: white;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    white-space: normal;
    flex-wrap: wrap;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 600px;
  margin: 0 auto 20px;
  color: lightgray;
  text-align: center;
`;

const CTAButton = styled(motion.button)`
  background: #B22222;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(178, 34, 34, 0.2);
  }
`;

const GradientText = styled.span`
  background: linear-gradient(
    to right,
    #B22222 20%,
    #FF4444 30%,
    #B22222 70%,
    #800000 80%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 5s ease infinite;
  
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 20px auto 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  aspect-ratio: 16 / 9;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ask DaViD - Your AI Research Assistant</title>
        <meta name="description" content="Ask DaViD is your AI-powered research assistant that helps you analyze, understand, and extract insights from any webpage." />
      </Helmet>
      <Container>
        <HeroSection>
          <HeroContent>
            <HeroTitle>
              Research Smarter with <GradientText>AskDaViD</GradientText>
            </HeroTitle>
            <HeroSubtitle>
              Your AI-powered research assistant that helps you analyze, understand, and extract insights from any webpage.
            </HeroSubtitle>
            <CTAButton
              as="a"
              href="https://chromewebstore.google.com/detail/ask-david/feimcgoelncfdfggbccpjjckebddnnfg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Chrome
            </CTAButton>
            <VideoContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <StyledVideo
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              >
                <source src={promoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </StyledVideo>
            </VideoContainer>
          </HeroContent>
        </HeroSection>
      </Container>
    </>
  );
};

export default HomePage;
