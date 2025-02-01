import { Metadata } from 'next'
import { headers } from 'next/headers'

import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { Documents } from '@/ui/bagagem-extraviada/Documents.component'
import { Hero } from '@/ui/bagagem-extraviada/Hero.component'
import { Reasons } from '@/ui/bagagem-extraviada/Reasons.component'
import { Help } from '@/ui/globals/Help.component'
import { Practices } from '@/ui/globals/Practices.component'
import { Process } from '@/ui/globals/Process.component'
import { Why } from '@/ui/globals/Why.component'
import { Faq } from '@/ui/home/Faq/Faq.component'

export async function generateMetadata(): Promise<Metadata> {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    return {
        title: 'Bagagem extraviada? Saiba como resolver!',
        description:
            'Teve a bagagem extraviada ou bagagem perdida e quer saber quais são seus direitos? Seja indenizado de forma rápida por mala extraviada em aeroportos!',

        openGraph: {
            title: 'Bagagem extraviada? Saiba como resolver!',
            description:
                'Teve a bagagem extraviada ou bagagem perdida e quer saber quais são seus direitos? Seja indenizado de forma rápida por mala extraviada em aeroportos!',
            images: '../../public/resolvoo-opengraph.svg',
            type: 'website',
        },

        robots: {
            index: false,
        },

        alternates: {
            canonical: `${protocol}://${host}/campaigns/o-que-fazer-em-caso-de-bagagem-extraviada`,
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
