import { Link } from "react-router-dom";

const BlogList = ( { posts, title }) => {

  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {posts.map((post) => (
        <div className="blog-preview" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{ post.title } </h2>
          </Link>
            <p>Author: { post.author }</p>
        </div>
      ))}
      </div>
   );
}

export default BlogList;