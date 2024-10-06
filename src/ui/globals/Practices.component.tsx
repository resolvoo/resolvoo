import Image from 'next/image'

import communications from '@/assets/communications.webp'
import notifications from '@/assets/notifications.webp'
import proof from '@/assets/proof.webp'
import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'

export function Practices() {
    return (
        <section className="py-20 md:py-28">
            <Container className="flex flex-col items-center gap-12 md:gap-16">
                <div className="flex flex-col items-center gap-6 text-center">
                    <Label>Eficiência 💜</Label>
                    <div className="flex flex-col items-center justify-between gap-3">
                        <h2 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:max-w-[68%] md:text-[2.5rem]">
                            As melhores práticas para garantir sua compensação
                        </h2>
                        <p className="text-[1.0625rem] font-medium text-gray-500 md:max-w-[52%]">
                            Tudo para facilitar não apenas o procedimento de
                            indenização, mas também para aumentar suas chances
                            de sucesso.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3 md:gap-4">
                    <div className="flex flex-col items-start gap-6">
                        <Image
                            src={notifications.src}
                            width={notifications.width}
                            height={notifications.height}
                            blurDataURL={notifications.blurDataURL}
                            placeholder="blur"
                            className="w-full"
                            alt="Imagem de processo."
                        />
                        <div className="flex flex-col items-start gap-3">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950 md:text-[1.3125rem]">
                                Salve as notificações
                            </h3>
                            <p className="text-gray-500">
                                Guarde e-mails e documentos que confirmem o
                                cancelamento do seu voo.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <Image
                            src={proof.src}
                            width={proof.width}
                            height={proof.height}
                            blurDataURL={proof.blurDataURL}
                            placeholder="blur"
                            className="w-full"
                            alt="Imagem de processo."
                        />
                        <div className="flex flex-col items-start gap-3">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950 md:text-[1.3125rem]">
                                Capturar telas
                            </h3>
                            <p className="text-gray-500">
                                Salve prints de tela ou imprima todas as
                                comunicações importantes.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <Image
                            src={communications.src}
                            width={communications.width}
                            height={communications.height}
                            blurDataURL={communications.blurDataURL}
                            placeholder="blur"
                            className="w-full"
                            alt="Imagem de processo."
                        />
                        <div className="flex flex-col items-start gap-3">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950 md:text-[1.3125rem]">
                                Registre conversas
                            </h3>
                            <p className="text-gray-500">
                                Anote datas, horários e o que foi discutido com
                                a cia aérea, incluindo o nome dos atendentes.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
