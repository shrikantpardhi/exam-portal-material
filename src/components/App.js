import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {theme} from "./UI/Theme";
import { Header } from "./UI/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<div>Homepage</div>} />
          <Route exact path="/exams" element={<div>exams</div>} />
          <Route exact path="/subjects" element={<div>subjects</div>} />
          <Route exact path="/questions" element={<div>questions</div>} />
          <Route exact path="/results" element={<div>results</div>} />
          <Route exact path="/categories" element={<div>Exam categories</div>} />
          <Route exact path="/about" element={<div>about</div>} />
          <Route exact path="/contact" element={<div>contact</div>} />
          <Route exact path="/customers" element={<div>customer</div>} />
          <Route exact path="/profile" element={<div>profile</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;