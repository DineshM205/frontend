import { useState } from "react";
import TextInput from "./TextInput";

// 2. Add basic validation (required + email format) and disable submit when invalid.
function Validation() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Email Validation
  const emailValid = /\S+@\S+\.\S+/.test(formData.email);

  // Form Validation
  const isFormValid =
    formData.name &&
    formData.password &&
    emailValid;

  return (
    <div>
      <h2>Signup Form</h2>

      <form>
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
    </div>
  );
}

export default App;