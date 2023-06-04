'use client';
import { IoChevronDown } from 'react-icons/io5';
import classes from './CampaignCard.module.scss';
import { Poppins } from 'next/font/google';
import Divider from '@/components/ui/Divider/Divider';
import Switch from '@/components/ui/Switch/Switch';
import Dropdown from '@/components/ui/Dropdown';
import classNames from 'classnames';

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] });

export default function CampaignCard(props: { mode?: 'incomplete' | 'draft' }) {
  const { mode } = props;
  return (
    <div className={classes.CampaignCard}>
      <div className={classes.CampaignCard__Info}>
        <h3 className={poppins.className}>McDonalds: I’m Lovin It Super Bowl</h3>
        <small className={poppins.className}>Details</small>
      </div>

      <div className={classes.CampaignCard__Divider}>
        <Divider />
      </div>

      {(mode === 'incomplete' || mode === 'draft') ? (
        <div className={classes.CampaignCard__Stats}>
          <div className={classes.CampaignCard__Progress}>
            <div><span /></div>
            <p className={poppins.className}>2/4 tasks complete for launch</p>
          </div>
        </div>
      ) : (
        <div className={classes.CampaignCard__Stats}>
          <span>
            <h4 className={poppins.className}>6</h4>
            <h6 className={poppins.className}>Claims</h6>
          </span>
          <span>
            <h4 className={poppins.className}>7</h4>
            <h6 className={poppins.className}>Referrals</h6>
          </span>
          <span>
            <h4 className={poppins.className}>$60.00</h4>
            <h6 className={poppins.className}>Referred Revenue</h6>
          </span>
        </div>
      )}

      <div className={classes.CampaignCard__Footer}>
        <div>
          <h5 className={poppins.className}><span>Referrer  </span><span>:&nbsp;&nbsp;Custom</span></h5>
          <h5 className={poppins.className}><span>Friend  </span><span>:&nbsp;&nbsp;$ 5.00 off</span></h5>
        </div>
        <div className={classes.CampaignCard__Footer_Actions}>
          <Dropdown>
            <Dropdown.Element>
              <span className={classNames(classes.CampaignCard_Center, classes.CampaignCard_Pointer)}>
                <IoChevronDown />
              </span>
            </Dropdown.Element>
            <Dropdown.Body fullWidth={false}>
              <ul className={classes.CampaignCard__Dropdown}>
                <li className={poppins.className}>Advanced Settings</li>
                <li className={poppins.className}>Duplicate</li>
                <li className={poppins.className}>Delete</li>
              </ul>
            </Dropdown.Body>
          </Dropdown>
          <Switch />
        </div>
      </div>
    </div>
  )
}