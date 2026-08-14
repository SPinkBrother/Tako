import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from "./pages/TodosPage"
import TodosPage from "./pages/TodosPage"
import WorkoutPlannerPage from "./pages/WorkoutPlannerPage"
import Sidebar from './components/Sidebar'


import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>

        <Sidebar/>

        <main>
          <Routes>
            <Route path='/' element={<DashboardPage/>}/>
            <Route path='/todos' element={<TodosPage/>}/>
            <Route path='/workouts' element={<WorkoutPlannerPage/>}/>
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
