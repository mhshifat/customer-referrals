import { Poppins } from "next/font/google";
import classes from "./DashboardStatsBlock.module.scss";

interface DashboardStatsBlockProps {
  title: string;
  desc: string;
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export default function DashboardStatsBlock({ title, desc }:DashboardStatsBlockProps) {
  return (
    <span className={classes.DashboardStatsBlock}>
      <h3 className={poppins.className}>{title}</h3>
      <small className={poppins.className}>{desc}</small>
    </span>
  )
}