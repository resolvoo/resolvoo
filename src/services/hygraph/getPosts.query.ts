import { gql } from '@apollo/client'

import { apolloClient } from '@/lib/apollo/apollo.client'

export async function getPosts({ size }: { size: number }) {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getPosts($size: Int!) {
                posts(first: $size, orderBy: publishedAt_DESC) {
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
        `,

        variables: {
            size: size,
        },
    })

    return { data, loading, error }
}
