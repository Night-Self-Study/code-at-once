import React, { useState } from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CustomForm from '#/components/auth/CustomForm';
import { useUserContext } from '#/contexts/UserContext';
import { QUERIES } from '#/modules/ApolloClient';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const validation = ({ id, password }) => {
  const errors = {};

  if (!id) {
    errors.id = '아이디를 입력해주세요.';
  }

  if (!password) {
    errors.password = '패스워드를 입력해주세요.';
  }
  return errors;
};

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = useUserContext();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const { refetch } = useQuery(QUERIES.GET_USER, {
    skip: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validation(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const {
      data: { getUser: success },
    } = await refetch({
      loginInput: {
        id: values.id,
        password: values.password,
      },
    });

    if (success) {
      setUser({
        id: values.id,
        password: values.password,
      });
      history.push('/');
    } else {
      alert('잘못된 아이디와 패스워드 입니다.');
    }
  };

  const onClickRegister = () => {
    history.push('/auth/register');
  };

  return (
    <Container className={classes.root} maxWidth='sm'>
      <Typography variant='h3'>로그인</Typography>
      <CustomForm
        data={[
          { label: 'ID', variableName: 'id' },
          { label: 'Password', variableName: 'password' },
        ]}
        type='login'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onClickRegister={onClickRegister}
        errors={errors}
      />
    </Container>
  );
};

export default LoginPage;
