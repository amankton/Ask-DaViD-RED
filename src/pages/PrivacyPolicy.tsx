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

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Ask DaViD</title>
        <meta name="description" content="Privacy Policy for Ask DaViD Chrome extension" />
      </Helmet>
      <Container>
        <Title>Privacy Policy for Ask DaViD</Title>
        <LastUpdated>Last Updated: February 14, 2024</LastUpdated>

        <Text>
          At Ask DaViD, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
          and protect your personal information when you use our Chrome extension.
        </Text>

        <Section>
          <SectionTitle>Information We Collect</SectionTitle>
          <Text>When you use Ask DaViD, we may collect:</Text>
          <List>
            <li>YouTube video URLs and timestamps you interact with</li>
            <li>Questions and queries you submit through the extension</li>
            <li>Technical information about your browser and device</li>
            <li>Usage data to improve our service</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>How We Use Your Information</SectionTitle>
          <Text>We use the collected information to:</Text>
          <List>
            <li>Provide and improve the Ask DaViD service</li>
            <li>Process and respond to your queries</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Maintain and optimize extension performance</li>
            <li>Communicate important updates or changes</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Data Storage and Security</SectionTitle>
          <Text>
            We implement appropriate security measures to protect your information. Your data is:
          </Text>
          <List>
            <li>Encrypted during transmission</li>
            <li>Stored securely on protected servers</li>
            <li>Accessible only to authorized personnel</li>
            <li>Retained only as long as necessary</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Third-Party Services</SectionTitle>
          <Text>
            We may use third-party services for:
          </Text>
          <List>
            <li>Analytics to improve our service</li>
            <li>Processing natural language queries</li>
            <li>Infrastructure and hosting</li>
          </List>
          <Text>
            These services may collect and process data according to their own privacy policies.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Your Rights</SectionTitle>
          <Text>You have the right to:</Text>
          <List>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of certain data collection</li>
            <li>Receive a copy of your data</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Cookie Policy</SectionTitle>
          <Text>
            We use cookies and similar technologies to:
          </Text>
          <List>
            <li>Remember your preferences</li>
            <li>Analyze usage patterns</li>
            <li>Improve extension functionality</li>
          </List>
          <Text>
            You can control cookie settings through your browser preferences.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Children's Privacy</SectionTitle>
          <Text>
            Ask DaViD is not intended for use by children under 13. We do not knowingly collect 
            personal information from children under 13. If you believe we have collected information 
            from a child under 13, please contact us immediately.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Changes to This Policy</SectionTitle>
          <Text>
            We may update this Privacy Policy periodically. We will notify you of any material changes 
            through the extension or email. Continued use of Ask DaViD after changes constitutes 
            acceptance of the updated policy.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Text>
            If you have questions about this Privacy Policy or your data, please contact us at:{' '}
            <Link href="mailto:support@nfluency.com">support@nfluency.com</Link>
          </Text>
        </Section>

      </Container>
    </>
  );
};

export default PrivacyPolicy;
