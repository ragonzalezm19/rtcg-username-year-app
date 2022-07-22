import FormUser from './components/FormUser';
import styles from './App.module.css';
import ErrorModal from './components/ErrorModal';
import UserList from './components/User/UserList';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);

  const onErrorHandler = (errorMsg) => {
    setError({ hasError: true, message: errorMsg });
  };

  const onCloseHandler = () => {
    setError(null);
  };

  const onSubmitHandler = (user) => {
    setUserList([...userList, user]);
  };

  return (
    <div className={styles.container}>
      {error?.hasError && (
        <ErrorModal onClose={onCloseHandler} error={error.message} />
      )}
      <FormUser onError={onErrorHandler} onSubmit={onSubmitHandler} />
      {userList.length > 0 && <UserList items={userList} />}
    </div>
  );
}

export default App;
