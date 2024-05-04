'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { MenuContext } from '@/lib/contexts/menu.context'

import { Container } from '../Container.component'
import { Resolvoo } from '../icons/Resolvoo.icon'

export function Menu() {
    const { handleSetToggle } = useContext(MenuContext)
    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-purple-50">
            <div className="w-ful h-full py-4">
                <Container className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <Resolvoo className="text-purple-700" />
                        <button className="p-4" onClick={handleSetToggle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <path
                                    d="M1 29L29 1M1 1L29 29"
                                    stroke="#7E34BA"
                                    strokeWidth="1.6"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="grid gap-8">
                        <div className="grid gap-2">
                            <Link
                                className="rounded-full bg-purple-100 px-4 py-3 text-center text-[.9375rem] font-semibold text-purple-700"
                                onClick={handleSetToggle}
                                href={'/'}
                            >
                                Início
                            </Link>
                            <Link
                                className="rounded-full bg-purple-100 px-4 py-3 text-center text-[.9375rem] font-semibold text-purple-700"
                                onClick={handleSetToggle}
                                href={'/blog'}
                            >
                                Blog
                            </Link>
                            <Link
                                className="rounded-full bg-purple-100 px-4 py-3 text-center text-[.9375rem] font-semibold text-purple-700"
                                onClick={handleSetToggle}
                                href={
                                    '/voo-cancelado-o-que-fazer-e-quais-os-seus-direitos'
                                }
                            >
                                Voo cancelado
                            </Link>
                            <Link
                                className="rounded-full bg-purple-100 px-4 py-3 text-center text-[.9375rem] font-semibold text-purple-700"
                                onClick={handleSetToggle}
                                href={
                                    '/voo-atrasado-conheca-seus-direitos-e-saiba-como-reivindica-los'
                                }
                            >
                                Voo atrasado
                            </Link>
                            <Link
                                className="rounded-full bg-purple-100 px-4 py-3 text-center text-[.9375rem] font-semibold text-purple-700"
                                onClick={handleSetToggle}
                                href={'/overbooking'}
                            >
                                Overbooking
                            </Link>
                            <Link
                                className="rounded-full bg-purple-100 px-4 py-3 text-center text-[.9375rem] font-semibold text-purple-700"
                                onClick={handleSetToggle}
                                href={
                                    '/o-que-fazer-em-caso-de-bagagem-extraviada'
                                }
                            >
                                Bagagem extraviada
                            </Link>
                        </div>

                        <hr className="w-full border-gray-200" />

                        <Link
                            className="rounded-full bg-green-500 px-4 py-3 text-center text-[.9375rem] font-semibold text-green-50"
                            onClick={handleSetToggle}
                            href={`${process.env.NEXT_REDIRECT_FORM_URL!}`}
                        >
                            Avaliar meu caso
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}
