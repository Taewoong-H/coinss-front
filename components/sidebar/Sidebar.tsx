import React, { useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

function Sidebar() {
  const router = useRouter();

  return (
    <Container>
      <Link href='/'>
        <Logo src='/image/13-1-1.png' alt='logo' />
      </Link>
      <Categories>
        <Content isActive={router.pathname === '/main'}>
          <GoTo href='/main' isActive={router.pathname === '/main'}>
            HOME
          </GoTo>
        </Content>
        <Content isActive={router.pathname === '/wallet'}>
          <GoTo href='/wallet' isActive={router.pathname === '/wallet'}>
            WALLET
          </GoTo>
        </Content>
        <Content isActive={router.pathname === '/category'}>
          <GoTo href='/category' isActive={router.pathname === '/category'}>
            CATEGORY
          </GoTo>
        </Content>
        <Content isActive={router.pathname === '/about'}>
          <GoTo href='/about' isActive={router.pathname === '/about'}>
            ABOUT
          </GoTo>
        </Content>
      </Categories>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  min-height: 1080px;
`;

const Logo = styled.img`
  width: 77px;
  height: 104px;
  margin: 45px 0 27px 0;
  border: none;
  outline: none;
`;

const Categories = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const Content = styled.li<{ isActive: boolean | string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  height: 40px;
  width: 160px;

  ${(props) =>
    props.isActive &&
    css`
      background-color: #5227ff;
      border-top-right-radius: 10px 10px;
      border-bottom-right-radius: 10px 10px;
    `}
`;

const GoTo = styled.a<{ isActive: boolean | string }>`
  text-decoration: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  color: #050f19;

  ${(props) =>
    props.isActive &&
    css`
      color: #ffffff;
    `}
`;
