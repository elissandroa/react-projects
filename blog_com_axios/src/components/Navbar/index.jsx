import './styles.css'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='brand'>
                <Link to={`/`}><h2>Blog</h2></Link>
            </div>
            <ul>
                <li><NavLink to={`/`}>Home</NavLink></li>
                <li><Link to={`/new`} className='new-btn'>Novo Post</Link></li>
            </ul>
        </nav>
    )
}
