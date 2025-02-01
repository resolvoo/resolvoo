import { headers } from 'next/headers'

import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { Help } from '@/ui/globals/Help.component'
import { Practices } from '@/ui/globals/Practices.component'
import { Process } from '@/ui/globals/Process.component'
import { Why } from '@/ui/globals/Why.component'
import { Faq } from '@/ui/home/Faq/Faq.component'
import { Documents } from '@/ui/overbooking/Documents.component'
import { Hero } from '@/ui/overbooking/Hero.component'
import { Reasons } from '@/ui/overbooking/Reasons.component'

type Props = {
    params: { slug: string }
}

export async function generateMetadata() {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    return {
        title: 'Overbooking',
        description:
            'Saiba o que é Overbooking, seus direitos em caso de preterição, como evitar transtornos e como pleitear indenizações. Contate a Resolvoo para orientações jurídicas e assistência em casos de overbooking.',

        openGraph: {
            title: 'Overbooking',
            description:
                'Saiba o que é Overbooking, seus direitos em caso de preterição, como evitar transtornos e como pleitear indenizações. Contate a Resolvoo para orientações jurídicas e assistência em casos de overbooking.',
            images: '../../public/resolvoo-opengraph.svg',
            type: 'website',
        },

        robots: {
            index: false,
        },

        alternates: {
            canonical: `${protocol}://${host}/campaigns/overbooking`,
        },
    }
}

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <Documents />
            <Reasons />
            <Practices />
            <Why />
            <Process />
            <Help />
            <Faq />
            <Footer />
        </>
    )
}
