import { POSTS, CATEGORIES } from '../data/post'
import Breadcrumb from '../components/BreadCrumb'
import Link from '../components/Link'

const STATS = [
  { label: "Total Posts", value: POSTS.length, icon: "📝" },
  { label: "Categories", value: CATEGORIES.length, icon: "📁" },
  { label: "Authors", value: 5, icon: "👥" },
  { label: "Avg Read Time", value: "9 min", icon: "⏱" },
];

function DashboardPage() {
  return (
    <div>
      <Breadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Dashboard" }
      ]} />

      <h1>Dashboard </h1>
      <p>You're logged in</p>

      <div>
        {STATS.map(({ label, value, icon }) => (
          <div key={label}>
            <span>{icon}</span>
            <h2>{value}</h2>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Recent Posts</h2>
        {POSTS.slice(0, 5).map(p => (
          <div key={p.id}>
            <div>
              <Link to={`/blog/${p.slug}`}>{p.title}</Link>
              <p>{p.author} · {p.date}</p>
            </div>
            <span>{p.category}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DashboardPage