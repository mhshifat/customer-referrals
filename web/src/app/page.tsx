import CreateCampaignDialogModal from "@/components/Campaign/CreateCampaignDialogModal";
import AppCanvas from "@/components/partials/AppCanvas/AppCanvas";

export default function Home() {
  return (
    <div>
      <AppCanvas />
      <p>Welcome</p>
      <CreateCampaignDialogModal />
    </div>
  )
}
