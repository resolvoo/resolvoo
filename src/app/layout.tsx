import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import { FAQPage, WithContext } from 'schema-dts'

import { Button } from '@/components/Button'
import { MenuWrapper } from '@/components/Menu/Menu.wrapper.component'
import { Metrics } from '@/components/Metrics.component'
import { Providers } from '@/providers/Providers.component'

const epilogue = Epilogue({ subsets: ['latin'] })

const jsonLd: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Como funciona a Resolvoo?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nós somos a ponte entre o seu perrengue com voo e a solução que você precisa. É só entrar em contato com a gente, detalhar seu problema e, se aprovado, aguardar a indenização. Simples e direto do conforto da sua casa.',
            },
        },
        {
            '@type': 'Question',
            name: 'Tem custo?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'NÃO! O risco é todo nosso, você não precisa se preocupar. Nossa consultoria é totalmente online e gratuita. Só recebemos uma pequena porcentagem, se der ganho de causa. "E se não ganhar?" Você, passageiro, não terá gasto algum e, também, ficamos sem receber. Não tem pegadinha!',
            },
        },
        {
            '@type': 'Question',
            name: 'E demora?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Após o envio de toda a documentação e início do pedido de indenização, costuma levar de 60 a 90 dias para sair o dinheiro. Alguns casos mais complexos podem levar mais tempo, mas deixamos você a par de tudo!',
            },
        },
        {
            '@type': 'Question',
            name: 'É totalmente online? Devo comparecer em audiência?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Totalmente online e para qualquer lugar do Brasil! Inclusive é válido para voos internacionais, se o destino ou origem for o Brasil. Nos consulte para mais detalhes.',
            },
        },
    ],
}

export const metadata: Metadata = {
    title: 'Resolvoo | Problemas com Voo? Seja indenizado!',
    description:
        'Com a Resolvoo, você que teve problemas como voo cancelado e bagagem extraviada, conseguirá sua indenização de forma simples e 100% online. Somos uma consultoria especializada em direito do consumidor para viagens aéreas. Defendemos os direitos dos passageiros, oferecendo orientação legal em casos de atrasos, cancelamentos, extravios de bagagem e outros problemas. Obtenha indenizações por danos morais, reembolso de passagens e resolução de litígios aéreos. Conte com nossa experiência para garantir que seus direitos como passageiro sejam protegidos.',
    applicationName: 'Resolvoo',

    keywords: [
        'consultoria jurídica',
        'direito do consumidor',
        'viagens aéreas',
        'indenização por voo atrasado',
        'cancelamento de voo',
        'extravio de bagagem',
        'reembolso de passagens aéreas',
        'direitos do passageiro',
        'compensação por overbooking',
        'advogado de direito do consumidor',
        'empresa aérea',
        'reclamação de voo',
        'legislação aérea',
        'danos morais',
        'responsabilidade civil',
        'passageiro aéreo',
        'orientação legal',
        'assistência jurídica',
        'litígio aéreo',
        'resolução de conflitos.',
    ],

    openGraph: {
        description:
            'Com a Resolvoo, você que teve problemas como voo cancelado e bagagem extraviada, conseguirá sua indenização de forma simples e 100% online. Somos uma consultoria especializada em direito do consumidor para viagens aéreas. Defendemos os direitos dos passageiros, oferecendo orientação legal em casos de atrasos, cancelamentos, extravios de bagagem e outros problemas. Obtenha indenizações por danos morais, reembolso de passagens e resolução de litígios aéreos. Conte com nossa experiência para garantir que seus direitos como passageiro sejam protegidos.',
        images: '../../public/resolvoo-opengraph.png',
        type: 'website',
    },

    verification: {
        google: 'FHsfN8zBydcttXwvPLdL4gelTJzUAzGQr_hEGOHiWrE',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" className={epilogue.className}>
            <body>
                <Providers>
                    {children}
                    <MenuWrapper />
                </Providers>
                <div className="fixed bottom-[1vh] left-[50%] z-10 w-full -translate-x-1/2 px-4">
                    <div className="flex w-full items-center justify-between">
                        <Link
                            aria-label="Âncora"
                            href={
                                'https://api.whatsapp.com/send?phone=5545988428644&text=Ol%C3%A1,%20tive%20problemas%20com%20uma%20viagem%20e%20quero%20tirar%20algumas%20d%C3%BAvidas!'
                            }
                            className="rounded-full bg-green-500 p-3 transition hover:bg-purple-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M7.17871 5.219C7.35012 5.22601 7.53976 5.23404 7.71993 5.63455C7.84307 5.90835 8.05025 6.41879 8.21537 6.82557C8.33703 7.12531 8.43586 7.36878 8.46137 7.4198C8.5215 7.54008 8.56156 7.68052 8.4814 7.84113C8.4694 7.86513 8.4583 7.88779 8.44769 7.90943C8.38744 8.03241 8.34317 8.12277 8.24113 8.24219C8.20114 8.28888 8.1598 8.33917 8.11845 8.38946C8.03544 8.49044 7.9524 8.59143 7.88031 8.66337C7.75967 8.78327 7.63437 8.91356 7.77467 9.15411C7.91502 9.39488 8.39772 10.1821 9.11271 10.8196C9.88079 11.5044 10.548 11.7941 10.8869 11.9412C10.9534 11.9701 11.0073 11.9935 11.0468 12.0133C11.2874 12.1335 11.4277 12.1135 11.568 11.9528C11.7083 11.7924 12.1689 11.2508 12.3293 11.0102C12.4897 10.7695 12.65 10.8096 12.8705 10.8897C13.091 10.9699 14.2734 11.5518 14.514 11.6721C14.5609 11.6956 14.6047 11.7167 14.6454 11.7363C14.8132 11.8174 14.9266 11.8721 14.975 11.9528C15.0351 12.0534 15.0351 12.5347 14.8347 13.0962C14.6343 13.6579 13.6523 14.1994 13.2113 14.2396C13.1689 14.2434 13.1267 14.2484 13.0833 14.2535C12.6757 14.3014 12.1614 14.3619 10.3252 13.6378C8.06581 12.7468 6.57609 10.5389 6.26831 10.0827C6.24307 10.0453 6.22578 10.0197 6.21667 10.0075L6.21399 10.0039C6.0843 9.83061 5.2346 8.69505 5.2346 7.52005C5.2346 6.41244 5.77904 5.83185 6.02954 5.56472C6.04666 5.54646 6.0624 5.52967 6.07651 5.51428C6.29684 5.2736 6.55746 5.21337 6.71779 5.21337C6.72658 5.21337 6.73537 5.21337 6.74415 5.21337C6.89558 5.21335 7.04623 5.21333 7.17871 5.219Z"
                                    fill="#F6F1FA"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.79427 14.4544C0.93984 12.998 0.493203 11.3474 0.493203 9.6385C0.493203 4.33713 4.82363 0.026123 10.125 0.026123C12.7077 0.026123 15.1157 1.03591 16.9411 2.84187C18.747 4.66725 19.7568 7.0752 19.7568 9.65791C19.7568 14.9593 15.4264 19.2703 10.125 19.2703C8.51323 19.2703 6.92088 18.8819 5.52271 18.1052L0.415527 19.4451L1.79427 14.4544ZM3.34779 13.9107L3.54198 14.2019L2.72638 17.1536L5.75574 16.3574L6.04702 16.5322C7.27042 17.2701 8.688 17.6585 10.125 17.6585C14.5331 17.6585 18.1256 14.066 18.1256 9.65791C18.1256 7.52183 17.2906 5.50226 15.7759 3.98759C14.2807 2.49233 12.2611 1.65731 10.125 1.65731C5.7169 1.65731 2.12439 5.2304 2.12439 9.65791C2.12439 11.1532 2.55161 12.629 3.34779 13.9107Z"
                                    fill="#F6F1FA"
                                />
                            </svg>
                        </Link>
                        <Button href={`https://app.resolvoo.com.br/`} size="xs">
                            Avaliar meu caso
                        </Button>
                    </div>
                </div>

                <Script
                    id="Faq Page"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Analytics />
                <Metrics />
            </body>
        </html>
    )
}
