import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Title from './components/Title'

function App() {

  return (
    <div className="flex min-h-screen bg-[#F8F5ED]">
      <Sidebar/>
      <div className="flex-1 ">
        <Header/>
        <Title/>
      </div>
      <main>
      </main>
    </div>
  )
}

export default App
