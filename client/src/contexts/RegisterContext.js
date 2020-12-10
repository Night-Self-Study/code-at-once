import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { QUERIES } from '#/modules/ApolloClient';

const RegisterContext = createContext();

export const useRegisterContext = () => useContext(RegisterContext);

function validate({ id, password, passwordConfirm, name, email }) {
  const errors = {};

  if (!id) {
    errors.id = 'ID가 입력되지 않았습니다.';
  }

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = '비밀번호와 비밀번호 확인이 일치하지 않았습니다.';
  }

  if (password !== passwordConfirm) {
    errors.passwordConfirm = '비밀번호와 비밀번호 확인이 일치하지 않았습니다.';
  }

  if (!name) {
    errors.name = '이름이 입력되지 않았습니다.';
  }

  if (!email) {
    errors.email = '이메일이 입력되지 않았습니다.';
  }

  return errors;
}

export default function RegisterContextProvider({ children }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDuplicated, setDuplicated] = useState(true);
  const [canSubmit, setCanSubmit] = useState(false);

  const { refetch } = useQuery(QUERIES.ID_DUPLICATION_CHECK, {
    skip: true,
  });

  const [createUser] = useMutation(QUERIES.CREATE_USER);

  useEffect(() => {
    if (canSubmit) {
      if (Object.keys(errors).length === 0) {
        setCanSubmit(true);
      }
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleCheckDuplicatedId = async () => {
    const currentId = values.id || '';
    const { data } = await refetch({ input: String(values.id) });
    const serverIsDuplicated = data.idDuplicationCheck;

    if (currentId.length === 0) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (serverIsDuplicated) {
      alert('중복된 아이디입니다.');
      return false;
    } else {
      alert('중복된 아이디가 아닙니다.');
      setDuplicated(false);
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUser({
      variables: {
        userInput: {
          id: values.id,
          password: values.password,
          name: values.name,
          email: values.email,
        },
      },
    });
    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('회원가입이 되었습니다.');
      clearData();
      return true;
    }
    return false;
  };

  const clearData = () => {
    setValues({});
    setErrors({});
    setDuplicated(true);
    canSubmit(false);
  };

  return (
    <RegisterContext.Provider
      value={{
        values,
        errors,
        setValues,
        canSubmit,
        handleChange,
        handleSubmit,
        isDuplicated,
        handleCheckDuplicatedId,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
