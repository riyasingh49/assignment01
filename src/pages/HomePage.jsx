import { useState, useEffect, useMemo } from 'react'
import { useRouter } from '../context/RouterContext'
import { POSTS, CATEGORIES } from '../data/post'
import Breadcrumb from '../components/BreadCrumb'
import PostCard from '../components/PostCard'

function HomePage() {
  const { navigate, search } = useRouter();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const q = searchParams.get("q") || "";
  const cat = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "newest";
  const [searchInput, setSearchInput] = useState(q);

  useEffect(() => { setSearchInput(q); }, [q]);

  const filtered = useMemo(() => {
    let posts = [...POSTS];
    if (q) posts = posts.filter(p =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase()) ||
      p.tags.some(t => t.includes(q.toLowerCase()))
    );
    if (cat) posts = posts.filter(p => p.category === cat);
    if (sort === "newest") posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    else if (sort === "oldest") posts.sort((a, b) => new Date(a.date) - new Date(b.date));
    else if (sort === "read-time") posts.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
    return posts;
  }, [q, cat, sort]);

  const updateParams = (patch) => {
    const params = new URLSearchParams();
    const nq = patch.q !== undefined ? patch.q : q;
    const ncat = patch.category !== undefined ? patch.category : cat;
    const nsort = patch.sort !== undefined ? patch.sort : sort;
    if (nq) params.set("q", nq);
    if (ncat) params.set("category", ncat);
    if (nsort && nsort !== "newest") params.set("sort", nsort);
    const qs = params.toString();
    navigate(`/${qs ? "?" + qs : ""}`);
  };

  return (
    <div>
      <Breadcrumb items={[{ label: "Home" }]} />

      {/* Hero */}
      <div>
        <h1>Ideas Worth Reading</h1>
        <p>Deep dives into modern web development — no fluff, all substance.</p>
      </div>

      {/* Search & Filter */}
      <form onSubmit={(e) => { e.preventDefault(); updateParams({ q: searchInput }); }}>
        <input
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          placeholder="Search articles..."
        />
        <button type="submit">Search</button>
        {(q || cat) && (
          <button type="button" onClick={() => { setSearchInput(""); navigate("/"); }}>
            Clear
          </button>
        )}
      </form>

      {/* Category Dropdown */}
      <select value={cat} onChange={e => updateParams({ category: e.target.value })}>
        <option value="">All Categories</option>
        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      {/* Sort Dropdown */}
      <select value={sort} onChange={e => updateParams({ sort: e.target.value })}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="read-time">Shortest Read</option>
      </select>

      {/* Category Pills */}
      <div>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => updateParams({ category: cat === c ? "" : c })}>
            {c}
          </button>
        ))}
      </div>

      {/* Results Count */}
      {(q || cat) && (
        <p>{filtered.length} result{filtered.length !== 1 ? "s" : ""}{q && ` for "${q}"`}{cat && ` in ${cat}`}</p>
      )}

      {/* Posts Grid */}
      {filtered.length === 0 ? (
        <div>
          <span>🔍</span>
          <h3>No posts found</h3>
          <p>Try a different search or category.</p>
        </div>
      ) : (
        <div>
          {filtered.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      )}

    </div>
  );
}

export default HomePage