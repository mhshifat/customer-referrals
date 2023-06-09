import { Poppins } from "next/font/google";
import classes from "./Label.module.scss";
import { HTMLAttributes, PropsWithChildren } from 'react';
import classnames from 'classnames';

const poppins = Poppins({ subsets: ['latin'], weight: ["500"] })

export default function Label({ children, ...props }:PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span className={classnames(poppins.className, classes.Label)} {...props}>
      {children}
    </span>
  )
}