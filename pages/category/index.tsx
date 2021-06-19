import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

function category() {
  return (
    <Fragment>
      <Container></Container>
    </Fragment>
  );
}

export default category;

const Container = styled.div`
  width: 1280px;
  min-height: 1650px;
`;

// const CategoryWrapper = styled.div``;
