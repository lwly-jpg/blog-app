import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    const newPosts = blogs.filter(blog => blog.id !== id);
    setBlogs(newPosts);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data)
      })
  }, []);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All posts" handleDelete={handleDelete} />
    </div>
   );
}
 
export default Home;