import styles from './styles.module.scss'

interface subscribeButtonprops {
    priceId: string;
}

export function SubscribeButton({ priceId }: subscribeButtonprops) {
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}