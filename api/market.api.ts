import fetch from "isomorphic-unfetch";
import axios from 'axios';

const API_URL = "https://api.upbit.com/v1/market/all?isDetails=false";

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
    markets
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
  const { data } = await axios.get(`/api/v1/coin/favorites`, 
  { headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    'Access-Control-Max-Age': 86400,
    'Content-Type': 'application/json;charset=utf-8',
    'token': accessToken
    }
  })
  return data;
};