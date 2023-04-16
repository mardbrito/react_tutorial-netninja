import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id)

  const history = useNavigate()

  const handleDelete = (id) => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history('/')
    })
  }

  return (
    <div className='blog-details'>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writing by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  )
}
export default BlogDetails
