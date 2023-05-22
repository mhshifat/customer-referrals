import { ReactElement } from "react";
import classes from "./CreateCampaignBox.module.scss";
import { Poppins } from "next/font/google";
import classnames from 'classnames';

interface CreateCampaignBoxProps {
  active?: boolean;
  icon: ReactElement;
  title: string;
  description: string;
}

const poppins = Poppins({ subsets: ['latin'], weight: ["600", '400'] })

export default function CreateCampaignBox({ active, icon, title, description }: CreateCampaignBoxProps) {
  return (
    <div className={classnames(classes.CreateCampaignBox, {
      [classes.CreateCampaignBox__Active]: active
    })}>
      <span>
        {icon}
      </span>
      <h3 className={poppins.className}>{title}</h3>
      <p className={poppins.className}>{description}</p>
    </div>
  )
}