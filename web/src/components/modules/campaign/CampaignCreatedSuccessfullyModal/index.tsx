"use client";
import Modal from '@/components/ui/Modal';
import ReferralCampaignCreatedSuccessfullyPng from '../../../../app/assets/images/create-campaign/referral-campaign-created-successfully.png';
import classes from "./CampaignCreatedSuccessfullyModal.module.scss";
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useCallback, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import Image from 'next/image';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export default function CampaignCreatedSuccessfullyModal({ children }: PropsWithChildren) {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleGoToDashboard = useCallback(() => {
    router.push("/");
  }, [router]);
  const handleGoToAdvanceSettings = useCallback(() => {
    setClicked(true);
    router.push("/campaigns/1");
  }, [router]);
  return (
    <>
      <Modal title="Campaign Created Successfully Modal">
        <Modal.Trigger>
          {children}
        </Modal.Trigger>
        <Modal.Body>
          <div className={classes.CampaignCreatedSuccessfullyModal}>
            <div className={classes.CampaignCreatedSuccessfullyModal__Header}>
              <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1573 8.49985L16.6562 2.00102C17.1152 1.542 17.1152 0.802297 16.6562 0.343284C16.1972 -0.11573 15.4575 -0.11573 14.9984 0.343284L8.49961 6.84212L2.00077 0.343284C1.54176 -0.11573 0.802052 -0.11573 0.343039 0.343284C-0.115974 0.802297 -0.115974 1.542 0.343039 2.00102L6.84187 8.49985L0.343039 14.9987C-0.115974 15.4577 -0.115974 16.1974 0.343039 16.6564C0.570895 16.8843 0.8714 16.9999 1.1719 16.9999C1.47241 16.9999 1.77291 16.8843 2.00077 16.6564L8.49961 10.1576L14.9984 16.6564C15.2263 16.8843 15.5268 16.9999 15.8273 16.9999C16.1278 16.9999 16.4283 16.8843 16.6562 16.6564C17.1152 16.1974 17.1152 15.4577 16.6562 14.9987L10.1573 8.49985Z" fill="#D9E3FA" />
              </svg>
            </div>
            <div>
              <Image src={ReferralCampaignCreatedSuccessfullyPng} alt='' />
            </div>
            <h3 className={poppins.className}>Referral Campaign Created Successfully!</h3>
            <p className={poppins.className}>For adjusting campaign appearance or refining automated email settings, go to the Advanced Settings.</p>
            
            <div className={classes.CampaignCreatedSuccessfullyModal__Footer}>
              <Button width='170px' variant='secondary' onClick={handleGoToDashboard}>
                <span>Back to Dashboard</span>
              </Button>
              <Button width='170px' loading={clicked} variant='primary' onClick={handleGoToAdvanceSettings}>
                <span>Advanced Settings</span>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}