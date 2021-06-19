import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <FollowLabel>Follow us on social media</FollowLabel>
      <SNSIcon>
        <img src='/image/telegram-white.png' alt='icons' />
        <img src='/image/twitter-white.png' alt='icons' />
        <img src='/image/medium-white.png' alt='icons' />
      </SNSIcon>
      <CopyrightLabel>
        COINSS © Copyright 2021, COINSS. All rights reserved.
      </CopyrightLabel>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1280px;
  height: 188px;
  background-color: #160752;
`;

const FollowLabel = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.48px;
  color: white;
`;

const SNSIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 48px;
  margin: 16px 0px 32px 0px;
`;

const CopyrightLabel = styled.label`
  font-family: Roboto;
  font-size: 13px;
  letter-spacing: 0.39px;
  color: white;
`;
