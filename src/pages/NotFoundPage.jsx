import { useRouter } from '../context/RouterContext'

function NotFoundPage() {
  const { navigate } = useRouter();
  
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Yeh page exist nahi karta ya shift ho gaya hai.</p>
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage