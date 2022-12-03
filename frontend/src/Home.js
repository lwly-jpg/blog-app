import { useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new blog', body: 'lorem ipsum...', author: 'cli', id: 1 },
    { title: 'Welcome!', body: 'lorem ipsum...', author: 'deid', id: 2 },
    { title: 'Another post', body: 'lorem ipsum...', author: 'ari', id: 3 }
  ])

  return ( 
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title } </h2>
          <p>{ blog.author }</p>
        </div>
      ))}
    </div>
   );
}
 
export default Home;