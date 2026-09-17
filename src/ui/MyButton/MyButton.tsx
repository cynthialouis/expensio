import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from './MyButton.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

type ButtonProps = {
    variant: Variant
    size?: Size
    loading?: boolean
    children?: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export function MyButton({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    children = '',
    ...rest
 } :ButtonProps) {
    const className = [
        styles.btn,
        styles[`btn--${variant}`],
        styles[`btn--${size}`],
        loading && styles['btn--loading'],
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button className={className} disabled={disabled} {...rest}>
            {loading && <span className={styles.btn__spinner} aria-hidden="true" />}
            {children}
        </button>
    )
}