import { useRouter } from '../context/RouterContext'

function Link({ to, children, style = {}, onClick }) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
export default Link;