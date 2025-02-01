import { Metadata } from 'next'
import { headers } from 'next/headers'
import { ReactNode } from 'react'

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const headersList = headers()
    const host = headersList.get('host')

    return {
        alternates: {
            canonical: `${host}/blog`,
        },
    }
}

export default function Layout({ children }: { children: ReactNode }) {
    return <>{children}</>
}
