import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import HeaderBar from "./components/HeaderBar/HeaderBar.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import MakeAppointment from "./pages/MakeAppointment/MakeAppointment.jsx";

function App() {
  return (
    <div>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/makeAppointment" element={<MakeAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
