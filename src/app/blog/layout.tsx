import { Metadata } from 'next'
import { headers } from 'next/headers'
import { ReactNode } from 'react'

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    return {
        alternates: {
            canonical: `${protocol}://${host}/blog`,
        },
    }
}

export default function Layout({ children }: { children: ReactNode }) {
    return <>{children}</>
}
