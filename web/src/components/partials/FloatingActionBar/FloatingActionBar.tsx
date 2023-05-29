import classes from "./FloatingActionBar.module.scss";
import { PropsWithChildren } from 'react';

export default function FloatingActionBar({ children }: PropsWithChildren) {
  return (
    <div className={classes.FloatingActionBar}>
      <div className={classes.FloatingActionBar__Container}>
        {children}
      </div>
    </div>
  )
}