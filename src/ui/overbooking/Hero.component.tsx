import Image from 'next/image'

import overbooking from '@/assets/hero-voo-atrasado.webp'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'
import { Floater } from '@/components/Floater'
import { Label } from '@/components/Label.component'

export function Hero() {
    return (
        <section className="py-12 pb-0 md:py-20">
            <Container className="flex flex-col gap-8 md:gap-16">
                <div className="grid gap-2 md:grid-cols-12 md:gap-4">
                    <div className="flex flex-col items-start gap-5 md:col-span-4 md:col-start-1">
                        <Label>Overbooking</Label>
                        <h1 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.75rem]">
                            Saiba como lidar com Overbooking
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-8 md:col-span-full md:col-start-8">
                        <p className=" text-[1.0625rem] text-gray-600 md:max-w-[78%]">
                            Se você não quer ter as férias destruídas por um
                            Voo, a ResolVoo{' '}
                            <span className="text-purple-700">
                                pode garantir os seus direitos e te reembolsar!
                            </span>
                        </p>
                        <Button
                            fill="purple"
                            size="md"
                            href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                        >
                            Avaliar meu caso
                        </Button>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        className="h-[27rem] object-cover md:h-auto"
                        src={overbooking.src}
                        blurDataURL={overbooking.blurDataURL}
                        width={overbooking.width}
                        height={overbooking.height}
                        placeholder="blur"
                        alt="Imagem da hero."
                    />
                    <Floater> 😯 Frustrante e constragedor?</Floater>
                </div>
            </Container>
        </section>
    )
}
