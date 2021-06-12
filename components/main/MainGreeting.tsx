import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useScroll } from '../hooks/ScrollEvent'

export function MainGreeting({}: any) {
  const { scrollY } = useScroll();
  // console.log(scrollY);

  return (
    <GreetingSection>
      <Stars src="/image/stars.png" animate={scrollY}></Stars>
      <Moon src="/image/moon.png" animate={scrollY}></Moon>
      <MountainsBehind src="/image/mountains_behind.png" animate={scrollY}></MountainsBehind>
      <GreetingText animate={scrollY}>Moon Light</GreetingText>
      <Link href="#best-search-section">
        <GreetingButton animate={scrollY}>Explore</GreetingButton>
      </Link>
      <MountainsFront src="/image/mountains_front.png"></MountainsFront>
    </GreetingSection>
  )
}

const GreetingSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 100;
  }

  img {
    pointer-events: none;
  }

  #mountains_front {
    
  }
`

const Stars = styled.img<{animate: number}>`
  position: absolute;
  top: 0;
  left: ${({animate}) => (animate > 0 ? animate * 0.25 : 0)}px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Moon = styled.img<{animate: number}>`
  position: absolute;
  top: ${({animate}) => (animate > 0 ? animate * 1.05 : 0)}px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: screen;
`

const MountainsBehind = styled.img<{animate: number}>`
  position: absolute;
  top: ${({animate}) => (animate > 0 ? animate * 0.5 : 0)}px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: screen;
`

const GreetingText = styled.h2<{animate: number}>`
  position: absolute;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
  right: -350px;
  margin-right: ${({animate}) => (animate > 0 ? animate * 4 : 0)}px;
  margin-top: ${({animate}) => (animate > 0 ? animate * 1.5 : 0)}px;
`

const GreetingButton = styled.a<{animate: number}>`
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  margin-top: ${({animate}) => (animate > 0 ? animate * 1.5 : 0)}px;
  border-radius: 40px;
  background: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
  cursor: pointer;
`

const MountainsFront = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
`