import { Metadata } from 'next'

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

export const metadata: Metadata = {
    title: 'Bagagem extraviada? Saiba como resolver!',
    description:
        'Teve a bagagem extraviada ou bagagem perdida e quer saber quais são seus direitos? Seja indenizado de forma rápida por mala extraviada em aeroportos!',

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
        title: 'Bagagem extraviada? Saiba como resolver!',
        description:
            'Teve a bagagem extraviada ou bagagem perdida e quer saber quais são seus direitos? Seja indenizado de forma rápida por mala extraviada em aeroportos!',
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
