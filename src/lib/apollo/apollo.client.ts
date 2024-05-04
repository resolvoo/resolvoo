import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
    uri: 'https://sa-east-1.cdn.hygraph.com/content/clvpt5703000008jn3llnc33t/master',
    cache: new InMemoryCache(),
    ssrMode: true,
})
