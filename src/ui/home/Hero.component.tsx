import Image from 'next/image'

import heroImg from '@/assets/problemas-com-voo.webp'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'

export function Hero() {
    return (
        <section className="py-10">
            <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="flex flex-col items-start gap-6 md:max-w-[40%]">
                    <Label>Você tem direito a uma boa viagem. ✈️</Label>
                    <div className="flex flex-col gap-3 md:gap-5">
                        <h1 className="text-3xl font-bold leading-none tracking-tight text-purple-950 md:text-[3.25rem]">
                            Problemas com o seu voo ou bagagem?
                        </h1>
                        <p className="max-w-[25.5rem] text-[1.0625rem] font-medium leading-snug text-gray-500">
                            A Resolvoo é a solução simples e de fácil acesso que
                            você sempre quis. Seus direitos de passageiro na
                            palma da sua mão. 💜
                        </p>
                    </div>

                    <hr className="w-full border-gray-200" />

                    <div className="flex gap-4">
                        <Button
                            href={`${process.env.NEXT_REDIRECT_FORM_URL}`}
                            size="md"
                            fill="green"
                        >
                            Avaliar meu caso
                        </Button>
                        <Button href={'/#steps'} size="md" fill="ghost">
                            Como funciona
                        </Button>
                    </div>
                </div>
                <Image
                    src={heroImg.src}
                    quality={80}
                    loading="eager"
                    width={heroImg.width}
                    height={heroImg.height}
                    blurDataURL={heroImg.blurDataURL}
                    className="max-h-[23rem] w-full rounded-3xl object-cover md:max-h-none md:max-w-[40%]"
                    alt="Imagem do Hero | Resolvoo"
                    placeholder="blur"
                />
            </Container>
        </section>
    )
}
