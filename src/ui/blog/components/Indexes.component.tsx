'use client'

import { useCallback, useEffect, useState } from 'react'

export function Indexes() {
    const [hasWindow, setHasWindow] = useState(false)

    useEffect(() => {
        typeof window !== 'undefined' && setHasWindow(true)
    }, [])
    const [headings, setHeadings] =
        useState<NodeListOf<HTMLHeadingElement> | null>(null)

    const updateHeadings = useCallback(() => {
        const h2 = document.querySelectorAll('h2')
        setHeadings(h2)
    }, [])

    useEffect(() => {
        updateHeadings()

        const observer = new MutationObserver(updateHeadings)
        observer.observe(document.body, { subtree: true, childList: true })

        return () => {
            observer.disconnect()
        }
    }, [updateHeadings])

    return (
        hasWindow &&
        headings &&
        Array.from(headings).map((heading, index) => (
            <a
                href={`#${heading.innerText}`}
                className="text-[.9375rem] font-semibold text-purple-700 underline underline-offset-1"
                key={index}
            >
                {heading.innerText}
            </a>
        ))
    )
}
