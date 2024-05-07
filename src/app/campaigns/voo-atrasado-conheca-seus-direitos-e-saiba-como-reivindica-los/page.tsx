import { Metadata } from 'next'

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

export const metadata: Metadata = {
    title: 'Voo Atrasado: Conheça seus Direitos e Saiba Como Reivindicá-los',
    description:
        'Saiba quais são os direitos do passageiro em caso de atraso de voo e como solicitar indenização por danos morais e materiais decorrentes desse tipo de situação.',

    keywords: [
        'consultoria jurídica',
        'direito do consumidor',
        'viagens aéreas',
        'indenização por voo atrasado',
        'cancelamento de voo',
        'extravio de bagagem',
        'reembolso de passagens aéreas',
        'direitos do passageiro',
        'compensação por overbooking',
        'advogado de direito do consumidor',
        'empresa aérea',
        'reclamação de voo',
        'legislação aérea',
        'danos morais',
        'responsabilidade civil',
        'passageiro aéreo',
        'orientação legal',
        'assistência jurídica',
        'litígio aéreo',
        'resolução de conflitos.',
    ],

    openGraph: {
        title: 'Voo Atrasado: Conheça seus Direitos e Saiba Como Reivindicá-los',
        description:
            'Saiba quais são os direitos do passageiro em caso de atraso de voo e como solicitar indenização por danos morais e materiais decorrentes desse tipo de situação.',
        images: '../../public/resolvoo-opengraph.svg',
        type: 'website',
    },

    verification: {
        google: 'KAWXAPOQUnhJxiODVvMzozNw5lbW2B7cDrwOdfb1p8',
    },
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
