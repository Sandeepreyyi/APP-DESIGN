import Checkout from "./components/Checkout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
       {/* <h1>Website Requirement Gathering Form</h1> */}
       {/* <RequiredForm/> */}
       <ToastContainer />
       <Checkout/>
    </div>
  );
}

export default App;
