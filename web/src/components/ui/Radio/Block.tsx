import classes from "./Radio.module.scss";
import { ForwardedRef, InputHTMLAttributes, PropsWithChildren, ReactElement, forwardRef } from "react";

interface RadioBlockProps extends InputHTMLAttributes<HTMLInputElement> {
  activeState: ReactElement;
  isActive: boolean;
}

function RadioBlock({ children, isActive, activeState, ...props }: PropsWithChildren<RadioBlockProps>, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <label className={classes.Radio}>
      {isActive ? activeState : children}
      <input {...props} type="radio" ref={ref} hidden />
    </label>
  )
}

export default forwardRef(RadioBlock);