"use client";
import Radio from "@/components/ui/Radio/Radio";
import classes from "./DisplayTypeBlock.module.scss";
import { useState } from "react";
import CreateCampaignBox from "../CreateCampaignBox";
import Image from "next/image";
import CustomPagePng from "../../../app/assets/images/create-campaign/custom-page.png";
import PostPurchaseModalPng from "../../../app/assets/images/create-campaign/post-purchase-modal.png";
import PostPurchaseEmailPng from "../../../app/assets/images/create-campaign/post-purchase-email.png";

export default function DisplayTypeBlock({}) {
	const [checkedValue, setCheckedValue] = useState("");

	return (
		<div className={classes.DisplayTypeBlock}>
			<Radio>
				<Radio.Block
					isActive={checkedValue === "custom-page"}
					activeState={
						<CreateCampaignBox
							active={checkedValue === "custom-page"}
							icon={<Image src={CustomPagePng} alt="" />}
							title="Custom Page"
							description="Display your referral campaign on any page or template (such as your homepage) within your store."
						/>
					}
					name="display-type"
					value="custom-page"
					onChange={({ target }) => setCheckedValue(target.value)}
				>
					<CreateCampaignBox
						icon={<Image src={CustomPagePng} alt="" />}
						title="Custom Page"
						description="Display your referral campaign on any page or template (such as your homepage) within your store."
					/>
				</Radio.Block>
        <Radio.Block
					isActive={checkedValue === "post-purchase-modal"}
					activeState={
						<CreateCampaignBox
							active={checkedValue === "post-purchase-modal"}
							icon={<Image src={PostPurchaseModalPng} alt="" />}
							title="Post-Purchase Modal"
							description="When friends sign up for your mailing list, the referrer who sent them will be rewarded."
						/>
					}
					name="display-type"
					value="post-purchase-modal"
					onChange={({ target }) => setCheckedValue(target.value)}
				>
					<CreateCampaignBox
						icon={<Image src={PostPurchaseModalPng} alt="" />}
						title="Post-Purchase Modal"
						description="When friends sign up for your mailing list, the referrer who sent them will be rewarded."
					/>
				</Radio.Block>
        <Radio.Block
					isActive={checkedValue === "post-purchase-email"}
					activeState={
						<CreateCampaignBox
							active={checkedValue === "post-purchase-email"}
							icon={<Image src={PostPurchaseEmailPng} alt="" />}
							title="Post-Purchase Email"
							description="Send your customers a custom email prompting them to refer a friend after they make a purchase."
						/>
					}
					name="display-type"
					value="post-purchase-email"
					onChange={({ target }) => setCheckedValue(target.value)}
				>
					<CreateCampaignBox
						icon={<Image src={PostPurchaseEmailPng} alt="" />}
						title="Post-Purchase Email"
						description="Send your customers a custom email prompting them to refer a friend after they make a purchase."
					/>
				</Radio.Block>
			</Radio>
		</div>
	);
}
