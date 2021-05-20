import fetch from "isomorphic-unfetch";

const API_URL = "https://api.upbit.com/v1/candles";

export interface CandleMinuteType {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  unit: number;
}

export async function getCandleMinute(market: string) {
  const request = await fetch(`${API_URL}/minutes/1?market=${market}&count=1`);
  const response = await request.json();
  const candleMinute = response;

  return {
    candleMinute
  };
}