import Image from 'next/image'

import caution from '@/assets/caution.png'
import check from '@/assets/check.png'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'

const withoutResolvoo = [
    {
        title: 'Estressante',
        paragraph:
            'Você tem que realizar todo o processo sozinho, incluindo negociações com a companhia aérea.',
    },
    {
        title: 'Muita burocracia',
        paragraph:
            'Saber quais são os formulários necessários e para onde enviá-los pode ser complicado.',
    },
    {
        title: 'Lento',
        paragraph:
            'Você tem que realizar todo o processo sozinho, incluindo negociações com a companhia aérea.',
    },
    {
        title: 'Arriscado',
        paragraph:
            'Muitas vezes você se esforça tanto para ir atrás da sua compensação e ela é recusada.',
    },
    {
        title: 'Companhias aéreas que não respondem',
        paragraph:
            'Apenas você e a Resolvoo querem que você tenha uma boa viagem :)',
    },
]

const withResolvoo = [
    {
        title: 'Paz inexplicável',
        paragraph:
            'Você só precisa se aplicar, nós assumimos a parte estressante.',
    },
    {
        title: 'Zero burocracia',
        paragraph:
            'A burocracia é nossa e deixaremos você ciente de tudo que fazemos para garantir seus direitos.',
    },
    {
        title: 'Nosso processo é rápido',
        paragraph: 'Analisamos e aprovamos seu processo de forma bem ágil.',
    },
    {
        title: 'Segurança',
        paragraph:
            'Estamos aqui para garantir seus direitos de forma legal, não damos tiro no escuro!',
    },
    {
        title: 'Se comunique apenas com a gente!',
        paragraph:
            'A Resolvoo faz tudo que é necessário para você ter uma boa viagem!',
    },
]

export function Why() {
    return (
        <section className="bg-gray-50 py-20 md:py-28">
            <Container>
                <div className="flex flex-col gap-8 md:items-center md:justify-center md:gap-16">
                    <div className="md:text-center">
                        <h2 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.5rem]">
                            Por que escolher a Resolvoo?
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="flex max-w-[32rem] flex-col gap-8 rounded-3xl p-6 py-8 md:gap-8 md:p-10">
                            <div className="flex flex-col items-start gap-5">
                                <h3 className="text-[1.3125rem] font-bold text-purple-950 md:text-[1.5625rem]">
                                    Sem a Resolvoo 🫣
                                </h3>
                                <hr className="w-full border-gray-200" />
                            </div>

                            {withoutResolvoo.map((feature, index) => (
                                <div className="flex gap-3" key={index}>
                                    <Image
                                        className="h-5 w-5"
                                        src={caution}
                                        alt="Ícone"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[1.0625rem] font-semibold leading-none text-purple-950 md:text-[1.1875rem]">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[.9375rem] text-gray-600 md:text-base">
                                            {feature.paragraph}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex max-w-[32rem] flex-col gap-8 rounded-3xl bg-[white] p-6 py-8 md:p-10">
                            <div className="flex flex-col items-start gap-5">
                                <h3 className="text-[1.3125rem] font-bold text-purple-950 md:text-[1.5625rem]">
                                    Com a Resolvoo 💜
                                </h3>
                                <hr className="w-full border-gray-200" />
                            </div>

                            {withResolvoo.map((feature, index) => (
                                <div className="flex gap-3" key={index}>
                                    <Image
                                        src={check}
                                        className="h-5 w-5"
                                        alt="Ícone"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[1.0625rem] font-semibold leading-none text-purple-950 md:text-[1.1875rem]">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[.9375rem] text-gray-600 md:text-base">
                                            {feature.paragraph}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <Button
                                href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                                fill="green"
                                className="rounded-md p-4 text-center md:py-4 md:text-base"
                            >
                                Avaliar meu caso
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
