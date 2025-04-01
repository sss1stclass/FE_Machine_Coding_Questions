// import EmployeeDBManagement from "./components/EmployeeMSQ1/EmployeeDBManagement";
// import StarRating from "./components/StarRatingQ2";
import { app } from '../firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const App = () => {
  const db = getDatabase(app);
  const auth = getAuth(app);


  const testApp = () => {
    set(ref(db, 'users/sohilxdfsf'), {
      id: 1,
      name: 'sohil Maurya',
      age: 23,
      job: 'unemployed from oct 08 2024'
    });
  }

  const getSignUP = ()=>{
    createUserWithEmailAndPassword(auth, 'sohlilkr88@gmail.com', 'asfkss12312sdfks').then((data)=>{
      console.log(data);
      alert('You have sucessfully sign up');
    })
  }

  const logIN = async ()=>{
    try{
      const data = await  signInWithEmailAndPassword(auth, 'sohlilkr88@gmail.com', 'asfkss12312sdfks1231')
      if(data){
        console.log(data.user);
        alert('success')
      }
    }catch(err){
      console.log(err,'this is error')
    }
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
        <button onClick={getSignUP}>SIGN UP</button>
        <button onClick={logIN}>Login in </button>
      </div>

    </>
  )
}
export default App;