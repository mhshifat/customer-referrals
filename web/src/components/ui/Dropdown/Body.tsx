"use client";
import classes from "./Dropdown.module.scss";
import {
	PropsWithChildren,
	useState,
	useEffect,
	useCallback,
	useMemo,
	useRef,
	createRef,
} from "react";
import { createPortal } from "react-dom";
import { motion, useAnimationControls } from "framer-motion";
import debounce from "lodash.debounce";
import { useDropdown } from "./Context";

export default function DropdownBody({
	children,
	elementRef,
	fullWidth = true,
}: PropsWithChildren<{ elementRef?: HTMLDivElement, fullWidth?: boolean }>) {
  const controls = useAnimationControls()
	const [position, setPosition] = useState({
		x: -99999999,
		y: -99999999,
		width: 0,
		height: 0,
		opacity: 0,
		placement: 'bottom'
	});
  const { isOpen, toggleDropdown } = useDropdown();
	const elRef = useRef<DOMRect | null>(null);

	const calculateCurrentElementPos = useCallback(() => {
		if (!elementRef) return;
		const boundingPos = elementRef?.getBoundingClientRect();
		if (boundingPos?.x && boundingPos.y) {
			setPosition({
				x: boundingPos.x,
				y: boundingPos.y + boundingPos.height + 10,
				width: boundingPos.width,
				height: boundingPos.height,
				opacity: 0,
				placement: 'bottom'
			});
		}
		setTimeout(() => {
			const isOutOfBottom =
				(elRef.current?.bottom || 0) >
				(window.innerHeight || document.documentElement.clientHeight);
			const isOutOfRight =
				(elRef.current?.right || 0) >
				(window.innerWidth || document.documentElement.clientWidth);
      
			if (isOutOfBottom) {
        if (isOutOfRight) {
          setPosition({
            x: boundingPos.x - ((elRef.current?.width || 0) + 10),
            y: boundingPos.y - ((elRef.current?.height || 0) + 10),
            width: boundingPos.width,
            height: boundingPos.height,
            opacity: 1,
            placement: 'top'
          });
          controls.start({
            transform: 'translateY(0)',
            opacity: 1
          });
          return;
        }
				setPosition({
					x: boundingPos.x,
					y: boundingPos.y - ((elRef.current?.height || 0) + 10),
					width: boundingPos.width,
					height: boundingPos.height,
					opacity: 1,
					placement: 'top'
				});
        controls.start({
          transform: 'translateY(0)',
          opacity: 1
        });
			} else {
        if (isOutOfRight) {
          setPosition({
            x: boundingPos.x,
            y: boundingPos.y + boundingPos.height + 10,
            width: boundingPos.width,
            height: boundingPos.height,
            opacity: 1,
            placement: 'top'
          });
          controls.start({
            transform: 'translateY(0)',
            opacity: 1
          });
          return;
        }
        setPosition({
          x: boundingPos.x,
          y: boundingPos.y + boundingPos.height + 10,
          width: boundingPos.width,
          height: boundingPos.height,
          opacity: 0,
          placement: 'bottom'
        });
        controls.start({
          transform: 'translateY(0)',
          opacity: 1
        });
      }
		}, 100);
	}, [controls, elementRef]);

	useEffect(() => {
    if (!isOpen) return setPosition({
      x: -99999999,
      y: -99999999,
      width: 0,
      height: 0,
      opacity: 0,
      placement: 'bottom'
    });
		calculateCurrentElementPos();
	}, [calculateCurrentElementPos, isOpen]);

	useEffect(() => {
		const handleWheelEvent = debounce(() => {
			calculateCurrentElementPos();
		}, 500);
		window.addEventListener("wheel", handleWheelEvent);

		return () => {
			window.removeEventListener("wheel", handleWheelEvent);
		};
	}, [calculateCurrentElementPos]);

	useEffect(() => {
		const handleOutsideEvent = (e: MouseEvent) => {
      if (!document.querySelector(`.${classes.Dropdown}`)?.contains(e.target as Node) && !elementRef?.contains(e.target as Node)) {
        toggleDropdown(false);
      }
		};
		window.addEventListener("click", handleOutsideEvent);

		return () => {
			window.removeEventListener("click", handleOutsideEvent);
		};
	}, [calculateCurrentElementPos, elementRef, toggleDropdown]);

	return elementRef && isOpen ? (
		<>
			{document &&
				createPortal(
					<motion.div
						style={{
							top: position.y,
							left: position.x,
							width: fullWidth ? position.width : 'max-content',
							opacity: position.opacity,
						}}
            initial={{ transform: position.placement === 'top' ? "translateY(-100px)" : "translateY(100px)", opacity: position.opacity }}
						animate={controls}
						className={classes.Dropdown}
					>
						<div
							ref={(el) => {
								if (!el) return;
								const data = el?.getBoundingClientRect();
								if (data) {
									elRef.current = data;
								}
							}}
						>
							{children}
						</div>
					</motion.div>,
					document.querySelector("body")!
				)}
		</>
	) : null;
}
