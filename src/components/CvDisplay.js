import "./CvDisplay.css";

export default function CvDisplay({ formData, educationList, experienceList }) {
  return (
    <div className="cv-preview">
      <h1>{formData.name || "Full Name"}</h1>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>

      <div className="section">
        <h2>Education</h2>
        {educationList.map((edu, index) => (
          <div className="item" key={index}>
            <p><strong>{edu.title}</strong> at {edu.school}</p>
            <p className="dates">{edu.date}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Experience</h2>
        {experienceList.map((exp, index) => (
          <div className="item" key={index}>
            <p><strong>{exp.position}</strong> at {exp.company}</p>
            <p className="dates">{exp.from} - {exp.to}</p>
            <p className="responsibilities">{exp.responsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
