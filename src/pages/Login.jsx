import { useState } from 'react'
import { useRouter } from '../context/RouterContext'
import { useAuth } from '../context/AuthContext'
import Breadcrumb from '../components/BreadCrumb'

function LoginPage() {
  const { navigate } = useRouter();
  const { setLoggedIn } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "1234") {
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try admin / 1234");
    }
  };

  return (
    <div>
      <Breadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Login" }
      ]} />

      <div>
        <span>🔐</span>
        <h1>Sign In</h1>
        <p>Use <strong>admin</strong> / <strong>1234</strong></p>
      </div>

      <form onSubmit={handleLogin}>
        <input
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="Username"
        />
        <input
          value={pass}
          onChange={e => setPass(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>

    </div>
  );
}

export default LoginPage