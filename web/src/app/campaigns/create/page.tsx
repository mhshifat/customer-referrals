import CampaignInformationBlock from "@/components/Campaign/CampaignInformationBlock";
import CreateCampaignBlock from "@/components/Campaign/CreateCampaignBlock";
import PageTitle from "@/components/partials/PageTitle/PageTitle";
import Button from "@/components/ui/Button/Button";
import Label from "@/components/ui/Label/Label";

export default function CreateCampaign() {
  return (
    <div>
      <PageTitle
        title="New Referral Campaign"
        primaryBtn={<Button variant="primary">Save As Draft</Button>}
      />
      <CreateCampaignBlock
        number={1}
        title="Campaign Information"
        subTitle="Give your campaign a descriptive name. The name won't be publicly visible - it's for your eyes only."
      >
        <CampaignInformationBlock />
      </CreateCampaignBlock>
    </div>
  )
}