'use client'

import { Button } from '@/components/Button'

export default function NotFound() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-10 ">
            <div className="flex max-w-[25.5rem] flex-col items-center gap-4 text-center md:max-w-[38rem]">
                <h2 className="text-[2.5rem] font-bold leading-none text-purple-950">
                    Ops... parece que não encontramos esta página.
                </h2>
                <p className="text-[1.0625rem] text-gray-600">
                    Volte para a nossa página inicial
                </p>
            </div>
            <Button
                className="text-purple-50"
                fill="purple"
                size="md"
                href={'/'}
            >
                Voltar
            </Button>
        </div>
    )
}
