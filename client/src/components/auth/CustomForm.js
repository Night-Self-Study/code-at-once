import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function CustomForm({
  data = [],
  type = '',
  handleChange,
  handleSubmit,
  errors = {},
  onClickRegister = () => {},
  isDuplicated = true,
  canSubmit = false,
  handleCheckDuplicatedId = () => {},
}) {
  const classes = useStyles();

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
          {type === 'register' && variableName === 'id' && (
            <Button
              className={classes.checkIdButton}
              variant='contained'
              color='primary'
              disabled={!isDuplicated}
              onClick={handleCheckDuplicatedId}
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
          type={type === 'login' ? 'button' : 'submit'}
          onClick={type === 'login' ? onClickRegister : () => {}}
          disabled={type === 'register' && canSubmit}
        >
          회원가입
        </Button>
      </Box>
    </form>
  );
}
