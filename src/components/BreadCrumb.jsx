import Link from './Link'

function Breadcrumb({ items }) {
  return (
    <nav style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", gap: "8px" }}>
          {i > 0 && <span>›</span>}
          {item.to
            ? <Link to={item.to}>{item.label}</Link>
            : <span>{item.label}</span>
          }
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb