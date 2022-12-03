import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title, body, author }
  }

  return ( 
    <div className="create">
      <h2>Add a new post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Post body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        >
        </textarea>
        <label>Author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="cli">cli</option>
          <option value="deid">deid</option>
        </select>
        <button>Add post</button>
      </form>
      <h2>{ title }</h2>
      <p>{ body }</p>
      <p>Auhthor: { author }</p>
    </div>
   );
}
 
export default Create;