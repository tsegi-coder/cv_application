import { useState } from "react";
export default function GeneralInfo({ formData, setFormData }) {
  const [edit, setEdit] = useState(true);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="cv-card">
      <h2>General Information</h2>
      {edit ? (
        <>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
        </>
      )}
      <button onClick={() => setEdit(!edit)}>{edit ? "Submit" : "Edit"}</button>
    </div>
  );
}
