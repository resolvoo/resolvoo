import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'

import { DataArray } from '@/@types/hygraph/post'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container.component'
import { Label } from '@/components/Label.component'
import { getPosts } from '@/services/hygraph/getPosts.query'

export async function Feature() {
    const { data } = await getPosts({ size: 1 })
    const { posts }: DataArray = data
    return (
        <section className="py-16 pt-4 md:pb-20 md:pt-6">
            <Container>
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="grid gap-8 rounded-2xl border border-gray-100 p-4 md:grid-cols-2 md:items-center md:gap-4 md:p-5"
                    >
                        <div className="flex flex-col items-start justify-between gap-10">
                            <div className="flex flex-col items-start gap-8">
                                <Label>
                                    📅{' '}
                                    {format(
                                        post.createdAt,
                                        "dd 'de' MMMM 'de' yyyy",
                                        { locale: ptBR }
                                    )}
                                </Label>
                                <div className="flex flex-col gap-2 md:max-w-[84%]">
                                    <h1 className="text-[1.5625rem] font-bold leading-none text-purple-950 md:text-[2.75rem]">
                                        {post.titulo}
                                    </h1>
                                    <p className="text-[.9375rem] text-gray-500 md:text-[1.0625rem]">
                                        {post.descricao}
                                    </p>
                                </div>
                            </div>
                            <Button
                                href={`/blog/${post?.url}`}
                                fill="purple"
                                size="md"
                            >
                                Ver mais
                            </Button>
                        </div>
                        <Image
                            className="rounded-xl object-cover object-left-top md:h-[28rem]"
                            src={post?.capaDoPost?.url}
                            height={post.capaDoPost.height}
                            width={post.capaDoPost.width}
                            alt="Imagem do post."
                        />
                    </div>
                ))}
            </Container>
        </section>
    )
}
