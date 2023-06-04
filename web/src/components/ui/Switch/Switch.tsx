import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import classes from './Switch.module.scss';
import classNames from 'classnames';

interface ISwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

function Switch({...props}: ISwitchProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <label className={classNames(classes.Switch)}>
      <input {...props} hidden type="checkbox" ref={ref} />
      <span className={classes.Switch__Bar} />
    </label>
  )
}

export default forwardRef(Switch);