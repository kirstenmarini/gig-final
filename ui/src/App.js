// Pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from './pages/profile/Profile';
import ProfileCoded from './pages/profilecoded/ProfileCoded';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/profile/:username" element={<Profile />} /> 
        <Route path="/profilecoded" element={<ProfileCoded />} /> 

      </Routes>
    </Router>
  );
}

export default App;
