import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new blog', body: 'lorem ipsum...', author: 'cli', id: 1 },
    { title: 'Welcome!', body: 'lorem ipsum...', author: 'deid', id: 2 },
    { title: 'Another post', body: 'lorem ipsum...', author: 'ari', id: 3 }
  ]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All posts" />
    </div>
   );
}
 
export default Home;