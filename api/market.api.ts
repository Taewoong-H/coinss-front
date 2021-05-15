import fetch from "isomorphic-unfetch";

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