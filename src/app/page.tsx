import { Metadata } from 'next'
import { headers } from 'next/headers'

import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { About } from '@/ui/home/About/About.component'
import { Contents } from '@/ui/home/Contents.component'
import { Cta } from '@/ui/home/Cta.component'
import { Faq } from '@/ui/home/Faq/Faq.component'
import { Feedback } from '@/ui/home/Feedbacks.component'
import { Hero } from '@/ui/home/Hero.component'
import { Media } from '@/ui/home/Media.component copy'
import { Problems } from '@/ui/home/Problems/Problems.component'
import { Process } from '@/ui/home/Process.component'
import { Steps } from '@/ui/home/Steps.component'

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const headersList = headers()
    const host = headersList.get('host')

    return {
        alternates: {
            canonical: `${host}`,
        },
    }
}

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <Problems />
            <Steps />
            <About />
            <Process />
            <Feedback />
            <Media />
            <Contents />
            <Cta />
            <Faq />
            <Footer />
        </>
    )
}
