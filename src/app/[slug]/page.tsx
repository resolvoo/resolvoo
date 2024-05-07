import { RichText } from '@graphcms/rich-text-react-renderer'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import Script from 'next/script'
import { Article, WithContext } from 'schema-dts'

import { Data } from '@/@types/hygraph/post'
import resolvooImage from '@/assets/resolvoo-icon.png'
import { Container } from '@/components/Container.component'
import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { getSinglePost } from '@/services/hygraph/getSinglePost.query'
import { Indexes } from '@/ui/blog/components/Indexes.component'
import { Cta } from '@/ui/home/Cta.component'
import { Faq } from '@/ui/home/Faq/Faq.component'

type Props = {
    params: { slug: string }
}

export const revalidate = 60 * 60 * 24 * 30 // one month

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { data } = await getSinglePost({ slug: params.slug })
    const { post }: Data = data

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
    }
}

export default async function Page({ params }: Props) {
    const { data, error } = await getSinglePost({ slug: params.slug })
    const { post }: Data = data

    if (!post) {
        return redirect('/404')
    }

    return (
        <>
            <Header />

            <main className="block overflow-hidden py-4 md:py-20">
                <Container
                    size="sm"
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
                                {post?.titulo}
                            </h1>
                            <p className="text-gray-600 md:text-[1.0625rem]">
                                {post?.descricao}
                            </p>
                        </div>
                    </div>
                    <hr className="w-full border-gray-100" />
                    <div className="flex h-full flex-col items-start gap-4 md:grid md:grid-cols-12">
                        <div className="sticky top-8 flex w-full flex-col gap-2 rounded-2xl bg-purple-50 p-5 md:col-start-1 md:col-end-6">
                            <Indexes />
                        </div>
                        <div className="h-full w-full md:col-span-full md:col-start-6">
                            <RichText
                                content={post?.content?.raw}
                                renderers={{
                                    img: ({ src, width, altText, height }) => {
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
                                    a: ({ children, href }) => {
                                        return (
                                            <Link
                                                href={`${href}`}
                                                className="w-full text-wrap font-semibold text-purple-700 underline underline-offset-1"
                                            >
                                                {children}
                                            </Link>
                                        )
                                    },
                                    h2: ({ children }) => {
                                        return (
                                            <h2
                                                id={children as string}
                                                className="block w-full pb-6 text-[1.3125rem] font-bold text-purple-950"
                                            >
                                                {children}
                                            </h2>
                                        )
                                    },
                                    h3: ({ children }) => {
                                        return (
                                            <h3 className="block w-full text-[1.1875rem] font-bold text-purple-950">
                                                {children}
                                            </h3>
                                        )
                                    },
                                    h4: ({ children }) => {
                                        return (
                                            <h4 className="w-full text-[1.0625rem] font-bold text-purple-950">
                                                {children}
                                            </h4>
                                        )
                                    },

                                    p: ({ children }) => {
                                        return (
                                            <p className="mb-5 block w-full text-[.9375rem] text-gray-600">
                                                {children}
                                            </p>
                                        )
                                    },

                                    li: ({ children }) => {
                                        return (
                                            <li className="mb-1 text-[.9375rem] font-semibold text-purple-700">
                                                {children}
                                            </li>
                                        )
                                    },

                                    ul: ({ children }) => {
                                        return (
                                            <ul className="mb-5 list-disc pl-4">
                                                {children}
                                            </ul>
                                        )
                                    },
                                }}
                            />
                        </div>
                    </div>
                </Container>
            </main>

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
