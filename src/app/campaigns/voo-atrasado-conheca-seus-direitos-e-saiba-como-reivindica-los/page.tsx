import { headers } from 'next/headers'

import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { Help } from '@/ui/globals/Help.component'
import { Practices } from '@/ui/globals/Practices.component'
import { Process } from '@/ui/globals/Process.component'
import { Why } from '@/ui/globals/Why.component'
import { Faq } from '@/ui/home/Faq/Faq.component'
import { Documents } from '@/ui/voo-atrasado/Documents.component'
import { Hero } from '@/ui/voo-atrasado/Hero.component'
import { Reasons } from '@/ui/voo-atrasado/Reasons.component'

type Props = {
    params: { slug: string }
}

export async function generateMetadata() {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    return {
        title: 'Voo Atrasado: Conheça seus Direitos e Saiba Como Reivindicá-los',
        description:
            'Saiba quais são os direitos do passageiro em caso de atraso de voo e como solicitar indenização por danos morais e materiais decorrentes desse tipo de situação.',

        openGraph: {
            title: 'Voo Atrasado: Conheça seus Direitos e Saiba Como Reivindicá-los',
            description:
                'Saiba quais são os direitos do passageiro em caso de atraso de voo e como solicitar indenização por danos morais e materiais decorrentes desse tipo de situação.',
            images: '../../public/resolvoo-opengraph.svg',
            type: 'website',
        },

        robots: {
            index: false,
        },

        alternates: {
            canonical: `${protocol}://${host}/campaigns/voo-atrasado-conheca-seus-direitos-e-saiba-como-reivindica-los`,
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
