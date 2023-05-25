'use client';
import { PropsWithChildren, ReactElement, cloneElement } from "react";
import { useDropdown } from "./Context";

export default function DropdownElement({ children, onToggle }: PropsWithChildren<{ onToggle?: (value: boolean) => void }>) {
  const { toggleDropdown, isOpen } = useDropdown();

  return (
    <>
      {cloneElement(children as ReactElement, {
        onClick: () => {
          toggleDropdown();
          onToggle?.(!isOpen);
        }
      })}
    </>
  )
}
