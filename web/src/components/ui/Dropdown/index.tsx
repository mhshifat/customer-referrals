'use client';
import { Children, PropsWithChildren, ReactElement, cloneElement, useState } from 'react';
import DropdownElement from './Element';
import DropdownBody from './Body';
import DropdownProvider from './Context';

export default function Dropdown({ children }: PropsWithChildren) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setElement}>
      <DropdownProvider>
        {Children.map(children, (child) => cloneElement(child as ReactElement, {
          elementRef: element
        }))}
      </DropdownProvider>
    </div>
  )
}

Dropdown.Element = DropdownElement;
Dropdown.Body = DropdownBody;