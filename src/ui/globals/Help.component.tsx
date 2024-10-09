import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'

export function Help() {
    return (
        <section className="bg-gray-5 py-20 md:py-28">
            <Container>
                <div className="flex flex-col gap-12 rounded-3xl bg-purple-50 px-6 py-8 md:gap-20 md:p-12">
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:max-w-[44%] md:text-[2.5rem]">
                            Por que contar com a Resolvoo?
                            <span className="text-purple-700">
                                {' '}
                                Buscamos seus direitos!
                            </span>
                        </h2>
                        <Button
                            href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                            fill="purple"
                            size="md"
                        >
                            Solicitar avaliação
                        </Button>
                    </div>

                    <div className="grid gap-8 md:grid-cols-4 md:gap-6">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.5625rem]">
                                +6 mil passageiros
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Já ajudamos um monte de passageiros a receberem
                                suas indenizações, viu?!
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.5625rem]">
                                +5 anos
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Nossa equipe tem muita experiência, em muitas
                                situações diferentes, e a próxima é a sua, okay?
                                😊
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.5625rem]">
                                +16 cias
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Trabalhamos com mais de 10 companhias aéreas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1.3125rem] font-bold leading-none text-purple-700 md:text-[1.5625rem]">
                                +15 atendentes
                            </h3>
                            <p className="text-[.9375rem] font-semibold leading-tight text-gray-500 md:text-base">
                                Atendimento especializado e personalizado para o
                                seu perrengue.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
