import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  // const handleDelete = (id) => {
  //   const newPosts = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newPosts);
  // }

  return ( 
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      <BlogList blogs={blogs} title="All posts" />
    </div>
   );
}
 
export default Home;