'use client';
import { Poppins } from 'next/font/google';
import AppLogo from '../AppLogo/AppLogo';
import classes from './AppHeader.module.scss';
import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { GrAnnounce } from 'react-icons/gr';
import { HiOutlineUsers } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });

export default function AppHeader() {
  return (
    <header className={classes.AppHeader}>
      <div className={classes.AppHeader__Container}>
        <div className={classes.AppHeader__Logo}>
          <AppLogo />
          <h3 className={poppins.className}>Customer Referrals</h3>
        </div>

        <ul className={classes.AppHeader__Navigation}>
          <li>
            <Link href="/" className={classes.AppHeader__ActiveNavigation}>
              <BiCategory />
              <span className={poppins.className}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <GrAnnounce />
              <span className={poppins.className}>Campaigns</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <HiOutlineUsers />
              <span className={poppins.className}>Users</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <FiSettings />
              <span className={poppins.className}>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}