import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newPosts = blogs.filter(blog => blog.id !== id);
    setBlogs(newPosts);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) {
          throw Error('Cannot fetch blog data')
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, []);

  return ( 
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      <BlogList blogs={blogs} title="All posts" handleDelete={handleDelete} />
    </div>
   );
}
 
export default Home;