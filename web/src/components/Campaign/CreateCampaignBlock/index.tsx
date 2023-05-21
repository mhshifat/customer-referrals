'use client';
import { PropsWithChildren, useState } from 'react';
import classes from './CreateCampaignBlock.module.scss';
import { Poppins } from 'next/font/google';

interface CreateCampaignBlockProps {
  number: number;
  title: string;
  subTitle: string;
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export default function CreateCampaignBlock({ children, number, title, subTitle }: PropsWithChildren<CreateCampaignBlockProps>) {
  const [checked, setChecked] = useState(false)

  return (
    <div className={classes.CreateCampaignBlock}>
      <div className={classes.CreateCampaignBlock__Info}>
        <h3 className={poppins.className}>
          <span className={checked ? classes.CreateCampaignBlock__Checked : ""}>{number}</span>
          <span>{title}</span>
        </h3>
        <p className={poppins.className}>{subTitle}</p>
      </div>
      <div className={classes.CreateCampaignBlock__Content}>
        {children}
      </div>
    </div>
  )
}