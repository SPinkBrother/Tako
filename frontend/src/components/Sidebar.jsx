import { NavLink } from "react-router"
import { Leaf} from 'lucide-react'

export default function Sidebar({ children }) {
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <NavLink to="/" className="flex items-center gap-2.5 text-[19px] font-bold tracking-[-0.03em] text-[#294735]">
                        <span className="grid size-9 place-items-center rounded-[14px] bg-[#7ca88a] text-white"><Leaf /></span>
                    little days
                    </NavLink>
                </div>
            </nav>
        </aside>
    )
}