import { PropsWithChildren, ReactElement, useEffect, useId } from 'react';
import classes from "./Accordion.module.scss";
import { useAccordion } from './Context';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface AccordionItemProps {
  trigger: ReactElement;
}

export default function AccordionItem({ trigger, children }:PropsWithChildren<AccordionItemProps>) {
  const id = useId();
  const { register, toggle, isCurrentlyOpen } = useAccordion();

  useEffect(() => {
    register(id);
  }, [id, register]);

  return (
    <div className={classes.Accordion}>
      <div className={classes.Accordion__Trigger} onClick={() => toggle(id)}>
        {trigger}
        <svg width={10} height={7} viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.4458L5 5.4458L9 1.4458" stroke="#78848D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <motion.div initial={{ display: 'none' }} animate={isCurrentlyOpen(id) ? { display: 'block' } : {}} className={classNames(classes.Accordion__Body)}>
        {children}
      </motion.div>
    </div>
  )
}