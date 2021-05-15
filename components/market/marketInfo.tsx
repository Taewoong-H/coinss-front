import React from 'react';
import styled from 'styled-components';

import { CandleMinuteType } from '../../api';

interface CandleProps {
  candleMinute: CandleMinuteType;
}

export function MarketInfo({ candleMinute }:CandleProps) {
  return (
    <Container>
      <Header>
        <Title>{candleMinute.market}</Title>
        <Content>{candleMinute.opening_price}</Content>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.h1`
  color: #222222;
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 14px;
  color: #222222;
`;