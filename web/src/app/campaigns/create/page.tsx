import CampaignGoalBlock from "@/components/Campaign/CampaignGoalBlock";
import CampaignInformationBlock from "@/components/Campaign/CampaignInformationBlock";
import CreateCampaignBlock from "@/components/Campaign/CreateCampaignBlock";
import DisplayTypeBlock from "@/components/Campaign/DisplayTypeBlock";
import ReferralLinkTypeBlock from "@/components/Campaign/ReferralLinkTypeBlock";
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
			<CreateCampaignBlock
				number={1}
				title="Campaign Information"
				subTitle="Give your campaign a descriptive name. The name won't be publicly visible - it's for your eyes only."
			>
				<CampaignInformationBlock />
			</CreateCampaignBlock>
			<CreateCampaignBlock
				number={2}
				title="Campaign Goal"
				subTitle="What would you like to reward your referrers for? If you are in pre-launch, you can reward referrers for friend newsletter sign ups. Otherwise, reward referrers for friends placing orders."
			>
				<CampaignGoalBlock />
			</CreateCampaignBlock>
			<CreateCampaignBlock
				number={3}
				title="Display Type"
				subTitle="How do you want to display your campaign? Instructions for installation and styling for your campaign will be provided on the next page. NOTE: You can create multiple campaigns with different display types to give your customers more opportunities to share!"
			>
				<DisplayTypeBlock />
			</CreateCampaignBlock>
			<CreateCampaignBlock
				number={4}
				title="Referral Link Type"
				subTitle=""
			>
				<ReferralLinkTypeBlock />
			</CreateCampaignBlock>
		</div>
	);
}
