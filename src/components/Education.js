import { useState } from "react";
import "./Cv.css";

export default function Education({ educationList, setEducationList }) {
  const [editIndex, setEditIndex] = useState(0);

  const handleChange = (e, index) => {
    const newList = [...educationList];
    newList[index][e.target.name] = e.target.value;
    setEducationList(newList);
  };

  const handleAdd = () => {
    setEducationList([...educationList, { school: "", title: "", date: "" }]);
    setEditIndex(educationList.length);
  };

  const handleDelete = (index) => setEducationList(educationList.filter((_, i) => i !== index));

  return (
    <div className="cv-card">
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div className="cv-entry" key={index}>
          {editIndex === index ? (
            <>
              <input type="text" name="school" placeholder="School Name" value={edu.school} onChange={(e) => handleChange(e, index)} />
              <input type="text" name="title" placeholder="Title of Study" value={edu.title} onChange={(e) => handleChange(e, index)} />
              <input type="date" name="date" value={edu.date} onChange={(e) => handleChange(e, index)} />
            </>
          ) : (
            <>
              <p><strong>School:</strong> {edu.school}</p>
              <p><strong>Title:</strong> {edu.title}</p>
              <p><strong>Date:</strong> {edu.date}</p>
            </>
          )}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setEditIndex(editIndex === index ? -1 : index)}>{editIndex === index ? "Submit" : "Edit"}</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
          <hr />
        </div>
      ))}
      <button onClick={handleAdd}>Add Another Education</button>
    </div>
  );
}
