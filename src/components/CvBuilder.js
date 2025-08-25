import { useState } from "react";
import CvDisplay from "./CvDisplay";
import "./Cv.css";

export default function CVBuilder() {
  const [generalData, setGeneralData] = useState({ name: "", email: "", phone: "" });
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div>
      {/* TODO: Add sections for input forms to set generalData, educationData, etc. */}
      
      <CvDisplay
        generalData={generalData}
        educationData={educationData}
        experienceData={experienceData}
        skills={skills}
      />
    </div>
  );
}
