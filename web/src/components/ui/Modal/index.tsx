"use client";
import { Children, PropsWithChildren, ReactElement, cloneElement, useEffect } from "react";
import { useModal } from "./Context";
import ModalTrigger from "./Trigger";
import ModalBody from "./Body";
import hashText from "@/utils/hashText";

export default function Modal({ children, title, open }: PropsWithChildren<{ open?: boolean, title: string }>) {
  const identifier = hashText(title);
  const { toggle } = useModal();

  useEffect(() => {
    toggle(identifier!, Boolean(open))
  }, [identifier, toggle, open]);

  return (
    <>
      {Children.map(children, (child) => cloneElement(child as ReactElement, {
        identifier
      }))}
    </>
  )
}

Modal.Trigger = ModalTrigger;
Modal.Body = ModalBody;