"use client";
import { Poppins } from "next/font/google";
import classes from "./Select.module.scss";
import {
	useState,
	useImperativeHandle,
	useCallback,
	InputHTMLAttributes,
	ForwardedRef,
	useEffect,
	useRef,
	forwardRef,
	ReactElement,
	isValidElement,
} from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import classNames from "classnames";
import Dropdown from "../Dropdown";

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
	options: { label: string; value: string }[] | ReactElement;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

function Select(
	{ options, placeholder, ...props }: SelectProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	const internalRef = useRef<HTMLInputElement>(null);
	const [selectOptionsOpened, setSelectOptionsOpened] = useState(false);
  const [selectValue, setSelectValue] = useState('');

	const triggerOnChange = useCallback((value: string) => {
    setSelectValue(value);
		const setValue = Object.getOwnPropertyDescriptor(
			HTMLInputElement.prototype!,
			"value"
		)!.set;
		const event = new Event("input", { bubbles: true });
		const node = internalRef.current!;
		setValue!.call(node, value);
		node.dispatchEvent(event);
    setSelectOptionsOpened(false);
	}, []);

	useImperativeHandle(ref, () => internalRef.current!);

	return (
		<>
			<Dropdown>
        <Dropdown.Element onToggle={(value) => setSelectOptionsOpened(value)}>
          <div
            className={classNames(classes.Select, {
              [classes.Select__Active]: selectOptionsOpened,
            })}
            style={{ opacity: selectOptionsOpened ? 1 : "0.5" }}
          >
            <input
              hidden
              type="text"
              {...props}
              onChange={(e) => console.log(e.target.value)}
              ref={internalRef}
            />
            <span
              className={classNames(poppins.className, classes.Select__Selected)}
            >
              {selectValue || placeholder}
            </span>
            {selectOptionsOpened ? <IoChevronUp /> : <IoChevronDown />}
          </div>
        </Dropdown.Element>
				<Dropdown.Body>
          {isValidElement(options) ? (
            options
          ) : Array.isArray(options) ? (
            <ul className={classes.Select__Options}>
              {options.map((opt) => (
                <li key={opt.label + Math.random() * 999999} onClick={() => triggerOnChange(opt.value)} className={poppins.className}>{opt.label}</li>
              ))}
            </ul>
          ) : null}
        </Dropdown.Body>
			</Dropdown>
		</>
	);
}

export default forwardRef(Select);
