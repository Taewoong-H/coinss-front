import { MainGreeting } from '../../components/main/MainGreeting';
import { MainFavorites } from '../../components/main/MainFavorites';
import { MainNews } from '../../components/main/MainNews';
import { MainMarket } from '../../components/main/MainMarket';

import { GetStaticProps } from 'next';
import { getMarkets, MarketType } from '../../api';
import styled from 'styled-components';

interface MainProps {
  markets: MarketType[];
}

export default function Main({ markets }: MainProps) {
  return (
    <div>
      <MainGreeting />
      <Section1>
        <MainFavorites />
        <MainNews />
      </Section1>
      <MainMarket markets={markets} />
    </div>
  );
}

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

const Section1 = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
`
