import { FieldProps } from 'formik';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 23px;
`;

const Label = styled.div`
  font-family: Roboto;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  padding-left: 7px;
`;
const InputUnder = styled.hr``;

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: _,
  ...props
}: FieldProps & InputProps) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <input
        style={{
          backgroundImage: `url(${
            props.label === 'Email Address'
              ? '/image/mail_outline_black_24dp.svg'
              : props.label === 'Name'
              ? '/image/perm_identity_black_24dp.svg'
              : '/image/lock_black_24dp.svg'
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 10,
          fontSize: 16,
          color: '#333',
          width: '100%',
          height: 55,
          outline: 'none',
          padding: '0 7px 0 43px',
          border: 'none',
        }}
        {...field}
        {...props}
      />
      <InputUnder />
    </Container>
  );
};
