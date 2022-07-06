import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Landing from "./routes/Landing";
import ListView from "./routes/ListView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/userLists" element={<ListView />} />
    </Routes>
  );
}

export default App;
