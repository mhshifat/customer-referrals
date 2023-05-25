"use client";
import Radio from "@/components/ui/Radio/Radio";
import classes from "./CampaignGoalBlock.module.scss";
import CreateCampaignBox from "../CreateCampaignBox";
import BasketPng from "../../../app/assets/images/create-campaign/basket.png";
import EnvelopePng from "../../../app/assets/images/create-campaign/envelop.png";
import Image from "next/image";
import { useState } from "react";
import Grid from "@/components/ui/Grid/Grid";

export default function CampaignGoalBlock() {
  const [checkedValue, setCheckedValue] = useState('');

	return (
		<Grid className={classes.CampaignGoalBlock}>
			<Radio>
				<Radio.Block
          isActive={checkedValue === 'more-purchase'}
					activeState={
						<CreateCampaignBox
              active={checkedValue === 'more-purchase'}
							icon={<Image src={BasketPng} alt="" />}
							title="More purchases"
							description="Once a referred friend places an order using the discount code sent to them, the referrer will be rewarded!"
						/>
					}
					name="campaign-goal"
          value='more-purchase'
          onChange={({ target }) => setCheckedValue(target.value)}
				>
					<CreateCampaignBox
						icon={<Image src={BasketPng} alt="" />}
						title="More purchases"
						description="Once a referred friend places an order using the discount code sent to them, the referrer will be rewarded!"
					/>
				</Radio.Block>
				<Radio.Block
          isActive={checkedValue === "newsletter-sign-ups"}
					activeState={
						<CreateCampaignBox
              active={checkedValue === "newsletter-sign-ups"}
							icon={<Image src={EnvelopePng} alt="" />}
							title="Newsletter sign-ups"
							description="When friends sign up for your mailing list, the referrer who sent them will be rewarded."
						/>
					}
					name="campaign-goal"
          value="newsletter-sign-ups"
          onChange={({ target }) => setCheckedValue(target.value)}
				>
					<CreateCampaignBox
						icon={<Image src={EnvelopePng} alt="" />}
						title="Newsletter sign-ups"
						description="When friends sign up for your mailing list, the referrer who sent them will be rewarded."
					/>
				</Radio.Block>
			</Radio>
		</Grid>
	);
}
