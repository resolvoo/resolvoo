import Image from 'next/image'

import heroVoo from '@/assets/hero-voo-atrasado.webp'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'
import { Floater } from '@/components/Floater'
import { Label } from '@/components/Label.component'

export function Hero() {
    return (
        <section className="py-12 pb-0 md:py-20">
            <Container className="flex flex-col gap-8 md:gap-16">
                <div className="grid gap-2 md:grid-cols-12 md:gap-4">
                    <div className="flex flex-col items-start gap-5 md:col-span-5 md:col-start-1">
                        <Label>Voo atrasado</Label>
                        <h1 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.75rem]">
                            Voo atrasado: conheça seus direitos e ganhe até
                            5.000,00!
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-8 md:col-span-full md:col-start-8">
                        <p className=" text-[1.0625rem] text-gray-600 md:max-w-[78%]">
                            Atrasos acima de 4 horas podem garantir indenizações
                            de até 10 mil reais! Fale com a gente para saber
                            como solicitar sua compensação.
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
                        className="h-[27rem] w-full object-cover md:h-[44rem]"
                        src={heroVoo.src}
                        blurDataURL={heroVoo.blurDataURL}
                        width={heroVoo.width}
                        height={heroVoo.height}
                        placeholder="blur"
                        alt="Imagem da hero."
                    />
                    <Floater>
                        Voo atrasado é um dos problemas mais comuns na hora de
                        viajar.
                    </Floater>
                </div>
            </Container>
        </section>
    )
}
