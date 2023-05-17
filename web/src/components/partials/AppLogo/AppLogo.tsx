'use client';
import classes from './AppLogo.module.scss';
import LogoIns from '../../../app/assets/svg/logo-ins.svg';

export default function AppLogo() {
  return (
    <span className={classes.AppLogo}>
      <LogoIns />
    </span>
  )
}