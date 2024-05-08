import { gql } from '@apollo/client'

import { apolloClient } from '@/lib/apollo/apollo.client'

export async function getAllPostsWithPagination({
    first,
    after,
}: {
    first: number
    after?: number
}) {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getAllPostsWithPagination($first: Int!, $after: String) {
                postsConnection(first: $first, after: $after) {
                    edges {
                        cursor
                        node {
                            id
                            url
                            descricao
                            capaDoPost
                            titulo
                        }
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
        `,
        variables: {
            first,
            after,
        },
    })

    return { data, loading, error }
}
