import "./App.css";
import "./font.css";
import ZumaDashboard from "./Pages/ZumaDashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Apps from "./Pages/Apps";
import Register from "./Pages/Register";
import { useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import ReLine from "./Componets/ReLine";
import ReBar from "./Componets/ReBar";
import { AuthProvider } from "./Context/AuthContext";
import MainNav from "./Componets/MainNav";
import Test from "./Pages/Test";
import Classic from "./Pages/Classic";
import Challenge from "./Pages/Challenge";
import Profile from "./Pages/Profile";
import Affiliate from "./Pages/Affiliate";

function App() {
  const mobile = useMediaQuery("(max-width:600px)");
  const tab = useMediaQuery("(min-width:601px)" && "(max-width:1023px)");
  const desktop = useMediaQuery("(min-width:1024px)");
  const token = localStorage.getItem("access_token");
  // if (mobile) {
  //   return (
  //     <Typography variant="h4">
  //       NOTE: mobile view is not yet implemented. Please use a desktop
  //     </Typography>
  //   );
  //   // } else if (tab) {
  //   //   return (
  //   //     <Typography variant="h4">
  //   //       NOTE: tab view is not yet implemented. Please use a desktop
  //   //     </Typography>
  //   //   );
  // } else {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboards" element={<ZumaDashboard />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/linetest" element={<ReBar />} />
            <Route path="/test" element={<Test />} />
            <Route path="/classic" element={<Classic />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/affiliate" element={<Affiliate />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
