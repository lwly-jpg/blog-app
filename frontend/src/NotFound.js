import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Oops - 404</h2>
      <p>Page not found!</p>
      <Link to="/">Home</Link>
    </div>
   );
}
 
export default NotFound;