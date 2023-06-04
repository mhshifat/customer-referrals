import CampaignGoalBlock from "@/components/modules/campaign/CampaignGoalBlock";
import CampaignInformationBlock from "@/components/modules/campaign/CampaignInformationBlock";
import CreateCampaignBlock from "@/components/modules/campaign/CreateCampaignBlock";
import DisplayTypeBlock from "@/components/modules/campaign/DisplayTypeBlock";
import FriendIncentiveBlock from "@/components/modules/campaign/FriendIncentiveBlock";
import ReferralLinkTypeBlock from "@/components/modules/campaign/ReferralLinkTypeBlock";
import ReferrerIncentiveBlock from "@/components/modules/campaign/ReferrerIncentiveBlock";
import FloatingActionBar from "@/components/partials/FloatingActionBar/FloatingActionBar";
import PageTitle from "@/components/partials/PageTitle/PageTitle";
import Button from "@/components/ui/Button/Button";
import classes from "./CreateCampaign.module.scss";
import { Poppins } from "next/font/google";
import CampaignCreatedSuccessfullyModal from "@/components/modules/campaign/CampaignCreatedSuccessfullyModal";

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

export default function CreateCampaign() {
	return (
		<div className={classes.CreateCampaign}>
			<PageTitle
				title="New Referral Campaign"
				primaryBtn={
          <CampaignCreatedSuccessfullyModal>
            <Button width="129px" variant="primary">
              Save As Draft
            </Button>
          </CampaignCreatedSuccessfullyModal>
				}
			/>
      <FloatingActionBar>
        <div className={classes.CreateCampaign__FloatingBar}>
          <div>
            <svg width={26} height={21} viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.8056 0.679494C17.6656 0.704994 15.3197 1.505 12.5925 2.45723L7.63396 4.18855L5.84864 4.19033C4.58471 4.1916 3.95186 4.21206 3.6816 4.26047C2.00321 4.56106 0.64334 5.93249 0.133147 7.83904C0.0135896 8.28592 0 8.42747 0 9.22737C0 10.0223 0.0139967 10.1703 0.130246 10.6042C0.545516 12.1541 1.48238 13.3434 2.73598 13.9118C3.17257 14.1097 3.6223 14.218 4.14949 14.2522L4.59774 14.2812V16.9988C4.59774 19.6015 4.60197 19.7245 4.69796 19.9127C4.75308 20.0207 4.88475 20.1629 4.99062 20.2287C5.17146 20.3412 5.2307 20.3483 5.97197 20.3466C6.86654 20.3445 6.99541 20.3066 7.21747 19.9797C7.38955 19.7265 7.39556 19.3434 7.23127 19.0962C7.08509 18.8762 6.72891 18.6942 6.4447 18.6942H6.22645V16.4802V14.2662H6.91972H7.61304L12.5648 15.9936C15.2883 16.9437 17.6602 17.7471 17.8358 17.779C18.9063 17.9731 20.057 17.3484 20.6177 16.2689C21.0403 15.4552 21.0121 15.9571 21.0121 9.25281C21.0121 2.7334 21.0275 3.07843 20.7035 2.36877C20.4333 1.77694 20.0328 1.32568 19.4597 0.967369C19.0814 0.7309 18.2845 0.592206 17.8056 0.679494ZM24.0518 1.60776C23.5961 1.81409 23.1574 2.03158 23.077 2.09103C22.8883 2.23053 22.7449 2.59893 22.7886 2.83188C22.8629 3.22756 23.2093 3.52663 23.5935 3.52678C23.7146 3.52683 24.0358 3.41517 24.4842 3.21712C25.726 2.66876 25.8284 2.5861 25.862 2.10405C25.8783 1.87135 25.8609 1.79139 25.7628 1.64837C25.5857 1.39043 25.4009 1.27565 25.1258 1.25285C24.9077 1.23483 24.7878 1.27443 24.0518 1.60776ZM16.7622 2.73895C15.5854 3.15605 14.9096 3.39252 11.7233 4.50192C10.8416 4.80898 9.77653 5.18165 9.35663 5.33007L8.59317 5.59998L8.5808 9.23327L8.56838 12.8665L9.70054 13.2567C10.9023 13.6709 15.4905 15.2715 17.0675 15.8266C17.8918 16.1168 18.045 16.1556 18.2968 16.1381C18.5142 16.123 18.6305 16.0831 18.773 15.9744C18.992 15.8074 19.2318 15.4499 19.321 15.1576C19.3687 15.0015 19.3834 13.5962 19.3834 9.20192V3.45054L19.2699 3.1706C19.0425 2.60967 18.6596 2.30113 18.202 2.31019C18.0354 2.3135 17.5796 2.44924 16.7622 2.73895ZM3.54718 5.98965C2.71618 6.29849 2.02418 7.14221 1.73855 8.19482C1.58641 8.75535 1.58738 9.70259 1.74058 10.2678C2.07869 11.5152 2.95137 12.4161 3.98698 12.5868C4.18044 12.6187 4.85681 12.6353 5.61569 12.6267L6.91356 12.612L6.92665 9.24009L6.93973 5.86815L5.39973 5.8708C3.92488 5.87335 3.8465 5.87838 3.54718 5.98965ZM10.6521 7.81512C10.3016 8.05134 10.2728 8.16438 10.2728 9.30371C10.2728 10.2389 10.2813 10.3361 10.3773 10.4996C10.7019 11.0522 11.4723 11.0522 11.7969 10.4996C11.893 10.3361 11.9015 10.2389 11.9015 9.30371C11.9015 8.36853 11.893 8.27131 11.7969 8.10778C11.6375 7.83635 11.4007 7.70045 11.0871 7.70045C10.8966 7.70045 10.7745 7.73267 10.6521 7.81512ZM23.3279 8.44828C22.811 8.65233 22.6242 9.29333 22.9552 9.72733C23.1734 10.0134 23.3071 10.0417 24.4385 10.0417C25.4042 10.0417 25.4582 10.0365 25.6188 9.9272C25.9078 9.73048 26 9.56125 26 9.22737C26 8.90554 25.9167 8.74298 25.6497 8.54341C25.5197 8.4462 25.4317 8.4377 24.4568 8.42833C23.8779 8.42273 23.3699 8.43169 23.3279 8.44828ZM23.249 14.9966C22.7617 15.2178 22.6203 15.8688 22.9726 16.27C23.1705 16.4954 24.7877 17.2182 25.0939 17.2182C25.4906 17.2182 25.8728 16.8261 25.8728 16.4192C25.8728 15.9412 25.7068 15.7902 24.6727 15.3269C23.8134 14.942 23.5196 14.8738 23.249 14.9966Z" fill="#4765F0" />
            </svg>
            <span className={poppins.className}>Steps <strong>1</strong> of 6: <strong>Campaign Information</strong></span>
          </div>

          <div>
            <span className={poppins.className}>Next: <strong>Campaign Goal</strong></span>
            <Button disabled variant="primary" width="84px">
              <span className={poppins.className} style={{ marginRight: "10px" }}>Next</span>
              <svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0625 0.999999L10 5L6.0625 9M1 5L10 5L1 5Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
        </div>
      </FloatingActionBar>
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
			<CreateCampaignBlock number={4} title="Referral Link Type" subTitle="">
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
			{/* Referrer Incentive */}
			<CreateCampaignBlock
				number={6}
				title="Referrer Incentive"
				subTitle='We call the user that sends the referral an "referrer". When a user referred by an referrer makes a successful purchase, the referrer receives a reward in the form of a discount. Choose what kind of discount/reward they receive.'
			>
				<ReferrerIncentiveBlock />
			</CreateCampaignBlock>
		</div>
	);
}
