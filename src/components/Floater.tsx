import { ReactNode } from 'react'

export function Floater({ children }: { children: ReactNode }) {
    return (
        <span className="absolute bottom-4 left-4 rounded-full bg-purple-50 px-[.9375rem] py-[.4375rem] text-xs font-semibold text-purple-950 md:text-[.875rem]">
            {children}
        </span>
    )
}
