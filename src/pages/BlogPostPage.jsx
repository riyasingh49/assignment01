import { POSTS } from '../data/post'
import Breadcrumb from '../components/BreadCrumb'
import Link from '../components/Link'
import NotFoundPage from './NotFoundPage'

function BlogPostPage({ slug }) {
  const post = POSTS.find(p => p.slug === slug);
  if (!post) return <NotFoundPage />;
  
  const related = POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <div>
      <Breadcrumb items={[
        { label: "Home", to: "/" },
        { label: post.category, to: `/category/${post.category}` },
        { label: post.title },
      ]} />

      <Link to={`/category/${post.category}`}>{post.category}</Link>

      <h1>{post.title}</h1>

      <div>
        <span>{post.author[0]}</span>
        <span>{post.author}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>⏱ {post.readTime} read</span>
      </div>

      <img src={post.image} alt={post.title} />

      <div>
        <p>{post.excerpt}</p>
        {[...Array(4)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        ))}
      </div>

      <div>
        {post.tags.map(tag => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      {related.length > 0 && (
        <div>
          <h2>More in {post.category}</h2>
          <div>
            {related.map(p => (
              <Link key={p.id} to={`/blog/${p.slug}`}>
                <div>
                  <img src={p.image} alt={p.title} />
                  <div>
                    <h3>{p.title}</h3>
                    <span>{p.readTime} · {p.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default BlogPostPage