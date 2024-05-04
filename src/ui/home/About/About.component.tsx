import Image from 'next/image'

import fingerIcon from '@/assets/finger-icon.webp'
import judgeIcon from '@/assets/judge-icon.webp'
import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'

import { Player } from './components/Player.container'

export function About() {
    return (
        <section
            id="about-us"
            className="bg-[rgba(126,52,186,.03)] py-20 md:py-28"
        >
            <Container className="flex flex-col items-center gap-12 md:gap-16">
                <div className="flex flex-col items-center gap-6 text-center">
                    <Label>Nascemos para simplificar o complicado.</Label>
                    <div className="flex flex-col items-center justify-between gap-3">
                        <h2 className="text-[2rem] font-bold leading-none text-purple-950 md:max-w-[68%] md:text-[2.5rem]">
                            Que a sua experiência de viagem seja perfeita. 🙏
                        </h2>
                        <p className="text-[1.0625rem] font-medium text-gray-500 md:max-w-[52%]">
                            Queremos que você se preocupe apenas em viajar, o
                            seu problema é problema nosso. Dá uma olhadinha de
                            onde surgiu essa ideia:
                        </p>
                    </div>
                </div>
                <Player />
                <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <Image
                            src={judgeIcon}
                            className="max-w-12"
                            alt="ícone"
                        />

                        <div className="flex max-w-[18rem] flex-col items-center gap-1 text-center">
                            <h3 className="text-[1.1875rem] font-bold text-purple-950">
                                Defendemos seus direitos
                            </h3>
                            <p className="text-[.9375rem] text-gray-500">
                                Você só precisa se preocupar em viajar com
                                tranquilidade.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 text-center">
                        <Image
                            src={fingerIcon}
                            className="max-w-12"
                            alt="Ícone"
                        />

                        <div className="flex max-w-[18rem] flex-col items-center gap-1 text-center">
                            <h3 className="text-[1.1875rem] font-bold text-purple-950">
                                A culpa não é sua
                            </h3>
                            <p className="text-[.9375rem] text-gray-500">
                                Você não merece arcar com o prejuízo, nem com o
                                risco. Deixe com a gente!.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
