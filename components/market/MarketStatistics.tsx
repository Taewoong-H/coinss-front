import React from 'react';
import styled from 'styled-components';

function MarketStatistics() {
  return (
    <Container>
      <TitleLabel>통계 한눈에 보기</TitleLabel>
    </Container>
  );
}

export default MarketStatistics;

const Container = styled.div`
  max-width: 660px;
`;

const TitleLabel = styled.div`
  font-family: NotoSansCJKKR;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #050f19;
`;
