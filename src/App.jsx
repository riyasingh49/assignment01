import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterCount from './components/CharacterCount/CharacterCount'
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter'
import TodoList from './components/TodoList/TodoList'
import TodoApp from './components/TodoList/TodoApp'
import MountJoke from './components/MountJoke/MountJoke'
import StopWatch from './components/StopWatch/StopWatch'
import SearchApp from './components/SearchApp/SearchApp'
import UseMemo from './components/UseMemo/UseMemo'
import { RouterProvider } from './context/RouterContext'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import AppRoutes from './AppRoutes'

function App() {

  return (
    <>
      {/* <CharacterCount/> */}
      {/* <TemperatureConverter/> */}
      {/* <TodoApp/> */}
      {/* <MountJoke/> */}
      {/* <StopWatch/> */}
      {/* <SearchApp /> */}
      {/* <UseMemo/> */}

      <RouterProvider>
        <AuthProvider>
          <Navbar />
          <main>
            <AppRoutes />
          </main>
          <footer>
            © 2026 @@@@@ — Built with ♥ and React
          </footer>
        </AuthProvider>
      </RouterProvider>
        </>
  )
}

export default App
