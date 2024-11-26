import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const LastUpdated = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const List = styled.ul`
  margin-bottom: 1rem;
  padding-left: 2rem;
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Ask DaViD</title>
        <meta name="description" content="Terms of Service for Ask DaViD Chrome extension" />
      </Helmet>
      <Container>
        <Title>Terms of Service for Ask DaViD</Title>
        <LastUpdated>Last Updated: February 14, 2024</LastUpdated>
        
        <Text>
          Welcome to Ask DaViD! By using the Ask DaViD Chrome extension (the "Service"), you agree to comply with and be bound by these Terms of Service ("Terms"). 
          If you do not agree with these Terms, you may not use the Service.
        </Text>

        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <Text>
            By accessing or using Ask DaViD, you confirm that you have read, understood, and agree to these Terms and our{' '}
            <Link 
              href="https://www.freeprivacypolicy.com/live/2e7bacd9-aeac-4d69-a3ac-b1a773dddbf2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>. You also agree to comply with all applicable laws and regulations when using the Service.
          </Text>
        </Section>

        <Section>
          <SectionTitle>2. Description of Service</SectionTitle>
          <Text>
            Ask DaViD is a Chrome extension designed to enhance user interactions with YouTube videos by providing real-time answers 
            to queries using artificial intelligence and video transcript analysis. The Service may include features like an interactive 
            chatbox, customization options, and hotkey accessibility.
          </Text>
        </Section>

        <Section>
          <SectionTitle>3. User Responsibilities</SectionTitle>
          <Text>By using the Service, you agree to:</Text>
          <List>
            <li>Use the Service for lawful purposes only.</li>
            <li>Provide accurate information when subscribing for an API key.</li>
            <li>Refrain from using the Service to transmit illegal, harmful, or objectionable content.</li>
            <li>Not attempt to reverse-engineer, hack, or disrupt the Service in any way.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. License</SectionTitle>
          <Text>
            We grant you a limited, non-exclusive, non-transferable license to use the Ask DaViD Chrome extension solely for personal 
            or educational purposes. This license is subject to compliance with these Terms and does not allow you to modify, distribute, 
            or resell the Service.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. Subscription and API Key</SectionTitle>
          <Text>To access certain features, you may need to subscribe and obtain an API key. By doing so, you agree to:</Text>
          <List>
            <li>Provide accurate information during registration.</li>
            <li>Keep your API key confidential and secure.</li>
            <li>Notify us immediately if you believe your API key has been compromised.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Privacy and Data Usage</SectionTitle>
          <Text>
            Your use of the Service is governed by our{' '}
            <Link 
              href="https://www.freeprivacypolicy.com/live/2e7bacd9-aeac-4d69-a3ac-b1a773dddbf2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            , which outlines how we collect, store, and use your data. By using Ask DaViD, you consent to our data practices as 
            described in the Privacy Policy.
          </Text>
        </Section>

        <Section>
          <SectionTitle>7. Limitations of Liability</SectionTitle>
          <Text>To the fullest extent permitted by law:</Text>
          <List>
            <li>Ask DaViD is provided "as is" without warranties of any kind, whether express or implied.</li>
            <li>We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service.</li>
            <li>We do not guarantee that the Service will be error-free, secure, or uninterrupted.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Prohibited Activities</SectionTitle>
          <Text>You agree not to:</Text>
          <List>
            <li>Use the Service for any commercial purpose without prior written consent.</li>
            <li>Use the Service to harvest data or conduct unauthorized scraping.</li>
            <li>Circumvent security measures or exploit vulnerabilities in the Service.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Intellectual Property</SectionTitle>
          <Text>
            All content, design, and code related to Ask DaViD are the intellectual property of Ask DaViD or its licensors. 
            You may not use, copy, or reproduce any part of the Service without explicit permission.
          </Text>
        </Section>

        <Section>
          <SectionTitle>10. Termination</SectionTitle>
          <Text>
            We reserve the right to terminate or suspend your access to the Service at any time, without prior notice, if you 
            breach these Terms or engage in unlawful activity.
          </Text>
        </Section>

        <Section>
          <SectionTitle>11. Changes to the Terms</SectionTitle>
          <Text>
            We may update these Terms from time to time. Changes will be effective upon posting. Continued use of the Service 
            after updates constitutes acceptance of the revised Terms.
          </Text>
        </Section>

        <Section>
          <SectionTitle>12. Governing Law</SectionTitle>
          <Text>
            These Terms are governed by and construed in accordance with the laws of California, United States, 
            without regard to conflict of law principles.
          </Text>
        </Section>

        <Section>
          <SectionTitle>13. Contact Information</SectionTitle>
          <Text>
            If you have any questions about these Terms, please contact us at:{' '}
            <Link href="mailto:support@nfluency.com">support@nfluency.com</Link>
          </Text>
        </Section>

        <Section>
          <SectionTitle>14. Entire Agreement</SectionTitle>
          <Text>
            These Terms, along with our Privacy Policy, constitute the entire agreement between you and Ask DaViD regarding 
            the use of the Service and supersede any prior agreements.
          </Text>
        </Section>
      </Container>
    </>
  );
};

export default TermsOfService;
