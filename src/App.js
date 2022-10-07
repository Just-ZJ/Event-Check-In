import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/Admin";
import { CheckIn } from "./components/CheckIn";
import { SuccessFailure } from "./components/SuccessFailure";

function App() {
  return (
    <>
      <div className="w-75 m-auto mt-5">
        {/* routing for the different pages */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CheckIn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/success" element={<SuccessFailure />} />
            <Route path="/failure" element={<SuccessFailure />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
