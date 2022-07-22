import UserItem from './UserItem';
import styles from './UserList.module.css';

const UserList = ({ items }) => {
  return (
    <div className={styles.container}>
      <ul className={styles['user-list']}>
        {items.map((user) => (
          <li key={user.id} className={styles['user-list__user']}>
            <UserItem name={user.name} age={user.age} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
