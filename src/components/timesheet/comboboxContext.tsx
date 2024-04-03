'use client'

import React, { createContext, useContext, useState } from 'react';

type ComboboxContextType = {
  activeOS: string;
  setActiveOS: React.Dispatch<React.SetStateAction<string>>;
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
};

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useComboboxContext must be used within a ComboboxContextProvider');
  }
  return context;
};

export const ComboboxContextProvider: React.FC = ({ children }) => {
  const [activeOS, setActiveOS] = useState<string>("");
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <ComboboxContext.Provider value={{ activeOS, setActiveOS, activeItem, setActiveItem }}>
      {children}
    </ComboboxContext.Provider>
  );
};
