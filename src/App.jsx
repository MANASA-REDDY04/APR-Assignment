import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Campaigns from "./pages/Campaigns";
import Products from "./pages/Products";
import Layout from "./components/layouts/Layout";
import "./App.css";
function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        {/* Login */} <Route path="/login" element={<Login />} />{" "}
        {/* All other pages use Layout */}{" "}
        <Route element={<Layout />}>
          {" "}
          <Route path="/" element={<Dashboard />} />{" "}
          <Route path="/reports" element={<Reports />} />{" "}
          <Route path="/campaigns" element={<Campaigns />} />{" "}
          <Route path="/products" element={<Products />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;
