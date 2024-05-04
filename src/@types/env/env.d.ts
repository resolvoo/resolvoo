declare namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined
        NEXT_REDIRECT_FORM_URL: string
        NEXT_PRIVATE_POLICY_URL: string
    }
}
