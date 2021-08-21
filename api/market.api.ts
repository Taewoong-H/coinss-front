import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const API_URL = 'https://api.upbit.com/v1/market/all?isDetails=false';

export interface MarketType {
  market: string;
  korean_name: string;
  english_name: string;
}

export async function getMarkets() {
  const request = await fetch(`${API_URL}`);
  const response = await request.json();
  const markets = response;

  return {
    markets,
  };
}

export interface FavoriteType {
  market: string;
  korean_name: string;
  english_name: string;
  price: number;
  description: string;
  high_price: number;
  low_price: number;
  change_rate: number;
  change: string;
}

export const getFavorites = async (accessToken) => {
  const { data } = await axios.get(global.domain + `/api/v1/coin/favorites`, {
    headers: {
      token: accessToken,
    },
  });
  return data;
};
