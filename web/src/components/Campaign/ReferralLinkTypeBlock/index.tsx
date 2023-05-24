"use client";
import Radio from "@/components/ui/Radio/Radio";
import classes from "./ReferralLinkTypeBlock.module.scss";
import CreateCampaignBox from "../CreateCampaignBox";
import { useState } from "react";
import UsersPng from "../../../app/assets/images/create-campaign/users.png";
import ChainsPng from "../../../app/assets/images/create-campaign/chain.png";
import Image from "next/image";

export default function ReferralLinkTypeBlock({}) {
	const [checkedValue, setCheckedValue] = useState("");

	return (
		<div className={classes.ReferralLinkTypeBlock}>
			<Radio>
				<Radio.Block
					isActive={checkedValue === "unique-each-referral"}
					activeState={
						<CreateCampaignBox
							active={checkedValue === "unique-each-referral"}
							icon={<Image src={UsersPng} alt="" />}
							title="Unique to each referral (recommended)"
							description="Each time a referral is made, even by the same referrer, a new referral link will be generated. This option is better for reporting because claims are tied to a specific referral instance."
						/>
					}
					name="referral-link-type"
					value="unique-each-referral"
					onChange={({ target }) => setCheckedValue(target.value)}
				>
					<CreateCampaignBox
						icon={<Image src={UsersPng} alt="" />}
						title="Unique to each referral (recommended)"
						description="Each time a referral is made, even by the same referrer, a new referral link will be generated. This option is better for reporting because claims are tied to a specific referral instance."
					/>
				</Radio.Block>
        <Radio.Block
					isActive={checkedValue === "unique-each-referrer"}
					activeState={
						<CreateCampaignBox
							active={checkedValue === "unique-each-referrer"}
							icon={<Image src={ChainsPng} alt="" />}
							title="Unique to each referrer"
							description="When a new referrer signs up, they are assigned a unique referral link. The link does not change no matter how many times a new referral is sent. This option enables the referrer to remember their link more easily."
						/>
					}
					name="referral-link-type"
					value="unique-each-referrer"
					onChange={({ target }) => setCheckedValue(target.value)}
				>
					<CreateCampaignBox
						icon={<Image src={ChainsPng} alt="" />}
						title="Unique to each referrer"
						description="When a new referrer signs up, they are assigned a unique referral link. The link does not change no matter how many times a new referral is sent. This option enables the referrer to remember their link more easily."
					/>
				</Radio.Block>
			</Radio>
		</div>
	);
}
