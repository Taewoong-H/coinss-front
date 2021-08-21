import axios from 'axios';

export interface WalletType {
  avg_buy_price: string;
  avg_buy_price_modified: boolean;
  balance: string;
  currency: string;
  locked: string;
  unit_currency: string;
}

export const getWallet = async (accessToken) => {
  const { data } = await axios.get(global.domain + `/api/v1/coin/wallet`, {
    headers: {
      token: accessToken,
    },
  });
  return data;
};
