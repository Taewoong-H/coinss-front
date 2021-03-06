import { WalletCard } from '../../components/wallet/WalletCard';
import { WalletGraph } from '../../components/wallet/WalletGraph';
import { WalletFavorites } from '../../components/wallet/WalletFavorites';

import { GetServerSideProps } from 'next';
import { getWallet, WalletType } from '../../api';

import styled from 'styled-components';

interface WalletProps {
  walletData: WalletType[];
}

export default function Wallet({ walletData }: WalletProps) {
  console.log(walletData);
  const favorite = {
    list: [
      {
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
      },
    ],
  };
  return (
    <WalletContainer>
      <WalletTitle>내 지갑</WalletTitle>
      <WalletTotalSection>
        <WalletCard coin="0.299" content="Your crypto wallet" />
        <WalletCard coin="0.339" content="Your savings wallet" />
      </WalletTotalSection>
      <br></br>
      <br></br>
      <WalletTitle>내 수익률</WalletTitle>
      <WalletGraph />
      <br></br>
      <br></br>
      <WalletTitle>My Favorite</WalletTitle>
      <WalletFavoriteSection>
        {favorite.list.map((item) => {
          return <WalletFavorites favorite={item} key={item.ID} />;
        })}
      </WalletFavoriteSection>
    </WalletContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let walletData = '';
  const cookieString = context.req ? context.req.headers.cookie : '';

  if (cookieString) {
    const splitCookie = cookieString.split(';');
    const splitAccessToken = splitCookie[0].split('=')[1];

    const response = await getWallet(splitAccessToken);
    walletData = response;
  }

  // if (!walletData) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      walletData,
    },
  };
};

const WalletContainer = styled.div`
  position: relative;
  width: 1278px;
  height: 1649px;
  margin-left: 10px;
  padding: 40px 58px 120px 40px;
  background-color: #f1f5fd;
`;

const WalletTitle = styled.div`
  font-family: NotoSansCJKKR;
  font-size: 18px;
  font-weight: bold;
`;

const WalletTotalSection = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const WalletFavoriteSection = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
