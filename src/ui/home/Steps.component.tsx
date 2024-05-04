import { Container } from '@/components/Container.component'

export function Steps() {
    return (
        <section className="bg-purple-700 py-16 md:py-20">
            <Container className="grid gap-9 md:grid-cols-3 md:gap-6">
                <div className="flex max-w-[24.25rem] gap-4 md:items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-w-12 md:max-w-16"
                        viewBox="0 0 64 64"
                        fill="none"
                    >
                        <rect
                            width="64"
                            height="64"
                            rx="32"
                            fill="#FCFBFE"
                            fillOpacity="0.24"
                        />
                        <path
                            d="M43 20.5H21C20.337 20.5 19.7011 20.7634 19.2322 21.2322C18.7634 21.7011 18.5 22.337 18.5 23V43C18.5 43.2557 18.5654 43.5072 18.69 43.7305C18.8145 43.9538 18.9941 44.1416 19.2117 44.276C19.4292 44.4104 19.6775 44.4869 19.933 44.4983C20.1884 44.5098 20.4426 44.4557 20.6712 44.3412L24 42.6775L27.3287 44.3412C27.5371 44.4455 27.767 44.4998 28 44.4998C28.233 44.4998 28.4629 44.4455 28.6713 44.3412L32 42.6775L35.3288 44.3412C35.5371 44.4455 35.767 44.4998 36 44.4998C36.233 44.4998 36.4629 44.4455 36.6712 44.3412L40 42.6775L43.3288 44.3412C43.5574 44.4557 43.8116 44.5098 44.067 44.4983C44.3225 44.4869 44.5708 44.4104 44.7883 44.276C45.0059 44.1416 45.1854 43.9538 45.31 43.7305C45.4346 43.5072 45.5 43.2557 45.5 43V23C45.5 22.337 45.2366 21.7011 44.7678 21.2322C44.2989 20.7634 43.663 20.5 43 20.5ZM42.5 40.5725L40.6712 39.6588C40.4629 39.5545 40.233 39.5002 40 39.5002C39.767 39.5002 39.5371 39.5545 39.3288 39.6588L36 41.3225L32.6712 39.6588C32.4629 39.5545 32.233 39.5002 32 39.5002C31.767 39.5002 31.5371 39.5545 31.3287 39.6588L28 41.3225L24.6713 39.6588C24.4629 39.5545 24.233 39.5002 24 39.5002C23.767 39.5002 23.5371 39.5545 23.3288 39.6588L21.5 40.5725V23.5H42.5V40.5725ZM33 29.5C33 29.1022 33.158 28.7206 33.4393 28.4393C33.7206 28.158 34.1022 28 34.5 28H39C39.3978 28 39.7794 28.158 40.0607 28.4393C40.342 28.7206 40.5 29.1022 40.5 29.5C40.5 29.8978 40.342 30.2794 40.0607 30.5607C39.7794 30.842 39.3978 31 39 31H34.5C34.1022 31 33.7206 30.842 33.4393 30.5607C33.158 30.2794 33 29.8978 33 29.5ZM33 34.5C33 34.1022 33.158 33.7206 33.4393 33.4393C33.7206 33.158 34.1022 33 34.5 33H39C39.3978 33 39.7794 33.158 40.0607 33.4393C40.342 33.7206 40.5 34.1022 40.5 34.5C40.5 34.8978 40.342 35.2794 40.0607 35.5607C39.7794 35.842 39.3978 36 39 36H34.5C34.1022 36 33.7206 35.842 33.4393 35.5607C33.158 35.2794 33 34.8978 33 34.5ZM25 37.5H30C30.3978 37.5 30.7794 37.342 31.0607 37.0607C31.342 36.7794 31.5 36.3978 31.5 36V28C31.5 27.6022 31.342 27.2206 31.0607 26.9393C30.7794 26.658 30.3978 26.5 30 26.5H25C24.6022 26.5 24.2206 26.658 23.9393 26.9393C23.658 27.2206 23.5 27.6022 23.5 28V36C23.5 36.3978 23.658 36.7794 23.9393 37.0607C24.2206 37.342 24.6022 37.5 25 37.5ZM26.5 29.5H28.5V34.5H26.5V29.5Z"
                            fill="#FCFBFE"
                        />
                    </svg>
                    <div className="flex flex-col">
                        <h3 className="font-extrabold text-purple-50">
                            Passo #1
                        </h3>
                        <p className="text-[.9375rem] font-semibold text-gray-200">
                            Preencha o nosso formulário indicando o problema que
                            você passou.
                        </p>
                    </div>
                </div>

                <div className="flex max-w-[24.25rem] gap-4 md:items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-w-12 md:max-w-16"
                        viewBox="0 0 64 64"
                        fill="none"
                    >
                        <rect
                            width="64"
                            height="64"
                            rx="32"
                            fill="#FCFBFE"
                            fillOpacity="0.24"
                        />
                        <path
                            d="M37.5001 29.5C37.5001 29.8978 37.342 30.2793 37.0607 30.5606C36.7794 30.8419 36.3979 31 36.0001 31H28.0001C27.6022 31 27.2207 30.8419 26.9394 30.5606C26.6581 30.2793 26.5001 29.8978 26.5001 29.5C26.5001 29.1021 26.6581 28.7206 26.9394 28.4393C27.2207 28.158 27.6022 28 28.0001 28H36.0001C36.3979 28 36.7794 28.158 37.0607 28.4393C37.342 28.7206 37.5001 29.1021 37.5001 29.5ZM36.0001 33H28.0001C27.6022 33 27.2207 33.158 26.9394 33.4393C26.6581 33.7206 26.5001 34.1021 26.5001 34.5C26.5001 34.8978 26.6581 35.2793 26.9394 35.5606C27.2207 35.8419 27.6022 36 28.0001 36H36.0001C36.3979 36 36.7794 35.8419 37.0607 35.5606C37.342 35.2793 37.5001 34.8978 37.5001 34.5C37.5001 34.1021 37.342 33.7206 37.0607 33.4393C36.7794 33.158 36.3979 33 36.0001 33ZM45.5001 32C45.5006 34.3124 44.907 36.5862 43.7764 38.6034C42.6458 40.6206 41.0159 42.3136 39.0431 43.52C37.0703 44.7265 34.8207 45.4059 32.5099 45.4932C30.199 45.5805 27.9045 45.0728 25.8463 44.0187L21.7926 45.375C21.3513 45.5237 20.8772 45.5462 20.4238 45.44C19.9704 45.3337 19.5557 45.103 19.2264 44.7737C18.8971 44.4444 18.6663 44.0297 18.5601 43.5762C18.4538 43.1228 18.4763 42.6488 18.6251 42.2075L19.9763 38.1537C19.0484 36.3362 18.5447 34.3319 18.5029 32.2917C18.4611 30.2514 18.8825 28.2282 19.7352 26.3742C20.5879 24.5202 21.8499 22.8837 23.4262 21.5876C25.0025 20.2916 26.8521 19.3697 28.8359 18.8914C30.8198 18.4131 32.8862 18.3908 34.8799 18.8261C36.8737 19.2615 38.7428 20.1431 40.3467 21.4048C41.9506 22.6665 43.2476 24.2754 44.1402 26.1105C45.0328 27.9457 45.4977 29.9593 45.5001 32ZM42.5001 32C42.4994 30.3894 42.1283 28.8006 41.4155 27.3564C40.7026 25.9121 39.667 24.6513 38.3889 23.6713C37.1107 22.6914 35.6243 22.0186 34.0446 21.705C32.4648 21.3914 30.8341 21.4454 29.2786 21.8628C27.7231 22.2802 26.2844 23.0499 25.0739 24.1123C23.8634 25.1747 22.9136 26.5013 22.2978 27.9895C21.682 29.4777 21.4169 31.0877 21.5228 32.6947C21.6288 34.3018 22.103 35.863 22.9088 37.2575C23.0153 37.4414 23.0815 37.6458 23.1031 37.8572C23.1246 38.0686 23.101 38.2821 23.0338 38.4837L21.7926 42.2075L25.5163 40.9662C25.6695 40.9152 25.8299 40.889 25.9913 40.8887C26.2548 40.8892 26.5134 40.959 26.7413 41.0912C28.3376 42.0149 30.149 42.5018 31.9932 42.503C33.8375 42.5042 35.6495 42.0196 37.247 41.098C38.8445 40.1765 40.171 38.8504 41.0932 37.2532C42.0154 35.6561 42.5006 33.8442 42.5001 32Z"
                            fill="#FCFBFE"
                        />
                    </svg>
                    <div className="flex flex-col">
                        <h3 className="font-extrabold text-purple-50">
                            Passo #2
                        </h3>
                        <p className="text-[.9375rem] font-semibold text-gray-200">
                            Um de nossos especialistas irá avaliar gratuitamente
                            e entrar em contato com você.
                        </p>
                    </div>
                </div>

                <div className="flex max-w-[24.25rem] gap-4 md:items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-w-12 md:max-w-16"
                        viewBox="0 0 64 64"
                        fill="none"
                    >
                        <rect
                            width="64"
                            height="64"
                            rx="32"
                            fill="#FCFBFE"
                            fillOpacity="0.24"
                        />
                        <path
                            d="M31.455 43.3638C31.3739 43.6883 31.1867 43.9763 30.923 44.1822C30.6594 44.3881 30.3345 44.4999 30 44.5C29.877 44.4997 29.7544 44.4846 29.635 44.455L25.635 43.455C25.4684 43.4144 25.3102 43.345 25.1675 43.25L22.1675 41.25C21.836 41.0292 21.6058 40.6858 21.5275 40.2952C21.4492 39.9047 21.5292 39.499 21.75 39.1675C21.9708 38.836 22.3143 38.6057 22.7048 38.5275C23.0953 38.4492 23.501 38.5292 23.8325 38.75L26.6163 40.6063L30.3663 41.5438C30.7519 41.6408 31.0833 41.8871 31.2874 42.2283C31.4916 42.5696 31.5519 42.978 31.455 43.3638ZM47.875 31.3438C47.7723 31.6552 47.609 31.9432 47.3944 32.1912C47.1799 32.4392 46.9184 32.6423 46.625 32.7888L43.7663 34.2188L37.0688 41.06C36.8856 41.2433 36.6581 41.3761 36.4083 41.4453C36.1586 41.5145 35.8952 41.5179 35.6438 41.455L27.6438 39.455C27.4561 39.4077 27.2792 39.3249 27.1225 39.2113L20.375 34.285L17.3825 32.785C17.0883 32.6388 16.8258 32.436 16.61 32.1883C16.3942 31.9406 16.2294 31.6528 16.1249 31.3413C16.0204 31.0298 15.9784 30.7008 16.0011 30.3731C16.0239 30.0453 16.111 29.7253 16.2575 29.4313L19.375 23.2238C19.6716 22.6309 20.1916 22.1801 20.8205 21.9706C21.4494 21.761 22.1358 21.8098 22.7288 22.1063L25.3025 23.395L31.5788 21.56C31.8539 21.48 32.1461 21.48 32.4213 21.56L38.6975 23.395L41.2763 22.105C41.8689 21.8102 42.5541 21.7625 43.1819 21.9722C43.8096 22.1819 44.3286 22.632 44.625 23.2238L47.7313 29.435C47.8804 29.7278 47.9698 30.0473 47.9945 30.375C48.0192 30.7026 47.9786 31.0319 47.875 31.3438ZM41.0375 32.75L37.9125 26.5H34.6075L29.8325 31.1313C31.8025 32.0388 33.7275 31.155 34.935 29.9375C35.1958 29.6754 35.5441 29.5188 35.9132 29.4978C36.2824 29.4768 36.6462 29.5929 36.935 29.8238L40.8425 32.9488L41.0375 32.75ZM19.1713 30.3288L20.4875 30.9875L23.1463 25.6713L21.8288 25.0125L19.1713 30.3288ZM38.75 35.125L36.0375 32.9463C33.4763 34.8575 30.3063 35.045 27.6625 33.3525C27.3471 33.1514 27.0807 32.8821 26.8832 32.5644C26.6856 32.2467 26.5619 31.8887 26.5211 31.5169C26.4804 31.145 26.5235 30.7687 26.6475 30.4158C26.7715 30.0628 26.9731 29.7422 27.2375 29.4775L27.2525 29.4625L32.2275 24.625L32 24.5625L26.2075 26.2563L23.0675 32.5363L28.6488 36.6163L35.54 38.3388L38.75 35.125ZM44.8238 30.33L42.1713 25.0125L40.8538 25.6713L43.5125 30.9875L44.8238 30.33Z"
                            fill="#FCFBFE"
                        />
                    </svg>
                    <div className="flex flex-col">
                        <h3 className="font-extrabold text-purple-50">
                            Passo #3
                        </h3>
                        <p className="text-[.9375rem] font-semibold text-gray-200">
                            Pronto! Se o caso for elegível, daremos início ao
                            seu pedido de indenização!
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
