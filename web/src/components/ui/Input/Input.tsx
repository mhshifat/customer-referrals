import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import classes from "./Input.module.scss";
import classnames from 'classnames';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <input className={classnames(poppins.className, classes.Input)} type="text" {...props} ref={ref} />
  )
}

export default forwardRef(Input);