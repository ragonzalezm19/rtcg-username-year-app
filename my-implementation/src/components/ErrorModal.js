import styles from './ErrorModal.module.css';

const ErrorModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles['modal__heading']}>
          <h2>Invalid input </h2>
        </div>
        <div className={styles['modal__body']}>
          <p>Please enter a valid age ({'>'} 0).</p>
        </div>
        <div className={styles['modal__bottom']}>
          <button type='button' className={styles['modal__button']}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
