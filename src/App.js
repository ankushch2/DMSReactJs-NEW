import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnterOTP from "./pages/EnterOTP";
import NavBar from "./components/NavBar";
import GetOTP from "./pages/GetOTP";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Exportexcel from "./pages/Data";
import ForgetPassword from "./pages/ForgetPassword";
import Welcome from "./pages/Welcome";
import AdminDashboard from "./pages/AdminDashboard";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="enter-otp" element={<EnterOTP/>} ></Route>
        <Route path="Register" element={<Register/>} ></Route>
        <Route path="Signin" element={<Signin/>} ></Route>
        <Route path="ForgetPassword" element={<ForgetPassword/>} ></Route>
        <Route path="get-otp" element={<GetOTP/>} ></Route>
        <Route path="Dashboard" element={<Dashboard/>} ></Route>
        <Route path="/" element={<Welcome/>} ></Route>
        <Route path="AdminDashboard/Data" element={<Exportexcel/>} ></Route>
        <Route path="AdminDashboard" element={<AdminDashboard/>} ></Route>
        <Route path="Data" element={<generatePDF/>} ></Route>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;