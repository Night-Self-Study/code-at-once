import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

import CustomForm from '#/components/auth/CustomForm';
import { useRegisterContext } from '#/contexts/RegisterContext';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
});

export default function RegisterPage() {
  const history = useHistory();
  const classes = useStyles();
  const {
    handleChange,
    handleSubmit,
    errors,
    handleCheckDuplicatedId,
    isDuplicated,
    canSubmit,
  } = useRegisterContext();

  const handleSubmitOverlap = async (e) => {
    if (isDuplicated) {
      alert('ID 중복 검사를 해주세요.');
      return;
    }

    const success = await handleSubmit(e);
    if (success) {
      history.push('/auth');
    } else {
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container className={classes.root} maxWidth='sm'>
      <Typography variant='h3'>회원가입</Typography>
      <CustomForm
        data={[
          { label: 'ID', variableName: 'id' },
          { label: 'Password', variableName: 'password' },
          { label: 'Password 확인', variableName: 'passwordConfirm' },
          { label: '이름', variableName: 'name' },
          { label: '이메일', variableName: 'email' },
        ]}
        type='register'
        handleChange={handleChange}
        handleSubmit={handleSubmitOverlap}
        errors={errors}
        isDuplicated={isDuplicated}
        handleCheckDuplicatedId={handleCheckDuplicatedId}
        canSubmit={canSubmit}
      />
    </Container>
  );
}
