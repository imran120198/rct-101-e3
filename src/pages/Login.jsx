import React, { useState, useContext } from "react";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, handlelogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handlelogin(email, password);
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <Form >
      <div>
        <input data-cy="login-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input data-cy="login-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button data-cy="login-submit" onSubmit={handleSubmit}>Submit</button>
      </div>
    </Form>
  );
};

export default Login;
