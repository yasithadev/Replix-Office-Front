import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CreateUser from "./pages/CreateUser";
import TypoPage from "./pages/component/typoPage";
import NotificatoinPage from "./pages/component/notificatoinPage";
import InputPage from "./pages/component/input";
import FormSectionPage from "./pages/component/formSectionPage";
import CodePage from "./pages/component/code";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/login";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="CreateUser" element={<CreateUser />} />

          <Route path="typo" element={<TypoPage/>} />
          <Route path="input" element={<InputPage/>} />
          <Route path="formSection" element={<FormSectionPage/>} />
          <Route path="code" element={<CodePage/>} />
          <Route path="notifier" element={<NotificatoinPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
