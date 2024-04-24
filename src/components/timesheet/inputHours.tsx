/* 'use client'

import React from 'react';
import { Input } from '@/components/ui/input';
import { useComboboxContext } from './comboboxContext';

export function InputHours() {
  const { activeOS, activeHours, setActiveHours } = useComboboxContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHoursValue = event.target.value;
    setActiveHours(newHoursValue);
  };

  return (
    <Input
      disabled={activeOS == "" ? true : false}
      className='w-[200px]'
      type="number"
      placeholder="Hours"
      value={activeHours}
      onChange={handleInputChange}
    />
  );
}
 */