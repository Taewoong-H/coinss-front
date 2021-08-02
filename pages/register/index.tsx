import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { InputField } from '../../components/fields/InputField';
import * as Yup from 'yup';
import axios from 'axios';

interface Values {
  email: string;
  name: string;
  password: string;
}

export default function register() {
  return (
    <Container>
      <RegisterWrapper>
        <Title>
          Sign Up
          <Logo src='/image/13-1-1.png' alt='logo' />
        </Title>
        <Formik
          initialValues={{
            email: '',
            name: '',
            password: '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(' Name is required'),
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required'),
          })}
          onSubmit={async (values) => {
            try {
              const response = await axios.post('/api/v1/user/signup', {
                values,
              });
              console.log(response);
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
                id='name'
                name='name'
                label='Name'
                placeholder='name'
                component={InputField}
              />
              <ErrorMessage
                name='name'
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
              <SubmitButton type='submit'>Submit</SubmitButton>
            </Form>
          )}
        </Formik>
      </RegisterWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10%;
  min-height: 100vh;
  width: 100%;
`;

const RegisterWrapper = styled.div`
  width: 550px;
  min-height: 550px;
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

const SubmitButton = styled.button`
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

const Title = styled.div`
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

const Logo = styled.img``;
