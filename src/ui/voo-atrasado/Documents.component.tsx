import Image from 'next/image'

import purpleHeart from '@/assets/heart__emoji.png'
import vooAtrasado from '@/assets/voo-atrasado.webp'
import { Container } from '@/components/Container.component'
import { Floater } from '@/components/Floater'
import { Label } from '@/components/Label.component'

export function Documents() {
    return (
        <section className="py-20 md:py-28">
            <Container>
                <div className="grid items-start gap-8 md:grid-cols-12 md:gap-4">
                    <div className="flex flex-col items-start gap-5 md:col-span-6 md:col-start-1">
                        <Label>O que a Resolvoo pode fazer por você?</Label>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3 md:max-w-[96%]">
                                <h2 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.5rem]">
                                    Veja se você tem direito a uma indenização
                                    ✅
                                </h2>
                                <p className="text-[1.0625rem] text-gray-600 md:max-w-[78%]">
                                    Se o seu voo atrasou solicite uma avaliação
                                    pra gente, enviando as seguintes
                                    informações:
                                </p>
                            </div>

                            <hr className="w-full border-gray-200 md:max-w-[80%]" />

                            <div className="flex max-w-none flex-col gap-4 md:max-w-[64%]">
                                <div className="flex gap-2 md:gap-3">
                                    <svg
                                        className="h-6 w-full max-w-6 md:h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.375 3.375H5.25C4.75272 3.375 4.27581 3.57254 3.92417 3.92417C3.57254 4.27581 3.375 4.75272 3.375 5.25V9.375C3.375 9.87228 3.57254 10.3492 3.92417 10.7008C4.27581 11.0525 4.75272 11.25 5.25 11.25H9.375C9.87228 11.25 10.3492 11.0525 10.7008 10.7008C11.0525 10.3492 11.25 9.87228 11.25 9.375V5.25C11.25 4.75272 11.0525 4.27581 10.7008 3.92417C10.3492 3.57254 9.87228 3.375 9.375 3.375ZM9 9H5.625V5.625H9V9ZM9.375 12.75H5.25C4.75272 12.75 4.27581 12.9475 3.92417 13.2992C3.57254 13.6508 3.375 14.1277 3.375 14.625V18.75C3.375 19.2473 3.57254 19.7242 3.92417 20.0758C4.27581 20.4275 4.75272 20.625 5.25 20.625H9.375C9.87228 20.625 10.3492 20.4275 10.7008 20.0758C11.0525 19.7242 11.25 19.2473 11.25 18.75V14.625C11.25 14.1277 11.0525 13.6508 10.7008 13.2992C10.3492 12.9475 9.87228 12.75 9.375 12.75ZM9 18.375H5.625V15H9V18.375ZM18.75 3.375H14.625C14.1277 3.375 13.6508 3.57254 13.2992 3.92417C12.9475 4.27581 12.75 4.75272 12.75 5.25V9.375C12.75 9.87228 12.9475 10.3492 13.2992 10.7008C13.6508 11.0525 14.1277 11.25 14.625 11.25H18.75C19.2473 11.25 19.7242 11.0525 20.0758 10.7008C20.4275 10.3492 20.625 9.87228 20.625 9.375V5.25C20.625 4.75272 20.4275 4.27581 20.0758 3.92417C19.7242 3.57254 19.2473 3.375 18.75 3.375ZM18.375 9H15V5.625H18.375V9ZM12.75 16.125V13.875C12.75 13.5766 12.8685 13.2905 13.0795 13.0795C13.2905 12.8685 13.5766 12.75 13.875 12.75C14.1734 12.75 14.4595 12.8685 14.6705 13.0795C14.8815 13.2905 15 13.5766 15 13.875V16.125C15 16.4234 14.8815 16.7095 14.6705 16.9205C14.4595 17.1315 14.1734 17.25 13.875 17.25C13.5766 17.25 13.2905 17.1315 13.0795 16.9205C12.8685 16.7095 12.75 16.4234 12.75 16.125ZM20.625 15.375C20.625 15.6734 20.5065 15.9595 20.2955 16.1705C20.0845 16.3815 19.7984 16.5 19.5 16.5H18.375V19.5C18.375 19.7984 18.2565 20.0845 18.0455 20.2955C17.8345 20.5065 17.5484 20.625 17.25 20.625H13.875C13.5766 20.625 13.2905 20.5065 13.0795 20.2955C12.8685 20.0845 12.75 19.7984 12.75 19.5C12.75 19.2016 12.8685 18.9155 13.0795 18.7045C13.2905 18.4935 13.5766 18.375 13.875 18.375H16.125V13.875C16.125 13.5766 16.2435 13.2905 16.4545 13.0795C16.6655 12.8685 16.9516 12.75 17.25 12.75C17.5484 12.75 17.8345 12.8685 18.0455 13.0795C18.2565 13.2905 18.375 13.5766 18.375 13.875V14.25H19.5C19.7984 14.25 20.0845 14.3685 20.2955 14.5795C20.5065 14.7905 20.625 15.0766 20.625 15.375Z"
                                            fill="#7E34BA"
                                        />
                                    </svg>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[1.0625rem] font-bold leading-none text-purple-950">
                                            Cartões de embarque
                                        </h3>
                                        <p className="text-[.9375rem] text-gray-500">
                                            No check-in a cia aérea entrega o
                                            seu cartão de embarque,
                                            <span className="text-purple-700">
                                                ele vai ser usado para comprovar
                                                sua presença no voo.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 md:gap-3">
                                    <svg
                                        className="h-6 w-full max-w-6 md:h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.2959 7.455L15.0459 2.205C14.9415 2.10039 14.8174 2.0174 14.6808 1.96078C14.5442 1.90416 14.3978 1.87501 14.25 1.875H5.25C4.75272 1.875 4.27581 2.07254 3.92417 2.42417C3.57254 2.77581 3.375 3.25272 3.375 3.75V20.25C3.375 20.7473 3.57254 21.2242 3.92417 21.5758C4.27581 21.9275 4.75272 22.125 5.25 22.125H18.75C19.2473 22.125 19.7242 21.9275 20.0758 21.5758C20.4275 21.2242 20.625 20.7473 20.625 20.25V8.25C20.625 7.95187 20.5066 7.66593 20.2959 7.455ZM17.1562 7.5H15V5.34375L17.1562 7.5ZM5.625 19.875V4.125H12.75V8.625C12.75 8.92337 12.8685 9.20952 13.0795 9.4205C13.2905 9.63147 13.5766 9.75 13.875 9.75H18.375V19.875H5.625ZM15.0459 12.7959L13.5938 14.25L15.0487 15.7041C15.2601 15.9154 15.3788 16.2021 15.3788 16.5009C15.3788 16.7998 15.2601 17.0865 15.0487 17.2978C14.8374 17.5092 14.5508 17.6279 14.2519 17.6279C13.953 17.6279 13.6663 17.5092 13.455 17.2978L12 15.8438L10.5459 17.2987C10.3346 17.5101 10.0479 17.6288 9.74906 17.6288C9.45018 17.6288 9.16353 17.5101 8.95219 17.2987C8.74084 17.0874 8.62211 16.8008 8.62211 16.5019C8.62211 16.203 8.74084 15.9163 8.95219 15.705L10.4062 14.25L8.95406 12.7959C8.84942 12.6913 8.7664 12.5671 8.70977 12.4303C8.65314 12.2936 8.62399 12.1471 8.62399 11.9991C8.62399 11.8511 8.65314 11.7045 8.70977 11.5678C8.7664 11.4311 8.84942 11.3068 8.95406 11.2022C9.05871 11.0975 9.18294 11.0145 9.31967 10.9579C9.4564 10.9013 9.60294 10.8721 9.75094 10.8721C9.89893 10.8721 10.0455 10.9013 10.1822 10.9579C10.3189 11.0145 10.4432 11.0975 10.5478 11.2022L12 12.6562L13.4541 11.2013C13.5587 11.0966 13.6829 11.0136 13.8197 10.957C13.9564 10.9003 14.1029 10.8712 14.2509 10.8712C14.3989 10.8712 14.5455 10.9003 14.6822 10.957C14.8189 11.0136 14.9432 11.0966 15.0478 11.2013C15.1525 11.3059 15.2355 11.4301 15.2921 11.5669C15.3487 11.7036 15.3779 11.8501 15.3779 11.9981C15.3779 12.1461 15.3487 12.2927 15.2921 12.4294C15.2355 12.5661 15.1525 12.6904 15.0478 12.795L15.0459 12.7959Z"
                                            fill="#9447D6"
                                        />
                                    </svg>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[1.0625rem] font-bold leading-none text-purple-950">
                                            E-mails de confirmação
                                        </h3>
                                        <p className="text-[.9375rem] text-gray-500">
                                            O seu comprovante da compra da
                                            passagem e outros e-mails de
                                            confirmação do voo.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 md:gap-3">
                                    <svg
                                        className="h-6 w-full max-w-6 md:h-6"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.5532 4.875V8.625C22.5532 8.92337 22.4347 9.20952 22.2237 9.4205C22.0127 9.63147 21.7266 9.75 21.4282 9.75C21.1299 9.75 20.8437 9.63147 20.6327 9.4205C20.4217 9.20952 20.3032 8.92337 20.3032 8.625V6H17.6782C17.3799 6 17.0937 5.88147 16.8827 5.6705C16.6718 5.45952 16.5532 5.17337 16.5532 4.875C16.5532 4.57663 16.6718 4.29048 16.8827 4.0795C17.0937 3.86853 17.3799 3.75 17.6782 3.75H21.4282C21.7266 3.75 22.0127 3.86853 22.2237 4.0795C22.4347 4.29048 22.5532 4.57663 22.5532 4.875ZM7.92822 18H5.30322V15.375C5.30322 15.0766 5.1847 14.7905 4.97372 14.5795C4.76274 14.3685 4.47659 14.25 4.17822 14.25C3.87985 14.25 3.59371 14.3685 3.38273 14.5795C3.17175 14.7905 3.05322 15.0766 3.05322 15.375V19.125C3.05322 19.4234 3.17175 19.7095 3.38273 19.9205C3.59371 20.1315 3.87985 20.25 4.17822 20.25H7.92822C8.22659 20.25 8.51274 20.1315 8.72372 19.9205C8.9347 19.7095 9.05322 19.4234 9.05322 19.125C9.05322 18.8266 8.9347 18.5405 8.72372 18.3295C8.51274 18.1185 8.22659 18 7.92822 18ZM21.4282 14.25C21.1299 14.25 20.8437 14.3685 20.6327 14.5795C20.4217 14.7905 20.3032 15.0766 20.3032 15.375V18H17.6782C17.3799 18 17.0937 18.1185 16.8827 18.3295C16.6718 18.5405 16.5532 18.8266 16.5532 19.125C16.5532 19.4234 16.6718 19.7095 16.8827 19.9205C17.0937 20.1315 17.3799 20.25 17.6782 20.25H21.4282C21.7266 20.25 22.0127 20.1315 22.2237 19.9205C22.4347 19.7095 22.5532 19.4234 22.5532 19.125V15.375C22.5532 15.0766 22.4347 14.7905 22.2237 14.5795C22.0127 14.3685 21.7266 14.25 21.4282 14.25ZM4.17822 9.75C4.47659 9.75 4.76274 9.63147 4.97372 9.4205C5.1847 9.20952 5.30322 8.92337 5.30322 8.625V6H7.92822C8.22659 6 8.51274 5.88147 8.72372 5.6705C8.9347 5.45952 9.05322 5.17337 9.05322 4.875C9.05322 4.57663 8.9347 4.29048 8.72372 4.0795C8.51274 3.86853 8.22659 3.75 7.92822 3.75H4.17822C3.87985 3.75 3.59371 3.86853 3.38273 4.0795C3.17175 4.29048 3.05322 4.57663 3.05322 4.875V8.625C3.05322 8.92337 3.17175 9.20952 3.38273 9.4205C3.59371 9.63147 3.87985 9.75 4.17822 9.75ZM9.05322 7.5C8.75485 7.5 8.46871 7.61853 8.25773 7.8295C8.04675 8.04048 7.92822 8.32663 7.92822 8.625V15.375C7.92822 15.6734 8.04675 15.9595 8.25773 16.1705C8.46871 16.3815 8.75485 16.5 9.05322 16.5C9.35159 16.5 9.63774 16.3815 9.84872 16.1705C10.0597 15.9595 10.1782 15.6734 10.1782 15.375V8.625C10.1782 8.32663 10.0597 8.04048 9.84872 7.8295C9.63774 7.61853 9.35159 7.5 9.05322 7.5ZM17.6782 15.375V8.625C17.6782 8.32663 17.5597 8.04048 17.3487 7.8295C17.1377 7.61853 16.8516 7.5 16.5532 7.5C16.2549 7.5 15.9687 7.61853 15.7577 7.8295C15.5468 8.04048 15.4282 8.32663 15.4282 8.625V15.375C15.4282 15.6734 15.5468 15.9595 15.7577 16.1705C15.9687 16.3815 16.2549 16.5 16.5532 16.5C16.8516 16.5 17.1377 16.3815 17.3487 16.1705C17.5597 15.9595 17.6782 15.6734 17.6782 15.375ZM12.8032 7.5C12.5049 7.5 12.2187 7.61853 12.0077 7.8295C11.7967 8.04048 11.6782 8.32663 11.6782 8.625V15.375C11.6782 15.6734 11.7967 15.9595 12.0077 16.1705C12.2187 16.3815 12.5049 16.5 12.8032 16.5C13.1016 16.5 13.3877 16.3815 13.5987 16.1705C13.8097 15.9595 13.9282 15.6734 13.9282 15.375V8.625C13.9282 8.32663 13.8097 8.04048 13.5987 7.8295C13.3877 7.61853 13.1016 7.5 12.8032 7.5Z"
                                            fill="#9447D6"
                                        />
                                    </svg>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[1.0625rem] font-bold leading-none text-purple-950">
                                            Recibos
                                        </h3>
                                        <p className="text-[.9375rem] text-gray-500">
                                            Seus comprovantes de gastos extras
                                            com alimentação e hospedagem por
                                            conta do atraso.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 rounded-2xl bg-purple-50 p-5 md:max-w-[64%]">
                                <Image src={purpleHeart} alt="Decorativo" />
                                <p className="text-[.9375rem] text-purple-950">
                                    Com esses comprovantes, a gente vai buscar
                                    sua indenização justa de forma simples e sem
                                    burocracia.
                                    <br />
                                    <br />{' '}
                                    <span className="text-purple-700">
                                        Já ajudamos mais de 6 mil clientes no
                                        Brasil
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl md:col-span-full md:col-start-7">
                        <Image
                            className="h-[27rem] object-cover md:h-auto"
                            src={vooAtrasado.src}
                            blurDataURL={vooAtrasado.blurDataURL}
                            width={vooAtrasado.width}
                            height={vooAtrasado.height}
                            placeholder="blur"
                            alt="Imagem da hero."
                        />
                        <Floater>✍️ Registre o máximo de detalhes</Floater>
                    </div>
                </div>
            </Container>
        </section>
    )
}
