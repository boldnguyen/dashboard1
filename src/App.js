import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import Topbar from "./components/topbar/Topbar";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Messages from "./pages/messages/Messages";
import Feedback from "./pages/feedback/Feedback";
import Radar from "./pages/radar/Radar";
import Sales from "./pages/sales/Sales";
function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <Router>
      <div>
        <button className="darkbutton" onClick={() => setDarkMode(!darkMode)}>
          <DarkModeIcon />
        </button>
        <Topbar />
        <div className="container">
          <Sidebar />

          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/users" element={<UserList />} />
          </Routes>
          <Routes>
            <Route path="/user/:userId" element={<User />} />
          </Routes>
          <Routes>
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
          <Routes>
            <Route path="/products" element={<ProductList />} />
          </Routes>
          <Routes>
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
          <Routes>
            <Route path="/newproduct" element={<NewUser />} />
          </Routes>
          <Routes>
            <Route path="/messages" element={<Messages />} />
          </Routes>
          <Routes>
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
          <Routes>
            <Route path="/radar" element={<Radar />} />
          </Routes>
          <Routes>
            <Route path="/sales" element={<Sales/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
