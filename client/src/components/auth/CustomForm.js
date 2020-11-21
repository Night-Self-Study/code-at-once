import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useForm from '#/hooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  textField: {
    position: 'relative',
  },
  checkIdButton: {
    position: 'absolute',
    right: 0,
    top: '20%',
  },
}));

function validate({ id, password, passwordConfirm, name, email }) {
  const errors = {};

  if (!id) {
    errors.id = 'ID가 입력되지 않았습니다.';
  }

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = '비밀번호 확인이 입력되지 않았습니다.';
  }

  if (!name) {
    errors.name = '이름이 입력되지 않았습니다.';
  }

  if (!email) {
    errors.email = '이메일이 입력되지 않았습니다.';
  }

  return errors;
}

export default function CustomForm({ data = [], type = 'register' }) {
  const classes = useStyles();
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: data.reduce((acc, d) => {
      acc[d.variableName] = '';
      return acc;
    }, {}),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  const [isDuplicated, setDuplicated] = useState(true);

  const handleCheckId = () => {
    const currentId = values.id;
    if (currentId === 'suyeon0120') {
      alert('중복된 아이디입니다.');
    } else {
      alert('중복되지 않은 아이디입니다.');
      setDuplicated(false);
    }
  };

  return (
    <form
      className={classes.root}
      autoComplete='off'
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      {data.map(({ label: item, variableName }, key) => (
        <div key={key} className={classes.textField}>
          <TextField
            type={item.toLowerCase().includes('password') ? 'password' : 'text'}
            fullWidth
            label={item}
            id={item}
            name={variableName}
            helperText={errors[variableName] ? errors[variableName] : ''}
            error={!!errors[variableName]}
          />
          {variableName === 'id' && (
            <Button
              className={classes.checkIdButton}
              variant='contained'
              color='primary'
              disabled={!isDuplicated}
              onClick={handleCheckId}
            >
              ID 중복 검사
            </Button>
          )}
        </div>
      ))}
      <Box py={2}>
        {type === 'login' && (
          <Button fullWidth variant='contained' color='primary' type='submit'>
            로그인
          </Button>
        )}
        <Button
          fullWidth
          variant='contained'
          color='secondary'
          type='submit'
          disabled={type === 'register' && submitting}
        >
          회원가입
        </Button>
      </Box>
    </form>
  );
}
