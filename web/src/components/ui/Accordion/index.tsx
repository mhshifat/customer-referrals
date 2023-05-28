import { PropsWithChildren } from "react";
import AccordionProvider from "./Context";
import AccordionItem from "./Item";

export default function Accordion({ children }: PropsWithChildren) {
  return (
    <AccordionProvider>
      {children}
    </AccordionProvider>
  )
}

Accordion.Item = AccordionItem;