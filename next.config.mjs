/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sa-east-1.graphassets.com',
            },
        ],
    },

    async redirects() {
        return [
            {
                source: '/voo-atrasado-conheca-seus-direitos-e-saiba-como-reivindica-los',
                destination:
                    '/blog/voo-atrasado-conheca-seus-direitos-e-saiba-como-reivindica-los',
                permanent: true,
            },
            {
                source: '/overbooking',
                destination: '/blog/overbooking',
                permanent: true,
            },
            {
                source: '/o-que-fazer-em-caso-de-bagagem-extraviada',
                destination: '/blog/o-que-fazer-em-caso-de-bagagem-extraviada',
                permanent: true,
            },
            {
                source: '/american-airlines-indenizacao-reembolso-e-seus-direitos',
                destination:
                    '/blog/american-airlines-indenizacao-reembolso-e-seus-direitos',
                permanent: true,
            },
            {
                source: '/voo-lotado-saiba-quais-sao-seus-direitos',
                destination: '/blog/voo-lotado-saiba-quais-sao-seus-direitos',
                permanent: true,
            },
            {
                source: '/processar-companhia-aerea-saiba-aqui-se-voce-pode',
                destination:
                    '/blog/processar-companhia-aerea-saiba-aqui-se-voce-pode',
                permanent: true,
            },
            {
                source: '/voo-cancelado-por-mau-tempo-o-que-fazer',
                destination: '/blog/voo-cancelado-por-mau-tempo-o-que-fazer',
                permanent: true,
            },
            {
                source: '/voo-cancelado-azul-linhas-aereas-como-resolver',
                destination:
                    '/blog/voo-cancelado-azul-linhas-aereas-como-resolver',
                permanent: true,
            },
            {
                source: '/atraso-de-voo-azul-quais-sao-meus-direitos',
                destination: '/blog/atraso-de-voo-azul-quais-sao-meus-direitos',
                permanent: true,
            },
            {
                source: '/quero-cancelar-meu-voo-na-azul-como-fazer',
                destination: '/blog/quero-cancelar-meu-voo-na-azul-como-fazer',
                permanent: true,
            },
            {
                source: '/bagagem-de-mao-dicas-do-que-levar',
                destination: '/blog/bagagem-de-mao-dicas-do-que-levar',
                permanent: true,
            },
            {
                source: '/como-fazer-um-rastreamento-de-voo',
                destination: '/blog/como-fazer-um-rastreamento-de-voo',
                permanent: true,
            },
            {
                source: '/comprei-a-passagem-errada-como-resolver',
                destination: '/blog/comprei-a-passagem-errada-como-resolver',
                permanent: true,
            },
            {
                source: '/quais-sao-os-seus-direitos-e-como-fazer-para-cancelar-passagem-de-aviao',
                destination:
                    '/blog/quais-sao-os-seus-direitos-e-como-fazer-para-cancelar-passagem-de-aviao',
                permanent: true,
            },
            {
                source: '/cuidados-para-nao-perder-sua-conexao-no-aeroporto',
                destination:
                    '/blog/cuidados-para-nao-perder-sua-conexao-no-aeroporto',
                permanent: true,
            },
            {
                source: '/descubra-como-evitar-o-no-show-em-suas-viagens',
                destination:
                    '/blog/descubra-como-evitar-o-no-show-em-suas-viagens',
                permanent: true,
            },
            {
                source: '/paises-que-exigem-seguro-viagem-e-o-que-e-pb4',
                destination:
                    '/blog/paises-que-exigem-seguro-viagem-e-o-que-e-pb4',
                permanent: true,
            },
            {
                source: '/menor-pode-viajar-de-aviao-sozinho',
                destination: '/blog/menor-pode-viajar-de-aviao-sozinho',
                permanent: true,
            },
            {
                source: '/perdeu-seu-passaporte-saiba-o-que-fazer',
                destination: '/blog/perdeu-seu-passaporte-saiba-o-que-fazer',
                permanent: true,
            },
            {
                source: '/como-pedir-reembolso-de-uma-passagem-aerea',
                destination: '/blog/como-pedir-reembolso-de-uma-passagem-aerea',
                permanent: true,
            },
            {
                source: '/como-usar-minhas-milhas-para-viajar',
                destination: '/blog/como-usar-minhas-milhas-para-viajar',
                permanent: true,
            },
            {
                source: '/conheca-o-programa-de-fidelidade-da-gol',
                destination: '/blog/conheca-o-programa-de-fidelidade-da-gol',
                permanent: true,
            },
            {
                source: '/cuidados-ao-despachar-sua-mala-em-um-aeroporto',
                destination:
                    '/blog/cuidados-ao-despachar-sua-mala-em-um-aeroporto',
                permanent: true,
            },
            {
                source: '/conheca-mais-sobre-a-historia-da-azul-linhas-aereas',
                destination:
                    '/blog/conheca-mais-sobre-a-historia-da-azul-linhas-aereas',
                permanent: true,
            },
            {
                source: '/pode-viajar-de-aviao-com-o-braco-engessado',
                destination: '/blog/pode-viajar-de-aviao-com-o-braco-engessado',
                permanent: true,
            },
            {
                source: '/mulheres-gravidas-e-bebes-podem-viajar-de-aviao',
                destination:
                    '/blog/mulheres-gravidas-e-bebes-podem-viajar-de-aviao',
                permanent: true,
            },
            {
                source: '/o-que-e-skiplagging',
                destination: '/blog/o-que-e-skiplagging',
                permanent: true,
            },
            {
                source: '/viajar-com-nome-sujo-e-possivel-tirar-passaporte',
                destination:
                    '/blog/viajar-com-nome-sujo-e-possivel-tirar-passaporte',
                permanent: true,
            },
            {
                source: '/bebe-de-colo-pode-viajar-esclareca-todas-as-duvidas',
                destination:
                    '/blog/bebe-de-colo-pode-viajar-esclareca-todas-as-duvidas',
                permanent: true,
            },
            {
                source: '/a-importancia-do-seguro-viagem',
                destination: '/blog/a-importancia-do-seguro-viagem',
                permanent: true,
            },
            {
                source: '/checklist-para-sua-viagem-de-fim-de-ano-nao-ser-um-desastre',
                destination:
                    '/blog/checklist-para-sua-viagem-de-fim-de-ano-nao-ser-um-desastre',
                permanent: true,
            },
            {
                source: '/o-que-fazer-enquanto-aguarda-sua-conexao',
                destination: '/blog/o-que-fazer-enquanto-aguarda-sua-conexao',
                permanent: true,
            },
            {
                source: '/dicas-para-planejar-uma-boa-viagem',
                destination: '/blog/dicas-para-planejar-uma-boa-viagem',
                permanent: true,
            },
            {
                source: '/resolvoo-startup-ajuda-passageiros-lesados-por-empresas-aereas',
                destination:
                    '/blog/resolvoo-startup-ajuda-passageiros-lesados-por-empresas-aereas',
                permanent: true,
            },
            {
                source: '/bagagem-extraviada-como-evitar-problemas-no-aeroporto',
                destination:
                    '/blog/bagagem-extraviada-como-evitar-problemas-no-aeroporto',
                permanent: true,
            },
            {
                source: '/guia-como-tirar-seu-primeiro-passaporte',
                destination: '/blog/guia-como-tirar-seu-primeiro-passaporte',
                permanent: true,
            },
            {
                source: '/problemas-no-embarque-como-resolver',
                destination: '/blog/problemas-no-embarque-como-resolver',
                permanent: true,
            },
            {
                source: '/como-escolher-a-melhor-companhia-aerea',
                destination: '/blog/como-escolher-a-melhor-companhia-aerea',
                permanent: true,
            },
            {
                source: '/curiosidades-sobre-aeroportos-brasileiros',
                destination: '/blog/curiosidades-sobre-aeroportos-brasileiros',
                permanent: true,
            },
            {
                source: '/hospedagens-internacionais-gratuitas-e-acessiveis',
                destination:
                    '/blog/hospedagens-internacionais-gratuitas-e-acessiveis',
                permanent: true,
            },
            {
                source: '/como-adiar-ou-remarcar-uma-passagem-aerea',
                destination: '/blog/como-adiar-ou-remarcar-uma-passagem-aerea',
                permanent: true,
            },
            {
                source: '/porque-nao-posso-usar-celular-em-um-aviao',
                destination: '/blog/porque-nao-posso-usar-celular-em-um-aviao',
                permanent: true,
            },
            {
                source: '/o-que-levar-ou-nao-na-bagagem',
                destination: '/blog/o-que-levar-ou-nao-na-bagagem',
                permanent: true,
            },
            {
                source: '/voce-sabe-como-corrigir-o-nome-na-passagem-aerea',
                destination:
                    '/blog/voce-sabe-como-corrigir-o-nome-na-passagem-aerea',
                permanent: true,
            },
            {
                source: '/os-10-melhores-aeroportos-do-mundo',
                destination: '/blog/os-10-melhores-aeroportos-do-mundo',
                permanent: true,
            },
            {
                source: '/a-historia-de-santos-dumont-o-pai-da-aviacao',
                destination:
                    '/blog/a-historia-de-santos-dumont-o-pai-da-aviacao',
                permanent: true,
            },
            {
                source: '/conheca-a-historia-da-latam-airlines-group',
                destination: '/blog/conheca-a-historia-da-latam-airlines-group',
                permanent: true,
            },
            {
                source: '/10-melhores-lugares-para-conhecer-no-brasil',
                destination:
                    '/blog/10-melhores-lugares-para-conhecer-no-brasil',
                permanent: true,
            },
            {
                source: '/como-economizar-em-uma-viagem-dicas-infaliveis',
                destination:
                    '/blog/como-economizar-em-uma-viagem-dicas-infaliveis',
                permanent: true,
            },
            {
                source: '/paises-que-brasileiros-nao-precisam-de-passaporte-para-viajar',
                destination:
                    '/blog/paises-que-brasileiros-nao-precisam-de-passaporte-para-viajar',
                permanent: true,
            },
            {
                source: '/criancas-precisam-pagar-passagem-de-aviao',
                destination: '/blog/criancas-precisam-pagar-passagem-de-aviao',
                permanent: true,
            },
            {
                source: '/sala-vip-de-aeroporto-tudo-que-voce-precisa-saber',
                destination:
                    '/blog/sala-vip-de-aeroporto-tudo-que-voce-precisa-saber',
                permanent: true,
            },
        ]
    },
}

export default nextConfig
