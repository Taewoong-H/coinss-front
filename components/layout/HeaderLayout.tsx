import Head from 'next/head'
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <div>
      <Head>
        <title>COINSS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Link href="/">
          <Logo>COINSS</Logo>
        </Link>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </Container>
    </div>
    
  );
};

const Container = styled.div`
  backgroudn-color: white;
  color: #222222;
`;

const Logo = styled.a`
  color: #222222;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
`;
