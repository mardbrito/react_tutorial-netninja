import useFetch from '../useFetch'
import BlogList from './BlogList'

const Blog = () => {
  const { data, isLoading, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className='home'>
      {!!error && <p>{error}</p>}
      {!!isLoading && <p>Loading data...</p>}
      {!!data && <BlogList blogs={data} />}
    </div>
  )
}
export default Blog
