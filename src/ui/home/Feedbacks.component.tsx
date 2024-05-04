import Image from 'next/image'

import { Container } from '@/components/Container.component'
import { Quote } from '@/components/icons/Quote.icon'
import { Label } from '@/components/Label.component'
import { getFeedbacks } from '@/services/hygraph/getFeedbacks.query'

export async function Feedback() {
    const { error, data, loading } = await getFeedbacks({ size: 6 })
    const response: Data = data

    return (
        <section className="bg-[rgba(126,52,186,.03)] py-20 md:py-28">
            <Container className="grid gap-16">
                <div className="border-b border-gray-200 pb-6 md:pb-8">
                    <div className="flex flex-col items-start gap-6">
                        <Label>#BemResolvidos</Label>
                        <div className="flex flex-col justify-between gap-3 md:flex-row">
                            <h2 className="text-[2rem] font-bold leading-none text-purple-950 md:max-w-[40%] md:text-[2.5rem]">
                                O que os nossos Resolvidos falam sobre a gente:
                            </h2>
                            <p className="text-[1.0625rem] font-medium text-gray-500 md:max-w-[33%]">
                                Veja o que passageiros, que já passaram por um
                                perrengue como o seu, falam da Resolvoo:
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3 md:gap-4">
                    {response.feedbacks?.map((feedback) => (
                        <div
                            key={feedback.id}
                            className="flex flex-col justify-between gap-6 rounded-xl border border-solid border-purple-100 bg-[white] p-4"
                        >
                            <Quote />
                            <p className="text-[.9375rem] text-gray-700 text-opacity-90">
                                {feedback.conteudo}
                            </p>

                            <div className="flex flex-col gap-y-3 border-t border-solid border-gray-200 pt-4">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={feedback.fotoDePerfil.url}
                                        width={40}
                                        height={40}
                                        alt="Cliente resolvido"
                                        className="h-10 w-10 rounded-full"
                                    />

                                    <div className="flex flex-col gap-1 leading-none">
                                        <h3 className="text-[.9375rem] font-semibold text-purple-950">
                                            {feedback.nomeDoCliente}
                                        </h3>
                                        <span className="text-[.8125rem] font-semibold text-gray-500">
                                            Cliente da Resolvoo💜
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
