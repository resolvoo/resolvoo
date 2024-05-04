import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

import { DataArray } from '@/@types/hygraph/post'
import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'
import { getPosts } from '@/services/hygraph/getPosts.query'

export async function Contents() {
    const { data } = await getPosts({ size: 3 })
    const { posts }: DataArray = data

    return (
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
                                direitos de passageiro aéreo, como evitar
                                perrengues, notícias e até dicas de destinos!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 gap-y-12 md:grid-cols-3">
                    {posts?.map((post, index) => (
                        <Link
                            href={`blog/${post?.url}`}
                            key={index}
                            className="group flex flex-col items-start gap-6"
                        >
                            <Image
                                className="h-[16rem] rounded-xl object-cover"
                                src={post?.capaDoPost?.url}
                                width={post?.capaDoPost.width}
                                height={post?.capaDoPost.height}
                                alt="Imagem de processo."
                            />
                            <div className="flex flex-col items-start gap-3">
                                <Label className="transition group-hover:bg-purple-700 group-hover:text-purple-50">
                                    {format(
                                        post.createdAt,
                                        "dd 'de' MMMM 'de' yyyy",
                                        {
                                            locale: ptBR,
                                        }
                                    )}
                                </Label>
                                <h3 className="text-[1.1875rem] font-bold leading-[1.15] text-purple-950 transition group-hover:text-purple-950 md:max-w-[90%] md:text-[1.3125rem]">
                                    {post?.titulo}
                                </h3>
                                <p className="text-gray-500">
                                    {post?.descricao}
                                </p>
                            </div>

                            <span className="font-semibold text-purple-700 transition hover:text-purple-950 group-hover:text-purple-950 md:text-[1.0625rem]">
                                Ver mais
                            </span>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    )
}
