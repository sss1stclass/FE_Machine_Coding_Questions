// import EmployeeDBManagement from "./components/EmployeeMSQ1/EmployeeDBManagement";
// import StarRating from "./components/StarRatingQ2";
import { app } from '../firebase';
import { getDatabase, ref, set } from 'firebase/database';

const App = () => {
  const db = getDatabase(app);

  const testApp = () => {
    set(ref(db, 'users/sohilxdfsf'), {
      id: 1,
      name: 'sohil Maurya',
      age: 23,
      job: 'unemployed from oct 08 2024'
    });
  }
  return (
    <>
      {/* // <EmployeeDBManagement/>
  // <StarRating/> */}
      <h1 style={{ textAlign: 'center' }}>
        Hello ji this is firebase application setup page and exploring the things.
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button style={{ textAlign: 'center' }} onClick={testApp}>click to Add Data</button>
      </div>

    </>
  )
}
export default App;