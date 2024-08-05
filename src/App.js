
import './App.css';
// import CustButton from './Comp/Common/CustButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Comp/Login';
import Signup from './Comp/Signup';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  return (
  <>
    <Navbar/>

    <div className="App">
        <Login/>
        <Signup/>
    </div>

    <Footer/>

  </>
  
  );
}

export default App;
