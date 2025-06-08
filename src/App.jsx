import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProgramsPage from "./pages/ProgramsPage";
import AboutPage from "./pages/AboutPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import AcademicPrograms from "./pages/AcademicPrograms"; // Adjust path as needed
import LowerSchool from "./pages/LowerSchool";
import LowerSchool25 from "./pages/LowerSchool25";
import MiddleSchool from "./pages/MiddleSchool";
import StudentLife from "./pages/StudentLife";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/academic-programs" element={<AcademicPrograms />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/lower-school" element={<LowerSchool />} />
            <Route path="/lower-school-25" element={<LowerSchool25 />} />
            <Route path="/middle-school" element={<MiddleSchool />} />
            <Route path="/studentlife" element={<StudentLife />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
