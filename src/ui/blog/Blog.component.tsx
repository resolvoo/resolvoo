import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

import { DataArray } from '@/@types/hygraph/post'
import { Container } from '@/components/Container.component'
import { Footer } from '@/components/Footer.component'
import { Header } from '@/components/Header.component'
import { Label } from '@/components/Label.component'
import { getAllPosts } from '@/services/hygraph/getAllPosts.query'
import { Cta } from '@/ui/home/Cta.component'
import { Faq } from '@/ui/home/Faq/Faq.component'

import { Feature } from './components/Feature.component'

export async function Blog() {
    const { data } = await getAllPosts()
    const { posts }: DataArray = data

    return (
        <>
            <Header />
            <Feature />
            <Container>
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
                                        post?.createdAt,
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

            <Cta />
            <Faq />
            <Footer />
        </>
    )
}
