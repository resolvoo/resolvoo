import { Metadata } from 'next'

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

export const metadata: Metadata = {
    title: 'Voo cancelado: o que fazer e quais os seus direitos?',
    description:
        'Veja como resolver seu caso de voo cancelado ou voo atrasado de forma rápida e fácil. Você sabia que pode receber indenização por isso? Veja como!',

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
        title: 'Voo cancelado: o que fazer e quais os seus direitos?',
        description:
            'Veja como resolver seu caso de voo cancelado ou voo atrasado de forma rápida e fácil. Você sabia que pode receber indenização por isso? Veja como!',
        images: '../../public/resolvoo-opengraph.svg',
        type: 'website',
    },

    verification: {
        google: 'KAWXAPOQUnhJxiODVvMzozNw5lbW2B7cDrwOdfb1p8',
    },

    robots: {
        index: false,
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
