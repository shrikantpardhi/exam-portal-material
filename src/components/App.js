import React, { useState } from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./UI/Theme";
import LandingPage from "./LandingPage";
import About from "./About";
import { User } from "./admin/User";
import ExamCategory from "./admin/ExamCategory";
import ExamPage from "./ExamPage";
import ExamsPage from "./admin/ExamsPage";
import QuestionPage from "./admin/QuestionPage";
import Exam from "./Exam";
import { HomeTemplate } from "./HomeTemplate";
import {Exams as UserExam} from "./user/Exams";
import Results from "./user/Results";
import  Result  from "./user/Result";
import Profile from "./Profile";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <HomeTemplate
                value={value}
                setValue={setValue}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            }
          >
            {/* Common Links */}
            <Route index path="/" element={<LandingPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<div>contact</div>} />
            <Route exact path="/profile" element={<Profile />} />

            {/* User Links */}
            <Route exact path="/exams" element={<UserExam />} />
            <Route exact path="/results" element={<Results />} />
            <Route exact path="/result/:name/:id" element={<Result />} />
            <Route path="/exam/:name/:id" element={<ExamPage />} />

            {/* Admin Links */}
            <Route exact path="/admin/exams" element={<ExamsPage />} />
            <Route
              exact
              path="/admin/exam/:name/:id"
              element={<QuestionPage />}
            />
            <Route exact path="/subjects" element={<div>subjects</div>} />
            <Route exact path="/questions" element={<div>questions</div>} />
            <Route exact path="/categories" element={<ExamCategory />} />
            <Route exact path="/category/:name/:id" element={<ExamPage />} />
            <Route exact path="/customers" element={<User />} />
          </Route>
          <Route exact path="/exam/start/:name/:id" element={<Exam />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
