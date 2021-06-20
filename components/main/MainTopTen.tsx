import React from 'react';
import styled from 'styled-components';

export function MainTopTen({ topTen }: any) {
  return (
    <TopTenSection>
      <TopTenTitle>{topTen.title} TOP 10</TopTenTitle>
      {topTen.list.map(item => {
        return (
          <TopTenList key={item.ID}>
            <p>{item.ID}</p>
            <p>
              {item.name}<br></br>
              30%
            </p>
            <p>KRW {item.price}</p>
          </TopTenList>
        );
      })}
      <NextList>다음</NextList>
    </TopTenSection>
  )
};

const TopTenSection = styled.section`
  position: relative;
  width: 330px;
`
const TopTenTitle = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #050f19;
`

const TopTenList = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  color: #050f19;
`

const NextList = styled.div`
  padding: 10px 50px;
  border-radius: 8px;
  background-color: #f1f5fd;
  text-align: center;
  font-family: NotoSansCJKKR;
  font-size: 16px;
`