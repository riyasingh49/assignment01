import { useState } from 'react'
import Link from './Link'

function PostCard({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/blog/${post.slug}`}>

        <div>
          <img src={post.image} alt={post.title} />

          <Link
            to={`/category/${post.category}`}
            onClick={(e) => e.stopPropagation()}
          >
            {post.category}
          </Link>
        </div>

        <div>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>

          <div>
            <span>{post.author}</span>
            <div>
              <span>{post.date}</span>
              <span>⏱ {post.readTime}</span>
            </div>
          </div>
        </div>

      </Link>
    </article>
  );
}

export default PostCard