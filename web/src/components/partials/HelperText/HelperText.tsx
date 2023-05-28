import { PropsWithChildren, ReactElement } from "react";
import classes from "./HelperText.module.scss";
import { Poppins } from "next/font/google";

interface HelperTextProps {
  text: ReactElement;
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

export default function HelperText({ text, children }: PropsWithChildren<HelperTextProps>) {
  return (
    <div className={classes.HelperText}>
      {children}

      {text && <span className={poppins.className}>{text}</span>}
    </div>
  )
}