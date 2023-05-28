'use client';
import { PropsWithChildren, ReactElement, cloneElement, useEffect, useRef } from "react";
import { useDropdown } from "./Context";

export default function DropdownElement({ children, onToggle }: PropsWithChildren<{ onToggle?: (value: boolean) => void }>) {
  const { toggleDropdown, isOpen } = useDropdown();
  const onToggleRef = useRef(onToggle);

  useEffect(() => {
    onToggleRef.current?.(isOpen);
  }, [isOpen]);

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
