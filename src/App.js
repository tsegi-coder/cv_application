import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Exprience";
import CvDisplay from "./components/CvDisplay";
import "./components/Cv.css";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [educationList, setEducationList] = useState([{ school: "", title: "", date: "" }]);
  const [experienceList, setExperienceList] = useState([{ company: "", position: "", responsibilities: "", from: "", to: "" }]);

  return (
    <div className="app-container">
      {/* Left panel: narrow input controls */}
      <div className="left-panel">
        <General formData={formData} setFormData={setFormData} />
        <Education educationList={educationList} setEducationList={setEducationList} />
        <Experience experienceList={experienceList} setExperienceList={setExperienceList} />
      </div>

      {/* Right panel: large CV preview */}
      <div className="right-panel">
       <CvDisplay
  formData={formData}
  educationList={educationList}
  experienceList={experienceList}
/>

      </div>
    </div>
  );
}
