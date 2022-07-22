import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './FromUser.module.css';

const FormUser = ({ onSubmit, onError }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setAge(`${event.target.value}`);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      onError('Please enter a valid name and age (non-empty values)');
      return;
    }

    if (+age <= 0) {
      onError('Please enter a valid age (> 0).');
      return;
    }

    const user = { id: uuidv4(), name, age };
    onSubmit(user);
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles['form-control']}>
        <label className={styles['form-control__label']}>Username</label>
        <input
          type='text'
          value={name}
          onChange={onChangeNameHandler}
          className={styles['form-control__input']}
        />
      </div>
      <div className={styles['form-control']}>
        <label className={styles['form-control__label']}>Age (Years)</label>
        <input
          type='number'
          value={age}
          onChange={onChangeAgeHandler}
          className={styles['form-control__input']}
        />
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
