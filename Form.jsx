import { useState } from "react";
import TextInput from "./TextInput";

// 1. Build a signup form with name, email, password as controlled inputs.
function App() {
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

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;