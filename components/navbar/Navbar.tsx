import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Container>
      <LeftSection>
        <ProfileImage
          src='/image/rectangle-189.png'
          alt='avator'
        ></ProfileImage>
        <HalfTriangle />
        <GreetingMessage>
          <label>ooo님 안녕하세요.</label>
          <a href='/wallet'>내 지갑보기</a>
        </GreetingMessage>
      </LeftSection>
      <RightSection>
        <SearchInput></SearchInput>
      </RightSection>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 100px;
`;

const LeftSection = styled.section`
  display: flex;
  align-items: center;
  padding: 0 40px;
`;

const RightSection = styled.section``;

const ProfileImage = styled.img`
  margin: 0 10px 0 0px;
`;

const HalfTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid #5227ff;
  border-left: 10px solid transparent;
`;

const GreetingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 314px;
  height: 40px;
  padding: 8px 25px 8px 35px;
  border-radius: 10px;
  background-image: linear-gradient(to top, #5227ff, #7409fc);
  > label {
    font-family: NotoSansCJKKR;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: #ffffff;
  }
  > a {
    font-family: NotoSansCJKKR;
    font-size: 13px;
    text-align: left;
    color: #ffffff;
  }
`;

const SearchInput = styled.input`
  width: 500px;
  height: 40px;
  padding-left: 52px;
  border-radius: 20px;
  box-shadow: inset 0 4px 4px 0 rgba(177, 196, 214, 0.1);
  border: none;
  outline: none;
  text-decoration: none;
  background-color: #e9effb;
  background-image: url('/image/search.png');
  background-repeat: no-repeat;
  background-position: 20px;
`;
