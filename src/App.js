import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/loginPage.js";
import HomePage from "./pages/homePage.js";
import SingUpPage from "./pages/signUpPage.js";
import AddCatPage from "./pages/addCat.js";
import MyCatsPage from "./pages/MyCatsPage.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SingUpPage />} />
          <Route path="/mycats" element={<MyCatsPage />} />
          <Route path="/addCat" element={<AddCatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;