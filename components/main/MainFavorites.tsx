import React from 'react';
import styled from 'styled-components';

export function MainFavorites({}: any) {
  return (
    <FavoriteSection>
      <FavoriteTitle>
        <p>My Favorites</p>
        <p>see all</p>
      </FavoriteTitle>
      <FavoriteTable>
        <FavoriteList>bitcoin</FavoriteList>
        <FavoriteList>bitcoin</FavoriteList>
        <FavoriteList>bitcoin</FavoriteList>
      </FavoriteTable>
    </FavoriteSection>
  )
}

const FavoriteSection = styled.section`
  position: relative;
  width: 670px;
  padding: 10px;
`

const FavoriteTitle = styled.header`
  display: flex;
  justify-content: space-between;
`

const FavoriteTable = styled.div`
  width: 100%;
  height: 360px;
  margin-top: 24px;
  border-radius: 20px;
  box-shadow: 0 12px 24px 0 rgba(56, 39, 246, 0.3);
  border: solid 1px #1c459d;
  background-color: #20097a;
`

const FavoriteList = styled.div`
  width: 100%;
  height: 119px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 49px;
  padding: 0 24px 0 0;
`