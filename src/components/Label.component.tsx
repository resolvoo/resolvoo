import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const label = tv({
    base: 'rounded-full bg-purple-100 px-3 py-2 text-[.8125rem] font-semibold leading-none text-purple-700 md:text-[.9375rem]',
})

interface LabelProps extends VariantProps<typeof label> {
    children: ReactNode
    className?: string
}

export function Label({ children, className }: LabelProps) {
    return <div className={label({ className })}>{children}</div>
}
