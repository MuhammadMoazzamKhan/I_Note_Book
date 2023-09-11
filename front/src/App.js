import './App.css';
import NoteState from './Context/notes/NoteState';
import AuthState from './Context/authenticate/AuthState';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import Page404 from './components/Page404';
import {
  BrowserRouter as Main,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <AuthState>
    <NoteState>
      <Main>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home alert={showAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login alert={showAlert}  />} />
          <Route path="/signup" element={<SignUp alert={showAlert} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Main>
    </NoteState>
    </AuthState>

  );
}

export default App;
