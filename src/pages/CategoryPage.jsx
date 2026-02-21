import { POSTS } from '../data/post'
import Breadcrumb from '../components/BreadCrumb'
import PostCard from '../components/PostCard'
import NotFoundPage from './NotFoundPage'

function CategoryPage({ name }) {
  const posts = POSTS.filter(p => p.category === name);

  if (posts.length === 0) return <NotFoundPage />;

  return (
    <div>
      <Breadcrumb items={[
        { label: "Home", to: "/" },
        { label: name }
      ]} />

      <div>
        <span>Category</span>
        <h1>{name}</h1>
        <p>{posts.length} articles</p>
      </div>

      <div>
        {posts.map(p => <PostCard key={p.id} post={p} />)}
      </div>

    </div>
  );
}

export default CategoryPage