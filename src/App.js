import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/Admin";
import { CheckIn } from "./components/CheckIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckIn />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
