/* 'use client'

import { ComboboxContextProvider } from "@/components/timesheet/comboboxContext";
import { ComboboxOS } from "@/components/timesheet/comboboxOS";
import { ComboboxOSItem } from "@/components/timesheet/comboboxOSItem";
import { useEffect, useState } from 'react';
import { ComboboxReference } from "./comboboxReference";
import { InputHours } from "./inputHours";
import { SubmitButton } from "./submitButton";



export const Apointment: React.FC = () => {
  return (
    <ComboboxContextProvider>
      <div className="flex flex-col space-y-10">
        <ComboboxOS />
        <ComboboxOSItem />
        <ComboboxReference />
        <InputHours />
        <SubmitButton />
      </div>
    </ComboboxContextProvider>
  );
}
 */