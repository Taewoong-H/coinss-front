import React from 'react';
import styled from 'styled-components';

export function MainPopular({}: any) {
  return (
    <PopularSection>
      <PopularImage src="/image/popularity_chart.png"></PopularImage>
    </PopularSection>
  )
};

const PopularSection = styled.section`
  position: relative;
  width: 470px;
  padding: 75px 0 74px 1px;
`

const PopularImage = styled.img`
  width: 469px;
`