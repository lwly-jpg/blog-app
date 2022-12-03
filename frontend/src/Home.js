import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: posts, isPending, error } = useFetch('http://localhost:8000/posts');

  return ( 
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      <BlogList posts={posts} title="All posts" />
    </div>
   );
}
 
export default Home;