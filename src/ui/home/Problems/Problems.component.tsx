import { Check } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

import { default as flightProblems } from '@/assets/female.png'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'

export function Problems() {
    return (
        <section className="bg-[rgba(126,52,186,.03)] py-20 md:py-28">
            <Container>
                <div className="flex w-full flex-col-reverse gap-12 md:grid md:grid-cols-2 md:items-center">
                    <Image
                        src={flightProblems.src}
                        className="rounded-2xl"
                        width={flightProblems.width}
                        height={flightProblems.height}
                        blurDataURL={flightProblems.blurDataURL}
                        alt="Problemas com voo"
                        placeholder="blur"
                    />
                    <div className="flex flex-col items-start gap-8 md:max-w-[88%]">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[2rem] font-bold leading-none text-purple-950 md:text-[2.5rem]">
                                Meu problema{' '}
                                <span className="text-purple-700">
                                    é elegível?
                                </span>
                            </h2>
                            <p className="text-[1.0625rem] text-gray-500 md:max-w-[80%]">
                                Se você enfrentou algum desses problemas nos
                                últimos 5 anos, você pode ter direito a uma
                                indenização:
                            </p>
                        </div>

                        <hr className="w-full border-gray-200" />

                        <div className="flex flex-col gap-5 text-gray-500">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-purple-600 p-1">
                                    <Check
                                        weight="bold"
                                        className="h-4 w-4 text-purple-50"
                                    />
                                </div>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    Voos atrasados
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-purple-600 p-1">
                                    <Check
                                        weight="bold"
                                        className="h-4 w-4 text-purple-50"
                                    />
                                </div>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    Voos cancelados sem comunição prévia
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-purple-600 p-1">
                                    <Check
                                        weight="bold"
                                        className="h-4 w-4 text-purple-50"
                                    />
                                </div>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    Overbooking (mais passageiros que assentos
                                    disponíveis)
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-purple-600 p-1">
                                    <Check
                                        weight="bold"
                                        className="h-4 w-4 text-purple-50"
                                    />
                                </div>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    Bagagens extraviadas
                                </p>
                            </div>
                        </div>
                        <hr className="w-full border-gray-200" />

                        <Button
                            href={`https://app.resolvoo.com.br/solucoes/sobre-o-problema`}
                            size="md"
                            fill="green"
                        >
                            Avaliar meu caso
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
