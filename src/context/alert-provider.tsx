import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useRef, useState } from "react";

interface AlertProviderState {
  isShow: boolean
  continueCallbacks: (() => void)[]
  setIsShow: Dispatch<SetStateAction<boolean>>
  show(): void
}


export const AlertProviderContext =
  createContext<AlertProviderState>({} as AlertProviderState);

export function AlertProvider({ children }: PropsWithChildren) {
  const [isShow, setIsShow] = useState(false)
  const continueCallbacks = useRef<(() => void)[]>([])

  const show = () => {
    setIsShow(true)
  }

  return <AlertProviderContext.Provider value={{ isShow, continueCallbacks: continueCallbacks.current, setIsShow, show }}>{children}</AlertProviderContext.Provider>
}

export function useAlert() {
  return useContext(AlertProviderContext)
}