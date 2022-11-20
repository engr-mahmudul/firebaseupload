import './App.css';
import { getAuth } from "firebase/auth";
import {Test} from '../src/components/test'
import app from './firebase.init';
const auth = getAuth(app);
function App() {
  return (
    < >
     <Test />
    </>
  );
}

export default App;
