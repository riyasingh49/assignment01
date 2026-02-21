import { createContext, useCallback, useEffect, useState, useContext } from "react";
const RouterContext = createContext(null);

function RouterProvider({ children }) {
  const [location, setLocation] = useState(
    window.location.pathname + window.location.search
  );

  useEffect(() => {
    const handler = () =>
      setLocation(window.location.pathname + window.location.search);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = useCallback((to) => {
    window.history.pushState({}, "", to);
    setLocation(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const pathname = location.split("?")[0];
  const search = location.includes("?") ? "?" + location.split("?")[1] : "";

  return (
    <RouterContext.Provider value={{ pathname, search, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

function useRouter() {
  return useContext(RouterContext);
}
export { RouterProvider, useRouter }