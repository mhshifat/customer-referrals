'use client';
import Radio from '@/components/ui/Radio/Radio';
import classes from './FriendIncentiveBlock.module.scss';
import { useState } from 'react';
import CreateCampaignBox from '../CreateCampaignBox';
import Image from 'next/image';
import AutomaticDiscountPng from '../../../../app/assets/images/create-campaign/automatic-discount.png';
import ManuallyAddedCustomDiscountPng from '../../../../app/assets/images/create-campaign/manually-added-custom-discount-codes.png';
import AutomaticallyCreatedDiscountForm from './AutomaticallyCreatedDiscountForm';
import Grid from '@/components/ui/Grid/Grid';
import { motion } from 'framer-motion';

export default function FriendIncentiveBlock({}) {
  const [checkedValue, setCheckedValue] = useState("");

  return (
    <>
      <Grid className={classes.FriendIncentiveBlock}>
        <Radio>
          <Radio.Block
            isActive={checkedValue === "automatically-created-discount"}
            activeState={
              <CreateCampaignBox
                active={checkedValue === "automatically-created-discount"}
                icon={<Image src={AutomaticDiscountPng} alt="" />}
                title="Automatically-Created Discount"
                description="This option will automatically generate discount codes for you. Set it, and forget it!"
              />
            }
            name="friend-incentive"
            value="automatically-created-discount"
            onChange={({ target }) => setCheckedValue(target.value)}
          >
            <CreateCampaignBox
              icon={<Image src={AutomaticDiscountPng} alt="" />}
              title="Automatically-Created Discount"
              description="This option will automatically generate discount codes for you. Set it, and forget it!"
            />
          </Radio.Block>
          <Radio.Block
            isActive={checkedValue === "manually-created-discount"}
            activeState={
              <CreateCampaignBox
                active={checkedValue === "manually-created-discount"}
                icon={<Image src={ManuallyAddedCustomDiscountPng} alt="" />}
                title="Manually-Added Custom Discount Codes"
                description="If you want to have more control over your discount codes and what produc"
              />
            }
            name="friend-incentive"
            value="manually-created-discount"
            onChange={({ target }) => setCheckedValue(target.value)}
          >
            <CreateCampaignBox
              icon={<Image src={ManuallyAddedCustomDiscountPng} alt="" />}
              title="Manually-Added Custom Discount Codes"
              description="If you want to have more control over your discount codes and what produc"
            />
          </Radio.Block>
        </Radio>
      </Grid>
      <motion.div initial={{ display: 'none' }} animate={checkedValue === "automatically-created-discount" ? { display: 'block' } : {}}>
        <AutomaticallyCreatedDiscountForm />
      </motion.div>
    </>
  )
}