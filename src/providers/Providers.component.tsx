'use client'

import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'

import { apolloClient } from '@/lib/apollo/apollo.client'
import { MenuProvider } from '@/lib/contexts/menu.context'

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ApolloProvider client={apolloClient}>
            <MenuProvider>{children}</MenuProvider>
        </ApolloProvider>
    )
}
