/* "use client"

import { ComboboxContextProvider } from "@/components/timesheet/comboboxContext"
import { useEffect, useState } from "react"
import { InputHours } from "./inputHours"
import { SubmitButton } from "./submitButton"
import { ComboboxOS } from "./comboboxOS"
import { ComboboxOSItem } from "./comboboxOSItem"
import { ComboboxReference } from "./comboboxReference"

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
  )
}
 */