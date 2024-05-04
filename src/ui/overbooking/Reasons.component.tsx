import {
    BookmarksSimple,
    CheckSquareOffset,
    Notification,
    SealCheck,
    SealWarning,
    SuitcaseRolling,
} from '@phosphor-icons/react/dist/ssr'

import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'

export function Reasons() {
    return (
        <section className="bg-gray-50 py-20 md:py-28">
            <Container className="flex flex-col gap-10 md:gap-16">
                <div className="flex flex-col items-start gap-5 md:col-span-6 md:col-start-1">
                    <Label>Seja um Resolvido. 💜</Label>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 md:max-w-[48%]">
                            <h2 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.5rem]">
                                Como se prevenir do overbooking
                            </h2>
                            <p className="text-[1.0625rem] text-gray-600 md:max-w-[78%]">
                                Se você pretende não passar por essa turbulência
                                em sua vida,{' '}
                                <span className="text-purple-700">
                                    há algumas dicas úteis para lidar{' '}
                                </span>
                                com um Overbooking. Confere aqui:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-4 rounded-xl bg-[white] p-4">
                        <CheckSquareOffset
                            size={32}
                            weight="bold"
                            className="text-purple-700"
                        />
                        <div className="flex flex-col gap-2 md:max-w-[85%]">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950">
                                Faça o check-in com antecedência.
                            </h3>
                            <p className="text-gray-600">
                                Condições climáticas adversas ou eventos
                                naturais imprevisíveis.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl bg-[white] p-4">
                        <BookmarksSimple
                            size={32}
                            weight="bold"
                            className="text-purple-700"
                        />
                        <div className="flex flex-col gap-2 md:max-w-[85%]">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950">
                                Seja cliente fidelizado da empresa.
                            </h3>
                            <p className="text-gray-600">
                                Isto lhe permite prioridades e vantagens nas
                                viagens.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl bg-[white] p-4">
                        <SealCheck
                            size={32}
                            weight="bold"
                            className="text-purple-700"
                        />
                        <div className="flex flex-col gap-2 md:max-w-[85%]">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950">
                                Marque seu assento na compra.
                            </h3>
                            <p className="text-gray-600">
                                Escolha seu lugar preferido no avião no momento
                                da compra do bilhete.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl bg-[white] p-4">
                        <SealWarning
                            size={32}
                            weight="bold"
                            className="text-purple-700"
                        />
                        <div className="flex flex-col gap-2 md:max-w-[85%]">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950">
                                Evite os assentos prioritários.
                            </h3>
                            <p className="text-gray-600">
                                Respeite os assentos prioritários escolhendo
                                lugares mais atrás.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl bg-[white] p-4">
                        <SuitcaseRolling
                            size={32}
                            weight="bold"
                            className="text-purple-700"
                        />
                        <div className="flex flex-col gap-2 md:max-w-[85%]">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950">
                                Despache sua bagagem com antecedência.
                            </h3>
                            <p className="text-gray-600">
                                Mais comodidade e menos tempo de espera no
                                aeroporto!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl bg-[white] p-4">
                        <Notification
                            size={32}
                            weight="bold"
                            className="text-purple-700"
                        />
                        <div className="flex flex-col gap-2 md:max-w-[85%]">
                            <h3 className="text-[1.1875rem] font-bold leading-none text-purple-950">
                                Verifique sua reserva antes de voar
                            </h3>
                            <p className="text-gray-600">
                                Neste caso, a empresa é obrigada a informar com
                                72 horas de antecedência.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
