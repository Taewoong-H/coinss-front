import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export function MainGreeting({}: any) {

  return (
    <GreetingSection>
      <GreetingBox>
        <GreetingText>코인관리<br></br>COINSS에서 쉽고 간편하게</GreetingText>
        <Link href="#">
          <JoinButton>JOIN</JoinButton>
        </Link>
        <GreetingImage src="/image/greeting_image.png"></GreetingImage>
      </GreetingBox>
    </GreetingSection>
  )
}

const GreetingSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const GreetingBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 24px 0 72px;
  padding: 0 0 0 100px;
  border-radius: 20px;
  background-color: #f1f5fd;
`

const GreetingText = styled.div`
  height: 96px;
  margin: 92px 155px 12px 0;
  text-shadow: 0 16px 24px rgba(146, 146, 146, 0.2);
  font-family: paybooc-Bold;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #050f19;
`

const JoinButton = styled.a`
  width: 145px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 179px 102px 0;
  padding: 8px 48px;
  border-radius: 30px;
  box-shadow: 0 6px 24px 0 rgba(56, 39, 246, 0.3);
  background-color: #5227ff;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
`

const GreetingImage = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
  width: 776px;
  height: 400px;
  object-fit: contain;
`