import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
    base: 'w-full mx-auto px-4',

    variants: {
        size: {
            md: 'max-w-[84rem]',
            sm: 'max-w-[73.75rem]',
        },
    },

    defaultVariants: {
        size: 'md',
    },
})

interface ContainerProps extends VariantProps<typeof container> {
    className?: string
    children?: ReactNode
}

export function Container({ size, className, children }: ContainerProps) {
    return (
        <div
            className={container({
                className,
                size,
            })}
        >
            {children}
        </div>
    )
}
