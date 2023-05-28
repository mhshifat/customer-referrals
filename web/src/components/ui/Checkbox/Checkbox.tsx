import classes from './Checkbox.module.scss';
import { Poppins } from "next/font/google";
import { ForwardedRef, InputHTMLAttributes, ReactElement, forwardRef } from "react";
import { FaCheck } from 'react-icons/fa';

const poppins = Poppins({ subsets: ['latin'], weight: ["500"] })

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: ReactElement;
}

function Checkbox({ text, ...props }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <label className={classes.Checkbox}>
      <input type="checkbox" hidden {...props} ref={ref} />
      <i>
        <FaCheck />
      </i>
      {text && <span className={poppins.className}>{text}</span>}
    </label>
  )
}

export default forwardRef(Checkbox);