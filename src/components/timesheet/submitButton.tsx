/* 'use client'

import { Button } from "@/components/ui/button";
import { useComboboxContext } from './comboboxContext';

export function SubmitButton() {

  const { activeOS, setActiveOS, activeItem, setActiveItem, activeReference, setActiveReference, activeHours, setActiveHours } = useComboboxContext();

  function handleClick() {

  }

  return (
    <Button 
      className="bg-teal-400 hover:bg-teal-300 transition-all duration-300"
      disabled={activeOS != "" && activeItem != "" && activeReference != "" && activeHours != "" ? false : true}
      onClick={() => {
        setActiveOS("")
        setActiveItem("")
        setActiveReference("")
        setActiveHours("")
        alert('point register')
        handleClick()
      }}
    >
      Record
    </Button>
  );
}
 */