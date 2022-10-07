import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/Admin";
import { CheckIn } from "./components/CheckIn";
import { Failure } from "./components/Failure";
import { Success } from "./components/Success";

function App() {
  return (
    <>
      <div className="w-75 m-auto mt-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CheckIn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
