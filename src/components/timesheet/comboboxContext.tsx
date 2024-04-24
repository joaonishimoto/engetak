/* 'use client'

import React, { createContext, useContext, useState } from 'react';

type ComboboxContextType = {
  activeOS: string;
  setActiveOS: React.Dispatch<React.SetStateAction<string>>;
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  activeReference: string;
  setActiveReference: React.Dispatch<React.SetStateAction<string>>;
  activeHours: string;
  setActiveHours: React.Dispatch<React.SetStateAction<string>>;
};

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useComboboxContext must be used within a ComboboxContextProvider');
  }
  return context;
};

export const ComboboxContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeOS, setActiveOS] = useState<string>("");
  const [activeItem, setActiveItem] = useState<string>("");
  const [activeReference, setActiveReference] = useState<string>("");
  const [activeHours, setActiveHours] = useState<string>("");

  return (
    <ComboboxContext.Provider value={{ activeOS, setActiveOS, activeItem, setActiveItem, activeReference, setActiveReference, activeHours, setActiveHours }}>
      {children}
    </ComboboxContext.Provider>
  );
};

 */