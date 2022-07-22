import styles from './ErrorModal.module.css';

const ErrorModal = ({ error, onClose }) => {
  const onClickHandler = () => {
    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles['modal__heading']}>
          <h2>Invalid input </h2>
        </div>
        <div className={styles['modal__body']}>
          <p>{error}</p>
        </div>
        <div className={styles['modal__bottom']}>
          <button
            type='button'
            onClick={onClickHandler}
            className={styles['modal__button']}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
