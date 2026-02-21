import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "../context/RouterContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const { navigate } = useRouter();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;
  return children;
}

export default ProtectedRoute;
