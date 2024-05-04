import { RouteType } from 'next/dist/lib/load-custom-routes'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
    base: 'block rounded-full font-semibold leading-none',

    variants: {
        size: {
            md: 'px-[.875rem] py-3 md:px-5 md:py-3 text-[.875rem] md:text-base',
            sm: 'px-[.875rem] py-3 md:px-[.9375rem] md:py-[.5625rem] text-[.9375rem]',
            xs: 'px-[.6875rem] py-[.6875rem] md:px-[.9375rem] md:py-[.5625rem] text-[.8125rem]',
        },

        fill: {
            ghost: 'border border-purple-300 text-purple-700 transition hover:bg-purple-700 hover:text-gray-50',
            green: 'bg-green-600 text-green-50 transition hover:bg-green-950',
            purple: 'bg-purple-700 text-purple-50 transition hover:bg-purple-950 hover:text-gray-50',
        },
    },

    defaultVariants: {
        fill: 'green',
        size: 'sm',
    },
})

interface ButtonProps
    extends VariantProps<typeof button>,
        LinkProps<RouteType> {
    className?: string | undefined
    children: ReactNode
}

export function Button({ href, className, fill, size, children }: ButtonProps) {
    return (
        <Link
            href={href}
            aria-label="Âncora"
            className={button({
                className,
                fill,
                size,
            })}
        >
            {children}
        </Link>
    )
}
