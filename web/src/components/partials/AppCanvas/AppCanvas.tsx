'use client';
import classes from './AppCanvas.module.scss';
import BgCanvas from '../../../app/assets/images/BgCanvas.png';
import Image from 'next/image';

export default function AppCanvas() {
  return (
    <div className={classes.AppCanvas}>
      <Image src={BgCanvas} alt='background canvas' />
    </div>
  )
}