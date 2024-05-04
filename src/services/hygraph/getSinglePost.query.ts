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
                    }
                    capaDoPost {
                        url
                        height
                        width
                    }
                }
            }
        `,

        // context: {
        //     fetchOptions: {
        //         next: { revalidate: 5 },
        //     },
        // },

        variables: {
            slug: slug,
        },
    })

    return { data, loading, error }
}
