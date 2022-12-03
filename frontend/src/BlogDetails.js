import { useParams, useNavigate } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () => {

  const { id } = useParams();
  const { data: post, isPending, error } = useFetch('http://localhost:8000/posts/' + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:8000/posts/' + post.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { post && (
        <article>
          <h2>{ post.title }</h2>
          <p>Author: { post.author }</p>
          <p>{ post.body }</p>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;