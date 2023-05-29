import { PropsWithChildren } from "react";
import classes from "./DisableArea.module.scss";

export default function DisableArea({ children }: PropsWithChildren) {
  return (
    <div className={classes.DisableArea}>
      {children}
    </div>
  )
}