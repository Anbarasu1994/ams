import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import PharmacyCollege from "./pages/Pharmacy/PharmacyCollege";
import About from "./pages/Pharmacy/About/About";
import Courses from "./pages/Pharmacy/Courses/Courses";
import LabFacilities from "./pages/Pharmacy/Lab Facilities/LabFacilities";
import StudentLife from "./pages/Pharmacy/Student Life/StudentLife";
import Pharmaceutics from "./pages/Pharmacy/Lab Facilities/Lab/Pharmaceutics";
import Pharmacology from "./pages/Pharmacy/Lab Facilities/Lab/Pharmacology";
import PharmChemistry from "./pages/Pharmacy/Lab Facilities/Lab/PharmChemistry";
import Pharmacognosy from "./pages/Pharmacy/Lab Facilities/Lab/Pharmacognosy";
import PharmaceuticalAnalysis from "./pages/Pharmacy/Lab Facilities/Lab/PharmaceuticalAnalysis";
import PharmaceuticalBiotechnology from "./pages/Pharmacy/Lab Facilities/Lab/PharmaceuticalBiotechnology";
import ComputerLab from "./pages/Pharmacy/Lab Facilities/Lab/ComputerLab";
import ArtsAndScience from "./pages/ArtsAndScience/ArtsAndScience";
import UG_CoursesArts from "./pages/ArtsAndScience/Courses/ArtsAndHumanity/UG Programs/UGPrograms";
import PG_CoursesArts from "./pages/ArtsAndScience/Courses/ArtsAndHumanity/PG Programs/PGPrograms";
import UG_CoursesSci from "./pages/ArtsAndScience/Courses/ScienceCourses/UG Programs/UGPrograms";
import PG_CoursesSci from "./pages/ArtsAndScience/Courses/ScienceCourses/PG Programs/PGPrograms";
import Nursing from "./pages/Nursing/Nursing";
import NursingPrograms from "./pages/Nursing/Courses/Programs/NursingPrograms";
import Education from "./pages/Education/Education";
import AnnaiPrograms from "./pages/Education/Courses/Programs/AnnaiPrograms";
import Vellamal from "./pages/Vellamal Education/Vellamal";
import VellamalPrograms from "./pages/Vellamal Education/Courses/Programs/VellamalPrograms";
import TreeViewPrograms from "./pages/ArtsAndScience/Courses/Tree View/TreeViewPrograms";
import OverviewCourses from "./pages/ArtsAndScience/Courses/OverviewCourses/OverviewCourses";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PharmacyCollege" element={<PharmacyCollege />}>
            <Route path="About" element={<About />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="LabFacilities" element={<LabFacilities />}></Route>
            <Route path="StudentLife" element={<StudentLife />} />
          </Route>
          <Route path="/ArtsAndScience" element={<ArtsAndScience />} />
          <Route path="/ArtsAndScience/Overview" element={<OverviewCourses/>} />
           
          <Route path="/ArtsAndScience/Art-and-Humanity/UG-Courses" element={<OverviewCourses />} />
          <Route path="/ArtsAndScience/Art-and-Humanity/PG-Courses" element={<PG_CoursesArts />} />
          <Route path="/ArtsAndScience/Science-Courses/UG-Courses" element={<UG_CoursesSci />} />
          <Route path="/ArtsAndScience/Science-Courses/PG-Courses" element={<PG_CoursesSci />} />


          <Route path="/Nursing" element={<Nursing />} />
          <Route path="/Nursing/Courses" element={<NursingPrograms />} />

          <Route path="/Education" element={<Education />} />
          <Route path="/Education/Courses" element={<AnnaiPrograms />} />

          <Route path="/Vellamal" element={<Vellamal />} />
          <Route path="/Vellamal/Courses" element={<VellamalPrograms/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
