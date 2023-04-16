import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCreate = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState(false)
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsPending(true)

    const blog = {
      title,
      body,
      // id: itemList.length + 1,
      author,
    }
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      history('/')
    })
  }

  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          type='text'
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!isPending && <button type='submit'>Add a new blog</button>}
        {isPending && (
          <button type='submit' disabled>
            Adding blog...
          </button>
        )}
      </form>
    </div>
  )
}
export default BlogCreate
