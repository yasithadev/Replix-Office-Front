import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CreateUser from "./pages/Admin/CreateUser";
import TypoPage from "./pages/component/typoPage";
import NotificatoinPage from "./pages/component/notificatoinPage";
import InputPage from "./pages/component/input";
import FormPage from "./pages/component/formPage";
import FormSectionPage from "./pages/component/formSectionPage";
import CodePage from "./pages/component/code";
import FormFieldPage from "./pages/component/formFieldPage";
import DatePicker from "./pages/component/datePickerPage";
import DropDownPage from "./pages/component/dropDownPage";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/login";
import AppLayout from "./pages/AppLayout";
import NotificationContainer from './components/notification/notificationContainer';
import DateTablePage from "./pages/component/dataTablePage";


function App() {
  return (
    <>
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
          <Route path="form-field" element={<FormFieldPage/>} />
          <Route path="form" element={<FormPage/>} />
          <Route path="date-picker" element={<DatePicker/>} />
          <Route path="/data-table" element={<DateTablePage/>} />
          <Route path="drop-down" element={<DropDownPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <NotificationContainer/>
    </>
  );
}

export default App;
