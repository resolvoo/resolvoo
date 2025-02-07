import Image from 'next/image'

import heroImg from '@/assets/male.png'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'

export function Hero() {
    return (
        <section className="py-10">
            <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="flex flex-col items-start gap-6 md:max-w-[48%]">
                    <Label>Você tem direito a uma boa viagem. ✈️</Label>
                    <div className="flex flex-col gap-3 md:gap-5">
                        <h1 className="text-3xl font-bold leading-none tracking-tight text-purple-950 md:text-[3.25rem]">
                            Problemas com <br /> o{' '}
                            <span className="text-purple-700">
                                seu voo ou bagagem?
                            </span>
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
                    loading="lazy"
                    width={heroImg.width}
                    height={heroImg.height}
                    blurDataURL={heroImg.blurDataURL}
                    className="w-full rounded-3xl object-cover md:max-h-none md:max-w-[44%]"
                    alt="Imagem do Hero | Resolvoo"
                    placeholder="blur"
                />
            </Container>
        </section>
    )
}
