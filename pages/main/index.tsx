import { MainGreeting } from '../../components/main/MainGreeting'
import { MainHeader } from '../../components/main/MainHeader'
import { MainBestSearch } from '../../components/main/MainBestSearch'
import { MainMarket } from '../../components/main/MainMarket';

import { GetStaticProps } from 'next'
import { getMarkets, MarketType } from '../../api';

interface MainProps {
  markets: MarketType[];
}

export default function Main({ markets }:MainProps) {
  return (
    <div>
      <MainHeader />
      <MainGreeting />
      <MainBestSearch />
      <MainMarket markets={markets} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { markets } = await getMarkets();

  if (!markets) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      markets
    }
  };
}