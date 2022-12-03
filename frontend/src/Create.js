import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title, body, author }

    setIsPending(true);

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(() => {
      console.log('New post added');
      setIsPending(false);
    })
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
        { !isPending && <button>Add post</button>}
        { isPending && <button disabled>Adding post...</button>}
      </form>
      <h2>{ title }</h2>
      <p>{ body }</p>
      <p>Author: { author }</p>
    </div>
   );
}
 
export default Create;