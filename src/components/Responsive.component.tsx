'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface IResponsiveProps {
    breakpoint: string
    children: React.ReactNode
}

export function Responsive({ breakpoint, children }: IResponsiveProps) {
    const isMatched = useMediaQuery(`${breakpoint}`)
    const [hasWindow, setHasWindow] = useState(false)

    useEffect(() => {
        typeof window !== 'undefined' && setHasWindow(true)
    }, [])

    if (!isMatched) return null
    return hasWindow && <>{children}</>
}
