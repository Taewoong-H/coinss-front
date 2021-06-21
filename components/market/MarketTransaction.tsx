import React from 'react';
import styled from 'styled-components';

function MarketTransaction() {
  return <Container></Container>;
}

export default MarketTransaction;

const Container = styled.div`
  width: 460px;
  height: 500px;
  padding: 24px 40px;
  border-radius: 16px;
  -webkit-backdrop-filter: blur(80px);
  backdrop-filter: blur(80px);
  box-shadow: 1px 1px 0 0 rgba(146, 92, 29, 0.2),
    2px 2px 4px 0 rgba(79, 85, 88, 0.25);
  border: solid 1px #f3f3f3;
  background-color: white;
`;
