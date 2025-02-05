import { gql } from '@apollo/client'

import { apolloClient } from '@/lib/apollo/apollo.client'

export async function getSinglePost({ slug }: { slug: string }) {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getSinglePost($slug: String!) {
                post(where: { url: $slug }) {
                    titulo
                    keyword
                    descricao
                    createdAt
                    content {
                        raw
                        references {
                            ... on Feedback {
                                id
                                nomeDoCliente
                                fotoDePerfil {
                                    id
                                    url
                                }
                            }
                        }
                    }
                    capaDoPost {
                        url
                        height
                        width
                    }
                    postsRelacionados {
                        url
                        titulo
                        descricao
                        createdAt
                        capaDoPost {
                            url
                            height
                            width
                        }
                    }
                }
            }
        `,

        variables: {
            slug: slug,
        },
    })

    return { data, loading, error }
}
