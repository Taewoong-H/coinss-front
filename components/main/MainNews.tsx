import React from 'react';
import styled from 'styled-components';

export function MainNews({}: any) {
  return (
    <NewsSection>
      <NewsTitle>
        <PaginationBar></PaginationBar>
        <PaginationButton>
          <PrevButton>
            {'<'}
          </PrevButton>
          <NextButton>
            {'>'}
          </NextButton>
        </PaginationButton>
      </NewsTitle>
      <NewsContent>
        <NewsImage src="/image/news_image.png"></NewsImage>
        <NewsText>뉴스 제목입니다. 한줄입니다. 한줄이상못넘깁니다 뉴스..</NewsText>
      </NewsContent>
    </NewsSection>
  )
}

const NewsSection = styled.section`
  position: relative;
  width: 670px;
`

const NewsTitle = styled.header`
  display: flex;
  justify-content: space-between;
  width: 470px;
  padding: 0 40px;
`

const PaginationBar = styled.div`
  width: 340px;
  height: 2px;
  margin: 92px 20px 42px 68px;
  padding: 0 227px 0 0;
  background-color: #d2daeb;
`

const PaginationButton = styled.div`
  display: flex;
`

const PrevButton = styled.button`
  width: 40px;
  height: 40px;
  flex-grow: 0;
  border-radius: 20px;
  border: 0px;
  margin: 72px 20px 24px;
  background-color: rgba(82, 39, 255, 0.5);
  font-size: 20px;
`

const NextButton = styled.button`
  width: 40px;
  height: 40px;
  flex-grow: 0;
  border-radius: 20px;
  border: 0px;
  margin: 72px 20px 24px;
  background-color: rgba(82, 39, 255, 0.5);
  font-size: 20px;
`

const NewsContent = styled.div`
  width: 470px;
  height: 360px;
  margin: 24px 42px 120px 56px;
  padding: 0 0 24px;
  border-radius: 16px;
  box-shadow: 1px 1px 0 0 rgba(146, 92, 29, 0.2), 2px 2px 4px 0 rgba(79, 85, 88, 0.25);
  border: solid 1px #f3f3f3;
  background-color: var(--white);
  overflow: hidden;
`

const NewsImage = styled.img`

`

const NewsText = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`