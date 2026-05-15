import { useState } from "react";
import TextInput from "./TextInput";

function Panel() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const emailValid = /\S+@\S+\.\S+/.test(formData.email);

  const isFormValid =
    formData.name &&
    formData.password &&
    emailValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    setPreview(formData);
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <TextInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {!emailValid && formData.email && (
          <p>Invalid Email Format</p>
        )}

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      {preview && (
        <div>
          <h3>Preview Panel</h3>

          <p>Name: {preview.name}</p>
          <p>Email: {preview.email}</p>
          <p>Password: {preview.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;