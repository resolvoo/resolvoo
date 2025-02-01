import { Metadata } from 'next'
import { headers } from 'next/headers'
import { ReactNode } from 'react'

type Props = {
    params: { slug: string }
}

export async function generateMetadata(): Promise<Metadata> {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    return {
        robots: {
            index: false,
        },

        alternates: {
            canonical: `${protocol}://${host}/campaigns`,
        },
    }
}

export default function Layout({ children }: { children: ReactNode }) {
    return <>{children}</>
}
