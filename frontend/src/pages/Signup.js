import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const signupUser = async () => {

    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      { name,email,password }
    );

    alert(response.data.message);
      navigate("/");

  };

  return (

    <div>

      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={signupUser}>
        Signup
      </button>
        

<p>Already have an account?</p>

<button onClick={() => navigate("/login")}>
Login
</button>

    </div>

  );

}

export default Signup;