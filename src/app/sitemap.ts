import { DataArray } from '@/@types/hygraph/post'
import { getAllPosts } from '@/services/hygraph/getAllPosts.query'

export default async function sitemap() {
    const { data } = await getAllPosts()
    const { posts }: DataArray = data

    const post = posts.map((item) => ({
        url: `https://resolvoo.com.br/blog/${item.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    }))

    return [
        {
            url: 'https://resolvoo.com.br/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://resolvoo.com.br/blog/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://resolvoo.com.br/voo-atrasado-conheca-seus-direitos-e-saiba-como-reivindica-los/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://resolvoo.com.br/overbooking/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://resolvoo.com.br/o-que-fazer-em-caso-de-bagagem-extraviada',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://resolvoo.com.br/voo-cancelado-o-que-fazer-e-quais-os-seus-direitos/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://resolvoo.com.br/campaigns/voo-atrasado-conheca-seus-direitos-e-saiba-como-reivindica-los/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://resolvoo.com.br/campaigns/overbooking/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://resolvoo.com.br/campaigns/o-que-fazer-em-caso-de-bagagem-extraviada',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://resolvoo.com.br/campaigns/voo-cancelado-o-que-fazer-e-quais-os-seus-direitos/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        ...post,
    ]
}
