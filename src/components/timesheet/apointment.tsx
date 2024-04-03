'use client'

import { ComboboxContextProvider } from "@/components/timesheet/comboboxContext";
import { ComboboxOS } from "@/components/timesheet/comboboxOS";
import { ComboboxOSItem } from "@/components/timesheet/comboboxOSItem";
import { useEffect, useState } from 'react';
import { ComboboxReference } from "./comboboxReference";



export const Apointment: React.FC = () => {
  return (
    <ComboboxContextProvider>
      <div className="flex space-x-10">
        <ComboboxOS />
        <ComboboxOSItem />
        <ComboboxReference />
      </div>
    </ComboboxContextProvider>
  );
}
