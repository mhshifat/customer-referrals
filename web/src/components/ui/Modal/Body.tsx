"use client";
import { PropsWithChildren, useMemo } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";
import { useModal } from "./Context";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalBody({
	children,
	identifier,
}: PropsWithChildren<{ identifier?: string }>) {
	const { openedModalString, toggle } = useModal();
	const isModalOpen = useMemo(
		() => openedModalString.includes(identifier!),
		[identifier, openedModalString]
	);
  const isCurrentlyOpen = useMemo(() => {
    return openedModalString.split(",").filter(Boolean).reverse()[0] === identifier
  }, [identifier, openedModalString]);

	return isModalOpen
		? createPortal(
				<div className={classes.ModalBody} style={{ zIndex: !isCurrentlyOpen ? -1 : 1 }} onClick={() => toggle(identifier!, false)}>
					<AnimatePresence>
            <motion.div
              className={classes.ModalBody__Wrapper}
              onClick={(e) => e.stopPropagation()}
              initial={{
                transform: "translateY(10px)",
                visibility: "hidden",
                pointerEvents: "none",
                opacity: 0,
              }}
              animate={{
                transform: isCurrentlyOpen ? "translateY(0px)" : 'translateY(10px)',
                visibility: isCurrentlyOpen ? "visible" : 'hidden',
                pointerEvents: isCurrentlyOpen ? "all" : 'none',
                opacity: isCurrentlyOpen ? 1 : 0,
              }}
              exit={{
                transform: "translateY(10px)",
                visibility: "hidden",
                pointerEvents: "none",
                opacity: 0,
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
				</div>,
				document.body
		  )
		: null;
}
