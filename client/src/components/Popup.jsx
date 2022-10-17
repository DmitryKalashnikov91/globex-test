import styles from './styles/Popup.module.css';

const Popup = ({ active, setActive, children }) => {
    return (
        <div
            className={active ? `${styles.modal} + ${styles.active}` : `${styles.modal}`}
            onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <div className={styles.exit}>
                <i className='bi bi-x-circle-fill'></i>
            </div>
        </div>
    );
};

export default Popup;
