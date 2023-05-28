
import { Route, Routes } from "react-router-dom";
import Index from "./pages/";
import User from "./pages/user";
import './App.css'

const App = () => (
  <>
    <Routes>
      <Route element={<Index />} path='/' />
      <Route element={<User />} path='/user'/>
    </Routes>
  </>

)

export default App;