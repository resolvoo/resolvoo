'use client'

import { gql, useQuery } from '@apollo/client'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Label } from '@/components/Label.component'

interface PageInfo {
    pageSize: number
    hasNextPage: boolean
    endCursor?: string
}

interface PostCover {
    id: string
    width: number
    height: number
    url: string
}

interface PostNode {
    id: string
    url: string
    descricao: string
    createdAt: string
    capaDoPost: PostCover
    titulo: string
}

interface PostEdge {
    cursor: string
    node: PostNode
}

interface PostsConnection {
    edges: PostEdge[]
    pageInfo: PageInfo
}

interface PostsQueryData {
    postsConnection: PostsConnection
}

export function Posts() {
    const [pageInfo, setPageInfo] = useState<PageInfo>({
        endCursor: undefined,
        hasNextPage: false,
        pageSize: 20,
    })
    const { data, fetchMore, loading } = useQuery<PostsQueryData>(
        gql`
            query getAllPostsWithPagination($first: Int!, $after: String) {
                postsConnection(
                    after: $after
                    first: $first
                    orderBy: createdAt_DESC
                ) {
                    edges {
                        cursor
                        node {
                            id
                            url
                            descricao
                            createdAt
                            capaDoPost {
                                id
                                width
                                height
                                url
                            }
                            titulo
                        }
                    }
                    pageInfo {
                        pageSize
                        hasNextPage
                        endCursor
                    }
                }
            }
        `,
        {
            variables: { first: 20 },
            onCompleted: (data) => {
                if (data.postsConnection.pageInfo) {
                    setPageInfo(data.postsConnection.pageInfo)
                }
            },
        }
    )

    function loadMore() {
        if (pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    first: Number(pageInfo.pageSize + pageInfo.pageSize),
                    after: pageInfo.endCursor,
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.postsConnection.edges = [
                        ...prevResult.postsConnection.edges,
                        ...fetchMoreResult.postsConnection.edges,
                    ]
                    return fetchMoreResult
                },
            })
        }
    }

    return (
        <div className="flex flex-col items-center gap-8 md:gap-16">
            <div className="grid gap-4 gap-y-12 md:grid-cols-3">
                {data?.postsConnection?.edges?.map((edge, index) => (
                    <Link
                        href={`blog/${edge.node?.url}`}
                        key={index}
                        className="group flex flex-col items-start gap-6"
                    >
                        <Image
                            className="h-[16rem] rounded-xl object-cover"
                            src={edge.node?.capaDoPost?.url}
                            width={edge.node?.capaDoPost.width}
                            height={edge.node?.capaDoPost.height}
                            alt="Imagem de processo."
                        />
                        <div className="flex flex-col items-start gap-3">
                            <Label className="transition group-hover:bg-purple-700 group-hover:text-purple-50">
                                {format(
                                    new Date(edge.node?.createdAt),
                                    "dd 'de' MMMM 'de' yyyy",
                                    {
                                        locale: ptBR,
                                    }
                                )}
                            </Label>
                            <h3 className="text-[1.1875rem] font-bold leading-[1.15] text-purple-950 transition group-hover:text-purple-950 md:max-w-[90%] md:text-[1.3125rem]">
                                {edge.node?.titulo}
                            </h3>
                            <p className="text-gray-500">
                                {edge.node?.descricao}
                            </p>
                        </div>

                        <span className="font-semibold text-purple-700 transition hover:text-purple-950 group-hover:text-purple-950 md:text-[1.0625rem]">
                            Ver mais
                        </span>
                    </Link>
                ))}
            </div>
            {data?.postsConnection?.pageInfo?.hasNextPage && (
                <button
                    className="block rounded-full bg-purple-700 px-[.875rem] py-3 text-[.875rem] font-semibold leading-none text-purple-50 transition hover:bg-purple-950 hover:text-gray-50 md:px-5 md:py-3 md:text-base"
                    onClick={loadMore}
                    disabled={loading}
                >
                    Carregar mais
                </button>
            )}
        </div>
    )
}
