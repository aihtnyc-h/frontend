
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../component/features/LoginForm/LoginForm";
import SignupForm from "../component/features/SignupForm/SignupForm";
import Fixcontent from "../pages/Fixcontent";
import Main from "../pages/Main";
import Uploadcontent from "../pages/Uploadcontent";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/main" element={<Main />} />
        <Route path="/fixcontent" element={<Fixcontent />} />
        <Route path="/uploadcontent" element={<Uploadcontent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;