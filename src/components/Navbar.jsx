import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h1>The Blog</h1>
        <small>The Net Ninja</small>
      </Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link
          to='/create'
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '5px',
            padding: '5px',
          }}
        >
          Create
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
