'use client'

import { createContext, ReactNode, useState } from 'react'

interface IMenuContext {
    toggle: boolean
    handleSetToggle(): void
}

export const MenuContext = createContext({} as IMenuContext)

export function MenuProvider({ children }: { children: ReactNode }) {
    const [toggle, setToggle] = useState<boolean>(false)

    function handleSetToggle() {
        setToggle((prev) => !prev)
    }

    return (
        <MenuContext.Provider
            value={{
                toggle,
                handleSetToggle,
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}
