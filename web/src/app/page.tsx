import CreateCampaignDialogModal from "@/components/modules/campaign/CreateCampaignDialogModal";
import classes from "./Dashboard.module.scss";
import DashboardStatsBlock from "@/components/modules/dashboard/DashboardStatsBlock";
import Grid from "@/components/ui/Grid/Grid";
import PageTitle from "@/components/partials/PageTitle/PageTitle";
import Button from "@/components/ui/Button/Button";
import DashboardLineChartBlock from "@/components/modules/dashboard/DashboardLineChartBlock";
import Label from "@/components/ui/Label/Label";
import { Poppins } from "next/font/google";
import classNames from 'classnames';
import CampaignCard from "@/components/modules/campaign/CampaignCard";

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500"] })

export default function Home() {
  return (
    <div className={classes.Dashboard}>
      <CreateCampaignDialogModal />

      <Grid columns="1fr 1fr 1fr">
        <DashboardStatsBlock
          title="$3,000"
          desc="Total Earning To Date"
        />
        <DashboardStatsBlock
          title="120"
          desc="Total referrals to date"
        />
        <DashboardStatsBlock
          title="232"
          desc="Total Active Campaign"
        />
      </Grid>

      <PageTitle
				title="Dashboard"
				primaryBtn={
					<Button width="150px" variant="primary">
						+ New Campaign
					</Button>
				}
			/>

      <Grid columns="1fr 1fr">
        <DashboardLineChartBlock />
        <DashboardLineChartBlock />
        <DashboardLineChartBlock />
        <DashboardLineChartBlock />
      </Grid>

      <Label className={classNames(poppins.className, classes.Dashboard__SectionTitle)}>Top Performing Campaigns</Label>
      <Grid columns="1fr 1fr 1fr">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard mode="incomplete" />
      </Grid>
    </div>
  )
}
