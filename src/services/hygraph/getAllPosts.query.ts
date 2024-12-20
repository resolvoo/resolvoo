import { gql } from '@apollo/client'

import { apolloClient } from '@/lib/apollo/apollo.client'

export async function getAllPosts() {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getAllPosts {
                posts(first: 100, orderBy: createdAt_DESC) {
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
    })

    return { data, loading, error }
}
