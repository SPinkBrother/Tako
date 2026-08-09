import React from 'react'
import { useLocation } from 'react-router'

import { Bell } from 'lucide-react'

function Header() {
    
    const location = useLocation();
    const today = new Date();

    const titles ={
        "/" : "Overview",
        "/todos" : "My to-dos",
        "/workouts" : "Workout plan"
    }

    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });

    const title = titles[location.pathname] || "Overview";  
    return (
        <header className="px-8 py-6 bg-[#dcecd9]">

            <div className="flex  items-center justify-between">
                <div>
                    <p className="max-[760px]:hidden font-[DM_Mono] text-[10px] font-medium uppercase tracking-[0.16em] text-[#829385]">{formattedDate}</p>

                    <h1 className="mt-1 text-[22px] font-bold">{title}</h1>

                </div>
                <div className="flex items-center gap-3">
                    <button aria-label="Notifications" className="ml-atuo grid size-10 place-items-center rounded-full border border-border bg-white text-[#748278] transition hover:border-[#b8cbb9] hover:text-primary">
                        <Bell color="#000000" />
                    </button>
                    <button aria-label="Avatar" className="ml-auto grid size-10 place-items-center rounded-full border border-border bg-white text-[#748278] transition hover:border-[#b8cbb9] hover:text-primary">
                        {/* <Bell color="#000000" /> */}
                    </button>
                
                </div>

            </div>
        </header>
        
    )
}

export default Header