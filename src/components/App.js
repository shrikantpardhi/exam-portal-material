import React, { useState } from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./UI/Theme";
// Guest imports
import LandingPage from "./LandingPage";
import { HomeTemplate } from "./HomeTemplate";
import About from "./About";
import NotFound from "./NotFound";
// user imports
import ExamPage from "./ExamPage";
import Exam from "./Exam";
import { Exams as UserExam } from "./user/Exams";
import Results from "./user/Results";
import Result from "./user/Result";
import Profile from "./Profile";
// admin imports
import { Users } from "./admin/Users";
import ExamCategory from "./admin/ExamCategory";
import { Exams as AdminExam } from "./admin/Exams";
import QuestionPage from "./admin/QuestionPage";
import Dashboard from "./admin/Dashboard";
import Subjects from "./admin/Subjects";
import PersistLogin from "./PersistLogin";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
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
          {/* public routes */}
          <Route index path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<div>contact</div>} />
          <Route exact path="*" element={<NotFound />} />

          {/* we want to protect these routes */}
          <Route element={<PersistLogin />}>
            <Route exact path="/profile" element={<Profile />} />

            {/* User Links */}
            <Route exact path="/exams" element={<UserExam />} />
            <Route exact path="/results" element={<Results />} />
            <Route exact path="/result/:name/:id" element={<Result />} />
            <Route path="/exam/:name/:id" element={<ExamPage />} />

            {/* Admin Links */}
            <Route exact path="/admin/dashboard" element={<Dashboard />} />
            <Route exact path="/admin/exams" element={<AdminExam />} />
            <Route exact path="/admin/categories" element={<ExamCategory />} />
            <Route exact path="/admin/subjects" element={<Subjects />} />
            <Route exact path="/admin/users" element={<Users />} />
            <Route
              exact
              path="/admin/exam/:name/:id"
              element={<QuestionPage />}
            />
            <Route exact path="/questions" element={<div>questions</div>} />
            <Route exact path="/category/:name/:id" element={<ExamPage />} />
            <Route exact path="/exam/start/:name/:id" element={<Exam />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
