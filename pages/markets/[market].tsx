import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { InferGetStaticPropsType } from 'next'

import { getCandleMinute, CandleMinuteType, getMarkets, MarketType } from '../../api'
import { MarketInfo } from '../../components/market/marketInfo'

interface CandleProps {
  candleMinute: CandleMinuteType;
}

export default function MarketPage({ candleMinute }:CandleProps) {
  return (
    <Container>
      <Title>{`${candleMinute.market} 종목`}</Title>
      <Link href="/">
        <BackToHome>홈으로 돌아가기</BackToHome>
      </Link>
      <Divier />
      <MarketInfo candleMinute={candleMinute} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { markets } = await getMarkets();

  const paths = markets.map((market: MarketType) => ({
    params: { market: market.market },
  }));

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { candleMinute } = await getCandleMinute(params.market);

  return {
    props: { candleMinute }
  }
}

const Container = styled.div`
  width: 100%;
  background-color: white;
`;

const Title = styled.main`
  width: 100%;
  padding: 30px 24px;
`;

const BackToHome = styled.a`
color: #2f5fd1;
cursor: pointer;
display: block;
`;

const Divier = styled.div`
height: 1px;
border-bottom: 1px solid #eeeeee;
margin: 24px 0;
`;