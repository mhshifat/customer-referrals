import { useState, createContext, PropsWithChildren, useContext } from 'react';

interface DropdownCtxState {
  isOpen: boolean;
  toggleDropdown: (value?: boolean) => void;
}

const DropdownCtx = createContext<DropdownCtxState | null>(null);

export default function DropdownProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (value?: boolean) => {
    setIsOpen(prevValue => value !== undefined ? value : !prevValue);
  }
  return (
    <DropdownCtx.Provider value={{ isOpen, toggleDropdown }}>
      {children}
    </DropdownCtx.Provider>
  )
}

export const useDropdown = () => {
  const res = useContext(DropdownCtx);
  if (!res) throw new Error('Dropdown Provider not found!');
  return res;
}