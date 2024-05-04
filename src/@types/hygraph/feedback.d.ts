type FotoDePerfil = {
    id: string
    url: string
}

type Feedback = {
    id: string
    conteudo: string
    nomeDoCliente: string
    fotoDePerfil: FotoDePerfil
}

type Data = {
    feedbacks: Feedback[]
}
