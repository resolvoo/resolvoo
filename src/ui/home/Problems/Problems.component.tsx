import { Container } from '@/components/Container.component'

import { TabContainer } from './components/TabContainer.component'

export function Problems() {
    return (
        <section className="bg-[rgba(126,52,186,.03)] py-20 md:py-28">
            <Container className="grid justify-items-start gap-16">
                <div className="border-b border-gray-200 pb-6 md:pb-8">
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex flex-col justify-between gap-3 md:flex-row">
                            <h2 className="text-[2rem] font-bold leading-none text-purple-950 md:max-w-[40%] md:text-[2.5rem]">
                                O fim do perrengue com cias aéreas.
                            </h2>
                            <p className="text-[1.0625rem] font-medium text-gray-500 md:max-w-[40%]">
                                Conte com a nossa assessoria para lidar com
                                transtornos causados pelas companhias aéreas e
                                ganhar uma compensação justa.
                            </p>
                        </div>
                    </div>
                </div>
                <TabContainer />
            </Container>
        </section>
    )
}
