import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import * as promoVideo from '../assets/Ask DaViD Promos Vid24.mp4';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  padding: 0 20px;
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
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const TextContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2.5rem;
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

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: #B22222;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(178, 34, 34, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(178, 34, 34, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const VideoContainer = styled(motion.div)`
  margin-top: 3rem;
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const FeatureSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
`;

const UseCaseSection = styled(FeatureSection)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const UseCaseCard = styled(FeatureCard)`
  background: rgba(255, 255, 255, 0.08);
`;

const FAQSection = styled(FeatureSection)``;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const FAQQuestion = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FAQAnswer = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 1rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: 4rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ExternalFooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const HomePage: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
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
        <title>Ask DaViD - Your AI Research Assistant</title>
        <meta name="description" content="Ask DaViD is your AI-powered research assistant that helps you analyze, understand, and extract insights from any webpage." />
      </Helmet>
      <Container>
        <OrbsContainer>
          {[
            { size: 300, top: '10%', left: '5%', delay: 0, duration: 15 },
            { size: 200, top: '60%', left: '15%', delay: 2, duration: 18 },
            { size: 400, top: '30%', left: '60%', delay: 4, duration: 20 },
            { size: 250, top: '70%', left: '70%', delay: 6, duration: 22 },
          ].map((orb, index) => (
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
          <HeroContent>
            <TextContainer>
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
                  <source src={promoVideo.default} type="video/mp4" />
                  Your browser does not support the video tag.
                </StyledVideo>
              </VideoContainer>
            </TextContainer>
          </HeroContent>
        </HeroSection>

        <FeatureSection>
          <ContentContainer>
            <SectionTitle>✨ Features</SectionTitle>
            <SectionDescription>
              Discover how Ask DaViD enhances your research experience with these powerful features.
            </SectionDescription>
            <FeatureGrid>
              {[
                {
                  icon: "⚡",
                  title: "Instant Answers",
                  description: "Get immediate responses to your questions about any webpage. Our AI understands the context and provides relevant answers in real-time."
                },
                {
                  icon: "📝",
                  title: "Smart Summaries",
                  description: "Quickly grasp key concepts with AI-generated summaries. Perfect for reviewing complex topics or catching up on missed content."
                },
                {
                  icon: "🔍",
                  title: "Contextual Search",
                  description: "Search within webpages using natural language. Our AI understands the context and helps you find relevant information instantly."
                },
                {
                  icon: "🎯",
                  title: "Precise Insights",
                  description: "Get detailed explanations and insights about specific parts of the content you're reading."
                },
                {
                  icon: "📚",
                  title: "Research Assistant",
                  description: "Your personal AI research companion that helps you understand and analyze complex information."
                },
                {
                  icon: "⚙️",
                  title: "Easy Integration",
                  description: "Seamlessly integrates with your browser, making research and learning more efficient than ever."
                }
              ].map((feature, index) => (
                <FeatureCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </ContentContainer>
        </FeatureSection>

        <UseCaseSection>
          <ContentContainer>
            <SectionTitle>🎯 Use Cases</SectionTitle>
            <SectionDescription>
              Discover how Ask DaViD can enhance your research and learning experience.
            </SectionDescription>
            <FeatureGrid>
              {[
                {
                  icon: "👩‍🎓",
                  title: "Students",
                  description: "Perfect for research papers, understanding complex topics, and getting quick answers to your study questions."
                },
                {
                  icon: "👨‍💼",
                  title: "Professionals",
                  description: "Stay up-to-date with industry trends, analyze reports, and extract key insights from any webpage."
                },
                {
                  icon: "🔬",
                  title: "Researchers",
                  description: "Efficiently process academic papers, gather insights, and connect information across multiple sources."
                }
              ].map((useCase, index) => (
                <UseCaseCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureIcon>{useCase.icon}</FeatureIcon>
                  <FeatureTitle>{useCase.title}</FeatureTitle>
                  <FeatureDescription>{useCase.description}</FeatureDescription>
                </UseCaseCard>
              ))}
            </FeatureGrid>
          </ContentContainer>
        </UseCaseSection>

        <FAQSection>
          <ContentContainer>
            <SectionTitle>❓ FAQ</SectionTitle>
            <SectionDescription>
              Common questions about Ask DaViD
            </SectionDescription>
            <FAQContainer>
              {[
                {
                  question: "What is Ask DaViD?",
                  answer: "Ask DaViD is an AI-powered Chrome extension that helps you analyze and understand web content. It acts as your personal research assistant, providing instant answers, summaries, and insights from any webpage you're reading."
                },
                {
                  question: "How does it work?",
                  answer: "Ask DaViD uses advanced AI to understand the content of webpages you're viewing. Simply highlight text or ask questions, and DaViD will provide relevant answers and insights based on the page content."
                },
                {
                  question: "Is it free to use?",
                  answer: "Yes, Ask DaViD is currently free to use! Install it from the Chrome Web Store and start enhancing your research experience today."
                },
                {
                  question: "What about privacy?",
                  answer: "We take privacy seriously. Ask DaViD only processes the content of the webpage you're actively viewing, and only when you request it. We don't store any personal data or browsing history."
                }
              ].map((faq, index) => (
                <FAQItem
                  key={index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FAQQuestion>
                    {faq.question}
                    {openFAQ === index ? "−" : "+"}
                  </FAQQuestion>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <FAQAnswer
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </FAQAnswer>
                    )}
                  </AnimatePresence>
                </FAQItem>
              ))}
            </FAQContainer>
          </ContentContainer>
        </FAQSection>

        <FooterSection>
          <FooterContent>
            <FooterLinks>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <ExternalFooterLink href="mailto:support@nfluency.com">Contact</ExternalFooterLink>
            </FooterLinks>
            <p>&copy; 2024 Ask DaViD. All rights reserved.</p>
          </FooterContent>
        </FooterSection>

        {showScrollButton && (
          <ScrollToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </ScrollToTopButton>
        )}
      </Container>
    </>
  );
};

export default HomePage;
