import React from 'react';
import styled from 'styled-components';

import { CandleMinuteType } from '../../api';

interface CandleProps {
  candleMinute: CandleMinuteType;
}

function MarketTitle({ candleMinute }: CandleProps) {
  return (
    <Container>
      <TitleLogo src='/image/bitcoin.png' alt='logo'></TitleLogo>
      <TitleName>{candleMinute.market}</TitleName>
      <Unit></Unit>
    </Container>
  );
}

export default MarketTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 1200px;
`;

const TitleLogo = styled.img``;

const TitleName = styled.div`
  flex-grow: 0;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: #050f19;
  margin: 0 10px;
`;

const Unit = styled.div`
  flex-grow: 0;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  color: rgba(5, 15, 25, 0.6);
`;
