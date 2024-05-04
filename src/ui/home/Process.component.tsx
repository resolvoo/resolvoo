import Image from 'next/image'

import step1 from '@/assets/step-1.svg'
import step2 from '@/assets/step-2.webp'
import step3 from '@/assets/step-3.svg'
import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'

export function Process() {
    return (
        <section id="steps" className="py-20 md:py-28">
            <Container className="grid gap-16">
                <div className="border-b border-gray-200 pb-6 md:pb-8">
                    <div className="flex flex-col items-start gap-6">
                        <Label>Nosso passo a passo</Label>
                        <div className="flex flex-col justify-between gap-3 md:flex-row">
                            <h2 className="text-[2rem] font-bold leading-none text-purple-950 md:max-w-[40%] md:text-[2.5rem]">
                                Veja como é fácil acompanhar seu processo:
                            </h2>
                            <p className="text-[1.0625rem] font-medium text-gray-500 md:max-w-[40%]">
                                Não importa se o seu caso é complexo, estamos
                                aqui para descomplicar! E tudo isso sem precisar
                                sair de casa, direto do seu celular ou
                                computador:
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3 md:gap-4">
                    <div className="flex flex-col items-start gap-6">
                        <Image
                            src={step1}
                            width={408}
                            height={408}
                            className="w-full"
                            alt="Imagem de processo."
                        />
                        <div className="flex flex-col items-start gap-3">
                            <Label>Passo #1</Label>
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950 md:text-[1.3125rem]">
                                Nos ajude a entender o seu caso
                            </h3>
                            <p className="text-[.9375rem] text-gray-500 md:text-[1.0625rem]">
                                Em apenas 3 minutos, você preenche o formulário
                                para ficar sabendo se o seu perrengue vai render
                                uma indenização.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <Image
                            src={step2}
                            width={408}
                            height={408}
                            className="w-full"
                            alt="Imagem de processo."
                        />
                        <div className="flex flex-col items-start gap-3">
                            <Label>Passo #2</Label>
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950 md:text-[1.3125rem]">
                                Envio da documentação
                            </h3>
                            <p className="text-[.9375rem] text-gray-500 md:text-[1.0625rem]">
                                Se o seu caso for elegível a um pedido de
                                indenização, entraremos em contato para pedir os
                                documentos e formalizar o nosso contrato.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <Image
                            src={step3}
                            width={408}
                            height={408}
                            className="w-full"
                            alt="Imagem de processo."
                        />
                        <div className="flex flex-col items-start gap-3">
                            <Label>Passo #3</Label>
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950 md:text-[1.3125rem]">
                                Só aguardar a indenização!
                            </h3>
                            <p className="text-[.9375rem] text-gray-500 md:text-[1.0625rem]">
                                Pronto! Vamos te manter informado do andamento e
                                aí é só aguardar o dinheiro cair na conta!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
