import { Container } from '@/components/Container.component'
import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { Cta } from '@/ui/home/Cta.component'
import { Faq } from '@/ui/home/Faq/Faq.component'

import { Feature } from './components/Feature.component'
import { Posts } from './Posts.component'

export function Blog() {
    return (
        <>
            <Header />
            <Feature />
            <Container>
                <Posts />
            </Container>

            <Cta />
            <Faq />
            <Footer />
        </>
    )
}
