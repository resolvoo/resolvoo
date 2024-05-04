'use client'

import Image from 'next/image'
import { useState } from 'react'

import lugaggeProblmas from '@/assets/problemas-com-bagagem.webp'
import flightProblems from '@/assets/problemas-com-voo.webp'
import { Button } from '@/components/Button'

export function TabContainer() {
    const [tab, setTab] = useState<'fly' | 'lugagge'>('fly')

    function handleSetTab(tab: 'fly' | 'lugagge') {
        setTab(tab)
    }

    return (
        <div className="flex flex-col items-start gap-11">
            <div className="flex w-full flex-col gap-2 rounded-3xl border border-purple-100 p-3 md:w-auto md:flex-row md:rounded-full">
                <button
                    onClick={() => handleSetTab('fly')}
                    className={`rounded-full px-[.8125rem] py-[.5625rem] font-semibold md:px-[1.0625rem] md:py-[.6875rem] ${tab === 'fly' ? 'bg-purple-700 text-purple-50' : 'bg-purple-200 text-purple-700'}`}
                >
                    Problemas com voo
                </button>
                <button
                    onClick={() => handleSetTab('lugagge')}
                    className={`rounded-full px-[.8125rem] py-[.5625rem] font-semibold md:px-[1.0625rem] md:py-[.6875rem] ${tab === 'lugagge' ? 'bg-purple-700 text-purple-50' : 'bg-purple-200 text-purple-700'}`}
                >
                    Problemas com bagagem
                </button>
            </div>
            <div>
                {tab === 'fly' && (
                    <div className="grid w-full gap-8 md:grid-cols-2">
                        <div className="flex flex-col items-start gap-8 md:max-w-[88%]">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2rem]">
                                    Meu problema é elegível?
                                </h3>
                                <p className="text-[1.0625rem] text-gray-500 md:max-w-[80%]">
                                    Se você enfrentou algum desses problemas nos
                                    últimos 5 anos, você pode ter direito a uma
                                    indenização:
                                </p>
                            </div>

                            <hr className="w-full border-gray-200" />

                            <div className="flex flex-col gap-5 text-gray-500">
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    ✅ Voos atrasados
                                </p>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    ✅ Voos cancelados sem comunição prévia
                                </p>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    ✅ Overbooking (mais passageiros que
                                    assentos disponíveis)
                                </p>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    ✅ Bagagens extraviadas
                                </p>
                            </div>
                            <hr className="w-full border-gray-200" />

                            <Button
                                href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                                size="md"
                                fill="green"
                            >
                                Avaliar meu caso
                            </Button>
                        </div>

                        <Image
                            src={flightProblems.src}
                            className="rounded-2xl"
                            width={flightProblems.width}
                            height={flightProblems.height}
                            blurDataURL={flightProblems.blurDataURL}
                            alt="Problemas com voo"
                            placeholder="blur"
                        />
                    </div>
                )}
                {tab === 'lugagge' && (
                    <div className="grid w-full gap-8 md:grid-cols-2">
                        <div className="flex flex-col items-start gap-8 md:max-w-[88%]">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2rem]">
                                    Perderam sua mala?
                                </h3>
                                <p className="text-[1.0625rem] text-gray-500 md:max-w-[80%]">
                                    Se você teve um desses problemas com a sua
                                    mala nos últimos 5 anos, você pode ter
                                    direito a uma indenização:
                                </p>
                            </div>

                            <hr className="w-full border-gray-200" />

                            <div className="flex flex-col gap-5 text-gray-500">
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    ✅ Extravio de bagagem
                                </p>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    ✅ Atraso na entrega da mala
                                </p>
                                <p className="text-[.9375rem] font-semibold md:text-[1.0625rem]">
                                    ✅ Quebra de objetos ou itens faltantes
                                </p>
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
                        <Image
                            src={lugaggeProblmas.src}
                            className="rounded-2xl"
                            width={lugaggeProblmas.width}
                            height={lugaggeProblmas.height}
                            blurDataURL={lugaggeProblmas.blurDataURL}
                            alt="Problemas com bagagem"
                            placeholder="blur"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
