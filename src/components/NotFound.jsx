import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='content'>
      <div className='not-found'>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to='/'>Back to the home page</Link>
      </div>
    </div>
  )
}
export default NotFound
