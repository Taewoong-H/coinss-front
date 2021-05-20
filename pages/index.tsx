import React from 'react'
import Main from './main/index'
import { GetStaticProps } from 'next'

import { getMarkets, MarketType } from '../api';

interface HomeProps {
  markets: MarketType[];
}

export default function Home({ markets }:HomeProps) {
  return (
    <>
      <Main markets={markets}/>
    </>
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
