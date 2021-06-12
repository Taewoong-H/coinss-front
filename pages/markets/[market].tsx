import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { getCandleMinute, CandleMinuteType, getMarkets, MarketType } from '../../api'
import { MarketInfo } from '../../components/market/marketInfo'

interface CandleProps {
  candleMinute: CandleMinuteType;
}

export default function MarketPage({ candleMinute }:CandleProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Title>{candleMinute[0].market} 종목</Title>
      <Link href="/">
        <BackToHome>홈으로 돌아가기</BackToHome>
      </Link>
      <Divier />
      <MarketInfo candleMinute={candleMinute[0]} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { market: 'KRW-BTC' } }, { params: { market: 'KRW-ETH' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { candleMinute } = await getCandleMinute(params.market as string);

  if (!candleMinute) {
    return {
      notFound: true,
    }
  }

  return {
    props: { candleMinute },
    revalidate: 1
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