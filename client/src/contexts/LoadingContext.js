import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const useLoadingContext = () => useContext(LoadingContext);

export default function LoadingContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
