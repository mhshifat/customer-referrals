import { ReactElement } from "react";
import classes from "./PageTitle.module.scss";
import { Poppins } from "next/font/google";

interface PageTitleProps {
  title: string;
  primaryBtn?: ReactElement;
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export default function PageTitle({ title, primaryBtn }: PageTitleProps) {
  return (
    <div className={classes.PageTitle}>
      <h3 className={poppins.className}>{title}</h3>
      <span>
        {primaryBtn}
      </span>
    </div>
  )
}