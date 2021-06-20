import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { MarketType } from '../../api';

// 거래 가능 마켓 목록 리스트
interface MainMarketProps {
  markets: MarketType[];
}

export function MainMarket({ markets }: MainMarketProps) {
  return (
    <div>
      {markets.map((market) => {
        return (
          <MarketWrapper key={market.market}>
            <MarketItem market={market} />
          </MarketWrapper>
        );
      })}
    </div>
  );
}

const MarketWrapper = styled.div`
  margin-bottom: 12px;
  :last-child {
    margin-bottom: 0;
  }
`;

// 거래가능 마켓 item
interface MarketItemProps {
  market: MarketType;
}

export function MarketItem({ market }: MarketItemProps) {
  return (
    <Link href={`/markets/[market]`} as={`/markets/${market.market}`}>
      <Container>
        <p>{market.market}</p>
        <p>{market.korean_name}</p>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 32px;
  cursor: pointer;
`;
