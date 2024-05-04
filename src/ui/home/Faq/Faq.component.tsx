import { Container } from '@/components/Container.component'
import { faq } from '@/content/faq.content'

import { Question } from './Question.pill'

export function Faq() {
    return (
        <section className="bg-[rgba(126,52,186,.03)] py-12 md:py-20">
            <Container>
                <div className="flex flex-col gap-10 rounded-[2rem] bg-[white] p-4 py-8 md:items-start md:gap-16 md:px-10 md:py-[5.5rem]">
                    <div className="flex w-full flex-col gap-2 md:items-center md:gap-3 md:text-center">
                        <h3 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:max-w-[64%] md:text-[2.75rem]">
                            Tire todas as suas dúvidas.😉
                        </h3>
                        <p className="text-[.9375rem] text-gray-500 md:max-w-[56%] md:text-[1.0625rem]">
                            Confere essas respostas abaixo ou entre em contato
                            com nosso suporte. Pode chegar mandando áudio que a
                            gente ama! 💜
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-5 md:gap-4">
                        {faq.map((question, index) => (
                            <Question key={index} heading={question.heading}>
                                {question.paragraph}
                            </Question>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
