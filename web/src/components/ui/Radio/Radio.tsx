"use client";
import { PropsWithChildren } from "react";
import RadioBlock from "./Block";

export default function Radio({ children }: PropsWithChildren) {
  return (
    <>
      {children}
    </>
  )
}

Radio.Block = RadioBlock;