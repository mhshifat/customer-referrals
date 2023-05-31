import { PropsWithChildren } from "react";
import classes from "./DisableArea.module.scss";
import { Poppins } from "next/font/google";
import classNames from 'classnames';

const poppins = Poppins({ subsets: ['latin'], weight: ["500"] })

export default function DisableArea({ children, text }: PropsWithChildren<{ text?: string }>) {
  return (
    <div className={classNames(poppins.className, classes.DisableArea)} data-content={text}>
      {children}
    </div>
  )
}