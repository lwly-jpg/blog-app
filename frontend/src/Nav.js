import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>Bloggy Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "#3535f1",
          borderRadius: "8px"
        }}>New post</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;