"use client";
import Modal from '@/components/ui/Modal';
import CreateCampaign from '../../../../app/assets/svg/create-campaign.svg';
import classes from "./CreateCampaignDialogModal.module.scss";
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Button from '@/components/ui/Button/Button';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export default function CreateCampaignDialogModal() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(true);

  const handleGoToCreateCampaign = useCallback(() => {
    setClicked(true);
    router.push("/campaigns/create")
  }, [router]);
  return (
    <>
      <Modal open={open} title="Click me to open Modal">
        <Modal.Body>
          <div className={classes.CreateCampaignDialogModal}>
            <h5 className={poppins.className}>Create Your First</h5>
            <h3 className={poppins.className}>Referral Campaign</h3>
            <div>
              <CreateCampaign />
            </div>
            <Button width='194px' loading={clicked} variant='primary-no-outlined' onClick={handleGoToCreateCampaign}>
              <span>Create Campaign</span>
              <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0625 1.66357L10 5.66357L6.0625 9.66357M1 5.66357L10 5.66357L1 5.66357Z" stroke="#4765F0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}