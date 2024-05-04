import { gql } from '@apollo/client'

import { apolloClient } from '@/lib/apollo/apollo.client'

export async function getFeedbacks({ size }: { size: number }) {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getFeedbacks($size: Int!) {
                feedbacks(last: $size) {
                    id
                    conteudo
                    nomeDoCliente
                    fotoDePerfil {
                        id
                        url
                    }
                }
            }
        `,

        variables: {
            size,
        },
    })

    return { data, loading, error }
}
