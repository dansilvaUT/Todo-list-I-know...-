import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Landing from "./routes/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
