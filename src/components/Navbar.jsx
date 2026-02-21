import { useRouter } from '../context/RouterContext'
import { useAuth } from '../context/AuthContext'
import Link from './Link'

function Navbar() {
  const { pathname, navigate } = useRouter();
  const { isLoggedIn, setLoggedIn } = useAuth();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Dashboard 🔒", to: "/dashboard" },
  ];

  const isActive = (to) => to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header>
      <div>
        <Link to="/">
          <span>@@@@@</span>
        </Link>

        <nav>
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}

          {isLoggedIn ? (
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar