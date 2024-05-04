import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'

export function Help() {
    return (
        <section className="bg-gray-5 py-20 md:py-28">
            <Container>
                <div className="flex flex-col gap-12 rounded-3xl bg-purple-50 px-6 py-8 md:gap-20 md:p-12">
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:max-w-[44%] md:text-[2.5rem]">
                            Por que querer a ajuda da Resolvoo?
                            <span className="text-purple-700">
                                {' '}
                                Defendemos seus direitos!
                            </span>
                        </h2>
                        <Button
                            href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                            fill="purple"
                            size="md"
                        >
                            Avaliar meu caso
                        </Button>
                    </div>

                    <div className="grid gap-8 md:grid-cols-4 md:gap-6">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.8125rem]">
                                + 2mil
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Já ajudamos um bocado de passageiros a receber
                                suas indenizações, ein!?
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.8125rem]">
                                +3 anos
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Nossa equipe possui experiência em uma variedade
                                de casos e o próximo é o seu, okay? 😊
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.8125rem]">
                                +10 companhias
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Temos experência em mais de 10 companhias
                                aéreas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.8125rem]">
                                +5 atendentes
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Suporte especializadoe personalizado para o seu
                                caso
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
