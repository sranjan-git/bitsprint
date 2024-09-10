import React, { createContext, useState, useContext } from 'react';

const ChallengeContext = createContext<any>(null);

export const ChallengeProvider = ({ children }: { children: React.ReactNode }) => {
  const [challenges, setChallenges] = useState<Array<any>>([]);

  return (
    <ChallengeContext.Provider value={{ challenges, setChallenges }}>
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenges = () => useContext(ChallengeContext);
