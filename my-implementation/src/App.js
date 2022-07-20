import FormUser from './components/FormUser';
import styles from './App.module.css';
import ErrorModal from './components/ErrorModal';

function App() {
  return (
    <div className={styles.container}>
      {false && <ErrorModal />}
      <FormUser />
    </div>
  );
}

export default App;
