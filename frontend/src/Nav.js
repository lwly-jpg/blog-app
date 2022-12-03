const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>Bloggy Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: "#3535f1",
          borderRadius: "8px"
        }}>New post</a>
      </div>
    </nav>
  );
}
 
export default Navbar;