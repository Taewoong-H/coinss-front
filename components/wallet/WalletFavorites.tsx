import React from 'react';
import styled from 'styled-components';

export function WalletFavorites({ favorite }: any) {
  return (
    <>
      <FavoriteCard>
        <p>{favorite.name}</p>
        <p>KRW {favorite.price}</p>
        <p>{favorite.rate}</p>
      </FavoriteCard>
    </>
  )
}

const FavoriteCard = styled.div`
  height: 200px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #20097A;
  p {
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
`