import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser({ name, email, password });

      if (response.message === "User registered successfully") {
        alert("Registration successful ✅");
        navigate("/login");
      } else {
        alert(response.message);
      }

    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="border p-8 rounded shadow w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-900 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>

        <p className ="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span 
            className="text-blue-600 cursor-pointer"
            onClick={()=> navigate("/login")}
          >
            Login 
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;