import React from 'react';
import styled from 'styled-components';
import { MainMarket } from '../../components/main/MainMarket';
import { GetStaticProps } from 'next';
import { getMarkets, MarketType } from '../../api';

interface MainProps {
  markets: MarketType[];
}
function category({ markets }: MainProps) {
  return (
    <Container>
      <MainMarket markets={markets} />
    </Container>
  );
}

export default category;

const Container = styled.div`
  max-width: 1280px;
  padding: 40px 40px;
`;

export const getStaticProps: GetStaticProps = async () => {
  const { markets } = await getMarkets();

  if (!markets) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      markets,
    },
  };
};
