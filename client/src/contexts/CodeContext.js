import React, { createContext, useContext, useState } from 'react';

import { PYTHON } from '#/lib/constants';

const CodeContext = createContext();

export function useCodeContext() {
  return useContext(CodeContext);
}

export default function CodeContextProvider({ children }) {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(PYTHON);

  return (
    <CodeContext.Provider value={{ code, setCode, language, setLanguage }}>
      {children}
    </CodeContext.Provider>
  );
}
