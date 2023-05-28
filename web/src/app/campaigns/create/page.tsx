import CampaignGoalBlock from "@/components/modules/campaign/CampaignGoalBlock";
import CampaignInformationBlock from "@/components/modules/campaign/CampaignInformationBlock";
import CreateCampaignBlock from "@/components/modules/campaign/CreateCampaignBlock";
import DisplayTypeBlock from "@/components/modules/campaign/DisplayTypeBlock";
import FriendIncentiveBlock from "@/components/modules/campaign/FriendIncentiveBlock";
import ReferralLinkTypeBlock from "@/components/modules/campaign/ReferralLinkTypeBlock";
import PageTitle from "@/components/partials/PageTitle/PageTitle";
import Button from "@/components/ui/Button/Button";

export default function CreateCampaign() {
	return (
		<div>
			<PageTitle
				title="New Referral Campaign"
				primaryBtn={
					<Button width="129px" variant="primary">
						Save As Draft
					</Button>
				}
			/>
      {/* Campaign Information */}
			<CreateCampaignBlock
				number={1}
				title="Campaign Information"
				subTitle="Give your campaign a descriptive name. The name won't be publicly visible - it's for your eyes only."
			>
				<CampaignInformationBlock />
			</CreateCampaignBlock>
      {/* Campaign Goal */}
			<CreateCampaignBlock
				number={2}
				title="Campaign Goal"
				subTitle="What would you like to reward your referrers for? If you are in pre-launch, you can reward referrers for friend newsletter sign ups. Otherwise, reward referrers for friends placing orders."
			>
				<CampaignGoalBlock />
			</CreateCampaignBlock>
      {/* Display Type */}
			<CreateCampaignBlock
				number={3}
				title="Display Type"
				subTitle="How do you want to display your campaign? Instructions for installation and styling for your campaign will be provided on the next page. NOTE: You can create multiple campaigns with different display types to give your customers more opportunities to share!"
			>
				<DisplayTypeBlock />
			</CreateCampaignBlock>
      {/* Referral Link Type */}
			<CreateCampaignBlock
				number={4}
				title="Referral Link Type"
				subTitle=""
			>
				<ReferralLinkTypeBlock />
			</CreateCampaignBlock>
      {/* Friend Incentive */}
			<CreateCampaignBlock
				number={5}
				title="Friend Incentive"
				subTitle='The user that receives the referral is a "friend". Choose what kind of incentive to offer the friend, and whether it should only apply to new customers.'
			>
				<FriendIncentiveBlock />
			</CreateCampaignBlock>
		</div>
	);
}
