import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <LoginWrapper>
        <LoginForm>
          <LoginTitle>
            Login <Logo src='/image/13-1-1.png' alt='logo' />
          </LoginTitle>
          <InputBox>
            <InputLabel>Username</InputLabel>
            <InputValue type='text' placeholder='Type your Username' />
            <InputUnder></InputUnder>
          </InputBox>
          <InputBox>
            <InputLabel>Password</InputLabel>
            <InputValue2 type='password' placeholder='Type your Password' />
            <InputUnder></InputUnder>
          </InputBox>
          <LoginButton type='button'>LOGIN</LoginButton>
        </LoginForm>
        <LinkContainer>
          <GoTo href='#'>Create new account</GoTo>
          <GoTo href='#'>Forgot password</GoTo>
        </LinkContainer>
      </LoginWrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  background-image: linear-gradient(to top, #5227ff, #7409fc);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Logo = styled.img``;

const LoginWrapper = styled.div`
  width: 550px;
  height: 550px;
  background-color: #fff;
  color: rgb(255, 255, 255);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 70%) 0px 0px 1px 0px,
    rgb(0 0 0 / 50%) 0px 3px 4px -2px;
  background-image: none;
  overflow: hidden;
  padding: 65px 55px 55px 55px;
`;

const LoginForm = styled.form``;

const LoginTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 39px;
  color: #333;
  line-height: 1.2;
  text-align: center;
  font-weight: bold;
`;

const InputBox = styled.div`
  margin-bottom: 23px;
`;

const InputLabel = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  padding-left: 7px;
`;

const InputValue = styled.input`
  background-image: url('/image/perm_identity_black_24dp.svg');
  background-repeat: no-repeat;
  background-position: 10px;
  font-family: Roboto;
  font-size: 16px;
  color: #333;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 55px;
  padding: 0 7px 0 43px;
  outline: none;
  border: none;
`;

const InputValue2 = styled(InputValue)`
  background-image: url('/image/lock_black_24dp.svg');
`;

const InputUnder = styled.hr``;

const LoginButton = styled.button`
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  outline: none !important;
  border: none;
  background-image: linear-gradient(to top, #5227ff, #7409fc);
  :hover {
    background-image: linear-gradient(to top, #7409fc, #5227ff);
    opacity: 0.8;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const GoTo = styled.a`
  font-family: Roboto;
  font-size: 14px;
  color: #666;
  text-decoration: none;
  margin-top: 20px;
`;
