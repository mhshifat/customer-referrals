import Label from "@/components/ui/Label/Label";
import classes from "./CampaignInformationBlock.module.scss";
import Input from "@/components/ui/Input/Input";

export default function CampaignInformationBlock() {
  return (
    <div className={classes.CampaignInformationBlock}>
      <Label>Campaign Information</Label>
      <Input
        placeholder="Invite 5, Get $15 Off"
      />
    </div>
  )
}