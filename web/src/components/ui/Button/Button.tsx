import { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";
import classes from "./Button.module.scss";
import { Poppins } from "next/font/google";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary'
}

const VARIANT_CSS = {
  primary: 'Button__Primary'
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

function Button({ children, variant, ...props }: PropsWithChildren<ButtonProps>, ref: ForwardedRef<HTMLButtonElement>) {
  return <button className={classnames([poppins.className, classes.Button, classes[VARIANT_CSS[variant]]])} {...props} ref={ref}>{children}</button>
}

export default forwardRef(Button)