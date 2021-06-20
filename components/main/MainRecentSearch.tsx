import React from 'react';
import styled from 'styled-components';

export function MainRecentSearch({ recentSearch }: any) {
  return (
    <RecentSearchSection>
      <RecentSearchTitle>
        <p>최근 본 종목</p>
        <PaginationButton>
          <PrevButton>
            {'<'}
          </PrevButton>
          <NextButton>
            {'>'}
          </NextButton>
        </PaginationButton>
      </RecentSearchTitle>
      <RecentSearchList>
        {recentSearch.list.map(item => {
          return (
            <RecentSearchItem key={item.ID}>
              <p>{item.name}</p>
              <p>{item.rate}</p>
              <p>KRW {item.price}</p>
            </RecentSearchItem>
          )
        })}
      </RecentSearchList>
    </RecentSearchSection>
  )
};

const RecentSearchSection = styled.section`
  position: relative;
  width: 1280px;
  padding: 0 40px;
`

const RecentSearchTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #050f19;
`

const PaginationButton = styled.div`
  display: flex;
`

const PrevButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 0px;
  background-color: rgba(82, 39, 255, 0.5);
  font-size: 20px;
  margin: 0 20px;
`

const NextButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 0px;
  background-color: rgba(82, 39, 255, 0.5);
  font-size: 20px;
  margin: 0 20px;
`

const RecentSearchList = styled.div`
  width: 100%;
  display: flex;
`

const RecentSearchItem = styled.div`
  width: 184px;
  height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 14px 20px 120px 17px;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 1px 1px 0 0 rgba(146, 92, 29, 0.2), 2px 2px 4px 0 rgba(79, 85, 88, 0.25);
  border: solid 1px #f3f3f3;
  background-color: var(--white);
`