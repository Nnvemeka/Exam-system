import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import './app.css'

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}/>
    </Routes>
  );
}

export default App;
