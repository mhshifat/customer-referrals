"use client";
import { PropsWithChildren, ReactElement, cloneElement } from "react";
import { useModal } from "./Context";

export default function ModalTrigger({ children, identifier }: PropsWithChildren<{ identifier?: string }>) {
  const { toggle } = useModal();

  return (
    <>
      {children && cloneElement(children as ReactElement, {
        onClick: () => {
          toggle(identifier!, true);
        }
      })}
    </>
  )
}