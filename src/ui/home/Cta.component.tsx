import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'

export function Cta() {
    return (
        <section className="py-12 md:py-20">
            <Container>
                <div className="flex flex-col items-start gap-10 rounded-[2rem] bg-purple-700 p-4 py-8 md:items-center md:px-5 md:py-[5.5rem]">
                    <div className="flex flex-col gap-2 md:items-center md:gap-3 md:text-center">
                        <h3 className="text-[1.5625rem] font-bold leading-none text-purple-50 md:max-w-[64%] md:text-[2.75rem]">
                            Nunca foi tão fácil buscar seus direitos. E de
                            graça!
                        </h3>
                        <p className="text-[.9375rem] text-purple-200 md:max-w-[40%] md:text-[1.0625rem]">
                            Peça uma avaliação gratuita através do nosso
                            formulário e um de nossos especialistas entrará em
                            contato! 💜
                        </p>
                    </div>
                    <Button
                        href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                        size="md"
                        className="bg-purple-50 text-purple-700 transition hover:bg-purple-950 hover:text-purple-50"
                    >
                        Avaliar meu caso
                    </Button>
                </div>
            </Container>
        </section>
    )
}
