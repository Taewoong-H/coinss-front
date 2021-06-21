import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import {
  getCandleMinute,
  CandleMinuteType,
  getMarkets,
  MarketType,
} from '../../api';
import MarketTitle from '../../components/market/MarketTitle';
import MarketGraph from '../../components/market/MarketGraph';
import MarketStatistics from '../../components/market/MarketStatistics';
import MarketTransaction from '../../components/market/MarketTransaction';

interface CandleProps {
  candleMinute: CandleMinuteType;
}

export default function MarketPage({ candleMinute }: CandleProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <MarketTitle candleMinute={candleMinute[0]} />
      <MarketGraph candleMinute={candleMinute[0]} />
      <BottomSection>
        <MarketStatistics />
        <MarketTransaction />
      </BottomSection>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [
      { params: { market: 'KRW-BTC' } },
      { params: { market: 'KRW-ETH' } },
    ],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { candleMinute } = await getCandleMinute(params.market as string);

  if (!candleMinute) {
    return {
      notFound: true,
    };
  }

  return {
    props: { candleMinute },
    revalidate: 1,
  };
};

const Container = styled.div`
  max-width: 1280px;
  padding: 40px 40px;
`;

const BottomSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;
