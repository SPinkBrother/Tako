import { NavLink } from 'react-router-dom';
import {
    House,
    ListTodo,
    Dumbbell,
    UserRound,
    Leaf,
    Sparkles,
} from "lucide-react";


const menuItems = [
    { label: "Overview", path: "/", icon: House},
    { label: "My to-dos", path: "/todos", icon: ListTodo},
    { label: "Workout plan", path: "/workouts", icon: Dumbbell},
]


function Sidebar() {
    return (
        <aside className='flex min-h-screen w-72 shrink-0 flex-col justify-between border-r border-[#dde4d7] bg-[#f3f6ed] px-7 py-8'>
            {/* Logo */}
            <div className='mb-14 flex items-center gap-3'>
                <div className='flex size-12 items-center'>
                    <div className='sidebar-logo-icon'>
                        o
                    </div>
                    <span>Tako</span>
                </div>

                <nav className='sidebar_nav'>
                {menuItems.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path}
                        className={({isActive}) =>
                            isActive
                                ? "sidebar-link sidebarlink"
                                : "sidebar-link"
                    }>
                        <span >{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
            </div>


            <div className=''>
                <div className="sidebar_message">
                    <div className="sidebar_message_icon">*</div>

                    <h3>Small steps count.</h3>

                    <p>You are building a lovely routine.</p>
                </div>
            </div>

            <NavLink to="/profile" className="sidebar">
                <span>A</span>
                <span>Profile</span>
            </NavLink>
        </aside>
    )
}

export default Sidebar;