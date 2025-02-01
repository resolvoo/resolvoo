import { Metadata } from 'next'
import { headers } from 'next/headers'

import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { Help } from '@/ui/globals/Help.component'
import { Practices } from '@/ui/globals/Practices.component'
import { Process } from '@/ui/globals/Process.component'
import { Why } from '@/ui/globals/Why.component'
import { Faq } from '@/ui/home/Faq/Faq.component'
import { Documents } from '@/ui/voo-cancelado/Documents.component'
import { Hero } from '@/ui/voo-cancelado/Hero.component'
import { Reasons } from '@/ui/voo-cancelado/Reasons.component'

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    return {
        title: 'Voo cancelado: o que fazer e quais os seus direitos?',
        description:
            'Veja como resolver seu caso de voo cancelado ou voo atrasado de forma rápida e fácil. Você sabia que pode receber indenização por isso? Veja como!',

        openGraph: {
            title: 'Voo cancelado: o que fazer e quais os seus direitos?',
            description:
                'Veja como resolver seu caso de voo cancelado ou voo atrasado de forma rápida e fácil. Você sabia que pode receber indenização por isso? Veja como!',
            images: '../../public/resolvoo-opengraph.svg',
            type: 'website',
        },

        robots: {
            index: false,
        },

        alternates: {
            canonical: `${protocol}://${host}/campaigns/voo-cancelado-o-que-fazer-e-quais-os-seus-direitos`,
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
