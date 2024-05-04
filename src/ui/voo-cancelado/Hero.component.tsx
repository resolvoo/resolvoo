import Image from 'next/image'

import canceledFlight from '@/assets/voo-cancelado.webp'
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
                        <Label>Saiba como lidar com Voo cancelado ✈️</Label>
                        <h1 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.75rem]">
                            Como comprovar um voo cancelado.
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-8 md:col-span-full md:col-start-8">
                        <p className=" text-[1.0625rem] text-gray-600 md:max-w-[78%]">
                            Quando o inesperado acontece, saiba como proteger
                            seus direitos como passageiro e garantir o reembolso
                            que você merece.
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
                        src={canceledFlight.src}
                        blurDataURL={canceledFlight.blurDataURL}
                        width={canceledFlight.width}
                        height={canceledFlight.height}
                        placeholder="blur"
                        alt="Imagem da hero."
                    />
                    <Floater> 🧠 Saiba como lidar com voos cancelados</Floater>
                </div>
            </Container>
        </section>
    )
}
