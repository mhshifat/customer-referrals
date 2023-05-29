'use client';
import {
	ButtonHTMLAttributes,
	ForwardedRef,
	PropsWithChildren,
	forwardRef,
} from "react";
import classnames from "classnames";
import classes from "./Button.module.scss";
import { Poppins } from "next/font/google";
import Loader from "../Loader/Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "primary" | "primary-no-outlined" | 'secondary';
	loading?: boolean;
	width: string;
}

const VARIANT_CSS = {
	primary: "Button__Primary",
	"primary-no-outlined": "Button__PrimaryNoOutlined",
	"secondary": "Button__Secondary",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

function Button(
	{ children, variant, loading, width, ...props }: PropsWithChildren<ButtonProps>,
	ref: ForwardedRef<HTMLButtonElement>
) {
	return (
		<button
			{...props}
			className={classnames([
				poppins.className,
				classes.Button,
				classes[VARIANT_CSS[variant]],
				props.className,
			])}
			ref={ref}
      style={{
        width: width || 'max-content',
      }}
		>
      {loading ? <Loader /> : children}
		</button>
	);
}

export default forwardRef(Button);
