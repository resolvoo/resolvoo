'use client'

import { ReactNode } from 'react'

import { MenuProvider } from '@/lib/contexts/menu.context'

export function Providers({ children }: { children: ReactNode }) {
    return <MenuProvider>{children}</MenuProvider>
}
