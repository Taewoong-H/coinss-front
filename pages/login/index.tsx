import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { InputField } from '../../components/fields/InputField';
import * as Yup from 'yup';
import { setToken } from '../../api/TokenManager';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  return (
    <Container>
      <LoginWrapper>
        <LoginForm>
          <LoginTitle>
            Login <Logo src='/image/13-1-1.png' alt='logo' />
          </LoginTitle>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
              password: Yup.string()
                .min(1, 'Password must be at least 1 characters')
                .required('Password is required'),
            })}
            onSubmit={async (values) => {
              try {
                const response = await axios.post(
                  global.domain + '/api/v1/user/signin',
                  values
                );
                const token = response.data;
                if (token) {
                  setToken(token, token);
                  alert('로그인 성공');
                  router.push('/');
                } else {
                  alert('이메일 또는 비밀번호를 확인해주세요.');
                }
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {({ errors, status, touched }) => (
              <Form>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  label='Email Address'
                  placeholder='email'
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                  component={InputField}
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='invalid-feedback'
                />
                <Field
                  id='password'
                  name='password'
                  label='Password'
                  placeholder='password'
                  type='password'
                  component={InputField}
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='invalid-feedback'
                />
                <LoginButton type='submit'>LOGIN</LoginButton>
              </Form>
            )}
          </Formik>
        </LoginForm>
        <LinkContainer>
          <GoTo href='/register'>Create new account</GoTo>
          <GoTo href='#'>Forgot password</GoTo>
        </LinkContainer>
      </LoginWrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  /* background-image: linear-gradient(to top, #5227ff, #7409fc); */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10%;
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

const LoginForm = styled.div``;

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
  background-image: url('/image/mail_outline_black_24dp.svg');
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
