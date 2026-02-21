import { useRouter } from './context/RouterContext'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Login from './pages/Login'
import DashboardPage from './pages/DashboardPage'
import BlogPostPage from './pages/BlogPostPage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from './pages/NotFoundPage'

function AppRoutes() {
  const { pathname } = useRouter();

  if (pathname === "/" || pathname === "") return <HomePage />;
  if (pathname === "/about") return <About />;
  if (pathname === "/login") return <Login />;
  if (pathname === "/dashboard") return <ProtectedRoute><DashboardPage /></ProtectedRoute>;
  if (pathname.startsWith("/blog/")) return <BlogPostPage slug={pathname.replace("/blog/", "")} />;
  if (pathname.startsWith("/category/")) return <CategoryPage name={decodeURIComponent(pathname.replace("/category/", ""))} />;
  return <NotFoundPage />;
}

export default AppRoutes