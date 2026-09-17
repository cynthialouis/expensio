import styles from './MyBadge.module.css'

type Status = 'pending' | 'validated' | 'rejected'

const statusConfig: Record<Status, { label: string; color: string; background: string }> = {
    pending: { label: 'En attente', color: '#92400e', background: '#fef3c7' },
    validated: { label: 'Validé', color: '#166534', background: '#dcfce7' },
    rejected: { label: 'Rejeté', color: '#991b1b', background: '#fee2e2' },
}

type BadgeProps = {
    status: Status
}

export function MyBadge({
     status = 'pending'
 } :BadgeProps) {
    const config = statusConfig[status]

    return (
        <span
            className={styles.badge}
            style={{ color: config.color, backgroundColor: config.background }}
        >
        {config.label}
        </span>
    )
}