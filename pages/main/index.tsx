import { MainGreeting } from '../../components/main/MainGreeting';
import { MainFavorites } from '../../components/main/MainFavorites';
import { MainNews } from '../../components/main/MainNews';
import { MainTopTen } from '../../components/main/MainTopTen';
import { MainPopular } from '../../components/main/MainPopular';
import { MainRecentSearch } from '../../components/main/MainRecentSearch';

import { GetStaticProps } from 'next';
import { getMarkets, MarketType } from '../../api';
import styled from 'styled-components';

interface MainProps {
  markets: MarketType[];
}

export default function Main({ markets }: MainProps) {
  const favorite = {
    'list': [{
      ID: 1,
      name: 'Bitcoin',
      price: 1234567,
      rate: '10.83%',
    },
    {
      ID: 2,
      name: 'Bitcoin',
      price: 1234567,
      rate: '10.83%',
    },
    {
      ID: 3,
      name: 'Bitcoin',
      price: 1234567,
      rate: '10.83%',
    }]
  }
  const highestTopTen = {
    'title': '상한가',
    'list': [{
      ID: 1,
      name: 'Bitcoin',
      price: 1234567
    },
    {
      ID: 2,
      name: 'Etherium',
      price: 1234567
    },
    {
      ID: 3,
      name: 'Etherium2',
      price: 1234567
    },
    {
      ID: 4,
      name: 'Etherium2',
      price: 1234567
    },
    {
      ID: 5,
      name: 'Etherium2',
      price: 1234567
    }]
  };

  const lowestTopTen = {
    'title': '하한가',
    'list': [{
      ID: 1,
      name: 'Bitcoin',
      price: 1234567
    },
    {
      ID: 2,
      name: 'Etherium',
      price: 1234567
    },
    {
      ID: 3,
      name: 'Etherium2',
      price: 1234567
    },
    {
      ID: 4,
      name: 'Etherium2',
      price: 1234567
    },
    {
      ID: 5,
      name: 'Etherium2',
      price: 1234567
    }]
  };

  const recentSearch = {
    'title': '최근 본 종목',
    'list': [{
      ID: 1,
      name: 'Bitcoin',
      price: 1234567,
      rate: '33.3%'
    },
    {
      ID: 2,
      name: 'Etherium',
      price: 1234567,
      rate: '33.3%'
    },
    {
      ID: 3,
      name: 'Etherium2',
      price: 1234567,
      rate: '33.3%'
    },
    {
      ID: 4,
      name: 'Etherium2',
      price: 1234567,
      rate: '33.3%'
    },
    {
      ID: 5,
      name: 'Etherium2',
      price: 1234567,
      rate: '33.3%'
    },
    {
      ID: 6,
      name: 'Etherium2',
      price: 1234567,
      rate: '33.3%'
    }]
  };

  return (
    <MainSection>
      <MainGreeting />
      <Section1>
        <MainFavorites favorite={favorite} />
        <MainNews />
      </Section1>
      <Section2>
        <MainTopTen topTen={highestTopTen} />
        <MainTopTen topTen={lowestTopTen} />
        <MainPopular />
      </Section2>
      <MainRecentSearch recentSearch={recentSearch} />
    </MainSection>
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

const MainSection = styled.div`
  width: 1280px;
  margin-left: 10px;
`

const Section1 = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Section2 = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`
