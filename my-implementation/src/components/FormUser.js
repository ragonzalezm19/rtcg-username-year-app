import styles from './FromUser.module.css';

const FormUser = () => {
  return (
    <form className={styles.form}>
      <div className={styles['form-control']}>
        <label className={styles['form-control__label']}>Username</label>
        <input type='text' className={styles['form-control__input']} />
      </div>
      <div className={styles['form-control']}>
        <label className={styles['form-control__label']}>Age (Years)</label>
        <input type='number' className={styles['form-control__input']} />
      </div>
      <div className={styles['form-control']}>
        <button type='submit' className={styles['form-control__button']}>
          Add User
        </button>
      </div>
    </form>
  );
};

export default FormUser;
