'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { MenuContext } from '@/lib/contexts/menu.context'

import { Button } from './Button'
import { Container } from './Container.component'
import { Resolvoo } from './icons/Resolvoo.icon'

export function Header() {
    const { handleSetToggle } = useContext(MenuContext)

    return (
        <header>
            <Container className="flex items-center justify-between py-4">
                <Link href={'/'} aria-label="Âncora">
                    <Resolvoo className="text-purple-700" />
                </Link>

                <div className="hidden md:flex md:gap-2">
                    <Link href={'/#steps'}>
                        <span className="rounded-full bg-purple-100 px-[.6875rem] py-[.4375rem] text-[.9375rem] font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-[white]">
                            Como funciona
                        </span>
                    </Link>
                    <Link href={'/#about-us'}>
                        <span className="rounded-full bg-purple-100 px-[.6875rem] py-[.4375rem] text-[.9375rem] font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-[white]">
                            Sobre nós
                        </span>
                    </Link>
                    <Link href={'/blog'}>
                        <span className="rounded-full bg-purple-100 px-[.6875rem] py-[.4375rem] text-[.9375rem] font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-[white]">
                            Blog
                        </span>
                    </Link>
                </div>

                <Button
                    size="sm"
                    fill="ghost"
                    href={`https://app.resolvoo.com.br/solucoes/sobre-o-problema`}
                    className="hidden md:block"
                >
                    Avaliar meu caso
                </Button>

                <button
                    aria-label="menu"
                    onClick={handleSetToggle}
                    className="p-4 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="18"
                        viewBox="0 0 32 18"
                        fill="none"
                    >
                        <path
                            d="M0 1H32M0 9H32M0 17H32"
                            stroke="#7E34BA"
                            strokeWidth="1.6"
                        />
                    </svg>
                </button>
            </Container>
        </header>
    )
}
