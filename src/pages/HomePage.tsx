import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import promoVideo from '../assets/Ask DaViD Promo Vid24.mp4';
import davidPromo from '../assets/Ask DaViD Promo Trans.png';

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const OrbsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
`;

const Orb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  background: radial-gradient(circle at center, rgba(178, 34, 34, 0.4), rgba(178, 34, 34, 0));
  pointer-events: none;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;
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
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
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
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    white-space: normal;
    flex-wrap: wrap;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
`;

const CTAButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
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
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  aspect-ratio: 16 / 9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 90%;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const FeatureSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.3;
`;

const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  line-height: 1.6;
`;

const SectionText = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.6;
  text-align: center;
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const ContentBlock = styled(motion.div)<{ left?: boolean }>`
  display: flex;
  flex-direction: ${({ left }) => (left ? 'row-reverse' : 'row')};
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FeatureBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    transition: color 0.3s ease;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(178, 34, 34, 0.05);
    box-shadow: 
      0 4px 20px rgba(178, 34, 34, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;

    h3 {
      color: ${({ theme }) => theme.colors.white};
    }

    p {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  &:active {
    transform: translateY(-1px);
    transition: all 0.1s ease;
  }
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: color 0.3s ease;
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 1.1rem;
  transition: color 0.3s ease;
`;

const FAQSection = styled(FeatureSection)`
  background: rgba(178, 34, 34, 0.03);
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const FAQQuestion = styled.button<{ isOpen: boolean }>`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.lg};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 24px;
    height: 24px;
    transform: rotate(\${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <FAQItem>
      <FAQQuestion 
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {question}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </FAQQuestion>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FAQAnswer>
          {answer}
        </FAQAnswer>
      </motion.div>
    </FAQItem>
  );
};

const PrivacySection = styled(FeatureSection)`
  background: rgba(178, 34, 34, 0.05);
`;

const PrivacyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const PrivacyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.xl} 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    line-height: 1.6;

    &:before {
      content: "🔒";
      margin-right: ${({ theme }) => theme.spacing.md};
      flex-shrink: 0;
    }
  }
`;

const PrivacyLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.lg};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.7;
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(178, 34, 34, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: #B22222;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HomePage = () => {
  const orbs = [
    { size: 300, top: '10%', left: '5%', delay: 0, duration: 15 },
    { size: 200, top: '60%', left: '15%', delay: 2, duration: 18 },
    { size: 400, top: '30%', left: '60%', delay: 4, duration: 20 },
    { size: 250, top: '70%', left: '70%', delay: 6, duration: 22 },
    { size: 350, top: '40%', left: '30%', delay: 8, duration: 25 },
  ];

  const [showScrollButton, setShowScrollButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Helmet>
        <title>Ask DaViD - Your AI-Powered YouTube Learning Assistant</title>
        <meta name="description" content="Transform your YouTube learning experience with Ask DaViD. Get instant answers and insights without pausing your videos." />
      </Helmet>
      <Container>
        <OrbsContainer>
          {orbs.map((orb, index) => (
            <Orb
              key={index}
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
              }}
              animate={{
                x: [0, 30, -30, 0],
                y: [0, -30, 30, 0],
              }}
              transition={{
                duration: orb.duration,
                delay: orb.delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </OrbsContainer>
        <HeroSection>
          <ContentContainer>
            <HeroContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
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
              </motion.div>
            </HeroContent>
          </ContentContainer>
        </HeroSection>

        <FeatureSection>
          <ContentContainer>
            <SectionTitle>✨ Features</SectionTitle>
            <SectionDescription>
              Discover how ASK DaViD enhances your YouTube learning experience with these powerful features.
            </SectionDescription>
            <FeatureGrid>
              {[
                {
                  title: "⚡ Instant Answers",
                  description: "Get immediate responses to your questions without pausing the video. Our AI understands the context and provides relevant answers in real-time.",
                  animation: { x: -50, delay: 0 }
                },
                {
                  title: "📝 Smart Summaries",
                  description: "Quickly grasp key concepts with AI-generated summaries. Perfect for reviewing complex topics or catching up on missed content.",
                  animation: { x: 50, delay: 0.1 }
                },
                {
                  title: "🕒 Time Stamps",
                  description: "Jump to specific moments in videos with AI-powered timestamp navigation. Find exactly what you're looking for without manual searching.",
                  animation: { x: -50, delay: 0.2 }
                },
                {
                  title: "🔍 Contextual Search",
                  description: "Search within videos using natural language. Our AI understands the context and helps you find relevant information instantly.",
                  animation: { x: 50, delay: 0.3 }
                },
                {
                  title: "📚 Citation Support",
                  description: "Generate accurate citations with timestamps for academic references. Perfect for research and educational purposes.",
                  animation: { x: -50, delay: 0.4 }
                },
                {
                  title: "⚙️ Customizable Experience",
                  description: "Tailor the extension to your needs with customizable settings. Adjust the AI's response style, format, and more.",
                  animation: { x: 50, delay: 0.5 }
                }
              ].map((feature, index) => (
                <FeatureBox
                  key={index}
                  initial={{ opacity: 0, x: feature.animation.x }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: feature.animation.delay,
                    ease: "easeOut"
                  }}
                >
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureText>{feature.description}</FeatureText>
                </FeatureBox>
              ))}
            </FeatureGrid>
          </ContentContainer>
        </FeatureSection>

        <FeatureSection>
          <ContentContainer>
            <SectionTitle>💡 Use Cases</SectionTitle>
            <SectionDescription>
              Discover how ASK DaVID can enhance your YouTube experience across different scenarios.
            </SectionDescription>
            <FeatureGrid>
              {[
                {
                  title: "📚 Study Aid for Students",
                  description: "Struggling to understand a complex concept in a lecture video? ASK DaViD lets you ask questions and get clarifications without pausing or searching elsewhere."
                },
                {
                  title: "💼 Webinar Companion",
                  description: "Use ASK DaViD during professional webinars to quickly ask questions about key points, ensuring you retain the most crucial information."
                },
                {
                  title: "🎯 Learning New Skills",
                  description: "Watching a tutorial? ASK DaViD helps you interact with the content, get deeper insights, and avoid missing critical details."
                },
                {
                  title: "📋 Content Summarization",
                  description: "Summarize lengthy educational content directly within the video, making it easier to take notes and retain information."
                }
              ].map((useCase, index) => (
                <FeatureBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureTitle>{useCase.title}</FeatureTitle>
                  <FeatureText>{useCase.description}</FeatureText>
                </FeatureBox>
              ))}
            </FeatureGrid>
          </ContentContainer>
        </FeatureSection>

        <FAQSection>
          <ContentContainer>
            <SectionTitle>❓ Frequently Asked Questions</SectionTitle>
            <SectionDescription>
              Got questions? We've got answers. Here are some common questions about ASK DaViD.
            </SectionDescription>
            <FAQContainer>
              <FAQ 
                question="Why isn't ASK DaViD showing up on YouTube?"
                answer="First, ensure the extension is properly installed and enabled in Chrome. Try refreshing the YouTube page or restarting your browser. If the issue persists, check if you've granted the necessary permissions in Chrome's extension settings."
              />
              <FAQ 
                question="How do I fix issues with the API key?"
                answer="Make sure your API key is entered correctly without any extra spaces. If it's not working, try generating a new one and re-entering it. Also, ensure you have an active internet connection while validating the API key."
              />
              <FAQ 
                question="Is my data secure?"
                answer="Yes! We take your privacy seriously. Your API key and personal information are securely stored using Chrome's built-in security features. We never share your data with third parties, and all communications are encrypted."
              />
              <FAQ 
                question="How do I use ASK DaViD?"
                answer="Simply click the ASK DaViD button next to the create icon while watching any YouTube video. Type your question in the chat window, and get instant answers without pausing the video. You can also use the shortcut Ctrl + Shift + H to quickly open or close the chat window."
              />
              <FAQ 
                question="What types of questions can I ask?"
                answer="You can ask any question related to the video content! Whether you need clarification on a concept, want to dive deeper into a topic, or need a quick summary of what was just discussed, ASK DaViD is here to help."
              />
            </FAQContainer>
          </ContentContainer>
        </FAQSection>

        <PrivacySection>
          <ContentContainer>
            <SectionTitle>🔒 Privacy & Security</SectionTitle>
            <SectionDescription>
              Your privacy and data security are our top priorities. Here's how we protect your information.
            </SectionDescription>
            <PrivacyContent>
              <PrivacyList>
                <li>Your API key and personal information are securely stored using Chrome's built-in security features.</li>
                <li>We collect only essential data needed for the extension to function, such as your API key and video interaction preferences.</li>
                <li>Your data is never shared with third parties and is used solely for providing ASK DaVID's services.</li>
                <li>All communications between the extension and our servers are encrypted and secure.</li>
                <li>You have full control over your data and can delete it at any time through the extension settings.</li>
              </PrivacyList>
              <PrivacyLink 
                href="https://www.freeprivacypolicy.com/live/2e7bacd9-aeac-4d69-a3ac-b1a773dddbf2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read our full Privacy Policy
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </PrivacyLink>
            </PrivacyContent>
          </ContentContainer>
        </PrivacySection>

        <Footer>
          <ContentContainer>
            <Copyright> {new Date().getFullYear()} ASK DaViD. All rights reserved.</Copyright>
          </ContentContainer>
        </Footer>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: showScrollButton ? 1 : 0 }}>
          <ScrollToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑
          </ScrollToTopButton>
        </motion.div>
      </Container>
    </>
  );
};

export default HomePage;
