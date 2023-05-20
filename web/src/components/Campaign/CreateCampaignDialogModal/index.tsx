"use client";
import Modal from '@/components/ui/Modal';
import CreateCampaign from '../../../app/assets/svg/create-campaign.svg';
import classes from "./CreateCampaignDialogModal.module.scss";
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export default function CreateCampaignDialogModal() {
  const router = useRouter();

  return (
    <>
      <Modal title="Click me to open Modal">
        <Modal.Trigger>
          <button>Click me to open Modal</button>
        </Modal.Trigger>
        <Modal.Body>
          <div className={classes.CreateCampaignDialogModal}>
            <h5 className={poppins.className}>Create Your First</h5>
            <h3 className={poppins.className}>Referral Campaign</h3>
            <div>
              <CreateCampaign />
            </div>
            <button className={poppins.className} onClick={() => router.push("/campaigns/create")}>
              <span>Create Campaign</span>
              <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0625 1.66357L10 5.66357L6.0625 9.66357M1 5.66357L10 5.66357L1 5.66357Z" stroke="#4765F0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}