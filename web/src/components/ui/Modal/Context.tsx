"use client";
import { Nullable } from "@/interfaces";
import { useRouter } from "next/navigation";
import {
	PropsWithChildren,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

interface ModalCtxState {
  openedModalString: string;
	toggle: (identifier: string, toggleValue: boolean) => void;
}

const ModalCtx = createContext<Nullable<ModalCtxState>>(null);

export default function ModalProvider({ children, showNavigationUrl }: PropsWithChildren<{ showNavigationUrl?: boolean }>) {
  const router = useRouter();
	const [openedModalString, setOpenedModalString] = useState("");

	const toggle = useCallback((identifier: string, toggleValue: boolean) => {
		setOpenedModalString((value) => {
      const newValue = toggleValue
        ? value.split(",").filter(Boolean).concat(identifier).join(",")
        : value
            .split(",")
            .filter(Boolean)
            .filter((str) => str !== identifier)
            .join(",");
      if (showNavigationUrl) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        if (newValue?.length) urlSearchParams.set('modal', newValue);
        else urlSearchParams.delete('modal');
        router.push(`${window.location.pathname}?${urlSearchParams.toString()}`, {
          forceOptimisticNavigation: true
        })
      }
      return newValue;
    });
	}, [router, showNavigationUrl]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const modalSearchParams = urlSearchParams.get('modal');
    modalSearchParams && setOpenedModalString(modalSearchParams);
  }, []);

	return (
		<ModalCtx.Provider value={{ toggle, openedModalString }}>
			{children}
		</ModalCtx.Provider>
	);
}

export const useModal = () => {
	const res = useContext(ModalCtx);
	if (!res)
		throw new Error(
			'Please wrap your component with "ModalProvider" component'
		);
	return res;
};
