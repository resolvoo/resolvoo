/* eslint-disable */

import { NodeRendererType, RichText } from '@graphcms/rich-text-react-renderer'
import { EmbedProps } from '@graphcms/rich-text-types'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Article, WithContext } from 'schema-dts'

import { Data } from '@/@types/hygraph/post'
import resolvooImage from '@/assets/resolvoo-icon.png'
import { Container } from '@/components/Container.component'
import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { Label } from '@/components/Label.component'
import { getSinglePost } from '@/services/hygraph/getSinglePost.query'
import { Indexes } from '@/ui/blog/components/Indexes.component'
import { Cta } from '@/ui/home/Cta.component'
import { Faq } from '@/ui/home/Faq/Faq.component'

type Feedback = {
    id: string
    nomeDoCliente: string
    fotoDePerfil: {
        id: string
        url: string
    }
}

const renderers: NodeRendererType = {
    class: ({ children, className }) => {
        if (className === 'callout') {
            return (
                <div className="mb-5 flex flex-col gap-4 rounded-md bg-purple-50 p-4">
                    <svg
                        className="h-5 w-5 text-purple-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>

                    <div>{children}</div>
                </div>
            )
        }

        return <div className={className}>{children}</div>
    },
    iframe: ({ height, url, width }) => {
        return (
            <iframe
                className="my-14 w-full rounded-[.875rem] md:h-[32rem]"
                src={url}
                width={width}
                height={height}
            />
        )
    },
    img: ({ src, width, height }) => {
        return (
            <Image
                src={src!}
                className="mb-8 block h-auto w-full rounded-2xl"
                width={width!}
                height={height!}
                alt={'Imagem de post.'}
            />
        )
    },
    a: ({ children, href, className }) => {
        if (className === 'link-button') {
            return (
                <Link
                    href={href!}
                    className="inline-block h-[3.25rem] rounded-[.5625rem] bg-purple-600 px-[1.125rem] py-4 align-middle font-main text-[.9375rem] font-semibold text-purple-50 transition duration-150 ease-in hover:bg-purple-800"
                >
                    {children}
                </Link>
            )
        }

        return (
            <Link
                href={`${href}`}
                className="w-full text-wrap font-bold text-purple-700 transition hover:text-purple-950"
            >
                {children}
            </Link>
        )
    },

    h2: ({ children }) => {
        return (
            <h2
                id={children as string}
                className="mb-6 mt-14 block w-full text-3xl font-bold leading-[1.2] text-purple-950"
            >
                {children}
            </h2>
        )
    },

    h3: ({ children }) => {
        return (
            <h3 className="mb-6 mt-14 block w-full font-bold text-purple-950 md:text-[1.6875rem]">
                {children}
            </h3>
        )
    },
    h4: ({ children }) => {
        return (
            <h4 className="w-full font-bold text-purple-950 md:text-[1.0625rem]">
                {children}
            </h4>
        )
    },

    p: ({ children }) => {
        return (
            <p className="mb-6 block w-full text-[1.0625rem] leading-[160%] text-gray-600">
                {children}
            </p>
        )
    },

    li: ({ children }) => {
        return (
            <li className="mb-4 pl-2 font-text font-medium text-purple-800 marker:text-purple-600">
                {children}
            </li>
        )
    },

    ul: ({ children }) => {
        return <ul className="mb-5 list-disc pl-4">{children}</ul>
    },

    embed: {
        Feedback: ({
            fotoDePerfil,
            id,
            nomeDoCliente,
            nodeId,
            nodeType,
        }: EmbedProps<Feedback>) => {
            return (
                <div className="flex flex-col gap-4 rounded-xl bg-purple-600 p-4 md:gap-8 md:p-5">
                    <h3 className="text-lg font-bold leading-[1.35] text-purple-50 md:max-w-[52%]">
                        Reivindique até R$ 10.000 pelo atraso ou cancelamento do
                        seu voo.
                    </h3>

                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-4">
                        <div className="flex items-start gap-4 md:items-center">
                            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
                                <div className="rounded-full border border-purple-50 border-opacity-20 p-2">
                                    <svg
                                        className="w-4 text-purple-50"
                                        viewBox="0 0 24 24"
                                        focusable="false"
                                    >
                                        <rect
                                            opacity="0"
                                            width="24"
                                            height="24"
                                            fill="white"
                                            fill-opacity="0"
                                        ></rect>
                                        <path
                                            d="M11.188 1.1725L4.188 4.2835C3.465 4.6045 3 5.3205 3 6.1115V10.8115C3 18.6415 9.439 22.2975 12 22.8115C14.561 22.2975 21 18.6415 21 10.8115V6.1115C21 5.3215 20.535 4.6045 19.812 4.2835L12.812 1.1725C12.295 0.9425 11.705 0.9425 11.188 1.1725ZM10.293 15.5185L7.523 12.7485C7.133 12.3585 7.133 11.7245 7.523 11.3345C7.913 10.9445 8.547 10.9445 8.937 11.3345L11 13.3975L16.085 8.3125C16.475 7.9225 17.109 7.9225 17.499 8.3125C17.889 8.7025 17.889 9.3365 17.499 9.7265L11.707 15.5185C11.317 15.9085 10.683 15.9085 10.293 15.5185Z"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <p className="text-[.8125rem] font-semibold text-purple-50 opacity-80">
                                    Se não ganhar, não paga
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
                                <div className="rounded-full border border-purple-50 border-opacity-20 p-2">
                                    <svg
                                        className="w-4 text-purple-50"
                                        viewBox="0 0 24 24"
                                        focusable="false"
                                    >
                                        <rect
                                            opacity="0"
                                            width="24"
                                            height="24"
                                            fill="white"
                                            fill-opacity="0"
                                        ></rect>
                                        <path
                                            d="M12 2C10.8954 2 10 2.89543 10 4V9.37891L2.49023 14.0684C2.18523 14.2594 2 14.5931 2 14.9531C2 15.6581 2.68247 16.1612 3.35547 15.9512L10 13.8809V19.2402L8.33789 20.4824C8.12489 20.6414 8 20.8922 8 21.1582C8 21.7062 8.51587 22.1076 9.04688 21.9746L12 21.2363L14.9531 21.9746C15.4841 22.1076 16 21.7062 16 21.1582C16 20.8922 15.8751 20.6414 15.6621 20.4824L14 19.2402V13.8809L20.6445 15.9512C21.3175 16.1612 22 15.6581 22 14.9531C22 14.5931 21.8148 14.2594 21.5098 14.0684L14 9.37891V4C14 2.89543 13.1046 2 12 2Z"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <p className="text-[.8125rem] font-semibold text-purple-50 opacity-80">
                                    Todas as companhias aéreas
                                </p>
                            </div>
                        </div>
                        <Link
                            href={''}
                            className="inline-block rounded-[.5625rem] bg-purple-50 px-[.8125rem] py-[.9375rem] align-middle font-main text-[.8125rem] font-semibold text-purple-950 transition duration-150 ease-in hover:bg-purple-800 hover:text-purple-50"
                        >
                            Verificar indenização
                        </Link>
                    </div>
                </div>
            )
        },
    },
}

type Props = {
    params: { slug: string }
}

export const revalidate = 5

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { data } = await getSinglePost({ slug: params.slug })
    const { post }: Data = data

    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'https'

    return {
        title: post?.titulo,
        description: post?.descricao,
        keywords: post?.keyword,
        authors: {
            name: 'Resolvoo',
            url: 'resolvoo.com.br',
        },
        openGraph: {
            title: post?.titulo,
            description: post?.descricao,

            images: [`${post?.capaDoPost?.url}`],
        },

        alternates: {
            canonical: `${protocol}://${host}/blog/${params.slug}`,
        },
    }
}

export default async function Page({ params }: Props) {
    const { data, error } = await getSinglePost({ slug: params.slug })
    const { post }: Data = data

    if (error) {
        return notFound()
    }

    if (!post) {
        return notFound()
    }

    return (
        <>
            <Header />

            <main className="block py-4 md:py-20">
                <Container
                    size="md"
                    className="flex flex-col gap-8 md:items-center md:gap-16"
                >
                    <div className="flex flex-col gap-4 md:max-w-[48%] md:items-center md:gap-6 md:text-center">
                        <div className="flex items-center gap-2">
                            <a
                                className="flex items-center gap-2"
                                target="_blank"
                                href="https://www.instagram.com/resolvoobr/"
                            >
                                <Image
                                    src={resolvooImage}
                                    alt="Ícone da Resolvoo"
                                />
                                <span className="font-semibold text-gray-600">
                                    @resolvoobr
                                </span>
                            </a>
                            |
                            <span className="font-semibold text-gray-600">
                                📅{' '}
                                {format(post.createdAt, "MMMM ' ' dd/yyyy", {
                                    locale: ptBR,
                                })}
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 md:items-center md:gap-3">
                            <h1 className="text-[1.5625rem] font-bold leading-[1.05] text-purple-950 md:text-[2.75rem]">
                                {post.titulo}
                            </h1>
                            <p className="text-gray-600 md:text-[1.0625rem]">
                                {post.descricao}
                            </p>
                        </div>
                    </div>
                    <hr className="w-full border-gray-100" />
                    <div className="flex h-full flex-col items-start gap-8 md:grid md:grid-cols-12">
                        <div className="flex w-full flex-col gap-6 md:sticky md:top-8 md:col-start-1 md:col-end-5">
                            <h5 className="w-full text-[1.0625rem] font-bold leading-normal text-purple-950 md:text-xl">
                                {post?.titulo}
                            </h5>
                            <div className="flex w-full flex-col gap-2 rounded-2xl bg-purple-50 p-5 ">
                                <Indexes />
                            </div>
                        </div>
                        <div className="h-full w-full max-w-[44rem] md:col-span-full md:col-start-5">
                            <RichText
                                content={post?.content?.raw}
                                renderers={renderers}
                                references={post?.content?.references}
                            />
                        </div>
                    </div>
                </Container>
            </main>

            {post.postsRelacionados.length !== 0 && (
                <section className="py-20 md:py-28">
                    <Container className="grid gap-16">
                        <div className="border-b border-gray-200 pb-6 md:pb-8">
                            <div className="flex flex-col items-start gap-6">
                                <Label>Acompanhe nossos conteúdos</Label>
                                <div className="flex flex-col justify-between gap-3 md:flex-row">
                                    <h2 className="text-[2rem] font-bold leading-none text-purple-950 md:max-w-[40%] md:text-[2.5rem]">
                                        Fique ligado em dicas de viagem no{' '}
                                        <span className="text-purple-700">
                                            nosso blog!
                                        </span>
                                    </h2>
                                    <p className="text-[1.0625rem] font-medium text-gray-500 md:max-w-[40%]">
                                        Tudo o que você precisa saber sobre seus
                                        direitos de passageiro aéreo, como
                                        evitar perrengues, notícias e até dicas
                                        de destinos!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 gap-y-12 md:grid-cols-3">
                            {post?.postsRelacionados.map((el, i) => (
                                <Link
                                    href={`${el.url}`}
                                    key={i}
                                    className="group flex flex-col items-start gap-6"
                                >
                                    <Image
                                        className="h-[16rem] rounded-xl object-cover"
                                        src={el.capaDoPost?.url}
                                        width={el.capaDoPost.width}
                                        height={el.capaDoPost.height}
                                        alt="Imagem de processo."
                                    />

                                    <div className="flex flex-col items-start gap-3">
                                        <Label className="transition group-hover:bg-purple-700 group-hover:text-purple-50">
                                            {format(
                                                el.createdAt,
                                                "dd 'de' MMMM 'de' yyyy",
                                                {
                                                    locale: ptBR,
                                                }
                                            )}
                                        </Label>
                                        <h3 className="text-[1.1875rem] font-bold leading-[1.15] text-purple-950 transition group-hover:text-purple-950 md:max-w-[90%] md:text-[1.3125rem]">
                                            {el.titulo}
                                        </h3>
                                        <span className="text-gray-500">
                                            {el.descricao}
                                        </span>
                                    </div>

                                    <span className="font-semibold text-purple-700 transition hover:text-purple-950 group-hover:text-purple-950 md:text-[1.0625rem]">
                                        Ver mais
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            <Cta />
            <Faq />
            <Footer />
            <Script
                id="Article Page"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: `${post?.titulo}`,
                        image: {
                            '@type': 'ImageObject',
                            url: `${post?.capaDoPost?.url}`,
                            width: `${post?.capaDoPost?.width}`,
                            height: `${post?.capaDoPost?.height}`,
                        },
                        author: {
                            '@type': 'Person',
                            name: 'ResolVoo',
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'ResolVoo',
                            logo: {
                                '@type': 'ImageObject',
                                url: '../../favicon.ico',
                                width: '32',
                                height: '32',
                            },
                        },
                        datePublished: `${post?.createdAt}`,
                    } as WithContext<Article>),
                }}
            />
        </>
    )
}
