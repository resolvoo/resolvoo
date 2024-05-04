'use client'

import { useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { MenuContext } from '@/lib/contexts/menu.context'

import { Menu } from './Menu.component'

export function MenuWrapper() {
    const { toggle, handleSetToggle } = useContext(MenuContext)

    useEffect(() => {
        if (toggle) document.body.style.overflowY = 'hidden'
        return () => {
            document.body.removeAttribute('style')
        }
    }, [toggle])

    return toggle && createPortal(<Menu />, document.body)
}
