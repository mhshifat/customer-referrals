"use client";
import Radio from '@/components/ui/Radio/Radio';
import classes from './ReferrerIncentiveBlock.module.scss';
import CreateCampaignBox from '../CreateCampaignBox';
import Image from 'next/image';
import { useState } from 'react';
import AutomaticDiscountPng from '../../../../app/assets/images/create-campaign/automatic-discount-6.png';
import AutomaticCreatedGiftCardPng from '../../../../app/assets/images/create-campaign/automatically-created-gift-card.png';
import ManualAddCustomCodesPng from '../../../../app/assets/images/create-campaign/manually-added-custom-discount-codes.png';
import ManualRewardPng from '../../../../app/assets/images/create-campaign/manual-reward.png';
import HelperText from '@/components/partials/HelperText/HelperText';
import AutomaticallyCreatedDiscountForm from './AutomaticallyCreatedDiscountForm';
import { motion } from 'framer-motion';

const HELPER_TEXT = {
  "automatic-created-discount": "This option will automatically generate discount codes for you. Set it, and forget it!"
}

export default function ReferrerIncentiveBlock() {
  const [checkedValue, setCheckedValue] = useState("");

  return (
    <>
      <HelperText
        text={<>{HELPER_TEXT[checkedValue as keyof typeof HELPER_TEXT]}</>}
      >
        <div className={classes.ReferrerIncentiveBlock}>
          <Radio>
            <Radio.Block
              isActive={checkedValue === "automatic-created-discount"}
              activeState={
                <CreateCampaignBox
                  active={checkedValue === "automatic-created-discount"}
                  icon={<Image src={AutomaticDiscountPng} alt="" />}
                  title="Automatically-Created Discount"
                  description=""
                />
              }
              name="referrer-incentive"
              value="automatic-created-discount"
              onChange={({ target }) => setCheckedValue(target.value)}
            >
              <CreateCampaignBox
                icon={<Image src={AutomaticDiscountPng} alt="" />}
                title="Automatically-Created Discount"
                description=""
              />
            </Radio.Block>

            <Radio.Block
              isActive={checkedValue === "automatic-created-gift-card"}
              activeState={
                <CreateCampaignBox
                  active={checkedValue === "automatic-created-gift-card"}
                  icon={<Image src={AutomaticCreatedGiftCardPng} alt="" />}
                  title="Automatically-Created Gift Card"
                  description=""
                />
              }
              name="referrer-incentive"
              value="automatic-created-gift-card"
              onChange={({ target }) => setCheckedValue(target.value)}
            >
              <CreateCampaignBox
                icon={<Image src={AutomaticCreatedGiftCardPng} alt="" />}
                title="Automatically-Created Gift Card"
                description=""
              />
            </Radio.Block>

            <Radio.Block
              isActive={checkedValue === "manually-added-custom-codes"}
              activeState={
                <CreateCampaignBox
                  active={checkedValue === "manually-added-custom-codes"}
                  icon={<Image src={ManualAddCustomCodesPng} alt="" />}
                  title="Manually-Added Custom Codes"
                  description=""
                />
              }
              name="referrer-incentive"
              value="manually-added-custom-codes"
              onChange={({ target }) => setCheckedValue(target.value)}
            >
              <CreateCampaignBox
                icon={<Image src={ManualAddCustomCodesPng} alt="" />}
                title="Manually-Added Custom Codes"
                description=""
              />
            </Radio.Block>

            <Radio.Block
              isActive={checkedValue === "no-or-manual-reward"}
              activeState={
                <CreateCampaignBox
                  active={checkedValue === "no-or-manual-reward"}
                  icon={<Image src={ManualRewardPng} alt="" />}
                  title="No Reward / Manual Reward"
                  description=""
                />
              }
              name="referrer-incentive"
              value="no-or-manual-reward"
              onChange={({ target }) => setCheckedValue(target.value)}
            >
              <CreateCampaignBox
                icon={<Image src={ManualRewardPng} alt="" />}
                title="No Reward / Manual Reward"
                description=""
              />
            </Radio.Block>
          </Radio>
        </div>
      </HelperText>

      <motion.div initial={{ display: 'none' }} animate={checkedValue === "automatic-created-discount" ? { display: 'block' } : {}}>
        <AutomaticallyCreatedDiscountForm />
      </motion.div>
    </>
  )
}