import Image from 'next/image'

import heroBagagem from '@/assets/hero-bagagem.webp'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'
import { Floater } from '@/components/Floater'
import { Label } from '@/components/Label.component'

export function Hero() {
    return (
        <section className="py-12 pb-0 md:py-20">
            <Container className="flex flex-col gap-8 md:gap-16">
                <div className="grid gap-2 md:grid-cols-12 md:gap-4">
                    <div className="flex flex-col items-start gap-5 md:col-span-6 md:col-start-1">
                        <Label>Bagagem extraviada 🧳</Label>
                        <h1 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.75rem]">
                            Você pode ter direito a uma indenização por isso.
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-8 md:col-span-full md:col-start-8">
                        <p className=" text-[1.0625rem] text-gray-600 md:max-w-[78%]">
                            Perdeu ou teve sua bagagem extraviada e quer saber
                            quais são seus direitos? Seja indenizado rapidinho e{' '}
                            <span className="text-purple-700">
                                ganhe até R$10.000
                            </span>{' '}
                            pelo seu perrengue no aeroporto.
                        </p>
                        <Button
                            fill="purple"
                            size="md"
                            href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                        >
                            Solicitar avaliação
                        </Button>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        className="h-[27rem] w-full object-cover md:h-[40rem]"
                        src={heroBagagem.src}
                        blurDataURL={heroBagagem.blurDataURL}
                        width={heroBagagem.width}
                        height={heroBagagem.height}
                        placeholder="blur"
                        alt="Imagem da hero."
                    />
                    <Floater>😯 Perdi minha bagagem e agora?</Floater>
                </div>
            </Container>
        </section>
    )
}
