import React from 'react';
import styled from 'styled-components';

export function MainNews({}: any) {
  return (
    <NewsSection>
      <NewsTitle>
        <PaginationBar></PaginationBar>
        <p>button</p>
      </NewsTitle>
    </NewsSection>
  )
}

const NewsSection = styled.section`
  position: relative;
  width: 670px;
  padding: 10px;
`

const NewsTitle = styled.header`
  position: flex;
  flex-wrap: space-between;
`

const PaginationBar = styled.div`
  width: 340px;
  height: 2px;
  margin: 92px 20px 42px 68px;
  padding: 0 227px 0 0;
  background-color: #d2daeb;
`