import React from 'react';
import styled from 'styled-components';

export function MainFavorites({ favorite }: any) {
  return (
    <FavoriteSection>
      <FavoriteTitle>
        <p>My Favorites</p>
        <p>see all</p>
      </FavoriteTitle>
      <FavoriteTable>
        {favorite.list.map(item => {
          return (
            <FavoriteList>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.rate}</p>
            </FavoriteList>
          )
        })}
      </FavoriteTable>
    </FavoriteSection>
  )
}

const FavoriteSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0 40px;
`

const FavoriteTitle = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #050f19;
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
  justify-content: space-around;
  align-items: center;
  gap: 49px;
  padding: 0 24px 0 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  color: #ffffff;
`