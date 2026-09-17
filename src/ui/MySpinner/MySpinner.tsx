import styles from './MySpinner.module.css'

export function MySpinner() {
    return <span className={styles.spinner} role="status" aria-label="Chargement" />
}