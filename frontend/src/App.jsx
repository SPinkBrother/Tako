import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="flex min-h-screen bg-[#faf8f1]">
      <Sidebar/>
      <div className="flex-1">
        <Header/>
      </div>
      <main>
      </main>
    </div>
  )
}

export default App
