import ModalProvider from "@/components/ui/Modal/Context";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ModalProvider showNavigationUrl>
      {children}
    </ModalProvider>
  )
}