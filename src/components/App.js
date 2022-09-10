import React, { useState } from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./UI/Theme";
import { Header } from "./UI/Header";
import Footer from "./UI/Footer";
import LandingPage from "./LandingPage";
import About from "./About";
import { User } from "./admin/User";
import ExamCategory from "./admin/ExamCategory";
import ExamListPage from "./ExamListPage";
import ExamsPage from "./admin/ExamsPage";
import Login from "./auth/Login";
import QuestionPage from "./admin/QuestionPage";
import Exam from "./Exam";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [hide, setHide] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {hide === true ? (
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ) : (
          <div>for Exam</div>
        )}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* Admin Menus */}
          <Route exact path="/exams" element={<ExamsPage />} />
          <Route exact path="/exam/:name/:id" element={<QuestionPage />} />
          <Route exact path="/subjects" element={<div>subjects</div>} />
          <Route exact path="/questions" element={<div>questions</div>} />
          <Route exact path="/results" element={<div>results</div>} />
          <Route exact path="/categories" element={<ExamCategory />} />
          <Route exact path="/category/:name/:id" element={<ExamListPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<div>contact</div>} />
          <Route exact path="/customers" element={<User />} />
          <Route exact path="/profile" element={<div>profile</div>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<div>Register</div>} />
          <Route exact path="/exam" element={<Exam setHide={setHide} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
