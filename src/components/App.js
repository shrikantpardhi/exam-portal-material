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
import ExamPage from "./ExamPage";
import ExamsPage from "./admin/ExamsPage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/exams" element={<ExamsPage />} />
          <Route exact path="/subjects" element={<div>subjects</div>} />
          <Route exact path="/questions" element={<div>questions</div>} />
          <Route exact path="/results" element={<div>results</div>} />
          <Route exact path="/categories" element={<ExamCategory />} />
          <Route exact path="/category/:name/:id" element={<ExamPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<div>contact</div>} />
          <Route exact path="/customers" element={<User />} />
          <Route exact path="/profile" element={<div>profile</div>} />
          <Route exact path="/login" element={<div>Login</div>} />
          <Route exact path="/register" element={<div>Register</div>} />
        </Routes>
        <Footer
          theme={theme}
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
