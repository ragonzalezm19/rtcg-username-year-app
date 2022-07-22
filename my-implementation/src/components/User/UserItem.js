import styles from './UserItem.module.css';

const UserItem = ({ name, age }) => {
  return (
    <div className={styles.container}>
      <p className={styles.user}>
        {name} ({age} years old)
      </p>
    </div>
  );
};

export default UserItem;
