import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export function WalletCard({coin, content}: any) {
  return (
    <WalletCardContainer>
      <TopContent>
        <MoneyAmount>
          <PieChart><Center></Center></PieChart>
          <MoneyContainer>
            <Money>{coin} BTC</Money>
            <MoneyDesc>{content}</MoneyDesc>
          </MoneyContainer>
        </MoneyAmount>
      </TopContent>
      <Divider></Divider>
      <BottomContent>
        <Link href="#">
          <MoneyAll>
            <MoneyAllText>전체내역 보기</MoneyAllText>
            <RightIcon src="/image/right.png"></RightIcon>
          </MoneyAll>
        </Link>
      </BottomContent>
    </WalletCardContainer>
  )
}

const WalletCardContainer = styled.div`
  width: 48%;
  height: 197px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
`

const TopContent = styled.div`
  height: 148px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
  padding: 24px;
`

const MoneyAmount = styled.div`
  height: 100px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  padding: 0;
`

const PieChart = styled.div`
  position: relative;
  display:inline-block;
  width: 20%;
  height: 100%;
  border-radius: 50%;
  transition: 0.3s;
  background-color: #5227ff;
`

const Center = styled.span`
  background: #fff;
  display: block;
  position: absolute;
  top:50%; left:50%;
  width: 80%; height: 80%;
  border-radius: 50%;
  text-align:center; line-height: 200px;
  transform: translate(-50%, -50%);
`

const MoneyContainer = styled.div`
  width: 152px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 0;
`

const Money = styled.p`
  width: 152px;
  height: 43px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.33;
  color: #5227ff;
`

const MoneyDesc = styled.p`
  width: 150px;
  height: 21px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;
  color: rgba(17, 51, 83, 0.6);
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`

const BottomContent = styled.div`
  height: 48px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 16px;
`

const MoneyAll = styled.div`
  width: 115px;
  height: 24px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0;
`

const MoneyAllText = styled.p`
  height: 24px;
  flex-grow: 0;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: left;
  color: #5664d2;
`

const RightIcon = styled.img`
  width: 16px;
  height: 18px;
  flex-grow: 0;
  object-fit: contain;
`