import { useState } from "react";
import "./Cv.css";

export default function Experience({ experienceList = [], setExperienceList }) {
  const [editIndex, setEditIndex] = useState(-1); // -1 = no edit initially

  const handleChange = (e, index) => {
    const newList = [...experienceList];
    newList[index][e.target.name] = e.target.value;
    setExperienceList(newList);
  };

  const handleAdd = () => {
    setExperienceList([
      ...experienceList,
      { company: "", position: "", responsibilities: "", from: "", to: "" }
    ]);
    setEditIndex(experienceList.length); // start editing the new entry
  };

  const handleDelete = (index) =>
    setExperienceList(experienceList.filter((_, i) => i !== index));

  return (
    <div className="cv-card">
      <h2>Experience</h2>

      {experienceList.map((exp, index) => (
        <div className="cv-entry" key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="position"
                placeholder="Position Title"
                value={exp.position}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="responsibilities"
                placeholder="Main Responsibilities"
                value={exp.responsibilities}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="date"
                name="from"
                value={exp.from}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="date"
                name="to"
                value={exp.to}
                onChange={(e) => handleChange(e, index)}
              />
            </>
          ) : (
            <>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Position:</strong> {exp.position}</p>
              <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
              <p><strong>From:</strong> {exp.from}</p>
              <p><strong>To:</strong> {exp.to}</p>
            </>
          )}

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setEditIndex(editIndex === index ? -1 : index)}>
              {editIndex === index ? "Submit" : "Edit"}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
          <hr />
        </div>
      ))}

      <button onClick={handleAdd}>Add Another Experience</button>
    </div>
  );
}
