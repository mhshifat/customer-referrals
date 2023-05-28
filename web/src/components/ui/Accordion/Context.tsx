import { Nullable } from "@/interfaces";
import { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

interface AccordionContextProps {
  register: (identifier: string) => void;
  toggle: (identifier: string) => void;
  isCurrentlyOpen: (identifier: string) => boolean;
}

const AccordionCtx = createContext<Nullable<AccordionContextProps>>(null);

export default function AccordionProvider({ children }:PropsWithChildren) {
  const [allAccordions, setAllAccordions] = useState<Record<string, boolean>>({});
  
  const register = useCallback((identifier: string) => {
    setAllAccordions(values => ({...values, [identifier]: false}))
  }, []);
  const isCurrentlyOpen = useCallback((identifier: string) => {
    return allAccordions[identifier];
  }, [allAccordions]);
  const toggle = useCallback((identifier: string) => {
    setAllAccordions(values => {
      const newValues: Record<string, boolean> = {}
      Object.keys(values).forEach(key => {
        newValues[key] = false;
      });
      newValues[identifier] = !values[identifier];
      return newValues;
    })
  }, []);
  return (
    <AccordionCtx.Provider value={{ register, toggle, isCurrentlyOpen }}>
      {children}
    </AccordionCtx.Provider>
  )
}

export const useAccordion = () => {
  const res = useContext(AccordionCtx);
  if (!res) throw new Error('Please wrap your component with Accordion Provider');
  return res;
}