import { ForwardedRef, InputHTMLAttributes, ReactElement, forwardRef } from "react";
import classes from "./Input.module.scss";
import classnames from 'classnames';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  append?: ReactElement;
  prepend?: ReactElement;
}

function Input({ append, prepend, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <div className={classnames(poppins.className, classes.Input)}>
      {prepend && <span>{prepend}</span>}
      <input  type="text" {...props} ref={ref} />
      {append && <span>{append}</span>}
    </div>
  )
}

export default forwardRef(Input);