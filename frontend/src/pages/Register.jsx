import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register 🌾
        </h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
          required
        />

        <select
          name="role"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        >
          <option value="buyer">Buyer</option>
          <option value="farmer">Farmer</option>
        </select>

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
