import { NavLink } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles & assets
import './Sidebar.css'
import DashbordIcon from '../../assets/dashboard_icon.svg'
import AddIcon from '../../assets/add_icon.svg'

export default function Sidebar() {

    const { user } = useAuthContext()

    return (
        <div className='sidebar'>
            <div className='sidebar-content'>

                <div className='user'>
                    <Avatar src={user.photoURL}/>
                    <p>Hey {user.displayName}</p>
                </div>

                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink exact to='/'> {/* NavLink gains am active class when it's clicked} */}
                                <img src={DashbordIcon} alt="dashboard-icon"/>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/create'>
                                <img src={AddIcon} alt="add-icon"/>
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}