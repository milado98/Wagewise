import SignIn from "./component/SignIn";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
