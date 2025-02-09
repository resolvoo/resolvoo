import Link from 'next/link'

import { Container } from './Container.component'

export function Footer() {
    return (
        <footer className="bg-gray-50 py-10">
            <Container className="flex flex-col gap-6">
                <div className="flex flex-col gap-16 rounded-3xl bg-purple-700 px-4 py-8 md:gap-[6.75rem] md:px-11 md:pb-7 md:pt-11">
                    <div className="grid gap-8 md:grid-cols-12 md:gap-4">
                        <div className="flex flex-col gap-4 md:col-start-1 md:col-end-4">
                            <figure>
                                <svg
                                    aria-label="Âncora"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="192"
                                    height="40"
                                    fill="none"
                                    viewBox="0 0 192 40"
                                >
                                    <path
                                        fill="#F6F1FA"
                                        d="M.002 39.268V15.89h5.685v3.401c.822-1.339 1.849-2.362 3.082-3.07 1.233-.708 2.594-1.06 4.087-1.06.76 0 1.549.107 2.362.318.814.213 1.51.488 2.09.822l-2.375 4.795a5.64 5.64 0 00-1.724-.73 7.537 7.537 0 00-1.839-.25c-.958 0-1.876.247-2.751.741a6.255 6.255 0 00-2.124 1.93c-.54.79-.81 1.643-.81 2.556V39.27H0l.002-.002zM29.807 40c-2.497 0-4.733-.54-6.712-1.62s-3.54-2.557-4.68-4.43c-1.142-1.873-1.713-3.98-1.713-6.325 0-1.75.322-3.375.97-4.875a12.32 12.32 0 012.718-3.96 12.694 12.694 0 014.052-2.671c1.537-.64 3.197-.959 4.978-.959 2.435 0 4.57.503 6.403 1.506a10.825 10.825 0 014.291 4.213c1.027 1.803 1.542 3.886 1.542 6.245-.015.198-.027.368-.034.513a7.058 7.058 0 01-.08.65h-19.04c0 1.4.318 2.64.958 3.722.64 1.081 1.533 1.922 2.683 2.523 1.15.602 2.47.902 3.96.902 1.491 0 2.675-.285 3.779-.856 1.103-.572 2.103-1.442 3.002-2.615l4.133 2.123c-1.113 1.858-2.653 3.308-4.625 4.35C34.421 39.478 32.225 40 29.807 40zm-7.055-15.274h13.265c-.198-1.065-.602-1.986-1.21-2.764a6.238 6.238 0 00-2.305-1.814c-.93-.434-1.963-.65-3.105-.65-1.202 0-2.275.21-3.218.627-.943.42-1.71 1.02-2.294 1.803-.587.785-.962 1.716-1.131 2.798h-.002zM51.764 40c-1.963 0-3.71-.368-5.24-1.107a9.462 9.462 0 01-3.732-3.184l2.511-3.698c.897 1.187 1.899 2.108 3.002 2.763 1.104.655 2.25.982 3.437.982.715 0 1.358-.133 1.93-.399a3.207 3.207 0 001.357-1.165c.334-.51.503-1.115.503-1.815 0-.699-.191-1.301-.571-1.712-.38-.411-.952-.783-1.713-1.12-.76-.334-1.72-.738-2.876-1.209a23.347 23.347 0 01-2.785-1.347 6.813 6.813 0 01-2.17-1.907c-.563-.768-.844-1.747-.844-2.934 0-1.354.368-2.553 1.107-3.595.739-1.043 1.769-1.865 3.094-2.467 1.324-.6 2.831-.902 4.52-.902 1.233 0 2.462.213 3.688.64 1.224.426 2.454 1.057 3.688 1.895l-2.078 3.583c-1.75-1.49-3.493-2.238-5.228-2.238-1.035 0-1.86.248-2.477.742-.615.495-.924 1.123-.924 1.883 0 .625.266 1.157.798 1.599.532.442 1.194.829 1.986 1.165.791.334 1.583.655 2.374.958 1.248.457 2.344.944 3.287 1.462.943.517 1.682 1.187 2.214 2.01.532.822.798 1.916.798 3.286 0 1.645-.392 3.052-1.175 4.224-.785 1.171-1.899 2.065-3.345 2.682-1.446.616-3.159.925-5.137.925h.001zM76.338 40c-2.526 0-4.805-.525-6.838-1.576-2.032-1.05-3.642-2.51-4.829-4.384-1.187-1.873-1.78-4.025-1.78-6.46 0-2.436.593-4.608 1.78-6.474 1.187-1.864 2.797-3.323 4.829-4.372 2.031-1.05 4.31-1.576 6.838-1.576 2.528 0 4.807.526 6.838 1.577 2.032 1.05 3.642 2.507 4.829 4.371 1.187 1.864 1.78 4.022 1.78 6.473 0 2.451-.593 4.588-1.78 6.461-1.187 1.871-2.797 3.333-4.829 4.384C81.145 39.474 78.864 40 76.338 40zm0-4.885c1.416 0 2.693-.319 3.836-.959a7.004 7.004 0 002.693-2.659c.655-1.134.983-2.439.983-3.916 0-1.477-.328-2.782-.983-3.915a7.003 7.003 0 00-2.693-2.659c-1.141-.64-2.42-.958-3.836-.958s-2.69.319-3.824.958a7.121 7.121 0 00-2.693 2.66c-.662 1.134-.993 2.438-.993 3.914 0 1.475.33 2.763.993 3.904a7.104 7.104 0 002.693 2.671c1.134.64 2.408.959 3.824.959zM92.97 39.268V0h5.685v39.268H92.97zM149.785 40c-2.526 0-4.805-.525-6.838-1.576-2.032-1.05-3.642-2.51-4.829-4.384-1.187-1.873-1.781-4.025-1.781-6.46 0-2.436.594-4.608 1.781-6.474 1.187-1.864 2.797-3.323 4.829-4.372 2.031-1.05 4.31-1.576 6.838-1.576 2.528 0 4.806.526 6.838 1.577 2.031 1.05 3.642 2.507 4.829 4.371 1.187 1.864 1.78 4.022 1.78 6.473 0 2.451-.593 4.588-1.78 6.461-1.187 1.871-2.798 3.333-4.829 4.384-2.032 1.05-4.312 1.576-6.838 1.576zm0-4.885c1.416 0 2.693-.319 3.836-.959a7.002 7.002 0 002.693-2.659c.655-1.134.983-2.439.983-3.916 0-1.477-.328-2.782-.983-3.915a7.003 7.003 0 00-2.693-2.659c-1.141-.64-2.42-.958-3.836-.958s-2.69.319-3.824.958a7.12 7.12 0 00-2.694 2.66c-.661 1.134-.992 2.438-.992 3.914 0 1.475.331 2.763.992 3.904a7.104 7.104 0 002.694 2.671c1.134.64 2.408.959 3.824.959zM178.024 40c-2.526 0-4.805-.525-6.838-1.576-2.031-1.05-3.642-2.51-4.829-4.384-1.187-1.873-1.78-4.025-1.78-6.46 0-2.436.593-4.608 1.78-6.474 1.187-1.864 2.798-3.323 4.829-4.372 2.032-1.05 4.31-1.576 6.838-1.576 2.528 0 4.807.526 6.838 1.577 2.032 1.05 3.642 2.507 4.829 4.371 1.187 1.864 1.781 4.022 1.781 6.473 0 2.451-.594 4.588-1.781 6.461-1.187 1.871-2.797 3.333-4.829 4.384-2.031 1.05-4.312 1.576-6.838 1.576zm0-4.885c1.416 0 2.694-.319 3.836-.959a7.011 7.011 0 002.694-2.659c.655-1.134.982-2.439.982-3.916 0-1.477-.327-2.782-.982-3.915a7.006 7.006 0 00-2.694-2.659c-1.141-.64-2.42-.958-3.836-.958s-2.69.319-3.824.958a7.124 7.124 0 00-2.693 2.66c-.662 1.134-.993 2.438-.993 3.914 0 1.475.331 2.763.993 3.904a7.102 7.102 0 002.693 2.671c1.134.64 2.408.959 3.824.959zM118.335 39.758a8.015 8.015 0 01-5.081-1.824l-.57-.516-8.598-8.599a7.939 7.939 0 01-2.34-5.65c0-2.136.831-4.142 2.342-5.65 3.114-3.114 8.184-3.114 11.3 0l1.55 1.552c.372.374.869.578 1.396.578.527 0 1.023-.206 1.395-.578l1.564-1.564c3.058-3.058 8.078-3.106 11.193-.107 1.533 1.475 2.389 3.48 2.41 5.64a8.21 8.21 0 01-2.385 5.853l-8.494 8.494-.321.309a7.984 7.984 0 01-5.361 2.062zm-1.615-5.864a2.673 2.673 0 003.367-.11l.317-.31 8.345-8.344a2.861 2.861 0 00.825-2.04c-.007-.722-.283-1.382-.779-1.858a2.68 2.68 0 00-3.737.038l-1.565 1.564a7.247 7.247 0 01-5.159 2.137c-1.95 0-3.78-.759-5.158-2.137l-1.551-1.55a2.674 2.674 0 00-3.776 0 2.644 2.644 0 00-.781 1.886c0 .713.278 1.383.781 1.888l8.235 8.235.636.6z"
                                    ></path>
                                </svg>
                            </figure>
                            <p className="max-w-[80%] text-[.9375rem] font-semibold text-purple-300 md:max-w-none md:text-[.9375rem]">
                                Você tem direito a uma boa viagem.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-2 md:col-span-3 md:col-start-5">
                            <h4 className="text-[1.0625rem] font-bold text-purple-50">
                                Conheça seus direitos
                            </h4>

                            <div className="flex flex-col gap-1">
                                <Link
                                    href={`/blog/voo-cancelado-o-que-fazer-e-quais-os-seus-direitos`}
                                    className="text-[.9375rem] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Voo cancelado
                                </Link>

                                <Link
                                    href={`/blog/voo-atrasado-conheca-seus-direitos-e-saiba-como-reivindica-los`}
                                    className="text-[.9375rem] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Voo atrasado
                                </Link>

                                <Link
                                    href={`/blog/o-que-fazer-em-caso-de-bagagem-extraviada`}
                                    className="text-[.9375rem] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Bagagem extraviada
                                </Link>

                                <Link
                                    href={`/blog/overbooking`}
                                    className="text-[.9375rem] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Overbooking
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-2 md:col-span-2 md:col-start-8">
                            <h4 className="text-[1.0625rem] font-bold text-purple-50">
                                Institucional
                            </h4>

                            <div className="flex flex-col gap-1">
                                <Link
                                    href={`/blog`}
                                    className="text-[.9375rem] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Blog
                                </Link>
                                <Link
                                    target="_blank"
                                    href={``}
                                    className="text-[15px] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Política de privacidade
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-2 md:col-span-full md:col-start-10">
                            <h4 className="text-[1.0625rem] font-bold text-purple-50">
                                Soluções
                            </h4>
                            <div className="flex flex-col gap-1">
                                <Link
                                    aria-label="anchor"
                                    href={`https://app.resolvoo.com.br/solucoes/sobre-o-problema`}
                                    className="text-[.9375rem] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Problemas com Voos
                                </Link>
                                <Link
                                    aria-label="anchor"
                                    href={`https://app.resolvoo.com.br/solucoes/sobre-o-problema`}
                                    className="text-[15px] font-medium  text-purple-200 transition hover:text-purple-50"
                                >
                                    Problemas com bagagem
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 border-t border-purple-600  pt-6 md:flex-row md:items-center md:justify-between">
                        <p className="text-[.8125rem] font-semibold text-gray-200">
                            Resolvoo, todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                aria-label="Âncora"
                                target="_blank"
                                href={
                                    'https://api.whatsapp.com/send?phone=5545988428644&text=Ol%C3%A1,%20tive%20problemas%20com%20uma%20viagem%20e%20quero%20tirar%20algumas%20d%C3%BAvidas!'
                                }
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.06592 5.19287C7.23733 5.19989 7.42696 5.20792 7.60714 5.60843C7.73028 5.88223 7.93746 6.39266 8.10257 6.79944C8.22424 7.09919 8.32306 7.34266 8.34857 7.39368C8.40871 7.51395 8.44877 7.65439 8.36861 7.815C8.35661 7.83901 8.34551 7.86166 8.3349 7.88331C8.27464 8.00629 8.23037 8.09664 8.12834 8.21606C8.08835 8.26276 8.04701 8.31304 8.00566 8.36334C7.92264 8.46432 7.83961 8.56531 7.76752 8.63725C7.64688 8.75715 7.52158 8.88744 7.66188 9.12798C7.80223 9.36876 8.28493 10.156 8.99992 10.7935C9.768 11.4783 10.4353 11.768 10.7741 11.9151C10.8406 11.944 10.8945 11.9673 10.934 11.9871C11.1746 12.1074 11.3149 12.0874 11.4552 11.9266C11.5955 11.7663 12.0562 11.2247 12.2165 10.9841C12.3769 10.7434 12.5372 10.7835 12.7577 10.8636C12.9782 10.9438 14.1606 11.5257 14.4012 11.646C14.4481 11.6694 14.4919 11.6906 14.5326 11.7102C14.7004 11.7912 14.8138 11.8459 14.8622 11.9266C14.9223 12.0273 14.9223 12.5086 14.7219 13.0701C14.5215 13.6317 13.5395 14.1733 13.0985 14.2134C13.0561 14.2173 13.0139 14.2222 12.9705 14.2273C12.563 14.2753 12.0486 14.3358 10.2124 13.6117C7.95302 12.7207 6.46329 10.5127 6.15552 10.0566C6.13028 10.0192 6.11299 9.99354 6.10388 9.98138L6.1012 9.9778C5.97151 9.80448 5.12181 8.66893 5.12181 7.49392C5.12181 6.38632 5.66625 5.80573 5.91674 5.5386C5.93386 5.52034 5.94961 5.50355 5.96371 5.48816C6.18404 5.24747 6.44466 5.18725 6.605 5.18725C6.61378 5.18725 6.62257 5.18724 6.63136 5.18724C6.78278 5.18722 6.93344 5.1872 7.06592 5.19287Z"
                                        fill="#F6F1FA"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.68148 14.4283C0.827047 12.9718 0.38041 11.3212 0.38041 9.61237C0.38041 4.311 4.71083 0 10.0122 0C12.5949 0 15.0029 1.00978 16.8283 2.81575C18.6342 4.64112 19.644 7.04907 19.644 9.63179C19.644 14.9332 15.3136 19.2442 10.0122 19.2442C8.40044 19.2442 6.80808 18.8558 5.40992 18.079L0.302734 19.4189L1.68148 14.4283ZM3.23499 13.8845L3.42918 14.1758L2.61359 17.1275L5.64295 16.3313L5.93423 16.5061C7.15762 17.244 8.57521 17.6324 10.0122 17.6324C14.4203 17.6324 18.0128 14.0399 18.0128 9.63179C18.0128 7.49571 17.1778 5.47614 15.6631 3.96146C14.1679 2.4662 12.1483 1.63119 10.0122 1.63119C5.60411 1.63119 2.0116 5.20427 2.0116 9.63179C2.0116 11.127 2.43882 12.6029 3.23499 13.8845Z"
                                        fill="#F6F1FA"
                                    />
                                </svg>
                            </Link>
                            <Link
                                aria-label="Instagram"
                                target="_blank"
                                href={'https://www.instagram.com/resolvoobr/'}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.34819 9.67065C5.34819 6.92797 7.57153 4.70463 10.3142 4.70463C13.0569 4.70463 15.2802 6.92797 15.2802 9.67065C15.2802 12.4133 13.0569 14.6366 10.3142 14.6366C7.57153 14.6366 5.34819 12.4133 5.34819 9.67065ZM10.3142 12.8942C8.53387 12.8942 7.09064 11.451 7.09064 9.67065C7.09064 7.89031 8.53387 6.44709 10.3142 6.44709C12.0945 6.44709 13.5377 7.89031 13.5377 9.67065C13.5377 11.451 12.0945 12.8942 10.3142 12.8942Z"
                                        fill="#F6F1FA"
                                    />
                                    <path
                                        d="M15.4764 5.66889C16.1173 5.66889 16.6369 5.14935 16.6369 4.50843C16.6369 3.86751 16.1173 3.34794 15.4764 3.34794C14.8355 3.34794 14.3159 3.86751 14.3159 4.50843C14.3159 5.14935 14.8355 5.66889 15.4764 5.66889Z"
                                        fill="#F6F1FA"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.3142 0C7.6878 0 7.35848 0.0111324 6.327 0.0581956C5.29767 0.105144 4.59468 0.268637 3.97956 0.507715C3.34363 0.754816 2.80432 1.08549 2.26666 1.62311C1.72904 2.16076 1.39837 2.70007 1.15127 3.336C0.912191 3.95112 0.748698 4.65412 0.70175 5.68344C0.654687 6.71492 0.643555 7.04424 0.643555 9.67065C0.643555 12.297 0.654687 12.6263 0.70175 13.6578C0.748698 14.6871 0.912191 15.3901 1.15127 16.0053C1.39837 16.6412 1.72904 17.1805 2.26666 17.7182C2.80432 18.2558 3.34363 18.5864 3.97956 18.8336C4.59468 19.0726 5.29767 19.2361 6.327 19.2831C7.35848 19.3301 7.6878 19.3413 10.3142 19.3413C12.9406 19.3413 13.2699 19.3301 14.3014 19.2831C15.3307 19.2361 16.0337 19.0726 16.6488 18.8336C17.2848 18.5864 17.8241 18.2558 18.3617 17.7182C18.8993 17.1805 19.23 16.6412 19.4772 16.0053C19.7162 15.3901 19.8797 14.6871 19.9266 13.6578C19.9737 12.6263 19.9848 12.297 19.9848 9.67065C19.9848 7.04424 19.9737 6.71492 19.9266 5.68344C19.8797 4.65412 19.7162 3.95112 19.4772 3.336C19.23 2.70007 18.8993 2.16076 18.3617 1.62311C17.8241 1.08549 17.2848 0.754816 16.6488 0.507715C16.0337 0.268637 15.3307 0.105144 14.3014 0.0581956C13.2699 0.0111324 12.9406 0 10.3142 0ZM10.3142 1.74245C12.8964 1.74245 13.2022 1.75232 14.222 1.79884C15.1648 1.84184 15.6769 1.99938 16.0177 2.13182C16.4691 2.30725 16.7912 2.51681 17.1296 2.85523C17.468 3.19362 17.6776 3.51577 17.853 3.96717C17.9854 4.30794 18.143 4.81999 18.186 5.76287C18.2325 6.78259 18.2424 7.08847 18.2424 9.67065C18.2424 12.2528 18.2325 12.5587 18.186 13.5784C18.143 14.5213 17.9854 15.0333 17.853 15.3741C17.6776 15.8255 17.468 16.1476 17.1296 16.486C16.7912 16.8244 16.4691 17.034 16.0177 17.2094C15.6769 17.3419 15.1648 17.4994 14.222 17.5424C13.2024 17.5889 12.8965 17.5988 10.3142 17.5988C7.73184 17.5988 7.42604 17.5889 6.40643 17.5424C5.46355 17.4994 4.9515 17.3419 4.61073 17.2094C4.15933 17.034 3.83718 16.8244 3.49879 16.486C3.1604 16.1476 2.95081 15.8255 2.77538 15.3741C2.64294 15.0333 2.4854 14.5213 2.4424 13.5784C2.39588 12.5587 2.38601 12.2528 2.38601 9.67065C2.38601 7.08847 2.39588 6.78259 2.4424 5.76287C2.4854 4.81999 2.64294 4.30794 2.77538 3.96717C2.95081 3.51577 3.16037 3.19362 3.49879 2.85523C3.83718 2.51681 4.15933 2.30725 4.61073 2.13182C4.9515 1.99938 5.46355 1.84184 6.40643 1.79884C7.42616 1.75232 7.73203 1.74245 10.3142 1.74245Z"
                                        fill="#F6F1FA"
                                    />
                                </svg>
                            </Link>
                            <Link
                                aria-label="Âncora"
                                target="_blank"
                                href={'https://www.tiktok.com/@resolvoo'}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="19"
                                    viewBox="0 0 17 19"
                                    fill="none"
                                >
                                    <path
                                        d="M14.6229 3.87568C14.5014 3.81289 14.3831 3.74406 14.2685 3.66944C13.9352 3.44912 13.6297 3.18952 13.3584 2.89623C12.6797 2.11964 12.4262 1.33181 12.3328 0.78021H12.3366C12.2586 0.322358 12.2909 0.026123 12.2957 0.026123H9.20437V11.9798C9.20437 12.1403 9.20437 12.2989 9.19762 12.4556C9.19762 12.4751 9.19575 12.4931 9.19462 12.5141C9.19462 12.5227 9.19462 12.5317 9.19275 12.5407C9.19275 12.543 9.19275 12.5452 9.19275 12.5475C9.16016 12.9764 9.02268 13.3907 8.79238 13.754C8.56209 14.1173 8.24605 14.4184 7.87206 14.6309C7.48228 14.8526 7.04144 14.969 6.593 14.9684C5.15269 14.9684 3.98537 13.7939 3.98537 12.3435C3.98537 10.8931 5.15269 9.71864 6.593 9.71864C6.86564 9.71839 7.1366 9.76129 7.39583 9.84576L7.39958 6.69816C6.61263 6.59651 5.81315 6.65905 5.05158 6.88185C4.29001 7.10464 3.58288 7.48284 2.97479 7.9926C2.44197 8.45555 1.99402 9.00794 1.6511 9.62489C1.52061 9.84988 1.02826 10.754 0.968636 12.2213C0.931137 13.0541 1.18125 13.9169 1.30049 14.2735V14.281C1.37549 14.491 1.6661 15.2076 2.13971 15.8117C2.5216 16.2963 2.9728 16.722 3.47877 17.075V17.0675L3.48627 17.075C4.98282 18.092 6.64212 18.0252 6.64212 18.0252C6.92935 18.0136 7.89156 18.0252 8.98426 17.5074C10.1962 16.9333 10.8862 16.0779 10.8862 16.0779C11.327 15.5669 11.6775 14.9844 11.9226 14.3557C12.2024 13.6203 12.2957 12.7384 12.2957 12.3859V6.0442C12.3332 6.0667 12.8327 6.39705 12.8327 6.39705C12.8327 6.39705 13.5523 6.85828 14.675 7.15864C15.4805 7.37238 16.5656 7.41738 16.5656 7.41738V4.34853C16.1854 4.38978 15.4133 4.26979 14.6229 3.87568Z"
                                        fill="#F6F1FA"
                                    />
                                </svg>
                            </Link>
                            <Link
                                aria-label="Âncora"
                                target="_blank"
                                href={
                                    'https://www.youtube.com/channel/UCYMYxC4w16D-VqIfIR3sZ4A/featured'
                                }
                            >
                                <svg
                                    width="18"
                                    height="12"
                                    viewBox="0 0 18 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.47 0.355363C16.2019 0.550967 16.7782 1.12742 16.9738 1.85915C17.3293 3.18581 17.3293 5.95338 17.3293 5.95338C17.3293 5.95338 17.3293 8.7211 16.9738 10.0476C16.7782 10.7794 16.2019 11.3559 15.47 11.5514C14.1435 11.9069 8.82425 11.9069 8.82425 11.9069C8.82425 11.9069 3.50514 11.9069 2.17862 11.5514C1.44675 11.3559 0.870443 10.7794 0.674839 10.0476C0.319336 8.7211 0.319336 5.95338 0.319336 5.95338C0.319336 5.95338 0.319336 3.18581 0.674839 1.85915C0.870443 1.12742 1.44675 0.550967 2.17862 0.355363C3.50514 0 8.82425 0 8.82425 0C8.82425 0 14.1435 0 15.47 0.355363ZM11.5424 5.95353L7.12333 8.50492V3.40186L11.5424 5.95353Z"
                                        fill="#F6F1FA"
                                    />
                                </svg>
                            </Link>
                            <Link
                                target="_blank"
                                aria-label="Âncora"
                                href={'https://www.facebook.com/resolvoobr'}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="19"
                                    viewBox="0 0 10 19"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.87578 9.10112V17.8011C2.87578 17.9511 2.95078 18.0261 3.10078 18.0261H6.55078C6.70078 18.0261 6.77578 17.9511 6.77578 17.8011V8.95112H9.32578C9.47578 8.95112 9.55078 8.87612 9.55078 8.72612L9.77578 6.02612C9.77578 5.87612 9.70078 5.80112 9.55078 5.80112H6.77578V3.92612C6.77578 3.47612 7.15078 3.10112 7.67578 3.10112H9.62578C9.85078 3.10112 9.92578 3.02612 9.92578 2.87612V0.251123C9.92578 0.101123 9.85078 0.026123 9.70078 0.026123H6.40078C4.45078 0.026123 2.87578 1.45112 2.87578 3.25112V5.80112H1.15078C1.00078 5.80112 0.925781 5.87612 0.925781 6.02612V8.72612C0.925781 8.87612 1.00078 8.95112 1.15078 8.95112H2.87578V9.10112Z"
                                        fill="#F6F1FA"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="max-w-[72%] text-[.9375rem] text-gray-500 md:max-w-none">
                    Resolvoo CNPJ: 46.180.108/0001-04 | Copyright ©{' '}
                    {new Date().getFullYear()}
                </p>
            </Container>
        </footer>
    )
}
